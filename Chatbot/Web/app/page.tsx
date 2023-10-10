"use client"

import { useEffect, useState } from "react";
import Chat from "@/components/Chat";

export default function Home() {
  const [isComponentVisible, setIsComponentVisible] = useState(false);

  const toggleComponentVisibility = () => {
    setIsComponentVisible(!isComponentVisible);
  };

  return (
    <main className="overflow-hidden w-full h-screen relative flex">
      <Chat toggleComponentVisibility={toggleComponentVisibility} />
    </main>
  );
}