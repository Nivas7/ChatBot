"use client"
import { signOut, useSession} from "next-auth/react";
import Image from "next/image";
import logo from "@/public/carla.png";

const LogoBox = () => {
    const { data: session } = useSession();
    const profileImg = session?.user?.image;
    return ( 
        <div className="flex justify-between bg-gray-800 p-[2rem] border-b-[1px]">
            <Image src={logo}  className="w-[7rem] object-contain" alt="logo"/>

            {session && <img src={profileImg || ""} onClick={() => signOut()} alt="Profile" className="h-12 w-12 cursor-pointer mb-2 hover:opacity-50 rounded-[50%]" />}
        </div>
     );
}
 
export default LogoBox