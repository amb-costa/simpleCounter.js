import React from "react";
import PropTypes from "prop-types"

//import clock icon from react-icons library
import {FaClock} from 'react-icons/fa'

//import SecondsCounter
import SecondsCounter from "./secondscounter.jsx";

//import styles for counter
import "../../styles/index.css";

//creating structure function to render on index.js
//props: sec, min, hr, day
const Home = (props) => {
	return (
			<div className="MainFrame">
			<span><FaClock /></span>
			<span>{props.day}</span>
			<span>{props.hr}</span>
			<span>{props.min}</span>
			<span>{props.sec}</span>
		</div>
		);
};

export default Home;
