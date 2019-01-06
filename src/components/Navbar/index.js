import React, { Component } from "react";
import "./style.css";

class Navbar extends Component {
    render () {
        return (
            <nav className="navbar navbar-default navbar-fixed-top">
                <ul>
                    <li className="itemLeft">Test Your Memmory</li>
                    <li className="itemCenter"></li>
                    <li className="itemRight">Score: </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;