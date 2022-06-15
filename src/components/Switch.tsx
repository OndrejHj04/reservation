import { logIn, logOut, resize, changeMonth } from "../support/Types";

export const Switch = ({ dispatch, month, date, year }: { dispatch: React.Dispatch<logIn | logOut | resize | changeMonth>; month: number; date: string; year: number }) => {
  return (
    <div className="flex max-w-lg mx-auto justify-between uppercase" style={{fontSize: 44}}>
      {month !== 8 && month !== 7 ? (
        <>
          <img src={require("../images/step.png")} alt="" className="w-14 h-14 rotate-180 my-auto" id="decrement" onClick={(e) => dispatch({ type: "change-month", event: e })} />
          <p className="my-auto">{date}</p>
          <p className="hidden sm:block my-auto">{year}</p>
          <img src={require("../images/step.png")} alt="" className="w-14 h-14 my-auto" id="increment" onClick={(e) => dispatch({ type: "change-month", event: e })} />
        </>
      ) : (
        <h1>enjoy your holiday</h1>
      )}
    </div>
  );
};
