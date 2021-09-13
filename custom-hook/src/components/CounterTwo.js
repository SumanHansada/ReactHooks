import React from "react";
import useCounter from "../hooks/useCounter";

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(10, 10);

  return (
    <div>
      <h2>Count - {count}</h2>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
      <button type="button" onClick={reset}>
        Reset
      </button>
    </div>
  );
}

export default CounterTwo;
