import { Navbar } from "./components/Navbar";
import { useEffect, useReducer } from "react";
import { initial, state, actions } from "./support/Types";
import { SignIn } from "./components/SignIn";
import { Calendar } from "./components/Calendar";
import { doc, setDoc, getFirestore, onSnapshot, collection } from "firebase/firestore";
import { nanoid } from "nanoid";

const db = getFirestore();
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
    case "set-popup":
      const event = action.target.target as Element;
      if(action.act){
        return { ...state, popup: {...state.popup, value: action.act, day: event.firstChild?.textContent, month: action.month, fromHours: "", fromMinutes: "", toHours: "", toMinutes: "" } };
      }
      return {...state, popup: state.popup}
    case "input-popup":
      return {...state, popup: {...state.popup, [action.event.target.name]: action.event.target.value}}
    case "load-data":
      return { ...state, requests: action.data };

  }
};
export const App = () => {
  const [state, dispatch] = useReducer(reducer, initial);
  
  useEffect(() => {
    localStorage.getItem("user")?.length && dispatch({ type: "sign", data: JSON.parse(localStorage.getItem("user")!) });
    window.addEventListener("resize", () => dispatch({ type: "resize" }));

    onSnapshot(collection(db, "requests"), (snapshot) => {
      let arr: {}[] = [];
      snapshot.docs.forEach((doc) => {
        arr.push(doc.data());
      });

    });
  }, []);

  return (
    <>
      {state.data.user.photoURL !== "" ? (
        <>
          <Navbar state={state} dispatch={dispatch} />
          <Calendar dispatch={dispatch} state={state} />
        </>
      ) : (
        <>
          <SignIn dispatch={dispatch} state={state} />
        </>
      )}
    </>
  );
};
