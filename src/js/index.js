//import react into the bundle
import React from "react"
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import main component: SecondsCounter
import SecondsCounter from "./component/secondscounter.jsx";

//SecondsCounter will format in seconds, minutes, hours and days if necessary

let counter = 0;
setInterval (() => {
    counter++;
    ReactDOM.render(<SecondsCounter seconds={counter}/>, document.querySelector("#app"));
},1000)

//render your react application


