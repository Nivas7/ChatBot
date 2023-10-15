import LogoBox from "@/components/logo";
import HomePage from "../components/HomePage";

export default function Home() {

  return (
    <main className="overflow-hidden w-full h-screen relative flex flex-col">
      <LogoBox />
      <HomePage />
    </main>
  );
}