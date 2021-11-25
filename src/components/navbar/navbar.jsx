import React from 'react';
import "./navbar.css";
import burger from "./img/burger.svg";
import logo from "./img/logo.svg";

const Navbar = () => {
	let [navbarScroll, navbarScrollOn] = React.useState("disabled");

	const scrollNavbar = () => {
		if(navbarScroll === "disabled"){
			navbarScrollOn("navbarScrollOn");
		} else {
			navbarScrollOn("disabled");
		}
	}

	return (
		<nav className="navbar"> 
			<div className="navbarContainerLeft">
				<a href="#hero">
					<img src={logo} alt="logotipo" className="navImage"/>
				</a>
				<div className="navTitle"> Carlos.Dev( ) </div>
			</div>
			<div className="navbarContainerRight">
				<a href="#AboutMe" className="navButton"> Sobre Mi </a>
				<a href="#Projects" className="navButton"> Proyectos </a>
				<a href="#Contact" className="navButton buttonCta"> Contactame </a>		
			</div>

			<div className="navbarBurger" onClick={scrollNavbar}>
				<img src={burger} alt="burger"/>
			</div>

			<div className={navbarScroll}>
				<a href="#AboutMe" className="navButton" onClick={scrollNavbar}> Sobre Mi </a>
				<a href="#Projects" className="navButton" onClick={scrollNavbar}> Proyectos </a>
				<a href="#Contact" className="navButton" onClick={scrollNavbar}> Contactame </a>	
			</div>
		</nav>
	);
}

export default Navbar;