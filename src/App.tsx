import { Navbar } from "./components/Navbar";
import { createContext, useEffect, useReducer, useRef } from "react";
import { initial, state, actions } from "./support/Types";
import { SignIn } from "./components/SignIn";
import { Calendar } from "./components/Calendar";
import { doc, setDoc, getFirestore, onSnapshot, collection, snapshotEqual } from "firebase/firestore";
import { nanoid } from "nanoid";
import { Load } from "./components/Load";

const db = getFirestore();

const dateCheck = () => {};
const reducer = (state: state, action: actions) => {
  switch (action.type) {
    case "sign":
      localStorage.setItem("user", JSON.stringify(action.data));
      return { ...state, data: action.data };
    case "out":
      localStorage.clear();
      return initial;
    case "resize":
      return { ...state, height: window.innerHeight };
    case "change-month":
      const target = action.event.target as Element;
      let val = state.month;
      if (target.id === "increment") {
        if (state.month === 12) {
          val = 1;
        } else if (state.month !== 6) {
          val = state.month + 1;
        }
      } else if (target.id === "decrement") {
        if (state.month === 1) {
          val = 12;
        } else if (state.month !== 9) {
          val = state.month - 1;
        }
      }
      return {
        ...state,
        month: val,
      };
    case "toggle-form":
      return { ...state, form: { ...state.form, value: action.act, day: action.day, month: action.month, text: initial.form.text }, focus: action.act?1:0 };
    case "input-change":
      return { ...state, form: { ...state.form, text: { ...state.form.text, [action.name]: action.value } } };
    case "focus":
      return {...state, focus: Number(action.id)}
  }
};
export const App = () => {
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    localStorage.getItem("user")?.length && dispatch({ type: "sign", data: JSON.parse(localStorage.getItem("user")!) });
    window.addEventListener("resize", () => dispatch({ type: "resize" }));
  }, []);

  console.log(state.focus)

  useEffect(()=>{
    document.getElementById(state.focus.toString())?.focus()
  },[state.focus, state.form])
  
  useEffect(()=>{
    state.form.value&&window.addEventListener("click", ()=>document.getElementById(state.focus.toString())?.focus())
  },[state.form.value, state.focus])
  return (
    <>
      {Object.keys(state.data).length > 1 ? (
        <>
          <>
            <Navbar state={state} dispatch={dispatch} />
            <Calendar dispatch={dispatch} state={state} />
          </>
        </>
      ) : (
        <>
          <SignIn dispatch={dispatch} state={state} />
        </>
      )}
    </>
  );
};
