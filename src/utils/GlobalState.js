import React, { createContext, useReducer, useContext } from "react";

// import {

// } from "./actions";

export const StoreContext = createContext();
const initialState = {
  
};

const reducer = (state, action) => {

  switch (action.type) {
    case "":
      return {
        ...state,
      }

    case "":
      return {
        ...state,
      }

    default:
      return state;
  }
};

const StoreProvider = ({ ...props }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = [state, dispatch];
  return <StoreContext.Provider value={value} {...props} />;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
