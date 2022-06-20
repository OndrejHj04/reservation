import { useEffect, useRef } from "react";
import { actions, state } from "../support/Types";

export const Popup = ({ state, dispatch }: { state: state; dispatch: React.Dispatch<actions>  }) => {


  return (
    <>
      <div className="p-2 text-2xl">
        <h1>Request a term</h1>
        <hr />

        <div className="flex sm:flex-row flex-col sm:text-2xl text-xl">
          <div className="flex">
            <label htmlFor="">day</label>
            <input type="number" readOnly={true} className="text-center outline-none border-b-2 border-black w-8 mx-1" value={state.popup.day!}/>
          </div>

          <div className="flex">
            <label htmlFor="">month</label>
            <input type="text" readOnly={true} className="text-center outline-none border-b-2 border-black w-28 mx-1" value={state.popup.month}/>
          </div>

          <div className="flex">
            <label htmlFor="">from</label>
            <input type="number" name="fromHours" id="1" className="text-center outline-none border-b-2 border-black w-8 mx-1" value={state.popup.fromHours} onChange={(e)=>dispatch({type: "input-popup", event: e})}/>:
            <input type="number" name="fromMinutes" id="2" className="text-center outline-none border-b-2 border-black w-8 mx-1" value={state.popup.fromMinutes} onChange={(e)=>dispatch({type: "input-popup", event: e})}/>
          </div>

          <div className="flex">
            <label htmlFor="">to</label>
            <input type="number" name="toHours" id="3" className="text-center outline-none border-b-2 border-black w-8 mx-1" value={state.popup.toHours} onChange={(e)=>dispatch({type: "input-popup", event: e})}/>:
            <input type="number" name="toMinutes" id="4" className="text-center outline-none border-b-2 border-black w-8 mx-1" value={state.popup.toMinutes} onChange={(e)=>dispatch({type: "input-popup", event: e})}/>
          </div>

          <div className="flex ml-auto">
            <div className="cursor-pointer text-center mx-2" onClick={()=>dispatch({type: "make-request"})}>request!</div>
            <div className="cursor-pointer text-center mx-2" onClick={(e) => dispatch({ type: "set-popup", act: false, target: e.currentTarget, month: "" })}>
              cancel!
            </div>
          </div>
        </div>
        {state.error}
      </div>
    </>
  );
};
