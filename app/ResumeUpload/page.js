"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

function ResumeUpload() {
  const router = useRouter();
  const [files, setFiles] = useState([]);
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState("");

  // 👇 Add this to log the environment variable
  useEffect(() => {
    console.log("✅ NEXT_PUBLIC_FLASK_API:", process.env.NEXT_PUBLIC_FLASK_API);
  }, []);

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

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_FLASK_API}/process_resumes`, {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const shortlistedCandidates = await response.json();
        localStorage.setItem("shortlistedCandidates", JSON.stringify(shortlistedCandidates));
        alert("Resumes processed successfully!");
        router.push("/ShortListed");
      } else {
        alert("Error processing resumes.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while uploading resumes.");
    }
  };

  return (
    <>
      {/* ... (no changes to UI code) ... */}
    </>
  );
}

export default ResumeUpload;
