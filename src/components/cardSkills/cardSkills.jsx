import React from "react";
import "./cardSkills.css";

const CardSkill = (props) => {
	let [visibility, setVisibility] = React.useState("hidden");

	const changeVisibility = () => {
		if(visibility==="hidden"){
			setVisibility("visible");
		} else {
			setVisibility("hidden");
		}
		
	}
	
	return (
		<div className="CardSkill" title={props.title} onMouseOver={changeVisibility} onMouseOut={changeVisibility}>
			<img src={props.img} alt={props.img} className="CardSkill_Img"/>
			<div className={visibility}>
				{props.title}
			</div>
		</div>
		
	)
}

export default CardSkill;