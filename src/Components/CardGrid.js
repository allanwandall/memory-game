import React from "react";
import Card from './Card';


const CardGrid = ({owens, onCardClick}) => {
    
    
    const owenCards = owens.map((owen, index) => {
        if (owen !== null) {
            <Card key={index} owen={owen} onCardClick={onCardClick} />
        }
    });
    
    
    return (
        <div className="card-grid">
            {owenCards}
        </div>
    )
}

export default CardGrid;