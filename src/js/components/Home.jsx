import React from "react";
import SecondsCounter from "./SecondsCounter";
import Icon from "./icon";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


//create your first component
const Home = () => {
	return (
		
		<div className="text-center">
			<Icon/>
			<SecondsCounter segundos ={0}/>
			

			
			
            
			
		</div>
	);
};

export default Home;