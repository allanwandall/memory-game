import { React, useEffect, useState } from "react";
import Card from './Card';
import '../Styling/CardGrid.css';


const CardGrid = ({ owens, onCardClick, difficulty }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < owens.length) {
            const timerId = setTimeout(() => {
                setCurrentIndex(currentIndex + 1);
            }, 150);
            return () => clearTimeout(timerId);
        }
    }, [currentIndex, owens])

    useEffect(() => {

    }, []);
    
    return (
        <div className="card-grid">
            {owens.slice(0, currentIndex).map((owen, index) => (
                <Card key={index} owen={owen} onCardClick={onCardClick} difficulty={difficulty}/>
            ))}
        </div>
    )
}

export default CardGrid;