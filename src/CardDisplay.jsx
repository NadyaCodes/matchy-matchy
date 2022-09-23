import Card from "./Card"
import { useState, useEffect } from "react"

export default function CardDisplay(props) {
  const {num} = props

  let cardArray = []

  for (let i = 0; i < num; i++) {
    cardArray.push({back: false, img: 'image'})
  }

  const [cardState, setCardState] = useState(cardArray)
  const [flippedArray, setFlippedArray] = useState([])

  const flip = (index) => {
    const newState = [...cardState]
    newState[index].back = true
    setCardState(newState)
    setFlippedArray((prev) => [...prev, index])
  }

  const cardDisplay = cardState.map((card, index) => {
    return <Card key={index} id={index} back={card.back} img={card.image} flip={() => flip(index)} />
  })


useEffect(() => {
  if (flippedArray.length > 1) {
    setTimeout(() => {
      setCardState(cardArray)
      setFlippedArray([])
    }, 500)
  }

}, [flippedArray])


  let displayClass = `cardDisplay-${num}`

  return(
    <div className={displayClass}>{cardDisplay}</div>
  )
}