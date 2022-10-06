import { useState } from "react"


export default function Card(props) {

  const {id, display, flip, img } = props

    switch(display) {
      case 'back':
        return <div className='card card-back' onClick={flip}></div> 
      case 'front':
        return <div className='card card-front' onClick={flip}>{img}</div>
      case 'dead':
        return <div className='card card-dead'></div> 
  
    }

}