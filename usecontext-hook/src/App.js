import "./App.css";
import React from "react";
import ComponentD from "./components/ComponentD";

export const UserContext = React.createContext();
export const LoginContext = React.createContext();

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={"Suman"}>
        <LoginContext.Provider value={"Google"}>
          <ComponentD />
        </LoginContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
