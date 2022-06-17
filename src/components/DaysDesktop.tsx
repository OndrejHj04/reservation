import { days, state } from "../support/Types";
export const DaysDesktop = ({weekDay, getDaysInMonth, year, state}:{weekDay:string, getDaysInMonth: (year: number, month: number)=>number, year:number, state:state }) => {
    
    return (
    <>
      <div className="flex">
        {days.map((item) => (
          <p className="w-full text-center" key={item}>
            {item}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-7 aspect-square sm">
        <div style={{ gridColumnStart: days.indexOf(weekDay) + 1 }}>1</div>
        {[...Array(getDaysInMonth(year, state.month) - 1)].map((item, index) => {
          return (
            <div className="" key={index + 2}>
              {index + 2}
            </div>
          );
        })}
      </div>
    </>
  );
};
