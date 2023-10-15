"use client"
import { useRouter } from "next/navigation";
import Quote from "./Quote";

const HomePage = () => {

  const router = useRouter();

    return ( 
        <div>
          <div>
            <h1 className="text-custom mx-[1rem_!important]">Your AI companion&sbquo; ready to chat&sbquo; learn&sbquo; and assist all in one place.</h1>
            <p className="lg:m-24 md:text-base lg:mx-[20vw] text-gray-400 text-center text-sm lg:text-xl  px-[3rem] m-[3rem]">Welcome to Carla&sbquo; your virtual assistant! Whether you&apos;re a  enthusiast&sbquo; or just looking for information about the Machine learning we&apos;re here to help you. Carla is your go to chatbot for all things automation.</p>

          </div>
          <button className="bg-blue-800 w-[30vh] md:ml-[30%] lg:ml-[40%] p-[1rem] ml-[20%] mt-[2rem] rounded-lg" onClick={() => {
            router.push("Chat")
          }}>try Carla for free</button>
        </div>
     );
}
 
export default HomePage;
