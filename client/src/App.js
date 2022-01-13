import './App.css';
import { useState } from "react"
import axios from "axios"

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState([]);
  const submitForm = (event) => {
    event.preventDefault();
    axios.post('http://localhost:3333/api', {
      firstNumber,
      secondNumber
    }).then(response => setResult(response.data.data))
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Fibonacci
        </h1>
        <form className='fibonacci-numbers' onSubmit={submitForm}>
          <label htmlFor="first-number">Starting Number<br />
            <input type="number" name="first-number" defaultValue={firstNumber} onChange={(event) => { setFirstNumber(event.target.value) }} />
          </label>
          <label htmlFor="second-number">Ending Number<br />
            <input type="number" name="second-number" defaultValue={secondNumber} onChange={(event) => {setSecondNumber(event.target.value)}}  />
          </label>
          <button type="submit">Submit</button>
        </form>
        {firstNumber === 0 && secondNumber === 0 ? <p>Please enter starting and ending numbers</p> : <p>{result.map((number, index, row) => index + 1 === row.length ? <span>{number}</span> : <span>{number},{" "}</span>)}</p>}
      </header>
    </div>
  );
}

export default App;
