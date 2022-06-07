
import './App.css';
import {useDispatch, useSelector} from "react-redux"
import { add, divide, multiply, substract } from './Store/action';
import { useState } from 'react';

function App() {
  const dispatch = useDispatch()
  const count = useSelector((state) => state.count)
  const [value,setValue] = useState("")
  return (
    <div className="App">
      <h1>Counter:{count}</h1>
      <br>
      </br>
      <div>
      <input  onChange={(e) => setValue(e.target.value)}/>
      <br>
      </br><br>
      </br><br>
      </br>
      
        <button onClick={() => dispatch(add(1))}>Increase By 1</button>
        <button onClick={() => dispatch(substract(1))}>Decrease By 1</button>
        <button onClick={() => dispatch(add(value))}>Increase By {value}</button>
        <button onClick={() => dispatch(substract(value))}>Decrease By {value}</button>
        <button onClick={() => dispatch(multiply(value))}>Multiply By {value}</button>
        <button onClick={() => dispatch(divide(value))}>Divide By {value}</button>
      </div>
    </div>
  );
}

export default App;
