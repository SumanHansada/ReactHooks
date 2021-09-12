import React from "react";

function Button({ handleClick, children }) {
  console.log("Rendering button - ", children);
  return <button onClick={handleClick}>{children}</button>;
}

// To prevent components from Re-rendering if other components have changed
export default React.memo(Button);
