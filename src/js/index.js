//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

import Card from "./component/Card";
import Welcome from "./component/Welcome";

import Exercises from "../pages/Exercises";

//include your index.scss file into the bundle
import "../styles/index.scss";
import PropTypes from "prop-types";

//render your react application

ReactDOM.render(<Exercises />, document.getElementById("app"));
