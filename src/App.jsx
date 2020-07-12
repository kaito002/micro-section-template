import React from "react";
import "./index.css";
import logo from "./assets/react-logo.png";

const App = () => {
    return (
        <div className="container">
            <img src={logo} className="image"/>
            <h2 className="message">This is a Micro Section Example</h2>
        </div>
    )
}

export default App;