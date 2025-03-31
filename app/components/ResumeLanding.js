"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function ResumeLanding() {
    const router = useRouter();

    const handleStartClick = () => {
        router.push('/ResumeUpload'); 
    };

    return (
        <div className='mt-20'>
            <div className="md:flex-row items-center justify-between gap-8">
                <div className="flex justify-end">
                    <div className="w-full md:w-1/2 space-y-6">
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#3B82F6]">
                            SmartHire: Resume Shortlisting
                        </h1>
                        <div className="flex flex-col object-contain items-end  mr-16">
                            <p className="text-lg text-gray-600  text-right">
                                Efficiently curating resumes to identify top talent and ensure a perfect match for organizational needs and role requirements.
                            </p>
                            <button
                                className="bg-[#3B82F6] text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 mt-2"
                                onClick={handleStartClick}
                            >
                                Start Now
                            </button>
                        </div>
                    </div>
                </div>
                <div className='-mt-36 ml-36'>
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
