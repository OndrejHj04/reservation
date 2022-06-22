import { Navbar } from "./components/Navbar";
import { createContext, useEffect, useReducer, useRef } from "react";
import { initial, state, actions } from "./support/Types";
import { SignIn } from "./components/SignIn";
import { Calendar } from "./components/Calendar";
import { doc, setDoc, getFirestore, onSnapshot, collection, snapshotEqual } from "firebase/firestore";
import { nanoid } from "nanoid";
import { Load } from "./components/Load";


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
      return { ...state, focus: 1, popup: { ...state.popup, value: action.act, day: action.day, month: action.month, text: initial.popup.text }, error: "" };

    case "input-popup":
      if (action.event.target.value.length < 3) {
        return { ...state, popup: { ...state.popup, text: { ...state.popup.text, [action.event.target.name]: action.event.target.value } } };
      }
      return state;
    case "make-request":
      const id = nanoid();
      setDoc(doc(db, "requests", id), {
        ...state.popup,
        text: {
          ...state.popup.text,
          fromMinutes: state.popup.text.fromMinutes.length === 1 ? "0"+state.popup.text.fromMinutes : state.popup.text.fromMinutes,
          toMinutes: state.popup.text.fromMinutes.length === 1 ? "0"+state.popup.text.toMinutes : state.popup.text.toMinutes,
        },
        id: id,
        user: state.data.user.displayName,
        photo: state.data.user.photoURL,
      });
      return { ...state, popup: initial.popup, error: "" };

    case "load-requests":
      return { ...state, requests: action.data };
    case "load-accepts":
      return { ...state, accepts: action.data, loading: false };
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
      return { ...state, focus: Number(action.id) };
    case "duration":
      const math = ((Number(state.popup.text.toHours)-Number(state.popup.text.fromHours))*60)+(Number(state.popup.text.toMinutes)-Number(state.popup.text.fromMinutes))
      return {...state, popup: {...state.popup, duration: math>0?math:0}}
  }
};
export const App = () => {
  const [state, dispatch] = useReducer(reducer, initial);
  console.log(state.focus)
  useEffect(() => {
    localStorage.getItem("user")?.length && dispatch({ type: "sign", data: JSON.parse(localStorage.getItem("user")!) });
    window.addEventListener("resize", () => dispatch({ type: "resize" }));
    onSnapshot(collection(db, "requests"), (snapshot) => {
      let arr: { day: string; text: { fromHours: string; fromMinutes: string; toHours: string; toMinutes: string }; month: string; value: boolean; id: string; user: string; photo: string }[] = [];
      snapshot.docs.forEach((doc) => {
        const data = doc.data() as { text: { fromHours: string; fromMinutes: string; toHours: string; toMinutes: string }; day: string; month: string; value: boolean; id: string; user: string; photo: string };
        arr.push(data);
      });
      dispatch({ type: "load-requests", data: arr });
    });
    onSnapshot(collection(db, "accepted"), (snapshot) => {
      let arr: { day: string; text: { fromHours: string; fromMinutes: string; toHours: string; toMinutes: string }; month: string; value: boolean; id: string; user: string; photo: string }[] = [];
      snapshot.docs.forEach((doc) => {
        const data = doc.data() as { text: { fromHours: string; fromMinutes: string; toHours: string; toMinutes: string }; day: string; month: string; value: boolean; id: string; user: string; photo: string };
        arr.push(data);
      });
      dispatch({ type: "load-accepts", data: arr });
    });
    document.addEventListener("keydown", (e) => e.key.includes("Arrow") && dispatch({ type: "focus", key: e.key }));
  }, []);

  useEffect(()=>{
    dispatch({type: "duration"})
  },[state.popup.text])
  return (
    <>
      {Object.keys(state.data).length > 1 ? (
        <>
          {state.loading ? (
            <>
              <Load state={state} />
            </>
          ) : (
            <>
              <Navbar state={state} dispatch={dispatch} />
              <Calendar dispatch={dispatch} state={state} />
            </>
          )}
        </>
      ) : (
        <>
          <SignIn dispatch={dispatch} state={state} />
        </>
      )}
    </>
  );
};
