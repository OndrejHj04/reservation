import { access } from "fs";
import { nanoid } from "nanoid";
import { actions, days, state } from "../support/Types";
import { Popup } from "./Popup";
export const DaysDesktop = ({ weekDay, getDaysInMonth, year, state, dispatch, date }: { date: string; weekDay: string; getDaysInMonth: (year: number, month: number) => number; year: number; state: state; dispatch: React.Dispatch<actions> }) => {
  return (
    <>
      <div className="flex">
        {days.map((item) => (
          <p className="w-full text-center" key={item}>
            {item}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-7 aspect-square grid-rows-5">
        <div style={{ gridColumnStart: days.indexOf(weekDay) + 1 }} onClick={()=>dispatch({type: "toggle-form", act: true, day: 1, month: date})}>
          <p className="w-fit bg-slate-300 border border-black py-0.5 px-1.5 rounded-full">1</p>
          <div>

          </div>
        </div>
        {[...Array(getDaysInMonth(year, state.month) - 1)].map((item, index) => {
          return (
            <div className="flex flex-col" key={index + 2} onClick={()=>dispatch({type: "toggle-form", act: true, day: index+2, month: date})}>
              <p className="w-fit bg-slate-300 border border-black py-0.5 px-1.5 rounded-full">{index + 2}</p>
              <div className="flex-1 overflow-y-scroll">

              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
