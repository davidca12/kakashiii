import React , {Component} from "react";
import Card from "./Card";

function ExerciseList (props){

    return (

        {props.exercises.map(exercise => {
			<Card
                title={exercise.title}
                description={exercise.description}
                img={exercise.img}
                leftColor={exercise.leftColor}
                rightColor={exercise.rightColor}
            />;
		})}
            
    )                                    


}
export default ExerciseList