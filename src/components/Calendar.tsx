import { actions, state } from "../support/Types";
import { Switch } from "./Switch";
import { DaysDesktop } from "./DaysDesktop";
import { DaysMobile } from "./DaysMobile";
import { Popup } from "./Popup";
export const Calendar = ({ dispatch, state }: { dispatch: React.Dispatch<actions>; state: state }) => {
  const date = new Date(state.month.toString()).toLocaleString("cs-CZ", { month: "long" });
  const year = new Date().getMonth() > 7 ? (state.month > 8 ? new Date().getFullYear() : new Date((new Date().getFullYear() + 1).toString()).getFullYear()) : state.month > 8 ? new Date((new Date().getFullYear() - 1).toString()).getFullYear() : new Date().getFullYear();
  const weekDay = new Date(year, state.month - 1, 1).toLocaleString("en-EN", { weekday: "long" });
  function getDaysInMonth(year: number, month: number) {
    return new Date(year, month, 0).getDate();
  }

  return (
    <>
      <Switch dispatch={dispatch} month={state.month} date={date} year={year}/>
      <div className="max-w-2xl mx-auto p-1">
        <div className=" p-2 shadow-2xl border rounded-3xl">
          <div className="hidden sm:block">
            <DaysDesktop weekDay={weekDay} getDaysInMonth={getDaysInMonth} date={date} year={year} state={state} dispatch={dispatch}/>
          </div>
          <div className="sm:hidden block">
            <DaysMobile weekDay={weekDay} getDaysInMonth={getDaysInMonth} date={date} year={year} state={state} dispatch={dispatch}/>
          </div>
        </div>
      </div>
      {state.popup.value&&<Popup dispatch={dispatch} state={state} />}
    </>
  );
};
