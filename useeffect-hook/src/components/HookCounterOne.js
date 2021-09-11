import React, { useEffect, useState } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // useEffect lets you perform side-effects in functional components
  // It runs after the first render and also after every update
  // It is a close replacement of componentDidMount(), componentDidUpdate() and componentWillUnmount
  // In order to conditionally run useEffect(), specify the second parameter.
  // It is an array of values that useEffect depends on.
  // It is also a good optimization technique to avoid useEffect running everytime any state changes
  useEffect(() => {
    console.log("Inside useEffect", count);
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        onChange={(event) => setName(event.target.value)}
        value={name}
      />
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} times
      </button>
    </div>
  );
}

export default HookCounterOne;
