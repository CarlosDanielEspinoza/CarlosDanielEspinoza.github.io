import React from 'react';
import "./hero.css";
import Twitter from "./img/twitter.svg"

const Hero = () => {
	return (
		<div className="hero" id="hero">
			<h1 className="title"> DESARROLLADOR WEB JR</h1>
			<h3 className="subtitle"> 
				¡Bienaventurado seas! Soy desarrollador web autodidacta, curioso, crítico y con un 
				apetito insaciable por el conocimiento. Actualmente me especializo en Javascript y exploro sus
				tecnologías emparentadas como lo es NodeJs.
			</h3>

			<a href="https://twitter.com/carlosdaniel_er" target="__blank">
				<button className="hero_Button">
				    <img src={Twitter} alt="Twitter" width="40"/>
					SIGUEME POR TWITTER
				</button>
			</a>
		</div>

	)
}

export default Hero;