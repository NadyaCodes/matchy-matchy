import Card from "./Card"

export default function CardDisplay(props) {
  const {num} = props
  let allCards = []

  for (let i = 0; i < num; i++) {
    allCards.push(<Card key={i}/>)
  }

  let displayClass = `cardDisplay-${num}`

  return(
    <div className={displayClass}>{allCards}</div>
  )
}