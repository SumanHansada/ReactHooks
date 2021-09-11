import React, { useEffect, useState } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (event) => {
    console.log("Mouse Event");
    setX(event.clientX);
    setY(event.clientY);
  };

  // componentDidMount() can be mimicked by passing empty array in useEffect Hook
  useEffect(() => {
    console.log("useEffect is called");
    window.addEventListener("mousemove", logMousePosition);
  }, []);

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
