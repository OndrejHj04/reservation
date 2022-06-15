import { days } from "../support/Types";
export const DaysMobile = ({getDaysInMonth, weekDay, year, month}: {year:number, month: number, weekDay: string, getDaysInMonth: (year: number, month: number)=>number}) => {
    let arr: string[] = [];
    for (let i = 0; i < 6; i++) {
      arr.push(...days);
    }
  return (
    <>
    <p className="text-center text-3xl">{year}</p>
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
    </>
  );
};
