import React, { useEffect, useRef } from "react";

function FocusInput() {
  // We use useRef() to access DOM Nodes in React Element
  const inputRef = useRef(null);

  useEffect(() => {
    // Focus the input element
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default FocusInput;
