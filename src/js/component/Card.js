import React, { Component } from "react";

import image1 from "../../img/image1.png";
//import circlesImg from "../../img/circles";
import "../../styles/Card.css";
import PropTypes from "prop-types";

class Card extends Component {
	render() {
		const { title, img, description, leftColor, rightColor } = this.props;
		//background:  no-repeat, linear-gradient(to right, #A74CF2, #617BFB);
		return (
			<div
				className="card mx-auto Fitness-Card"
				style={{
					//backgroundImage:`url(${circlesImg}), linear-gradient(to right, ${leftColor}, ${rightColor})`
					background: ` linear-gradient(to right, ${leftColor}, ${rightColor})`
				}}>
				<div className="card-body">
					<div className="row center">
						<div className="col-6 ">
							<img
								src={img}
								height="120px"
								className="float-right"
							/>
						</div>
						<div className="col-6">
							<h1>{title}</h1>
							<p>{description} </p>
						</div>
					</div>
				</div>
			</div>
		);
	}

	/*Card.propTypes = {
        // You can declare that a prop is a specific JS type. By default, these
        // are all optional.
        title: PropTypes.string
        description: PropTypes.string
          
    }*/
}

export default Card;
