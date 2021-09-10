import React, { useState } from "react";

// Step 1: Create a HookCounter Component (Functional)
function HookCounter() {
  // Step 2: Create a state property and set the count value to 0 (zero)
  // Step 3: A method to set the increment count value
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCounter;

// Rules of Hooks
// * Only call Hooks at the top level
// * Don't call Hooks inside loops, conditions or nested statements.
// * Only call Hooks from React Functions
// * Only call Hooks from React Functional Components and not just any other javascript functions
