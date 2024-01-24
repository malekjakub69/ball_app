import { FC } from "react";
import { ICard } from "./App";
import './Card.css';

interface IProps {
    card: ICard
    isFlipped: boolean
    setIsFlipped: (isFlipped: boolean) => void
}


export const Card: FC<IProps> = ({ card, isFlipped,setIsFlipped }) => {

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
                        <h1>{card.name}</h1>
                        <span>{card.description}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}  


