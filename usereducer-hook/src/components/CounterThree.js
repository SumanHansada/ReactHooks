import React, { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
  switch (action) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

function CounterThree() {
  // When dealing with multiple variables having same state transition,
  // We can use multiple useReducers making use of same reducer function.

  const [count, dispatch] = useReducer(reducer, initialState);
  const [countTwo, dispatchTwo] = useReducer(reducer, initialState);

  return (
    <div>
      <div>Count - {count}</div>
      <button type="button" onClick={() => dispatch("INCREMENT")}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch("DECREMENT")}>
        Decrement
      </button>
      <button type="button" onClick={() => dispatch("RESET")}>
        Reset
      </button>
      <div>
        <div>CountTwo - {countTwo}</div>
        <button type="button" onClick={() => dispatchTwo("INCREMENT")}>
          Increment
        </button>
        <button type="button" onClick={() => dispatchTwo("DECREMENT")}>
          Decrement
        </button>
        <button type="button" onClick={() => dispatchTwo("RESET")}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default CounterThree;
