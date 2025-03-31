// // "use client";
// // import React from 'react'
// // import Image from 'next/image';
// // import { useRouter } from 'next/navigation';

// // function Main() {
// //     const router = useRouter();

// //     const handleStartNowClick = () => {
// //         router.push('/ResumeLanding');
// //     };

// //     return (
// //         <div>
// //             <div className="flex flex-col items-center justify-center w-full mx-auto mt-9 text-black">
// //                 <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-500 mt-0 lg:mt-0 md:mt-6">
// //                     Simplify Your Hiring & Preparations!
// //                 </h1>
// //                 <div className="text-center text-muted-foreground w-3/4 md:text-xl mt-4">
// //                     SmartHire streamlines recruitment with AI-powered tools, saving you time and helping you find the perfect candidates and for candidate interview preparation dashboard.
// //                 </div>
// //             </div>

// //             <div className='flex flex-col lg:flex-row items-center justify-center lg:space-x-8 lg:mt-16 '>

// //                 <div className='flex flex-col items-center justify-center w-[350px] h-[500px] md:w-[400px] md:h-[600px] lg:w-[450px] lg:h-[500px] bg-[#DEF9FF]  lg:mt-0 rounded-xl mb-10' >
// //                     <Image src='/assets/Group 39.png' width={200} height={300} />
// //                     <p className='text-center text-3xl font-bold text-blue-500'>Resume Shortlisting</p>
// //                     <div className="text-center text-muted-foreground w-3/4 md:text-lg mt-1">
// //                         Curating resumes efficiently to match top talent with organizational role.
// //                     </div>
// //                     <button 
// //                         className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-5" 
// //                         onClick={handleStartNowClick}>
// //                         Click Here
// //                     </button>
// //                 </div>

// //                 <div className='flex flex-col items-center justify-center w-[350px] h-[500px] md:w-[400px] md:h-[600px] lg:w-[450px] lg:h-[500px] bg-[#DEF9FF] mt-6 lg:mt-0 rounded-xl mb-10'>
// //                     <Image src='/assets/Group 40.png' width={230} height={400} />
// //                     <p className='mt-5 text-center text-3xl font-bold text-blue-500'>Interview Prep</p>
// //                     <div className="text-center text-muted-foreground w-3/4 md:text-lg mt-1">
// //                         AI-driven interview prep: feedback, skill analysis, progress tracking, alignment.
// //                     </div>
// //                     <button 
// //                         className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-5">
// //                         Click Here
// //                     </button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Main;


// "use client";
// import React from 'react';
// import Image from 'next/image';
// import { useRouter } from 'next/navigation';

// function Main() {
//     const router = useRouter();

//     const handleStartNowClick = () => {
//         router.push('/ResumeLanding');
//     };

//     const handleInterviewPrepClick = () => {
//         window.location.href = 'https://prep-ai-hazel.vercel.app/';
//     };

//     return (
//         <div>
//             <div className="flex flex-col items-center justify-center w-full mx-auto mt-9 text-black">
//                 <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-500 mt-0 lg:mt-0 md:mt-6">
//                     Simplify Your Hiring & Preparations!
//                 </h1>
//                 <div className="text-center text-muted-foreground w-3/4 md:text-xl mt-4">
//                     SmartHire streamlines recruitment with AI-powered tools, saving you time and helping you find the perfect candidates and for candidate interview preparation dashboard.
//                 </div>
//             </div>

//             <div className='flex flex-col lg:flex-row items-center justify-center lg:space-x-8 mt-10 lg:mt-16'>

//                 <div className='flex flex-col items-center justify-center w-[350px] h-[500px] md:w-[400px] md:h-[600px] lg:w-[450px] lg:h-[500px] bg-[#DEF9FF] mt-6 lg:mt-0 rounded-xl mb-10'>
//                     <Image src='/assets/Group 39.png' width={200} height={300} />
//                     <p className='text-center text-3xl font-bold text-blue-500'>Resume Shortlisting</p>
//                     <div className="text-center text-muted-foreground w-3/4 md:text-lg mt-1">
//                         Curating resumes efficiently to match top talent with organizational role.
//                     </div>
//                     <button 
//                         className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-5" 
//                         onClick={handleStartNowClick}>
//                         Click Here
//                     </button>
//                 </div>

//                 <div className='flex flex-col items-center justify-center w-[350px] h-[500px] md:w-[400px] md:h-[600px] lg:w-[450px] lg:h-[500px] bg-[#DEF9FF] mt-6 lg:mt-0 rounded-xl mb-10'>
//                     <Image src='/assets/Group 40.png' width={230} height={400} />
//                     <p className='text-center text-3xl font-bold text-blue-500'>Interview Prep</p>
//                     <div className="text-center text-muted-foreground w-3/4 md:text-lg mt-1">
//                         AI-driven interview prep: feedback, skill analysis, progress tracking, alignment.
//                     </div>
//                     <button 
//                         className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-5"
//                         onClick={handleInterviewPrepClick}>
//                         Click Here
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default Main;

// // "use client";
// // import React from 'react'
// // import Image from 'next/image';
// // import { useRouter } from 'next/navigation';

// // function Main() {
// //     const router = useRouter();

// //     const handleStartNowClick = () => {
// //         router.push('/ResumeLanding');
// //     };

// //     return (
// //         <div>
// //             <div className="flex flex-col items-center justify-center w-full mx-auto mt-9 text-black">
// //                 <h1 className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-500 mt-0 lg:mt-0 md:mt-6">
// //                     Simplify Your Hiring & Preparations!
// //                 </h1>
// //                 <div className="text-center text-muted-foreground w-3/4 md:text-xl mt-4">
// //                     SmartHire streamlines recruitment with AI-powered tools, saving you time and helping you find the perfect candidates and for candidate interview preparation dashboard.
// //                 </div>
// //             </div>

// //             <div className='flex flex-col lg:flex-row items-center justify-center lg:space-x-8 mt-10 lg:mt-16'>

// //                 <div className='flex flex-col items-center justify-center w-[350px] h-[500px] md:w-[400px] md:h-[600px] lg:w-[450px] lg:h-[500px] bg-[#DEF9FF] mt-6 lg:mt-0 rounded-xl'>
// //                     <Image src='/assets/Group 39.png' width={200} height={300} />
// //                     <p className='text-center text-3xl font-bold text-blue-500'>Resume Shortlisting</p>
// //                     <div className="text-center text-muted-foreground w-3/4 md:text-lg mt-1">
// //                         Curating resumes efficiently to match top talent with organizational role.
// //                     </div>
// //                     <button 
// //                         className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-5" 
// //                         onClick={handleStartNowClick}>
// //                         Click Here
// //                     </button>
// //                 </div>

// //                 <div className='flex flex-col items-center justify-center w-[350px] h-[500px] mb-10 md:w-[600px] md:h-[600px] lg:w-[500px] lg:h-[480px] bg-[#DEF9FF] mt-16 rounded-xl mx-auto md:mx-4 lg:ml-40'>
// //                     <Image src='/assets/Group 40.png' width={230} height={400} />
// //                     <p className='text-center text-3xl font-bold text-blue-500'>Interview Prep</p>
// //                     <div className="text-center text-muted-foreground w-3/4 md:text-lg mt-1">
// //                         AI-driven interview prep: feedback, skill analysis, progress tracking, alignment.
// //                     </div>
// //                     <button 
// //                         className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-5">
// //                         Click Here
// //                     </button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default Main;

"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

function Main() {
  const router = useRouter();

  const handleStartNowClick = () => {
    router.push("/ResumeLanding");
  };

  const handleInterviewPrepClick = () => {
    window.location.href = "https://prep-ai-hazel.vercel.app/";
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-10">
      <div className="flex flex-col items-center justify-center w-full mx-auto text-black">
        <motion.h1
          className="text-center text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-blue-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Simplify Your Hiring & Preparations!
        </motion.h1>
        <motion.div
          className="text-center text-gray-600 w-3/4 md:text-xl mt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          SmartHire streamlines recruitment with AI-powered tools, saving you
          time and helping you find the perfect candidates while preparing for
          interviews.
        </motion.div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center lg:space-x-8 mt-10 lg:mt-16">
        {/* Card 1 */}
        <motion.div
          className="flex flex-col items-center justify-center w-[350px] h-[500px] md:w-[400px] md:h-[600px] lg:w-[450px] lg:h-[500px] bg-[#DEF9FF] rounded-xl shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/Group 39.png"
            width={200}
            height={300}
            alt="Resume Shortlisting"
          />
          <p className="text-center text-3xl font-bold text-blue-500">
            Resume Shortlisting
          </p>
          <div className="text-center text-gray-600 w-3/4 md:text-lg mt-1">
            Curating resumes efficiently to match top talent with organizational
            roles.
          </div>
          <motion.button
            className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleStartNowClick}
          >
            Click Here
          </motion.button>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="flex flex-col items-center justify-center w-[350px] h-[500px] md:w-[400px] md:h-[600px] lg:w-[450px] lg:h-[500px] bg-[#DEF9FF] rounded-xl shadow-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105 md:mt-0 mt-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Image
            src="/assets/Group 40.png"
            width={230}
            height={400}
            alt="Interview Prep"
          />
          <p className="text-center text-3xl font-bold text-blue-500 mt-5 ">
            Interview Prep
          </p>
          <div className="text-center text-gray-600 w-3/4 md:text-lg mt-1">
            AI-driven interview prep: feedback, skill analysis, progress
            tracking, alignment.
          </div>
          <motion.button
            className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-5"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleInterviewPrepClick}
          >
            Click Here
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Main;
