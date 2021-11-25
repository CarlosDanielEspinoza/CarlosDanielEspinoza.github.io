import React from 'react';
import './contact.css';
import Email from './img/email.png';
import GitHub from './img/GithubW32.png';
import Linkedin from './img/Li.png';
import Twitter from './img/twitter.svg';
import Logo from './img/logo.svg';

const Contact = () => {

	return (
		<div className="ContactContainer" id="Contact">
			<h1 className="ContactContainer_title"> Mantegamonos Conectados </h1>
			<p className="ContactContainer_text">
				Si te gusta lo que hago, podemos hacer cosas interesantes y lo mejor es que
				puedes contactarme  con el alcance de un solo click a través de mis redes sociales.
				Aunque tambien estoy al tanto de mi correo electrónico.
			</p>

			<div className="ContactContainer_imgBox">
				
				<a href="mailto:danielespinoza-rodriguez@hotmail.com" target="__blank">
					<img src={Email} alt="Email" className="ContactContainer_img"/>	
				</a>
				
				<a href="https://github.com/CarlosDanielEspinoza" target="__blank">
					<img src={GitHub} alt="GitHub" className="ContactContainer_img"/>
				</a>

				<a href="https://www.linkedin.com/in/carlos-espinoza-1b55b4224/" target="__blank">
					<img src={Linkedin} alt="Linkedin" className="ContactContainer_img"/>
				</a>

				<a href="https://twitter.com/carlosdaniel_er" target="__blank">
					<img src={Twitter} alt="Twitter" className="ContactContainer_img"/>
				</a>
			</div>
			
			<img src={Logo}alt="Logo"/>

			<p className="Rights_text"> © Todos los derechos reservados 2021 </p>
		</div>
	)
}


export default Contact;