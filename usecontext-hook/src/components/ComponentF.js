import React from "react";
import { LoginContext, UserContext } from "../App";

function ComponentF() {
  return (
    <div>
      Hello From Component F!
      <UserContext.Consumer>
        {(user) => (
          <LoginContext.Consumer>
            {(login) => (
              <div>
                User - {user}, Logged in from - {login}
              </div>
            )}
          </LoginContext.Consumer>
        )}
      </UserContext.Consumer>
    </div>
  );
}

export default ComponentF;
