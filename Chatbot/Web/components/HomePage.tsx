"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai"

import logo from "../public/carla.png"
import LogoBox from "./logo";


const HomePage = () => {

  const [active, setActive] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setActive(true);
    }, 3000);
  }, [])

  const router = useRouter();

    return ( 
        <div>
          <div className={active ? "loader_mod" : "loader"}>
	<div className="balls"></div>
</div>
<header className="header" id="header">
	<nav className="navbar">
		<a href="#top" className="brand">
			<div className="logo">
        <Image src={logo} className="w-[7rem] object-contain" alt="logo"/></div>
			<h3>Brand</h3>
		</a>
		<div className="burger" id="burger">
			<span className="burger-line"></span>
			<span className="burger-line"></span>
			<span className="burger-line"></span>
		</div>
		<span className="overlay"></span>
		<div className="menu items-center flex justify-between" id="menu">
			<ul className="menu-inner items-center">
				<li className="menu-item"><a className="menu-link" href="#">Home</a></li>
				<li className="menu-item"><a className="menu-link" href="#">Features</a></li>
				<li className="menu-item"><a className="menu-link" href="#">Tools</a></li>
				<li className="menu-item"><a className="menu-link" href="#">Docs</a></li>
			</ul>
      <LogoBox />
		</div>

		<div className="search-block">
			<form className="search-form">
				<span><AiOutlineArrowLeft /></span>
				<input type="search" name="search" className="search-input" autoComplete="off" placeholder="Search here..." />
			</form>
		</div>
	</nav>
</header>


      <section className="hero" id="top">
        <div className="title">
          <h1 className="intro">
              <span className="magic-text">Carla{" "}</span> Chatbot?!
          </h1>
        </div>

        <h2 className="subheading">Your AI companion‚ ready to chat‚ learn‚ and assist all in one place..</h2>

        <div className="info">
          <p>Click the Below Button to Chat with Carla  </p>
        </div>
        <button className="flex items-center justify-center mx-auto my-[10rem] bg-blue-800 w-[30vh] p-[1rem] rounded-lg" onClick={() => {
            router.push("Chat")
          }}>try Carla for free</button>
      </section>

    </div>
     );
}
 
export default HomePage;
