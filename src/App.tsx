import { Navbar } from "./components/Navbar";
import { createContext, useEffect, useReducer, useRef } from "react";
import { initial, state, actions } from "./support/Types";
import { SignIn } from "./components/SignIn";
import { Calendar } from "./components/Calendar";

const validate = (item: "fromHours" | "fromMinutes" | "toHours" | "toMinutes", value: number) => {
  if (item.includes("Hours") && value > 20) {
    return "20";
  }

  if (item.includes("Hours") && value < 8) {
    return "8";
  }

  if (item.includes("Minutes") && (value > 59 || value < 0)) {
    return "00";
  }

  return value;
};

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
      return { ...state, form: { ...state.form, value: action.act, day: action.day, month: action.month, text: initial.form.text }, focus: action.act ? 1 : 0 };
    case "input-change":
      return { ...state, form: { ...state.form, text: { ...state.form.text, [action.name]: action.value } } };
    case "focus":
      const e = action.e.target as Element;
      return { ...state, focus: Number(e.id) };
    case "number-focus":
      const test = (Object.keys(state.form.text) as ["fromHours", "fromMinutes", "toHours", "toMinutes"]).map((item) => {
        return state.form.text[item] === "";
      });
      return { ...state, focus: test.indexOf(true) + 1, form: { ...state.form, text: { ...state.form.text, [action.item]: validate(action.item, Number(state.form.text[action.item])) } } };
  }
};
export const App = () => {
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    localStorage.getItem("user")?.length && dispatch({ type: "sign", data: JSON.parse(localStorage.getItem("user")!) });
    window.addEventListener("resize", () => dispatch({ type: "resize" }));
  }, []);

  useEffect(() => {
    document.getElementById(state.focus.toString())?.focus();
  }, [state.focus, state.form]);

  useEffect(() => {
    state.form.value && window.addEventListener("click", () => document.getElementById(state.focus.toString())?.focus());
  }, [state.form.value, state.focus]);

  (Object.keys(state.form.text) as ["fromHours", "fromMinutes", "toHours", "toMinutes"]).map((item, index) => {
    useEffect(() => {
      state.form.text[item].length > 1 && dispatch({ type: "number-focus", item: item });
    }, [state.form.text[item].length]);

    useEffect(() => {
      state.focus !== index + 1 && state.form.text[item].length && dispatch({ type: "number-focus", item: item });
    }, [state.form.text, state.focus]);
  });
  console.log('xd')
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
