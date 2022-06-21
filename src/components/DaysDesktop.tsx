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
        <div className="" onClick={(e) => dispatch({ type: "set-popup", act: true, target: e.currentTarget, month: date })} style={{ gridColumnStart: days.indexOf(weekDay) + 1 }}>
          <p>1</p>
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
            <div className="overflow-y-scroll" onClick={(e) => dispatch({ type: "set-popup", act: true, target: e.currentTarget, month: date })} key={index + 2}>
              <p>{index + 2}</p>
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
          );
        })}
      </div>
    </>
  );
};
