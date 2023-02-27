import React from "react";

const Card = ({ owen, onCardClick }) => {

    return (
        <div className="card" onClick={() => {onCardClick(owen.timestamp)}}>
            <h2>{owen.movie}</h2>
        </div>
    )
}

export default Card;