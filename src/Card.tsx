import { FC, useState } from "react";
import { ICard } from "./App";
import './Card.css';

interface IProps {
    card: ICard
}


export const Card: FC<IProps> = ({ card }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
      setIsFlipped(!isFlipped);
    };

    return (
    <div className="container">
        <div
            className={`flip-card ${
                isFlipped ? "flipped" : ""
            }`}
        >
            <div className="flip-card-inner">
                <div onClick={handleFlip} className="flip-card-front">
                    <div className="card-content">
                        <img src={card.cardPicture} alt={card.description} />
                    </div>
                </div>
                <div onClick={handleFlip} className="flip-card-back">
                    <div className="card-content">
                        {card.description}
                    </div>
                </div>
            </div>
        </div>
    </div>);
}  


