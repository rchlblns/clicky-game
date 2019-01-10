import React from "react";
import "./style.css";

const Jumbotron = (props) => (
        <header className="header">
            <h1>Adventure Time Clicky Game</h1>
            <h4 className="scores"> Score: {props.currentScore} | High score: {props.highScore}</h4>
            <h4 className="messages">{props.feedback}</h4>
        </header>
);

export default Jumbotron;