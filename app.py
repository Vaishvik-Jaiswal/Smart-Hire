from flask import Flask, request, jsonify
from sklearn.metrics.pairwise import cosine_similarity
from sentence_transformers import SentenceTransformer
import os
import PyPDF2
import re
from flask_cors import CORS

app = Flask(__name__)
CORS(app,origins=["http://localhost:3000","https://smart-hire-blush.vercel.app", "https://smarthire-67yh.onrender.com"])

# Synonym mapping 
synonyms = {
    "ml": "machine learning",
    "ai": "artificial intelligence",
    "nlp": "natural language processing",
    "dbms": "database management system",
    "rdbms": "dbms",
    "cloud": "devops",
    "docker": "devops",
    "jenkins": "devops",
    "dsa": "data structures",
    "sql": "structured query language",
    "dl": "deep learning",
    "neural network": "deep learning",
    "kubernete": "kubernetes",
    "reactjs": "react",
    "ts": "typescript",
    "js": "javascript",
    "html": "hypertext markup language",
    "css": "cascading style sheets",
    "py": "python",
    "algo": "algorithm",
    "mlops": "machine learning operations",
    "ci/cd": "continuous integration/continuous deployment",
    "orm": "object-relational mapping",
    "api": "application programming interface",
    "ui": "user interface",
    "ux": "user experience",
    "aws": "amazon web services",
    "gcp": "google cloud platform",
    "azure": "microsoft azure",
    "etl": "extract transform load",
    "bi": "business intelligence",
    "nosql": "non-relational database",
    "mongo": "mongodb",
    "cv": "computer vision",
    "gpt": "generative pre-trained transformer",
    "bert": "bidirectional encoder representations from transformers",
    "dev": "developer",
    "qa": "quality assurance",
    "sdet": "software development engineer in test",
    "rpa": "robotic process automation",
    "flask": "microframework",
    "django": "full-stack framework",
    "graphql": "graph query language",
    "rest": "representational state transfer",
    "spa": "single-page application",
    "pwa": "progressive web application",
    "ide": "integrated development environment",
    "ci": "continuous integration",
    "cd": "continuous deployment",
    "gpu": "graphics processing unit",
    "cpu": "central processing unit",
    "sqlalchemy": "orm",
    "npm": "node package manager",
    "yarn": "package manager",
    "k8s": "kubernetes",
    "vpc": "virtual private cloud",
    "iam": "identity and access management",
    "ecr": "elastic container registry",
    "ecs": "elastic container service",
    "lambda": "serverless computing",
    "sns": "simple notification service",
    "sqs": "simple queue service",
    "json": "javascript object notation",
    "xml": "extensible markup language",
    "csv": "comma-separated values",
    "pip": "python package installer",
    "conda": "python package and environment manager",
    "mern": "mongodb express react node",
}

# Normalize and expand text
def normalize_and_expand_text(text):
    text = text.lower()
    for synonym, canonical in synonyms.items():
        text = re.sub(r'\b' + re.escape(synonym) + r'\b', canonical, text)
    return text

# Preprocess text
def preprocess_text(text):
    stop_words = set([
        "i", "me", "my", "myself", "we", "our", "ours", "ourselves", "you", "your", "yours", "yourself", "yourselves", 
        "he", "him", "his", "himself", "she", "her", "hers", "herself", "it", "its", "itself", "they", "them", "their", 
        "theirs", "themselves", "what", "which", "who", "whom", "this", "that", "these", "those", "am", "is", "are", "was", 
        "were", "be", "been", "being", "have", "has", "had", "having", "do", "does", "did", "doing", "a", "an", "the", "and", 
        "but", "if", "or", "because", "as", "until", "while", "of", "at", "by", "for", "with", "about", "against", "between", 
        "into", "through", "during", "before", "after", "above", "below", "to", "from", "up", "down", "in", "out", "on", 
        "off", "over", "under", "again", "further", "then", "once", "here", "there", "when", "where", "why", "how", "all", 
        "any", "both", "each", "few", "more", "most", "other", "some", "such", "no", "nor", "not", "only", "own", "same", 
        "so", "than", "too", "very", "s", "t", "can", "will", "just", "don", "should", "now", "d", "ll", "m", "o", "re", 
        "ve", "y", "ain", "aren", "couldn", "didn", "doesn", "hadn", "hasn", "haven", "isn", "ma", "mightn", "mustn", "needn", 
        "shan", "shouldn", "wasn", "weren", "won", "wouldn"
    ])
    text = normalize_and_expand_text(text)
    words = text.split()
    return " ".join([word for word in words if word.isalpha() and word not in stop_words])

# Extract text from PDF
def extract_text_from_pdf(pdf_file):
    reader = PyPDF2.PdfReader(pdf_file)
    text = ""
    for page in reader.pages:
        text += page.extract_text()
    return text

# Clean and split text
def clean_and_split_text(text):
    text = re.sub(r'\n+', '\n', text)
    skills_match = re.search(r'(Skills|SKILLS)(.*?)(Education|EDUCATION|$)', text, re.DOTALL)
    education_match = re.search(r'(Education|EDUCATION)(.*?)($)', text, re.DOTALL)
    skills = skills_match.group(2).strip() if skills_match else ""
    education = education_match.group(2).strip() if education_match else ""
    return skills, education

# Sentence Transformer model
model = SentenceTransformer('all-MiniLM-L6-v2')

# Calculate similarity
def calculate_similarity_with_frequency(job_text, resume_text):
    job_embedding = model.encode(job_text)
    resume_embedding = model.encode(resume_text)

    similarity_score = cosine_similarity([job_embedding], [resume_embedding]).flatten()[0]

    # Convert similarity score to float
    similarity_score = float(similarity_score)

    if not resume_text.strip():
        return 0

    job_terms = job_text.split()
    resume_terms = resume_text.split()

    if len(resume_terms) == 0:
        return similarity_score * 100

    job_term_count = {term: job_terms.count(term) for term in job_terms}
    resume_term_count = {term: resume_terms.count(term) for term in resume_terms}

    weighted_score = sum(
        (resume_term_count.get(term, 0) / len(resume_terms)) for term in job_term_count
    )

    final_score = similarity_score * (1 + weighted_score)

    return min(final_score * 100, 100)

@app.route('/process_resumes', methods=['POST'])
def process_resumes_route():
    print("Received request to /process_resumes")
    print(f"Request headers: {request.headers}")
    print(f"Form data keys: {list(request.form.keys())}")
    print(f"Files received: {len(request.files.getlist('files'))}")
    files = request.files.getlist("files")
    job_skills = request.form['skills']
    job_education = request.form['education']
    job_skills_processed = preprocess_text(job_skills)
    job_education_processed = preprocess_text(job_education)
    scores = []
    for file in files:
        text = extract_text_from_pdf(file) 
        skills, education = clean_and_split_text(text)
        skills_processed = preprocess_text(skills)
        education_processed = preprocess_text(education)
        similarity_skills = calculate_similarity_with_frequency(job_skills_processed, skills_processed)
        similarity_education = calculate_similarity_with_frequency(job_education_processed, education_processed)
        similarity = (similarity_skills + similarity_education) / 2
        scores.append({'name': file.filename, 'score': similarity})
    sorted_scores = sorted(scores, key=lambda x: x['score'], reverse=True)
    return jsonify(sorted_scores)

@app.route('/',methods=['GET'])
def welcome():
    return jsonify(message="You are welcome!")

if __name__ == '__main__':
    app.run() 
