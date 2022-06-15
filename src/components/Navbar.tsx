import { state, logOut, setPopup } from "../support/Types";
import { Popup } from "./Popup";
export const Navbar = ({ state, dispatch }: { state: { data: state; height: number; popup: boolean }; dispatch: React.Dispatch<logOut | setPopup> }) => {
  
  return (
    <>
      <div className="flex text-2xl mb-2" style={{height: 70}}>
        {state.popup ? (
          <Popup height={state.height} dispatch={dispatch} />
        ) : (
          <>
            <div className="flex">
              <img className="rounded-full my-auto h-full" src={state.data.user.photoURL!} alt=""/>
              <div className="flex flex-col justify-between mx-2">
                <p>{state.data.user.displayName?.split(" ")[0]}</p>
                <p>{state.data.user.displayName?.split(" ")[1]}</p>
              </div>
              <div className="flex flex-col justify-between mx-2">
                <p className="cursor-pointer" onClick={() => dispatch({ type: "set-popup" })}>MAKE RESERVATION</p>
                <p className="cursor-pointer" onClick={() => dispatch({ type: "out" })}>LOG OUT</p>
              </div>
            </div>

          </>
        )}
      </div>
    </>
  );
};
