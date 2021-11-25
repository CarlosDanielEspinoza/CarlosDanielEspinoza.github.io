import React from "react";
import CardSkills from "../cardSkills/cardSkills.jsx";
import "./aboutMe.css";
import Css from "./img/css-3.png";
import Html from "./img/html-5.png";
import Node from "./img/Node.png";
import Js from "./img/js.png";
import Npm from "./img/npm.png";
import Git from "./img/git.png";
import ReactJs from "./img/react.png";
import Python from "./img/python.png";


const AboutMe = () => {

	return (
		<div className="AboutMe" id="AboutMe">
			<h1 className="AboutMe_Title"> Sobre Mi </h1>
			<h3 className="AboutMe_Description"> 
				¡Hola! Soy Carlos Espinoza. Filósofo de profesión y Desarrollador Web por pasión.
				Desde la primera vez que toqué un ordenador surgió en mí una curiosidad tal por
				su funcionamiento que me llevó al aprendizaje de tecnologías de la programación.
				Despues de cursar la licenciatura en Filosofía he decidido embarcarme en una vieja pasión,
				el conocimiento técnico en lenguajes de programación en pos de la solución de problemas.


 			</h3>

			<h1 className="AboutMe_Skills"> Habilidades </h1>
			<h3 className="AboutMe_Description">
				Algunas de las habilidades que tengo hasta el momento son las siguientes:
			</h3>
			<div className="AboutMe_Skills_Cards">
				<CardSkills img={Html} title={"HTML 5"}/>
				<CardSkills img={Css} title={"CSS 3"}/>
				<CardSkills img={Js} title={"Javascript ES6"}/>
				<CardSkills img={Node} title={"NodeJs-Express"}/>
				<CardSkills img={Npm} title={"Npm"}/>
				<CardSkills img={Git} title={"Git"}/>
			</div>

			<h3 className="AboutMe_Description"> 
				Otras tecnologías en las que estoy interesado en aprender en un futuro son React.js
				para la optimización de los componentes y Python con el motivo de creación de
				aplicaciones web.
			</h3>
			<div className="AboutMe_Skills_Cards">
				<CardSkills img={ReactJs} title={"React Js"}/>
				<CardSkills img={Python} title={"Python"}/>
			</div>	
		</div>
	)
}

export default AboutMe;