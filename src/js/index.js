//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import main component: SecondsCounter
//SC imports Home component
import SecondsCounter from "./component/secondscounter.jsx";

//render your react application
ReactDOM.render(<SecondsCounter />, document.querySelector("#app"));
