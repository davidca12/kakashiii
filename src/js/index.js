//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

import Card from "./component/Card";

//include your index.scss file into the bundle
import "../styles/index.scss";
import PropTypes from "prop-types";

//render your react application

ReactDOM.render(
	<Card
		title="Techniquee Guides"
		description="Learn amazing street workout and calistenia"
		leftColor="#A74CF2"
		rightColor="#617BFB"
	/>,
	document.getElementById("app")
);
