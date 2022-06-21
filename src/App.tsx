import { Navbar } from "./components/Navbar";
import { createContext, useEffect, useReducer, useRef } from "react";
import { initial, state, actions } from "./support/Types";
import { SignIn } from "./components/SignIn";
import { Calendar } from "./components/Calendar";
import { doc, setDoc, getFirestore, onSnapshot, collection, snapshotEqual } from "firebase/firestore";
import { nanoid } from "nanoid";

const validateTime = (value: string, name: string, state: state) => {
  if (name.includes("Hours") && Number(value) > 21) {
    return "20";
  }

  if (name.includes("Minutes") && Number(value) > 59) {
    return "00";
  }
  return value;
};
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
      const event = action.target as Element;
      return { ...state, focus: 1, popup: { ...state.popup, value: action.act, day: event.firstChild?.textContent, month: action.month, fromHours: "", fromMinutes: "", toHours: "", toMinutes: "" }, error: "" };

    case "input-popup":
      if (action.event.target.value.length < 3) {
        return { ...state, popup: { ...state.popup, [action.event.target.name]: validateTime(action.event.target.value, action.event.target.name, state) } };
      }
      return state;
    case "modify-time":
      return { ...state, popup: { ...state.popup, toHours: (Number(state.popup.fromHours) + 1).toString() } };
    case "make-request":
      const id = nanoid();

      if (state.popup.fromHours.length && state.popup.fromMinutes.length && state.popup.toHours.length && state.popup.toMinutes.length) {
        setDoc(doc(db, "requests", id), {
          ...state.popup,
          fromMinutes: state.popup.fromMinutes.length === 1 ? state.popup.fromMinutes + 0 : state.popup.fromMinutes,
          toMinutes: state.popup.fromMinutes.length === 1 ? state.popup.toMinutes + 0 : state.popup.toMinutes,
          id: id,
        });
        return { ...state, popup: initial.popup, error: "" };
      } else {
        return { ...state, error: "Invalid data!" };
      }
    case "load-requests":
      return { ...state, requests: action.data };
    case "load-accepts":
      return { ...state, accepts: action.data };
    case "focus":
      if (state.popup.value && (action.key.includes("Right") || action.key.includes("Left"))) {
        const countFocus = () => {
          if (action.key.includes("Right") && state.focus < 4) {
            return state.focus + 1;
          } else if (action.key.includes("Left") && state.focus > 1) {
            return state.focus - 1;
          }
          return state.focus;
        };
        return { ...state, focus: countFocus() };
      }
      return state;
      case "direct-focus":
        return {...state, focus: action.id}
  }
};
export const App = () => {
  const [state, dispatch] = useReducer(reducer, initial);
  console.log(state.focus)
  useEffect(() => {
    localStorage.getItem("user")?.length && dispatch({ type: "sign", data: JSON.parse(localStorage.getItem("user")!) });
    window.addEventListener("resize", () => dispatch({ type: "resize" }));

    onSnapshot(collection(db, "requests"), (snapshot) => {
      let arr: { day: string; fromHours: string; fromMinutes: string; month: string; toHours: string; toMinutes: string; value: boolean; id: string }[] = [];
      snapshot.docs.forEach((doc) => {
        const data = doc.data() as { day: string; fromHours: string; fromMinutes: string; month: string; toHours: string; toMinutes: string; value: boolean; id: string };
        arr.push(data);
      });
      dispatch({ type: "load-requests", data: arr });
    });
    onSnapshot(collection(db, "accepted"), (snapshot) => {
      let arr: { day: string; fromHours: string; fromMinutes: string; month: string; toHours: string; toMinutes: string; value: boolean; id: string }[] = [];
      snapshot.docs.forEach((doc) => {
        const data = doc.data() as { day: string; fromHours: string; fromMinutes: string; month: string; toHours: string; toMinutes: string; value: boolean; id: string };
        arr.push(data);
      });
      dispatch({ type: "load-accepts", data: arr });
    });
    document.addEventListener("keydown", (e) => e.key.includes("Arrow") && dispatch({ type: "focus", key: e.key }));
  }, []);

  useEffect(() => {
    if (Number(state.popup.fromHours) > Number(state.popup.toHours) && state.popup.toHours.length && state.popup.toHours.length === state.popup.fromHours.length) {
      dispatch({ type: "modify-time" });
    }
  }, [state.popup]);

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
