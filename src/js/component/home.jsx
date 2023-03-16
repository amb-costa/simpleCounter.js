import React from "react";

//import clock icon from react-icons library
import {FaClock} from 'react-icons/fa'

//import styles for counter
import "../../styles/index.css";

//creating structure function to render on index.js
//
const Home = (props) => {
	return (
	<div className="MainFrame">
		<span><FaClock /></span>
		<span>{props.time.tod}</span>
		<span>{props.time.h}</span>
		<span>{props.time.min}</span>
		<span>{props.time.sec}</span>
	</div>);
};

export default Home;
