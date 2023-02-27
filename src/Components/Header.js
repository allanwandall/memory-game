import React from "react";
import OwenWow from '../Assets/Owen_wow.png';
import '../Styling/Header.css';

const Header = ({currentScore, bestScore}) => {
    return (
        <header>
            <img src={OwenWow} alt="Owen Wow" />
            <h1>Memory Game</h1>
            <h3>Current Score: {currentScore}</h3>
            <h3>Best Score: {bestScore}</h3>
        </header>
        
    )
}

export default Header;