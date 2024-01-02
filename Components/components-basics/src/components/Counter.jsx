import { useState } from "react";

export default function Counter(props) {
  const [count, setCount] = useState(0);

  const onIncrementClick = () => {
    setCount(oldValue => oldValue + 1);
  }

  const onClearClick = () => {
    setCount(0);
  }

  let warning = null;

  // if (count < 0) {
  //   warning = <p>Invalid count!</p>;
  // }

  let message = null;

  switch (count) {
    case 1:
      message = 'First blood'
      break;

    case 2:
      message = 'Double kill'
      break;

    case 3:
      message = 'Triple kill'
      break;

    case 4:
      message = 'Multi kill'
      break;

    case 5:
      message = 'Unstoppable'
      break;

    default:
      message = 'Monster kill'
      break;
  }

  return (
    <div>
      <h3>Counter</h3>

      {count < 0 ? <p>Invalid count!</p> : null}

      <h4>{message}</h4>

      {count == 0 && <p>Please start incrementing</p>}

      <p>Count: {count}</p>
      <button disabled={count < 0} onClick={() => setCount(count - 1)}>-</button>
      <button onClick={onClearClick}>clear</button>
      <button onClick={onIncrementClick}>+</button>
    </div>
  );
}