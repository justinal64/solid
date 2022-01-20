import { useReducer } from "react";
import { reducer } from "../store/reducer";

const initialState = {
  isLoading: true,
};

function useReducerWrapper() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
}

export { useReducerWrapper };
