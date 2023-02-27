import { React, useRef, useEffect, useState } from "react";
import '../Styling/Card.css';
import owen_smirk from "../Assets/owen_smirk.png";

const Card = ({ owen, onCardClick, difficulty }) => {
    const videoRef = useRef(null);
    const [cardStyle, setCardStyle] = useState({dispay: "none"});

    useEffect(() => {
        cardContent();
    }, [difficulty]);

    const handleMouseOver = () => {
        if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.play();
        }
    };

    const handleMouseOut = () => {
        if (videoRef.current) {
            videoRef.current.pause();
        }
    };

    const cardContent = () => {
        const posterUrl = owen.poster;
        console.log(`difficulty set: ${difficulty}`);
        switch (difficulty){
            case "easy":
                setCardStyle({
                    display: "none"
                });
                break;
            case "medium":
                setCardStyle({
                    display: "block",
                    backgroundImage: `url(${posterUrl})`
                });
                break;
            case "hard":
                setCardStyle({
                    display: "block",
                    backgroundImage: `url(${owen_smirk})`
                })
        }
    }

    return (
        <div className="video-container"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => { onCardClick(owen.timestamp) }}>
            <video
                ref={videoRef}
                src={owen.video["480p"]}
                
            />
            <div className="video-div" style={cardStyle}/>
        </div>
    )
}

export default Card;