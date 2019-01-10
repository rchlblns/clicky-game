import React from "react";
import "./style.css";

const Navbar = (props) => {

    return (
        <nav className="navbar navbar-default navbar-fixed-top">
            <ul>
                <li className="scores">Score: {props.currentScore} | High score: {props.highScore}</li>
                <li className="feedback">{props.feedback}</li>
            </ul>
        </nav>
    );
}

export default Navbar;