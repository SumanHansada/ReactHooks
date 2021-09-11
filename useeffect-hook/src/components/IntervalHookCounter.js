import React, { useEffect, useState } from "react";

function IntervalHookCounter() {
  const [count, setCount] = useState(0);

  // Identifying correct dependency in useEffect()
  useEffect(() => {
    const timer = setInterval(tick, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);

  const tick = () => {
    setCount(count + 1);
    // Other way
    // setCount((prevCount) => prevCount + 1);
  };

  return <div>{count}</div>;
}

export default IntervalHookCounter;
