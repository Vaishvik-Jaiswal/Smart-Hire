import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const {name,email,password}=await req.json();
        const hashedPassword=await bcrypt.hash(password,10)
        console.log("Name : ",name)
        console.log("Email : ",email)
        console.log("Password : ",password)
        
        await connectDB()
        await User.create({name,email,password:hashedPassword})
        console.log("yoooooooo")
        return NextResponse.json(
            {message:"User created successfully"},
            {status:201}
        );

    } catch (error) {
        return NextResponse.json(
            {message: "Error while registering user"},
            {status: 500}
        )
    }
}