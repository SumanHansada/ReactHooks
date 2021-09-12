import React, { useContext } from "react";
import { LoginContext, UserContext } from "../App";
import ComponentF from "./ComponentF";

function ComponentE() {
  const user = useContext(UserContext);
  const login = useContext(LoginContext);
  return (
    <div>
      Hello From Component E!
      <div>Using useContext -</div>
      <div>
        User - {user}, Logged in from - {login}
      </div>
      <ComponentF />
    </div>
  );
}

export default ComponentE;
