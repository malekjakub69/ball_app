import { useState } from "react"
import './App.css'
import { Card } from "./Card"

export type ICard = {
  cardPicture: string
  description: string
  probability: number
}

const cards: ICard[] = [
  {
    cardPicture: "/bang.png",
    description: "Bang!",
    probability: 0.5
  },
  {
    cardPicture: "/catling.png",
    description: "Catling",
    probability: 0.5
  },
  {
    cardPicture: "/indians.png",
    description: "Indians",
    probability: 0.5
  },
  {
    cardPicture: "/mancato.png",
    description: "Mancato",
    probability: 0.5
  }
]


function App() {

  const [randomCard, setRandomCard] = useState<ICard>(cards[Math.round(Math.random()*(cards.length-1))])
  
  const startEffect = () => {
    let cardIndex = 0;
    let intervalId:number;
    let delay = 60; // Počáteční rychlost procházení karet

    const changeCard = () => {
      setRandomCard(cards[cardIndex]);
      cardIndex = (cardIndex + 1) % cards.length;
      delay += delay*0.2; // Postupné zpomalení
      intervalId = setTimeout(changeCard, delay);
    };

    changeCard();

    setTimeout(() => {
      clearTimeout(intervalId); // Zastavení procházení karet // Náhodný výběr karty
    }, 3000); // Doba trvání efektu
  };
  return (
    <>
      <Card card={randomCard} />
      <button className="nextBtn" onClick={startEffect}>Generovat další kartu</button>
    </>
  )
}

export default App
