import './App.css';
import { useState } from 'react';

function App() {

  const [counter, setCounter] = useState(0);

  const hanldeClick = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <header className="App-header">

        <h1>Contador: {counter}</h1>

        <button type='button' onClick={hanldeClick}>Add number</button>

      </header>
    </div>
  );
}

export default App;

