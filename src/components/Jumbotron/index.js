import React from "react";
import "./style.css";

const Jumbotron = (props) => (
    <header className="header">
        <h1>Adventure Time Clicky Game</h1>
        <h4 className="feedback">Click on the image to earn a point! But don't click on the same one twice! {props.feedback}</h4>
    </header>
);

export default Jumbotron;