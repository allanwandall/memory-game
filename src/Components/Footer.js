import React from "react";
import '../Styling/Footer.css';
import githublogo from '../Assets/GitHub-icon.png';

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="link-container">
                <a href="https://github.com/allanwandall/memory-game">2023 allanwandall</a>
                <img src={githublogo} alt="GitHub Icon"/>
            </div>
        </div>
    )
}

export default Footer;