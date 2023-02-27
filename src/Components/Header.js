import React from "react";
import OwenWow from '../Assets/Owen_wow.png';
import '../Styling/Header.css';
import DifficultySelect from "./DifficultySelect";
import Slider from "./Slider";

const Header = ({currentScore, bestScore, onDifficultyChange, difficulty, onSliderChange, amount, onSliderClick}) => {
    return (
        <header>
            <div className="hero">
                <img src={OwenWow} alt="Owen Wow" />
                <h1>Wow!</h1>
            </div>
            <h1>MEMORY GAME</h1>
            <div className="game-settings">
                <DifficultySelect
                    onDifficultyChange={onDifficultyChange}
                    difficulty={difficulty}/>
                <Slider 
                    onSliderChange={onSliderChange}
                    amount={amount}
                    onSliderClick={onSliderClick}/>
            </div>
            <div className="scores">
                <h3>Current Score: {currentScore}</h3>
                <h3>Best Score: {bestScore}</h3>
            </div>
        </header>
        
    )
}

export default Header;