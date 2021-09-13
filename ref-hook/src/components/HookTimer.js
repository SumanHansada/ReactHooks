import React, { useEffect, useRef, useState } from "react";

function HookTimer() {
  const [timer, setTimer] = useState(0);

  // useRef() can be also used to create a generic container
  // which can be used to hold mutable value similar to instance properties in class
  // It doesn't cause re-renders when the data it store changes
  // It also remembers the stored data, where other state variable cause re-renders
  const timerRef = useRef();

  useEffect(() => {
    timerRef.current = setInterval(
      () => setTimer((prevTimer) => prevTimer + 1),
      1000
    );

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <div>
      Hook Timer - {timer}
      <button onClick={() => clearInterval(timerRef.current)}>
        Clear Hook Timer
      </button>
    </div>
  );
}

export default HookTimer;

// Other remaining Hook
// useImperativeHandle
// useLayoutEffect
// useDebugValue
