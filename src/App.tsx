import { Navbar } from "./Navbar";
import { useEffect, useReducer } from "react";
import {logIn, logOut, initial, state} from "./Types"
import {SignIn}  from "./SignIn"

const reducer = (state: { data: state  }, action: logIn | logOut) => {
  switch (action.type) {
    case "sign":
      localStorage.setItem("user", JSON.stringify(action.data));
      return { ...state, data: action.data };
    case "out":
      localStorage.clear();
      return initial;
  }
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    localStorage.getItem("user")?.length && dispatch({ type: "sign", data: JSON.parse(localStorage.getItem("user")!) });
  }, []);
  return (
    <>
      {state.data.user.photoURL !== "" ? (
        <Navbar state={state} dispatch={dispatch}/>
      ) : (
        <SignIn dispatch={dispatch} />
      )}
    </>
  );
};
