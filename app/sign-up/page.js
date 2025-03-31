"use client"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import AuthGuard from '../components/authGuard';

const Page = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

    // useEffect(() => {
    //     // Check if user is already logged in
    //     const checkSession = async () => {
    //         const session = await getServerSession(authOptions);
    //         if (session) {
    //             router.push('/');
    //         }
    //     };
    //     checkSession();
    // }, [router]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate form fields
        if (!name || !email || !password) {
            setError("Please fill all the fields");
            return;
        }

        try {
            const resUser = await fetch("/api/user-exists", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            
            const { user } = await resUser.json();
            if (user) {
                setError("Email already exists");
                return;
            }

            const res = await fetch("/api/sign-up", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            if (res.ok) {
                // Reset the form and navigate to homepage or login page
                setName("");
                setEmail("");
                setPassword("");
                setError("");
                router.push("/");  // Redirect to homepage or login page
            } else {
                setError("User registration failed");
            }
        } catch (error) {
            setError("Error during registration");
            console.log("Error during registration", error);
        }
    };

    return (
        <AuthGuard>
        {/* <div className="grid place-items-center">
            <form onSubmit={handleSubmit} className="flex flex-col">
                <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)} 
                    type="text" 
                    placeholder="Full Name" 
                />
                <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    type="email" 
                    placeholder="Email" 
                />
                <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    type="password" 
                    placeholder="Password" 
                />
                <button type="submit" className="bg-blue-500">Register</button>

                {error && (
                    <div className="text-red-500">
                        {error}
                    </div>
                )}

                <Link href="/sign-in">
                    Already have an account? <span>Login</span>
                </Link>
            </form>
        </div> */}
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Create an Account</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input 
                value={name}
                onChange={(e) => setName(e.target.value)} 
                type="text" 
                placeholder="Full Name" 
                required
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <input 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                type="email" 
                placeholder="Email" 
                required
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <input 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
                type="password" 
                placeholder="Password" 
                required
                className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            />
            <button 
                type="submit" 
                className="bg-blue-500 text-white font-semibold py-3 rounded hover:bg-blue-600 transition-all transform hover:scale-105"
            >
                Register
            </button>
            
            {error && (
                <div className="text-red-500 text-sm text-center mt-2">
                    {error}
                </div>
            )}
            
            <p className="text-center text-gray-600 mt-4">
                Already have an account?{" "}
                <Link href="/sign-in" className="text-blue-500 hover:underline transition">
                    Login
                </Link>
            </p>
        </form>
    </div>
</div>

        </AuthGuard>
    );
};

export default Page;

// "use client";
// import React, { useEffect, useState } from 'react';

// const ShortListed = () => {
//     const [candidates, setCandidates] = useState([]);

//     useEffect(() => {
//         const data = localStorage.getItem("shortlistedCandidates");
//         if (data) {
//             setCandidates(JSON.parse(data));
//         }
//     }, []);

//     // Function to open resume in a new tab
//     const openResume = (resumeFilePath) => {
//         // Check if the file exists in the local storage path
//         const fileUrl = `${process.env.NEXT_PUBLIC_RESUME_BASE_URL}/${resumeFilePath}`;
//         window.open(fileUrl, "_blank");
//     };

//     return (
//         <div className='flex flex-col space-y-10 px-4 sm:px-7 py-5 text-black'>
//             <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold tracking-tighter text-blue-500">
//                 Candidate Shortlisting Dashboard
//             </h1>
//             <div className="flex flex-wrap justify-center gap-6">
//                 {candidates.map((candidate, index) => (
//                     <div key={index} className="card card-compact bg-white w-full sm:w-72 md:w-96 shadow-xl">
//                         <div className="card-body text-center">
//                             <h2 className="text-xl font-semibold">{candidate.name}</h2>
//                             <p>Match Percentage: {candidate.score.toFixed(2)}%</p>
//                             <button 
//                                 onClick={() => openResume(candidate.name)} 
//                                 className="btn btn-primary mt-4"
//                             >
//                                 View Resume
//                             </button>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };

// export default ShortListed;
