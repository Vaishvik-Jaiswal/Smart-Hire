import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";
// import { connect } from "mongoose";
import { NextResponse } from "next/server";

export async function POST(req){
    try {
        await connectDB();
        const {email}=await req.json();
        const user=await User.findOne({email}).select("_id");
        console.log("User : ",user);
        return NextResponse.json({user});
    } catch (error) {
        console.log("User already registered ",error)
        return NextResponse.json({error})
    }
}