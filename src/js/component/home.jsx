import React from "react";

//import clock icon from react-icons library
import {FaClock} from 'react-icons/fa'

//import SecondsCounter
import SecondsCounter from "./secondscounter.jsx";

//import styles for counter
import "../../styles/index.css";

//create your first component
const Home = (props) => {
	return (

		<div className="MainFrame">
			<span><FaClock /></span>
			<span>Hello!</span>
		</div>

	
		);
};

export default Home;
