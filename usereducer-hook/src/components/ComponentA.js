import React, { useContext } from "react";
import { CounterContext } from "../App";

function ComponentA() {
  const counterContext = useContext(CounterContext);
  return (
    <div>
      Component A - {counterContext.countState}
      <button
        type="button"
        onClick={() => counterContext.countDispatch("INCREMENT")}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => counterContext.countDispatch("DECREMENT")}
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() => counterContext.countDispatch("RESET")}
      >
        Reset
      </button>
    </div>
  );
}

export default ComponentA;
