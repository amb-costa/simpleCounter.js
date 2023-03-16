import React, {useEffect, useState} from "react"
import Home from "./home.jsx";

//secondscounter: actual function for counter
//format = days : hours : minutes : seconds 

const SecondsCounter = () => {
    //initial time: zero for every parameter
    const [time, setTime] = useState({tod:0,h:0,min:0,sec:0});

    useEffect(() => {
        console.log(time);
        const inter = setInterval(() => {
            let onds = time.sec;
            let utes = time.min;
            let our = time.h;
            let ay = time.tod;
            if (onds == 59) {
                utes++;
                onds = -1
            }
            if (utes == 59) {
                our++;
                utes = -1;
            }
            if (our == 24) {
                ay ++;
                our = 0
            }
            onds++;
            setTime({tod:ay,h:our,min:utes,sec:onds})
        },1000)
        return () => clearInterval(inter)}
        );


    return (
        <>
        <p>Timer for days : hours: minutes : seconds</p>
        <Home time={time}/>
        </>
    )
}



export default SecondsCounter;