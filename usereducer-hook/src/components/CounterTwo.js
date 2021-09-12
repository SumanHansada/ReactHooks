import React, { useReducer } from "react";

// Maintaining multiple variables in single state object
const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};

// We can maintain both state and action as an object
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "DECREMENT":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "INCREMENT2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "DECREMENT2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

function CounterTwo() {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <div>First Counter - {count.firstCounter}</div>
      <div>Second Counter - {count.secondCounter}</div>
      <button
        type="button"
        onClick={() => dispatch({ type: "INCREMENT", value: 1 })}
      >
        Increment
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "DECREMENT", value: 1 })}
      >
        Decrement
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "INCREMENT", value: 5 })}
      >
        Increment 5
      </button>
      <button
        type="button"
        onClick={() => dispatch({ type: "DECREMENT", value: 5 })}
      >
        Decrement 5
      </button>
      <div>
        <button
          type="button"
          onClick={() => dispatch({ type: "INCREMENT2", value: 1 })}
        >
          Increment
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: "DECREMENT2", value: 1 })}
        >
          Decrement
        </button>
      </div>
      <button type="button" onClick={() => dispatch({ type: "RESET" })}>
        RESET
      </button>
    </div>
  );
}

export default CounterTwo;
