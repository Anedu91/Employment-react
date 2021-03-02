import * as React from "react";

const initialState = {
  loading: false,
  error: null,
  data: undefined,
};

function reducer(state, action) {
  switch (action.type) {
    case "REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "ERROR":
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}

export default function useAsync() {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  async function run(fn) {
    dispatch({ type: "REQUEST" });
    try {
      const response = await fn();
      dispatch({ type: "SUCCESS", payload: response });
    } catch (error) {
      dispatch({ type: "ERROR", payload: error });
    }
  }

  return { ...state, run };
}
