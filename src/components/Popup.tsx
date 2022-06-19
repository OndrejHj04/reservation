import { actions, state } from "../support/Types";

export const Popup = ({ state, dispatch }: { state: state; dispatch: React.Dispatch<actions> }) => {

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
            <input type="text" readOnly={true} className="text-center outline-none border-b-2 border-black w-32 mx-1" value={state.popup.month}/>
          </div>

          <div className="flex">
            <label htmlFor="">from</label>
            <input type="text" name="fromHours" className="text-center outline-none border-b-2 border-black w-8 mx-1" value={state.popup.fromHours} onChange={(e)=>dispatch({type: "input-popup", event: e})}/>:
            <input type="text" name="fromMinutes" className="text-center outline-none border-b-2 border-black w-8 mx-1" value={state.popup.fromMinutes} onChange={(e)=>dispatch({type: "input-popup", event: e})}/>
          </div>

          <div className="flex">
            <label htmlFor="">to</label>
            <input type="text" name="toHours" className="text-center outline-none border-b-2 border-black w-8 mx-1" value={state.popup.toHours} onChange={(e)=>dispatch({type: "input-popup", event: e})}/>:
            <input type="text" name="toMinutes" className="text-center outline-none border-b-2 border-black w-8 mx-1" value={state.popup.toMinutes} onChange={(e)=>dispatch({type: "input-popup", event: e})}/>
          </div>

          <div className="flex ml-auto">
            <div className="cursor-pointer text-center mx-2">request!</div>
            <div className="cursor-pointer text-center mx-2" onClick={(e) => dispatch({ type: "set-popup", act: false, target: e, month: "" })}>
              cancel!
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
