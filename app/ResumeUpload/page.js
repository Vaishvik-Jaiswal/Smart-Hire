"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

function ResumeUpload() {
  const router = useRouter();
  const [files, setFiles] = useState([]);
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");

  const handleFileChange = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!skills.trim() || !experience.trim() || !education.trim()) {
      alert("Please fill out all job requirements (skills, experience, and education).");
      return;
    }
  
    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));
    formData.append("skills", skills);
    formData.append("experience", experience);
    formData.append("education", education);
  
    const response = await fetch(`${process.env.NEXT_PUBLIC_FLASK_API}/process_resumes`, {
      method: "POST",
      body: formData, 
    });
  
    if (response.ok) {
      const shortlistedCandidates = await response.json();
      localStorage.setItem("shortlistedCandidates", JSON.stringify(shortlistedCandidates));
      alert("Resumes processed successfully!");
      router.push("/ShortListed"); // Navigate to ShortListed page after successful upload
    } else {
      alert("Error processing resumes.");
    } 
  };
  

  return (
    <>
      <main className="flex-1 grid md:grid-cols-2 gap-6 px-4 sm:px-6 py-12 md:py-24 lg:py-32 xl:ml-20 lg:ml-10 sm:ml-10 -mt-20 text-black">
        {/* <div className="space-y-4 mt-10 sm:mt-20 md:mt-32">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-blue-500">
            Upload Resumes & Define Your Job Requirements
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl">
            Please upload a folder containing resumes and specify the job requirements for the role you're seeking or hiring for. Ensure all details are provided for a perfect match.
          </p>
        </div> */}
        <motion.div
          className="space-y-4 mt-10 sm:mt-20 md:mt-32"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-blue-500">
            Upload Resumes & Define Your Job Requirements
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl">
            Please upload a folder containing resumes and specify the job requirements for the
            role you're seeking or hiring for. Ensure all details are provided for a perfect match.
          </p>
        </motion.div>

        <div className="w-full max-w-[500px] mx-auto md:max-w-[1200px] h-auto">
          <img
            src="/assets/Group 24.png"
            alt="SmartHire"
            className="w-full h-auto object-contain overflow-hidden rounded-xl"
          />
        </div>
      </main>

      <div className="flex flex-col items-center justify-center w-full p-6">
        <div className="w-full max-w-[500px] bg-white mt-6 px-6 py-6 mb-10 shadow-lg rounded-xl p-8 transform transition-all duration-500 hover:scale-105 text-black">
          <h2 className="text-2xl sm:text-3xl font-bold">Upload Your Resumes Folder</h2>
          <p className="mt-1 text-sm md:text-base">
            Supported formats - pdf, doc, docx (max file size per file - 2MB).
          </p>

          <form
            className="mt-5 flex flex-col gap-4 sm:gap-6"
            onSubmit={handleSubmit}
          >
            <input
              type="file"
              className="file-input file-input-bordered h-10 w-full sm:max-w-xs dark:bg-gray-700 dark:text-white text-black"
              multiple
              accept=".pdf, .doc, .docx"
              webkitdirectory="true"
              onChange={handleFileChange}
            />

            <textarea
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              className="textarea textarea-bordered h-20 w-full text-black dark:text-white dark:bg-gray-700 text-base p-2 resize-none sm:resize"
              placeholder="Enter required skills"
            />
            <textarea
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              className="textarea textarea-bordered h-20 w-full text-black dark:text-white dark:bg-gray-700 text-base p-2 resize-none sm:resize"
              placeholder="Enter required experience"
            />
            <textarea
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              className="textarea textarea-bordered h-20 w-full text-black dark:text-white dark:bg-gray-700 text-base p-2 resize-none sm:resize"
              placeholder="Enter required education"
            />

            <button
              type="submit"
              className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-4 sm:mt-2 w-full sm:w-auto hover:bg-blue-600 hover:shadow-lg transition-all transform hover:scale-105"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ResumeUpload;


































