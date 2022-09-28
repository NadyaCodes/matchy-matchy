import Card from "./Card"
import End from "./End"
import { useState, useEffect } from "react"
import { makeImageArray } from "./helpers"
import Countdown from "./Countdown"

export default function CardDisplay(props) {
  const {num, end, setState} = props
  const imageArray = makeImageArray(num)
  let cardArray = []



  for (let i = 0; i < num; i++) {
    cardArray.push({display: 'back', img: imageArray[i]})
  }


  const [cardState, setCardState] = useState(cardArray)
  const [flippedArray, setFlippedArray] = useState([])
  let [deadCards, setDeadCards] = useState(0)

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
      setDeadCards(deadCards += 2)
      if (deadCards >= num) {
        setState((prev) => ({...prev, end: true}))
      }
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



  let displayClass = ` cardDisplay cardDisplay-${num}`

  const reset = () => {
    setState((prev) => ({...prev, num: 0, end: false}))
  }

  return(
    <div>
      <div className='time-banner'>Time Left: <Countdown time={200} setState={setState} num={num}/></div>
      {end === false ? <div className={displayClass}>{cardDisplay}<div><button className='back-button' onClick={() => reset()}>Go Back</button></div></div> : <End num={num} setState={setState} phrase="Tadaa"/>}
    </div>
  )
}