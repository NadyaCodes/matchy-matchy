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
    setFlippedArray((prev) => [...prev, newState[index]])

    if (flippedArray.length > 0 && cardState[index].img === flippedArray[0].img) {
      setTimeout(() => {
      const deadState = [...cardState]
      deadState[index].display = 'dead'
      const deadIndex = cardState.findIndex(element => { return element.display === 'front'})
      deadState[deadIndex].display = 'dead'

        setCardState(deadState)
        setFlippedArray([])
      }, 500)
    }


    else if (flippedArray.length > 0) {
      setTimeout(() => {
        const revertState = [...cardState]
        revertState[index].display = 'back'
        const lastIndex = cardState.findIndex(element => { return element.display === 'front'})
        revertState[lastIndex].display = 'back'
        setCardState(revertState)
        setFlippedArray([])
      }, 500)
    }
  }

  const cardDisplay = cardState.map((card, index) => {
    return <Card key={index} id={index} display={card.display} img={card.img} flip={() => flip(index)} />
  })



  let displayClass = `cardDisplay-${num}`

  return(
    <div className={displayClass}>{cardDisplay}</div>
  )
}