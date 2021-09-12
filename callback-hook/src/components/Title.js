import React from "react";

function Title() {
  console.log("Rendering Title");
  return <h2>useCallback Hook</h2>;
}

// To prevent components from Re-rendering if other components have changed
export default React.memo(Title);
