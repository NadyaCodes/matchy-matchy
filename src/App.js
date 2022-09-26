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
        <div>
          <button onClick={() => selectNum(12)}>12</button>
          <button onClick={() => selectNum(24)}>24</button>
          <button onClick={() => selectNum(30)}>30</button>
          <button onClick={() => selectNum(48)}>48</button>
          </div> 
      }
    </div>
    
  )
}

export default App;
