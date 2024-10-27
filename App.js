import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [largest, setLargest] = useState('');

  const findLargest = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      setLargest('Please enter valid numbers');
    } else {
      const max = Math.max(n1, n2, n3);
      setLargest(`The largest number is ${max}`);
    }
  };

  return (
    <div className="App">
      <h1>Find the Largest of Three Numbers</h1>
      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Enter second number"
      />
      <input
        type="text"
        value={num3}
        onChange={(e) => setNum3(e.target.value)}
        placeholder="Enter third number"
      />
      <button onClick={findLargest}>Find Largest</button>
      <p>{largest}</p>
    </div>
  );
}

export default App;
