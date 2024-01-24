import { useMemo, useState } from "react"
import './App.css'
import { Card } from "./Card"

export type ICard = {
  cardPicture: string
  description: string
  name: string
  probability: number
}

const cards: ICard[] = [
  {
    cardPicture: "/bang.png",
    description: "Schovej si kartu bang. Oběť karty dostane pivo, které musí vyexovat na baru.",
    name: "Bang",
    probability: 0.17
  },
  {
    cardPicture: "/kulomet.png",
    description: "Dostáváš dva panáky dle výběru barmana.",
    name: "Kulomet",
    probability: 0.07
  },
  {
    cardPicture: "/pivo.png",
    description: "!!! Vyhráváš pivo !!!",
    name: "Pivo",
    probability: 0.34
  },
  {
    cardPicture: "/barel.png",
    description: "!!! Vyhráváš 2x pivo !!!",
    name: "Barel",
    probability: 0.07
  },
  {
    cardPicture: "/opetpalba.png",
    description: "Obrací efekt karty bang na útočníka. (P.S. vytáhni až na baru)",
    name: "Opětovaná palba",
    probability: 0.17
  },
  {
    cardPicture: "/cutora.png",
    description: "!!! Vyhráváš Premium panák !!!",
    name: "Čutora",
    probability: 0.07
  },
  {
    cardPicture: "/panika.png",
    description: "Hráč v řadě za tebou dostává panáka dle výběru barmana.",
    name: "Panika",
    probability: 0.11
  }
]


function App() {

  const [randomCard, setRandomCard] = useState<ICard>(cards[Math.round(Math.random()*(cards.length-1))])
  const [isFlipped, setIsFlipped] = useState(false);
  
  const probabilityCards = useMemo(() => {
    const toReturn:ICard[] = [];
    for (let i = 0; i < cards.length; i++) {
      for (let j = 0; j < cards[i].probability*1000; j++) {
        toReturn.push(cards[i]);
      }
    }
    toReturn.sort(() => (Math.random() > .5) ? 1 : -1)
    console.log(toReturn.length)
    return toReturn;
  }, [])

  const startEffect = (callback: () => void) => {
    setIsFlipped(false);
    let intervalId:number;
    let delay = 40; // Počáteční rychlost procházení karet

    const changeCard = () => {
      setRandomCard(cards[Math.round(Math.random()*(cards.length-1))]);
      delay += delay*0.15; // Postupné zpomalení
      intervalId = setTimeout(changeCard, delay);
    };

    changeCard();

    return setTimeout(() => {
      clearTimeout(intervalId); // Zastavení procházení karet // Náhodný výběr karty
      callback();
    }, 4000); // Doba trvání efektu
  };

  const generateCard = () => {
    startEffect(() => { // předat setRandomCard jako callback funkci
      setRandomCard(probabilityCards[Math.round(Math.random()*(probabilityCards.length-1))]);
    });
  }

  const showPercentile = () => {
    const n = 1000000
    const toReturn = {
      bang: 0,
      bang_perc: n * (cards.find(card => card.name === "Bang")?.probability || 0 ), 
      kulomet: 0,
      kulomet_perc: n * (cards.find(card => card.name === "Kulomet")?.probability || 0 ), 
      pivo: 0,
      pivo_perc: n * (cards.find(card => card.name === "Pivo")?.probability || 0 ),
      barel: 0,
      barel_perc: n * (cards.find(card => card.name === "Barel")?.probability || 0 ),
      opetpalba: 0,
      opetpalba_perc: n * (cards.find(card => card.name === "Opětovaná palba")?.probability || 0 ),
      cutora: 0,
      cutora_perc: n * (cards.find(card => card.name === "Čutora")?.probability || 0 ),
      panika: 0,
      panika_perc: n * (cards.find(card => card.name === "Panika")?.probability || 0 )
    }
    for (let i = 0; i < n; i++) {
      const randomCard = probabilityCards[Math.round(Math.random()*(probabilityCards.length-1))];
      switch (randomCard.name) {
        case "Bang":
          toReturn.bang++;
          break;
        case "Kulomet":
          toReturn.kulomet++;
          break;
        case "Pivo":
          toReturn.pivo++;
          break;
        case "Barel":
          toReturn.barel++;
          break;
        case "Opětovaná palba":
          toReturn.opetpalba++;
          break;
        case "Čutora":
          toReturn.cutora++;
          break;
        case "Panika":
          toReturn.panika++;
          break;
      }
    }
    console.log(toReturn);

  } 

  return (
    <>
      <div className="space"></div>
      <Card isFlipped={isFlipped} setIsFlipped={setIsFlipped} card={randomCard} />
      <button className="nextBtn" onClick={generateCard}>Generovat další kartu</button>
      <button className="percentile" onClick={showPercentile}>Show percentile</button>
    </>
  )
}

export default App
