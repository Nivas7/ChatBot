"use client"
import { signOut, useSession} from "next-auth/react";
import Image from "next/image";
import logo from "@/public/carla.png";

const LogoBox = () => {
    const { data: session } = useSession();
    const profileImg = session?.user?.image;
    return ( 
        <div>
            {session && <img src={profileImg || ""} onClick={() => signOut()} alt="Profile" className="h-8 w-8 cursor-pointer mb-2 hover:opacity-50 rounded-[50%]" />}
        </div>
     );
}
 
export default LogoBox