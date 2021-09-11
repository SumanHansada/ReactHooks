import React, { useEffect, useState } from "react";

function HookCounterOne() {
  const [count, setCount] = useState(0);

  // useEffect lets you perform side-effects in functional components
  // It runs after the first render and also after every update
  // It is a close replacement of componentDidMount(), componentDidUpdate() and componentWillUnmount
  useEffect(() => {
    console.log("Inside useEffect", count);
    document.title = `Clicked ${count} times`;
  });

  return (
    <div>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Click {count} times
      </button>
    </div>
  );
}

export default HookCounterOne;
