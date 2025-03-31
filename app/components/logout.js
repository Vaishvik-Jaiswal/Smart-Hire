"use client"
import React from 'react'
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';

const logout = () => {
    const {data:session}=useSession();
  return (
    <div>
        <div>
            <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded hover:bg-red-700 transition duration-200 ease-in-out"  onClick={()=> signOut()}>Logout</button>
        </div>
    </div>
  )
}

export default logout