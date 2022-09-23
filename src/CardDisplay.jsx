import Card from "./Card"
import { useState, useEffect } from "react"

export default function CardDisplay(props) {
  const {num} = props
  const imageArray = ['cat', 'dog', 'smile', 'banana', 'frown', 'banana', 'cat', 'dog', 'smile', 'banana', 'frown', 'banana']

  let cardArray = []

  for (let i = 0; i < num; i++) {
    cardArray.push({display: 'back', img: imageArray[i]})
  }

  const [cardState, setCardState] = useState(cardArray)
  const [flippedArray, setFlippedArray] = useState([])

  const flip = (index) => {
    const newState = [...cardState]
    newState[index].display = 'front'
    setCardState(newState)
    setFlippedArray((prev) => [...prev, index])
  }

  const cardDisplay = cardState.map((card, index) => {
    return <Card key={index} id={index} display={card.display} img={card.img} flip={() => flip(index)} />
  })


useEffect(() => {
  if (flippedArray.length > 1) {
    setTimeout(() => {
      setCardState(cardArray)
      setFlippedArray([])
    }, 500)
  }

}, [flippedArray, cardArray])


  let displayClass = `cardDisplay-${num}`

  return(
    <div className={displayClass}>{cardDisplay}</div>
  )
}