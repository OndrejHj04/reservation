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
              <input type="number" value={state.input.day} onChange={(e) => dispatch({ type: "input", event: e })} name="day" className="text-center outline-none border-b-2 border-black w-8 mx-1" />
            </div>

            <div className="flex">
              <label htmlFor="">month</label>
              <input type="number" value={state.input.month} onChange={(e) => dispatch({ type: "input", event: e })} name="month" className="text-center outline-none border-b-2 border-black w-8 mx-1" />
            </div>

            <div className="flex">
              <label htmlFor="">from</label>
              <input type="number" value={state.input.fromHours} onChange={(e) => dispatch({ type: "input", event: e })} name="fromHours" className="text-center outline-none border-b-2 border-black w-8 mx-1" />:
              <input type="number" value={state.input.fromMinutes} onChange={(e) => dispatch({ type: "input", event: e })} name="fromMinutes" className="text-center outline-none border-b-2 border-black w-8 mx-1" />
            </div>

            <div className="flex">
              <label htmlFor="">to</label>
              <input type="number" value={state.input.toHours} onChange={(e) => dispatch({ type: "input", event: e })} name="toHours" className="text-center outline-none border-b-2 border-black w-8 mx-1" />:
              <input type="number" value={state.input.toMinutes} onChange={(e) => dispatch({ type: "input", event: e })} name="toHours" className="text-center outline-none border-b-2 border-black w-8 mx-1" />
            </div>

            <div className="flex ml-auto">
              <div className="cursor-pointer text-center mx-2">request!</div>
              <div className="cursor-pointer text-center mx-2" onClick={()=>dispatch({type: "set-popup", act: false})}>cancel!</div>
            </div>

          </div>
        
      </div>
    </>
  );
};
