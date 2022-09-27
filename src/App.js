import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import CardDisplay from './CardDisplay';

function App() {
  const [state, setState] = useState({num: 0, end: false})

  const selectNum = (number) => {
    setState((prev) => ({...prev, num: number}))
  }


  return (
    <div>
      {state.num > 1 
        ? 
        <CardDisplay num={state.num} end={state.end} setState={setState}/> 
        :
        <div className='number-select'>
          <h1> How Many Cards? </h1>
          <div>
            <button className='num-button' title='Easy' onClick={() => selectNum(12)}>12</button>
            {/* <div><button className='num-button' onClick={() => selectNum(12)}>12</button><section className='type-text'>Easy</section></div> */}
            <button className='num-button' onClick={() => selectNum(24)}>24</button>
            <button className='num-button' onClick={() => selectNum(30)}>30</button>
            <button className='num-button' onClick={() => selectNum(48)}>48</button>
          </div>
        </div> 
      }
    </div>
    
  )
}

export default App;
