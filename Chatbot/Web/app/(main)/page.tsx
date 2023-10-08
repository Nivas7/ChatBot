"use client"

import LogoBox from "@/components/Logo/logo";
import Chat from "@/components/Message/MessageBlock";
import { ModeToggle } from "@/components/mode-toggle";
import { UserButton } from "@clerk/nextjs";
import { useState } from "react";

 
export default function Home() {
    const [isComponentVisible, setIsComponentVisible] = useState(false);

  
    const toggleComponentVisibility = () => {
      setIsComponentVisible(!isComponentVisible);
    };

  return (
    <div className="h-full">
      <div className="flex justify-between m-5">
        <LogoBox />
        <div className="flex gap-3">
          <ModeToggle />
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
      <Chat toggleComponentVisibility={toggleComponentVisibility} />
    </div>
    )
  }