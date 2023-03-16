import React, {useEffect, useState} from "react"
import Home from "./home.jsx";

//secondscounter: actual function with intervals for seconds

const SecondsCounter = () => {
    //initial time: zero for every parameter
    const [time, setTime] = useState({sec:0,min:0,hr:0,day:0});
    useEffect(() => {
        setInterval(() => {
        let onds=time.sec;
        onds++;
        console.log(onds);
        console.log(time)
        return setTime({sec:onds})}
,1000)}),[10];


    return (
        <Home time={time}/>
    )
}



export default SecondsCounter;