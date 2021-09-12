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

function CounterOne() {
  const [count, dispatch] = useReducer(reducer, initialState);

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
    </div>
  );
}

export default CounterOne;

// useReducer() Summary
// * useReducer is a hook that is used for state management in React
// * useReducer is realted to reducer function
// * useReducer(reducer, initialState) function accepts two parameters, reducer function and initial state
//   and returns state and dispatch function
// * reducer(currentState, action) function also accepts two parameters, current state and action
//   and returns new state
