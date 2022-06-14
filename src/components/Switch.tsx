import { logIn, logOut, resize, changeMonth } from "../support/Types";

export const Switch = ({ dispatch, month, date, year }: { dispatch: React.Dispatch<logIn | logOut | resize | changeMonth>; month: number, date: string, year: number }) => {


  return (
    <div className="flex max-w-lg mx-auto justify-between text-5xl uppercase">
      {month !== 8 && month !== 7 ? (
        <>
          <img src={require("../images/step.png")} alt="" className="w-14 h-14 rotate-180" id="decrement" onClick={(e) => dispatch({ type: "change-month", event: e })} />
          <p>
            {date} {year}
          </p>
          <img src={require("../images/step.png")} alt="" className="w-14 h-14" id="increment" onClick={(e) => dispatch({ type: "change-month", event: e })} />
        </>
      ) : (
        <h1>enjoy your holiday</h1>
      )}
    </div>
  );
};
