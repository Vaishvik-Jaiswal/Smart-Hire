"use client";

import React from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';

export default function Profile() {
    const { data: session } = useSession();

    const password = "**********"; 

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-semibold mb-4 text-[#3B82F6]">Profile Information</h2>
                {session ? (
                    <div>
                        <p><strong>Email:</strong> {session.user.email}</p>
                        <p><strong>Password:</strong> {password}</p>
                    </div>
                ) : (
                    <p>User is not logged in</p>
                )}
                <Link href="/">
                    <button className="mt-4 bg-[#3B82F6] text-white px-4 py-2 rounded-md">
                        Go Back to Dashboard
                    </button>
                </Link>
            </div>
        </div>
    );
}
