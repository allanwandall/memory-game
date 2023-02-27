import React from "react";
import '../Styling/Slider.css';

const Slider = ({ onSliderChange, onSliderClick, amount }) => {
    return (
        <div className="slider-container">
            <label className="slider-label">Cards: {amount}</label>
            <input type="range" min="5" max="64" value={amount} id="amount-range" onChange={onSliderChange}/>
            <button onClick={onSliderClick}>Set</button>
        </div>
    );
};

export default Slider;