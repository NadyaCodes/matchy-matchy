import { useState } from "react"


export default function Card() {
  const [back, setBack] = useState(true)

  return(
  <div>
    {back === true 
    ? 
    <div className='card card-back' onClick={() => setBack(false)}></div> 
    : 
    <div className='card card-front' onClick={() => setBack(true)}></div>}
  </div>
    
  )
}