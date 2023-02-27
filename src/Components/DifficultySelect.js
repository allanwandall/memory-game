import React from "react";
import '../Styling/DifficultySelect.css';

const DifficultySelect = ({ onDifficultyChange, difficulty }) => {
    return (
        <div>
            <label className="difficulty-label">
                Difficulty:
                <select value={difficulty} onChange={onDifficultyChange}>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </label>
        </div>
    );
}

export default DifficultySelect;