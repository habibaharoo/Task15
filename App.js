import React, { useState } from 'react';
import './App.css';

function App() {
  const [numbers, setNumbers] = useState([0, 0]);
  const [result, setResult] = useState(0);

  const handleChange = (index, value) => {
    const newNumbers = [...numbers];
    newNumbers[index] = parseFloat(value) || 0;
    setNumbers(newNumbers);
  };

  const addNumberField = () => {
    setNumbers([...numbers, 0]);
  };

  const calculateSum = () => {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    setResult(sum);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1> Task 15 Number Adder</h1>
        <div>
          {numbers.map((number, index) => (
            <div key={index}>
              <input
                type="number"
                value={number}
                onChange={(e) => handleChange(index, e.target.value)}
              />
            </div>
          ))}
        </div>
        <button onClick={addNumberField}>Add Number Field</button>
        <button onClick={calculateSum}>Calculate Sum</button>
        <h2>Sum: {result}</h2>
      </header>
    </div>
  );
}

export default App;
