import { connectDB } from "@/lib/mongodb";
import User from "@/models/user";
import { startSession } from "mongoose";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import bcrypt from "bcryptjs"

export const authOptions={
    providers:[
        CredentialsProvider({
            name:"credentials",
            credentials:{},

            async authorize(credentials){
                const {email,password}=credentials;
                try {
                    await connectDB();
                    const user=await User.findOne({email})

                    if(!user){
                        return null;
                    }

                    const passwordmatch=await bcrypt.compare(password,user.password)
                    if(!passwordmatch){
                        return null;
                    }
                    return user;
                } catch (error) {
                    console.log("Errorrr ",error)
                }
            }
        }),
    ],
    session: {
        strategy: "jwt",
        maxAge: 60*5, // Session expires in 1 min
        updateAge: 15 * 60, // Extend session every 15 minutes
      },
      
        secret:process.env.NEXTAUTH_SECRET,
        pages:{
            signIn:"/sign-in"
        }
}

const handler=NextAuth(authOptions);
export {handler as GET,handler as POST};

