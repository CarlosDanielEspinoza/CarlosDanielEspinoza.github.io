import React from "react";
import "./card.css";
import GitHub from "./img/Github32.png";
import Chain from "./img/chain.svg";

const Card = (props)=>{

	return (
		<div className="card">
			<h2 className="card_title"> {props.title} </h2>
			<img src={props.img} alt={`Imagen del proyecto ${props.titulo}`} className="card_img"/>
			<div className="card_panel">
				<p> {props.text} </p>
				<a href={props.linkGit} target="__bank"> 
					<img src={GitHub} alt="GitHub" title="Ir al Codigo"/> 
				</a> 
				<a href={props.linkPage} target="__bank"> 
					<img src={Chain} alt="Link" title="Ir al Sitio"/> 
				</a>
			</div>
		</div>
	);
}



export default Card;