import { Card } from "./Card"

export type ICard = {
  cardPicture: string
  description: string
  probability: number
}

const cards: ICard[] = [
  {
    cardPicture: "https://picsum.photos/200/300",
    description: "Card 1",
    probability: 0.5
  }
]


function App() {

  return (
    <>
      <Card card={cards[0]} />
    </>
  )
}

export default App
