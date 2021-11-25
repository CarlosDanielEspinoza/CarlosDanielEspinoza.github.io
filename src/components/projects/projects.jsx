import React from 'react';
import './projects.css';
import Card from '../card/card.jsx';
import Img1 from './img/Captura01.png';
import Img2 from './img/Captura02.png';
import Img3 from './img/Captura03.png';
import GitHubW from './img/GithubW32.png'



const Projects = () => {
	return(
		<div className="ProjectContainer" id="Projects">
			
			<div className="ProjectsContainer_boxTitle">
				<h1 className="ProjectContainer_title"> Proyectos </h1>
				<p>
					Los siguientes son unos de los proyectos personales que he elaborado, los 
					cuales comprenden desde aplicaciones web sencillas con Node.js con el uso de
					módulos como Socket.io para hacer un chat grupal hasta el comsumo de API's en
					el Front-End o manipulación de datos con Mongoose. <br/> <br/>
					Puedes encontrar otros proyectos en mi repositorio, como Menús, Cronómetros, un juego
					de memoria e incluso una Trivia.
				</p>
			</div>

			<div className="ProjectContainer_Cards">
				<Card 
					title="Chat Grupal" 
					text=" Node.js | Express | Socket.IO"
					linkPage="https://group-chat-sockets.herokuapp.com/"
					linkGit="https://github.com/CarlosDanielEspinoza/group_chat" 
					img={Img1}
					/>
				<Card 
					title="PokeDex" 
					text=" Javascript | Api Restful | Fetch"
					linkPage="https://carlosdanielespinoza.github.io/Pokedex/"
					linkGit="https://github.com/CarlosDanielEspinoza/Pokedex" 
					img={Img2} 
					/>
				<Card 
					title="Delivery Man" 
					text="Node.js | Api Rest | Mongoose"
					linkPage="https://delivery-man-api.herokuapp.com/"
					linkGit="https://github.com/CarlosDanielEspinoza/delivery-man-api" 
					img={Img3}
					/>
			</div>

			<div className="ProjectContainer_More">
				<a href="https://github.com/CarlosDanielEspinoza?tab=repositories" target="__bank">
					<button className="More_Button" href=""> 
						<img src={GitHubW} alt="Gitgub"/>
						VER MÁS AQUÍ 
					</button>
				</a>
			</div>
		</div>
	)
}

export default Projects;