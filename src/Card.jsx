import { useState } from "react"


export default function Card(props) {
  // const [back, setBack] = useState(true)

  const {id, back, flip, img} = props
  return(
  // <div>
  //   {props.back === true 
  //   ? 
  //   <div className='card card-back' onClick={() => setBack(false)}></div> 
  //   : 
  //   <div className='card card-front' onClick={() => setBack(true)}></div>}

  //   {/* <div className='card'></div> */}
  // </div>

<div>
{back === false 
? 
<div className='card card-back' onClick={flip}></div> 
: 
<div className='card card-front' onClick={flip}></div>}

{/* <div className='card'></div> */}
</div>
    
  )
}