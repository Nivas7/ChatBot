"use client"
import { signIn } from "next-auth/react";
import Image from "next/image";
import carla from "@/public/carla.png";

const Login = () => {
    return ( 
        <div className="h-screen flex flex-col items-center justify-center text-center">
            <Image src={carla} width={300} height={300} alt="logo" className="cursor-pointer" />
            <p className="mt-[1rem] text-center text-xs tracking-widest italic text-gray-200 leading-relaxed cursor-default"><span className="text-blue-600">Carla :{" "}</span>The Chatbot that wont't drive you crazy... well, at least not intentionally!</p>
            <button onClick={() => signIn("google")} className="text-white font-bold mt-[5rem] text-3xl bg-blue-700 p-[1rem] hover:opacity-50 rounded-lg animate-pulse">Sign in to Chatbot</button>
        </div>
     );
}
 
export default Login;   