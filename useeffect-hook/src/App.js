import "./App.css";
import ClassCounterOne from "./components/ClassCounterOne";
import ClassMouse from "./components/ClassMouse";
import HookCounterOne from "./components/HookCounterOne";
import HookMouse from "./components/HookMouse";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import MouseContainer from "./components/MouseContainer";

function App() {
  return (
    <div className="App">
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}
      {/* <ClassMouse /> */}
      {/* <HookMouse /> */}
      {/* <MouseContainer /> */}
      <IntervalClassCounter />
      <IntervalHookCounter />
    </div>
  );
}

export default App;
