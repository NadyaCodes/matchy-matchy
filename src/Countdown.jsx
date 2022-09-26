import { useState, useEffect } from "react"
import End from "./End"

export default function Countdown(props) {
  const {time, setState, num} = props
  const [count, setCount] = useState(time)

  useEffect(() => {
    count > 0 && setTimeout(() => (setCount(count - 1)), 300)
    // count === 0 && setState((prev) => ({...prev, lose: true}))

  }, [count])

  return(
    <div>{count > 0 && count}
    {count === 0 && <End phrase="boo - you lose" num={num} setState={setState}/>}
    </div>
  )
}