import React, { Component } from "react";
import "../../styles/Welcome.css";

function Welcome(props) {
	return (
		<div className="Container">
			<div className="Fitness-User-Info">
				<h1>Hello {props.username}!</h1>
				<p>Let´s Workout to get some gain!</p>
			</div>
		</div>
	);
}
export default Welcome;
