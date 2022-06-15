// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
import { logIn, logOut, resize, changeMonth } from "../support/Types";
import { Switch } from "./Switch";
import { Days } from "./Days";
import { days } from "../support/Types";
export const Calendar = ({ dispatch, month }: { dispatch: React.Dispatch<logIn | logOut | resize | changeMonth>; month: number }) => {
  const date = new Date(month.toString()).toLocaleString("cs-CZ", { month: "long" });
  const year = new Date().getMonth() > 7 ? (month > 8 ? new Date().getFullYear() : new Date((new Date().getFullYear() + 1).toString()).getFullYear()) : month > 8 ? new Date((new Date().getFullYear() - 1).toString()).getFullYear() : new Date().getFullYear();
  const weekDay = new Date(year, month - 1, 1).toLocaleString("en-EN", { weekday: "long" });
  function getDaysInMonth(year: number, month: number) {
    return new Date(year, month, 0).getDate();
  }
  let arr: string[] = [];
  for (let i = 0; i < 6; i++) {
    arr.push(...days);
  }

  return (
    <>
      <Switch dispatch={dispatch} month={month} date={date} year={year} />
      <div className="max-w-2xl mx-auto p-1">
        <div className=" p-2 shadow-2xl border rounded-3xl">
          <div className="hidden sm:block">
            <Days weekDay={weekDay} getDaysInMonth={getDaysInMonth} year={year} month={month} />
          </div>

          <div className="sm:hidden block">
            {[...Array(getDaysInMonth(year, month))].map((item, index) => {
              return (
                <div key={index + 1}>
                  <div className="flex justify-between">
                    <p>{index + 1}</p>
                    <p>{days.indexOf(weekDay) + index > 6 ? arr[days.indexOf(weekDay) + index] : days[days.indexOf(weekDay) + index]}</p>
                  </div>
                  <hr />
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
