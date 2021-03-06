import React from "react";
import "./style.css";

function CharCard(props) {
    return (
        <div className="card"
            onClick={() => props.handleClick(props.id)}>

            <div className="img-container">
                <img alt={props.name} src={props.image} />
            </div>
        </div>
    )
};

export default CharCard;