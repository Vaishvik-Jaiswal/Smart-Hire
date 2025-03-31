"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logout from './logout';
import { useSession } from 'next-auth/react';

export default function Navbar() {
    const { data: session } = useSession();
    const [isOpen, setIsOpen] = useState(false);

    const toggleDrawer = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#AADEEF] shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center space-x-3">
                            <Image src='/assets/logo.png' width={70} height={90} alt="SmartHire Logo" />
                            <span className="text-3xl font-semibold text-[#3B82F6]">SmartHire</span>
                        </Link>
                    </div>

                    
                    <div className="hidden md:flex items-center space-x-8">
                        <Link href="/" className="text-[#3B82F6] hover:text-black px-3 py-2 rounded-md text-lg font-medium">
                            Dashboard
                        </Link>
                        <Link href="/" className="text-[#3B82F6] hover:text-black px-3 py-2 rounded-md text-lg font-medium">
                            Features
                        </Link>
                        <Link href="/" className="text-[#3B82F6] hover:text-black px-3 py-2 rounded-md text-lg font-medium">
                            About
                        </Link>
                        {session && (
                            <div className="flex items-center space-x-4">
                                <Link href="/profile" className="focus:outline-none">
                                    <Image src="/assets/Person.png" alt="Profile" width={40} height={40} className="rounded-full" />
                                </Link>
                                <Logout />
                            </div>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleDrawer}
                            className="p-2 rounded-md text-[#3B82F6] hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <svg
                                className="block h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Drawer */}
            {isOpen && (
                <div className="md:hidden">
                    <div
                        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
                        onClick={toggleDrawer}
                    ></div>
                    <div
                        className={`fixed inset-y-0 right-0 w-64 bg-[#AADEEF] transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'
                            }`}
                    >
                        <div className="px-6 pt-5 space-y-4">
                            <Link href="/" onClick={toggleDrawer} className="block text-[#3B82F6] hover:text-black py-2 rounded-md text-lg font-medium">
                                Dashboard
                            </Link>
                            <Link href="/" onClick={toggleDrawer} className="block text-[#3B82F6] hover:text-black py-2 rounded-md text-lg font-medium">
                                Features
                            </Link>
                            <Link href="/" onClick={toggleDrawer} className="block text-[#3B82F6] hover:text-black py-2 rounded-md text-lg font-medium">
                                About
                            </Link>
                            {session && (
                                <div className="flex items-center space-x-3 pt-4 border-t border-gray-200">
                                    <Link href="/profile" onClick={toggleDrawer} className="flex items-center text-[#3B82F6] hover:text-black py-2 rounded-md text-lg font-medium">
                                        <Image src="/assets/person.png" alt="Profile" width={35} height={35} className="rounded-full mr-2" />
                                        <span>Profile</span>
                                    </Link>
                                    <Logout />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
