import { state, logOut, setPopup, input } from "../support/Types";
import { Popup } from "./Popup";
export const Navbar = ({ state, dispatch }: { state: { data: state; height: number; popup: boolean, input: {day: string, month: string, fromHours: string, fromMinutes: string, toHours: string, toMinutes: string} }; dispatch: React.Dispatch<logOut | setPopup | input> }) => {
  return (
    <>
      <div className="flex text-2xl mb-2" style={{ height: 70 }}>
        {state.popup ? (
          <Popup input={state.input} dispatch={dispatch} />
        ) : (
          <>
            <div className="flex w-full mx-1 mt-1">
              <img className="rounded-full my-auto h-full" src={state.data.user.photoURL!} alt="" />

              <div className="flex flex-col justify-between mx-2 overflow-y-scroll flex-1">
                <p>{state.data.user.displayName?.split(" ")[0]}</p>
                <p>{state.data.user.displayName?.split(" ")[1]}</p>
              </div>

              <div className="flex ml-auto">
                <img className="w-10 my-auto mx-1" src={require("../images/booking.png")} onClick={() => dispatch({ type: "set-popup" })} alt="" />
                <img className="w-10 my-auto mx-1" src={require("../images/logout.png")} onClick={() => dispatch({ type: "out" })} alt="" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};
