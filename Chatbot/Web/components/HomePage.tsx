"use client"
import { useRouter } from "next/navigation";
import Quote from "./Quote";

const HomePage = () => {

  const router = useRouter();

    return ( 
        <div>
          <div>
            <h1 className="text-custom">Your AI companion&sbquo; ready to chat&sbquo; learn&sbquo; and assist – all in one place.</h1>
            <p className="text-xl leading-loose m-24">Welcome to Carla&sbquo; your virtual assistant! Whether you&apos;re a  enthusiast&sbquo; or just looking for information about the Machine learning we&apos;re here to help you. Carla is your go to chatbot for all things automation.</p>

          </div>
          <button className="bg-blue-800 w-[30vh] p-[1rem] ml-[25vh] rounded-lg" onClick={() => {
            router.push("Chat")
          }}>try Carla for free</button>
          <div className="w-[70%] bg-gray-500 bottom-[2rem] ml-[12vh] mt-[5rem] rounded-lg">

        </div>
        </div>
     );
}
 
export default HomePage;
