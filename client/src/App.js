import './App.css';
import { useState } from "react"

function App() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState([]);
  const submitForm = async (event) => {
    event.preventDefault();
    try {
      const rawResponse = await fetch('http://localhost:3333/api', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          firstNumber,
          secondNumber
        })
      })
      const response = await rawResponse.json();
      if (response.message !== 'success!') {
        throw new Error('Error in the response')
      }
      setResult(response.data)
    } catch (error) {
      throw new Error(error)
    }

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
        {firstNumber === 0 && secondNumber === 0 ? <p>Please enter starting and ending numbers</p> : <p>{result.join(', ')}</p>}
      </header>
    </div>
  );
}

export default App;
