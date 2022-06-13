import { sign } from "crypto";
import { useEffect, useReducer } from "react";
import {logIn, logOut} from "./Types"
import {SignIn}  from "./SignIn"
const initial = { data: { user: { displayName: "", email: "", photoURL: "" } } };

const reducer = (state: { data: {} }, action: logIn | logOut) => {
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
        <div>
          <h1>welcome {state.data.user.displayName}</h1>
          <h1>your email: {state.data.user.email}</h1>
          <img className="rounded-full" src={state.data.user.photoURL!} alt="" />
          <button onClick={() => dispatch({ type: "out" })}>log out</button>
        </div>
      ) : (
        <SignIn dispatch={dispatch} />
      )}
    </>
  );
};
