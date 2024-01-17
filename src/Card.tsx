import { FC, useState } from "react";
import { ICard } from "./App";
import './Card.css';

interface IProps {
    card: ICard
}


export const Card: FC<IProps> = ({ card }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
      setIsFlipped(!isFlipped);
    };
    return <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={handleClick}>
      <div className="front">
        <img src={card.cardPicture} alt="front" />
      </div>
      <div className="back">
        <p>{card.probability}</p>
      </div>
    </div> 
}  


