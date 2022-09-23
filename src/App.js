import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import CardDisplay from './CardDisplay';

function App() {
  const [state, setState] = useState({num: 0, end: false})


  return (
    <div>
      {state.num > 1 
        ? 
        <CardDisplay num={state.num} end={state.end} setState={setState}/> 
        :
        <div><button onClick={() => setState((prev) => ({...prev, num: 12}))}>12</button>
        <button onClick={() => setState((prev) => ({...prev, num: 30}))}>30</button></div> 
      }
    </div>
    
  )
}

export default App;
