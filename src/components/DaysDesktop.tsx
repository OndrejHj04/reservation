import { access } from "fs";
import { actions, days, state } from "../support/Types";
import { Popup } from "./Popup";
export const DaysDesktop = ({weekDay, getDaysInMonth, year, state, dispatch}:{weekDay:string, getDaysInMonth: (year: number, month: number)=>number, year:number, state:state, dispatch: React.Dispatch<actions> }) => {
    
    return (
    <>
      <div className="flex">
        {days.map((item) => (
          <p className="w-full text-center" key={item}>
            {item}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-7 aspect-square">
        <div onClick={()=>dispatch({type: "set-popup", act: true})} style={{ gridColumnStart: days.indexOf(weekDay) + 1 }}>1</div>
        {[...Array(getDaysInMonth(year, state.month) - 1)].map((item, index) => {
          return (
            <div onClick={()=>dispatch({type: "set-popup", act: true})} key={index + 2}>
              {index + 2}
            </div>
          );
        })}
      </div>
    </>
  );
};
