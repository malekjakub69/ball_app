import { ICard } from "./App";

export const showPercentile = (cards: ICard[], probabilityCards: ICard[]) => {
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