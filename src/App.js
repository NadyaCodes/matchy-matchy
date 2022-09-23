import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import CardDisplay from './CardDisplay';

function App() {
  const [state, setState] = useState({num: 12})
  return (
    <div>
      <button onClick={() => setState((prev) => ({...prev, num: 12}))}>12</button>
      <button onClick={() => setState((prev) => ({...prev, num: 30}))}>30</button>
      <CardDisplay num={state.num} />
    </div>
    
  )
}

export default App;
