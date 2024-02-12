import styles from './App.module.css';
import { useState, useEffect } from 'react';
import Starwars from './Starwars';

function App() {
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mount component");
  }, []);

  useEffect(() => {
    console.log(`Update component - ${numbers.length}`);
  }, [numbers]);

  useEffect(() => {
    setTimeout(() => setCount(s => s + 1), 1000)
  }, [count])

  const onClick = () => {
    setNumbers(oldState => oldState.slice(0, oldState.length - 1));
  }

  if (!numbers.length) {
    return null;
  }

  return (
    <div className={styles.h3}>

      <Starwars />
      
      <h3>Count: {count}</h3>
      <ul>
        {numbers.map((number, index) => 
          <li
            key={index}
            className={styles.listItem}
          >
            {number * 2}
          </li>)}
      </ul>

      <button onClick={onClick}>Remove</button>
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  );
}
 
export default App
