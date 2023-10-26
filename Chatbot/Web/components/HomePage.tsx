"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import logo from "../public/carla.png"


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
			<div className="logo"><Image src={logo} className="w-[7rem] object-contain" alt="logo"/></div>
			<h3>Brand</h3>
		</a>
		<div className="burger" id="burger">
			<span className="burger-line"></span>
			<span className="burger-line"></span>
			<span className="burger-line"></span>
		</div>
		<span className="overlay"></span>
		<div className="menu" id="menu">
			<ul className="menu-inner">
				<li className="menu-item"><a className="menu-link" href="#">Home</a></li>
				<li className="menu-item"><a className="menu-link" href="#">Features</a></li>
				<li className="menu-item"><a className="menu-link" href="#">Tools</a></li>
				<li className="menu-item"><a className="menu-link" href="#">Docs</a></li>
				<li className="menu-item"><a className="menu-link" href="#">Download</a></li>
			</ul>
		</div>

		<div className="search-block">
			<form className="search-form">
				<span><i className="fa fa-arrow-left search-cancel"></i></span>
				<input type="search" name="search" className="search-input" autoComplete="off" placeholder="Search here..." />
			</form>
		</div>
	</nav>
</header>

<div id="particles-js"></div>

      <section className="hero" id="top">
        <div className="title">
          <h1 className="intro">
            <span className="magic">
              <span className="magic-star">
                <svg viewBox="0 0 512 512">
                  <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                </svg>
              </span>
              <span className="magic-star">
                <svg viewBox="0 0 512 512">
                  <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                </svg>
              </span>
              <span className="magic-star">
                <svg viewBox="0 0 512 512">
                  <path d="M512 255.1c0 11.34-7.406 20.86-18.44 23.64l-171.3 42.78l-42.78 171.1C276.7 504.6 267.2 512 255.9 512s-20.84-7.406-23.62-18.44l-42.66-171.2L18.47 279.6C7.406 276.8 0 267.3 0 255.1c0-11.34 7.406-20.83 18.44-23.61l171.2-42.78l42.78-171.1C235.2 7.406 244.7 0 256 0s20.84 7.406 23.62 18.44l42.78 171.2l171.2 42.78C504.6 235.2 512 244.6 512 255.1z" />
                </svg></span>
              <span className="magic-text">Carla{""}</span></span> Chatbot?!
          </h1>
        </div>

        <h2 className="subheading">Your AI companion‚ ready to chat‚ learn‚ and assist all in one place..</h2>

        <div className="info">
          <p>The carousel below is navigable via the keyboard arrow keys or by mouse.</p>
        </div>
      </section>

      <section className="section">
        <div className="desktop-wrapper">
          <div className="carousel reflect">
            <ul className="carousel__list" data-aos="fade-up" data-aos-duration="1000" data-aos-easing="ease">
              <li className="carousel__item" data-pos="-2"></li>
              <li className="carousel__item" data-pos="-1"></li>
              <li className="carousel__item" data-pos="0"></li>
              <li className="carousel__item" data-pos="1"></li>
              <li className="carousel__item" data-pos="2"></li>
            </ul>
          </div>
        </div>
      </section>
    </div>
     );
}
 
export default HomePage;
