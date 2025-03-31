// "use client";

// import React from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// function ResumeLanding() {
//     const router = useRouter();

//     const handleStartNowClick = () => {
//         router.push('/ResumeUpload'); 
//     };

//     return (
//         <div className='lg:mt-20 mt-10 md:mt-16 ml-5'>
//             <div className="md:flex-row items-center justify-between gap-8">
//                 <div className="flex lg:justify-end md:justify-center justify-start">
//                     <div className="w-full md:w-3/4 lg:w-1/2 space-y-6">
//                         <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#3B82F6]">
//                             SmartHire: Resume Shortlisting
//                         </h1>
//                         <div className="flex flex-col lg:items-end md:items-center items-start mr-16">
//                             <p className="text-lg text-gray-600 lg:text-right md:text-center text-start">
//                             Efficiently curating resumes identifies top talent that aligns with organizational needs, focusing on relevant skills and qualifications. This streamlined process enhances hiring quality and improves recruitment outcomes.
//                             </p>
//                             <button
//                                 onClick={handleStartNowClick}
//                                 className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-2"
//                             >
//                                 Start Now
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//                 <div className='lg:-mt-36 lg:ml-36 md:mt-0 md:ml-0 mt-24 mr-2'>
//                     <Image
//                         src="/assets/Group 8.png"
//                         width={1100}
//                         height={500}
//                         alt="Resume Shortlisting Illustration"
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default ResumeLanding;
"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

function ResumeLanding() {
    const router = useRouter();

    const handleStartNowClick = () => {
        router.push("/ResumeUpload");
    };

    // Variants for animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 },
        },
    };

    const textVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    };

    return (
        <div className="lg:mt-20 mt-10 md:mt-16 ml-5">
            <div className="md:flex-row items-center justify-between gap-8">
                <motion.div
                    className="flex lg:justify-end md:justify-center justify-start"
                    initial="hidden"
                    animate="visible"
                    variants={containerVariants}
                >
                    <div className="w-full md:w-3/4 lg:w-1/2 space-y-6">
                        {/* Animated Heading */}
                        <motion.h1
                            className="text-2xl md:text-4xl lg:text-5xl font-bold text-[#3B82F6]"
                            variants={textVariants}
                        >
                            SmartHire: Resume Shortlisting
                        </motion.h1>

                        <div className="flex flex-col lg:items-end md:items-center items-start mr-16">
                            {/* Animated Paragraph */}
                            <motion.p
                                className="text-lg text-gray-600 lg:text-right md:text-center text-start"
                                variants={textVariants}
                            >
                                Efficiently curating resumes identifies top talent that aligns
                                with organizational needs, focusing on relevant skills and
                                qualifications. This streamlined process enhances hiring quality
                                and improves recruitment outcomes.
                            </motion.p>

                            {/* Animated Button */}
                            <motion.button
                                onClick={handleStartNowClick}
                                className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                variants={textVariants}
                            >
                                Start Now
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                {/* Static Image */}
                <div className="lg:-mt-36 lg:ml-36 md:mt-0 md:ml-0 mt-24 mr-2">
                    <Image
                        src="/assets/Group 8.png"
                        width={1100}
                        height={500}
                        alt="Resume Shortlisting Illustration"
                    />
                </div>
            </div>
        </div>
    );
}

export default ResumeLanding;
