import { Navbar } from "./components/Navbar";
import { useEffect, useReducer } from "react";
import { logIn, logOut, initial, state, resize } from "./support/Types";
import { SignIn } from "./components/SignIn";
import { Calendar } from "./components/Calendar";

const reducer = (state: {data: state, height: number}, action: logIn | logOut | resize) => {
  switch (action.type) {
    case "sign":
      localStorage.setItem("user", JSON.stringify(action.data));

      return { ...state, data: action.data };
    case "out":
      localStorage.clear();
      return initial;
    case "resize":
      return {...state, height: window.innerHeight}
  }
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, initial);
  
  useEffect(() => {
    localStorage.getItem("user")?.length && dispatch({ type: "sign", data: JSON.parse(localStorage.getItem("user")!) });
    window.addEventListener("resize", ()=>dispatch({type: "resize"}))
  }, []);


  return (
    <>
      {state.data.user.photoURL !== "" ? (
        <>
          <Navbar state={state} dispatch={dispatch} />
          <Calendar />
        </>
      ) : (
        <>
          <SignIn dispatch={dispatch} height={state.height}/>
        </>
      )}
    </>
  );
};
