import axios from "axios";
import React, { useEffect, useReducer } from "react";

const initialState = {
  loading: true,
  post: {},
  error: "",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return {
        loading: false,
        post: action.payload,
        error: "",
      };

    case "FETCH_ERROR":
      return {
        loading: false,
        post: {},
        error: "Something went wrong!",
      };

    default:
      return state;
  }
};

function DataFetchingTwo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => {
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR" });
      });
  }, []);

  return (
    <div>
      {state.loading ? "Loading" : state.post.title}{" "}
      {state.error ? state.error : null}
    </div>
  );
}

export default DataFetchingTwo;

// Scenario                     useState                    vs          useReducer
// Type of state                Number, String, Boolean                 Object or Array
// Number of state transition   One or Two                              Too many
// Related state transition?    No                                      Yes
// Business Logic               No business logic                       Complex business logic
// Logic vs Global              Local                                   Global
