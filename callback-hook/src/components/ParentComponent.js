import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

function ParentComponent() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  // These functions are created everytime if ParentComponent is rendered
  // So other button is rendered as handleClick props reference has changed
  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  // These functions are created everytime if ParentComponent is rendered
  // So other button is rendered as handleClick props reference has changed
  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button handleClick={incrementAge}>Increment Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={incrementSalary}>Increment Salary</Button>
    </div>
  );
}

export default ParentComponent;

// useCallback Hook
// What ?
// useCallback is a hook that will return a memoized version of the callback
// function that only changes if one of the dependencies has changed.
// Why ?
// It is useful when passing callbacks to optimized child components that rely
// on reference equality to prevent unnecessary renders.
// It is used to optimize performance.
