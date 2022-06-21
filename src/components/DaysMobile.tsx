import React from "react";
import { actions, days, state } from "../support/Types";
export const DaysMobile = ({ getDaysInMonth, weekDay, year, state, dispatch, date }: { date: string; year: number; state: state; weekDay: string; getDaysInMonth: (year: number, month: number) => number; dispatch: React.Dispatch<actions> }) => {
  let arr: string[] = [];
  for (let i = 0; i < 6; i++) {
    arr.push(...days);
  }

  return (
    <>
      <p className="text-center text-3xl">{year}</p>
      {[...Array(getDaysInMonth(year, state.month))].map((item, index) => {
        return (
          <div key={index + 1}>
            <div className="flex justify-between" onClick={(e) => dispatch({ type: "set-popup", act: true, target: e.currentTarget, month: date })}>
              <p>{index + 1}</p>
              <p>{days.indexOf(weekDay) + index > 6 ? arr[days.indexOf(weekDay) + index] : days[days.indexOf(weekDay) + index]}</p>
            </div>
            {state.accepts.map((item, i) => {
              if (index + 1 === Number(item.day) && item.month === date) {
                return <p key={item.id}>{item.fromHours}:{item.fromMinutes}-{item.toHours}:{item.toMinutes}</p>;
              }
            })}
            <hr />
          </div>
        );
      })}
    </>
  );
};

// 14, 21 22 23 24 28 29