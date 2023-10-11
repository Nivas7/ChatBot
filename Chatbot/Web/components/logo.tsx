import { signOut, useSession } from "next-auth/react";

const LogoBox = () => {
    const { data: session } = useSession();
    const profileImg = session?.user?.image;
    return ( 
        <div className="flex justify-between bg-gray-800 m-[2rem]">
            <h1 className="text-white cursor-pointer animate-pulse text-3xl">ChatBot</h1>

            {session && <img src={profileImg} onClick={() => signOut()} alt="Profile" className="h-12 w-12 cursor-pointer mb-2 hover:opacity-50 rounded-[50%]" />}
        </div>
     );
}
 
export default LogoBox;