
export default function Card(props) {

  const {display, flip, img } = props

    switch(display) {
      case 'back':
        return <div className='card card-back' onClick={flip}></div> 
      case 'front':
        return <div className='card card-front' onClick={flip}>{img}</div>
      case 'dead':
        return <div className='card card-dead'></div> 
  
    }

}