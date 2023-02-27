import { React, useRef, useEffect, useState } from "react";
import '../Styling/Card.css';

const Card = ({ owen, onCardClick }) => {
    const videoRef = useRef(null);
    const [showComponent, setShowComponent] = useState(false);
    
    useEffect(() => {
        setShowComponent(true);
    }, []);

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

    return (
        <video
            className={`${showComponent ? 'fade-in' : 'fade-out'}`}
            ref={videoRef}
            src={owen.video["480p"]}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => { onCardClick(owen.timestamp) }}
        />
    )
}

export default Card;