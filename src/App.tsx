import { Navbar } from "./components/Navbar";
import { useEffect, useReducer } from "react";
import { logIn, logOut, initial, state, resize, changeMonth, setPopup, input, requestDate } from "./support/Types";
import { SignIn } from "./components/SignIn";
import { Calendar } from "./components/Calendar";
import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { nanoid } from "nanoid";
const firebaseConfig = {
  apiKey: "AIzaSyDcrnNSPYg1IzgrCP8otJr7vWO_gVcGb9w",
  authDomain: "reservation-34041.firebaseapp.com",
  projectId: "reservation-34041",
  storageBucket: "reservation-34041.appspot.com",
  messagingSenderId: "525441419597",
  appId: "1:525441419597:web:d274d792ecee71bf5acf04",
  measurementId: "G-RFKWH19LGH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
const reducer = (state: { data: state; height: number; month: number; popup: boolean; input: { day: string; month: string; fromHours: string; fromMinutes: string; toHours: string; toMinutes: string } }, action: logIn | logOut | resize | changeMonth | setPopup | input | requestDate) => {
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
      return { ...state, popup: !state.popup };
    case "input":
      if (action.event.target.value.length < 3) {
        return { ...state, input: { ...state.input, [action.event.target.name]: action.event.target.value } };
      }
      return state;
    case "request-date":
      const id = nanoid();
      setDoc(doc(db, "requests", id), {
        ...state.input,
      });
      return { ...state, popup: false, input: { day: "", month: "", fromHours: "", fromMinutes: "", toHours: "", toMinutes: "" } };
  }
};
export const App = () => {
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    localStorage.getItem("user")?.length && dispatch({ type: "sign", data: JSON.parse(localStorage.getItem("user")!) });
    window.addEventListener("resize", () => dispatch({ type: "resize" }));
  }, []);
  
  return (
    <>
      {state.data.user.photoURL !== "" ? (
        <>
          <Navbar state={state} dispatch={dispatch} />
          <Calendar dispatch={dispatch} month={state.month} />
        </>
      ) : (
        <>
          <SignIn dispatch={dispatch} height={state.height} />
        </>
      )}
    </>
  );
};
