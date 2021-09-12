import React from "react";

function Count({ text, count }) {
  console.log(`Rendering ${text}`);
  return (
    <div>
      {text} - {count}
    </div>
  );
}

// To prevent components from Re-rendering if other components have changed
export default React.memo(Count);
