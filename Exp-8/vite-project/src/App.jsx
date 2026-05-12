import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div className="app-container">
      <div className="counter-card">
        <h1>React Counter Application</h1>
        <div className="counter-display">{count}</div>
        <div className="buttons-container">
          <button className="btn btn-primary" onClick={increment}>
            Increment (+)
          </button>
          <button className="btn btn-primary" onClick={decrement}>
            Decrement (-)
          </button>
        </div>
        <button className="btn btn-reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;