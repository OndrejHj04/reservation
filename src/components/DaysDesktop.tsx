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
        <div className="" onClick={(e) => dispatch({ type: "set-popup", act: true, month: date, day: "1" })} style={{ gridColumnStart: days.indexOf(weekDay) + 1 }}>
          <p className="w-fit bg-slate-300 border border-black py-0.5 px-1.5 rounded-full">1</p>
          <div>
            {state.accepts.map((item) => {
              if (item.month === date && Number(item.day) === 1) {
                return <p key={nanoid()}>{item.month}</p>;
              }
            })}
          </div>
        </div>
        {[...Array(getDaysInMonth(year, state.month) - 1)].map((item, index) => {
          return (
            <div className="flex flex-col" onClick={(e) => dispatch({ type: "set-popup", act: true, month: date, day: (index+2).toString() })} key={index + 2}>
              <p className="w-fit bg-slate-300 border border-black py-0.5 px-1.5 rounded-full">{index + 2}</p>
              <div className="flex-1 overflow-y-scroll">
                {state.accepts.map((item) => {
                  if (item.month === date && Number(item.day) === index + 2) {
                    return (
                      <div key={nanoid()} className="flex flex-col rounded-xl">
                        <div className="flex">
                          <p>{item.fromHours}</p>:<p>{item.fromMinutes}</p>-<p>{item.toHours}</p>:<p>{item.toMinutes}</p>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
