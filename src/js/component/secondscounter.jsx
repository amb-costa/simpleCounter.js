import React from "react"
import PropTypes from "prop-types"

//import clock icon from react-icons library
import {FaClock} from 'react-icons/fa'

//import styles for counter
import "../../styles/index.css";

//secondscounter: actual function for counter
//format = days : hours : minutes : seconds 
//includes HTML structure for whole DIV
//name for prop used on index.js = seconds

const SecondsCounter = (props) => {
    //sec: rest of division every 60 seconds
    //min: 60 seconds per minute, rest of division every 60 min
    //hr: 3600 seconds per hour, rest of division every 24 hr
    //day: 86400 seconds per day
    let sec = props.seconds%60;
    let min = Math.floor((props.seconds/60))%60;
    let hr = Math.floor(props.seconds/3600)%24;
    let day = Math.floor(props.seconds/86400);

    //return structure inside #app DIV
    return (
        <div className="MainFrame">
            <p>Timer for days : hours: minutes : seconds</p>
		    <span><FaClock /></span>
            <span>{day}</span>
            <span>{hr}</span>
            <span>{min}</span>
            <span>{sec}</span>
	    </div>
    )
}

export default SecondsCounter;