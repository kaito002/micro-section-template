import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

if (!document.getElementById("MicroSection-container")) {
    ReactDOM.render(<App />, document.getElementById("root"));
}

window.renderMicroSection = (containerId) => {
    ReactDOM.render(<App />, document.getElementById(containerId));
}

window.unmountMicroSection = (containerId) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
}