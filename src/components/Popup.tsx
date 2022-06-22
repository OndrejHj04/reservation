import { useEffect } from "react";
import { moveMessagePortToContext } from "worker_threads";
import { actions, state } from "../support/Types";

export const Popup = ({ state, dispatch, date }: { state: state; dispatch: React.Dispatch<actions>; date: string }) => {


  return (
    <>
      <div className="p-2 text-2xl">
        <h1>Request a term</h1>
        <hr />

        <form className="flex sm:flex-row flex-col sm:text-2xl text-xl" onSubmit={(e) => e.preventDefault()}>
          <div className="flex">
            <label htmlFor="">day</label>
            <input type="number" readOnly={true} className="text-center outline-none border-b-2 border-black w-8 mx-1"  value={state.form.day}/>
          </div>

          <div className="flex">
            <label htmlFor="">month</label>
            <input type="text" readOnly={true} className="text-center outline-none border-b-2 border-black w-28 mx-1"  value={state.form.month}/>
          </div>

          <div className="flex">
            <label htmlFor="">from</label>
            <input type="number" name="fromHours" id="1" className=" input text-center outline-none border-b-2 border-black w-8 mx-1" value={state.form.text.fromHours} onChange={e=>dispatch({type: "input-change", name: e.target.name, value: e.target.value, event: e})}/>:
            <input type="number" name="fromMinutes" id="2" className=" input text-center outline-none border-b-2 border-black w-8 mx-1" value={state.form.text.fromMinutes} onChange={e=>dispatch({type: "input-change", name: e.target.name, value: e.target.value, event: e})}/>
          </div>

          <div className="flex">
            <label htmlFor="">to</label>
            <input type="number" name="toHours" id="3" className=" input text-center outline-none border-b-2 border-black w-8 mx-1" value={state.form.text.toHours} onChange={e=>dispatch({type: "input-change", name: e.target.name, value: e.target.value, event: e})}/>:
            <input type="number" name="toMinutes" id="4" className=" input text-center outline-none border-b-2 border-black w-8 mx-1" value={state.form.text.toMinutes} onChange={e=>dispatch({type: "input-change", name: e.target.name, value: e.target.value, event: e})}/>
          </div>

          <div className="flex">
            <label htmlFor="">duration</label>
            <span className=" input text-center outline-none border-b-2 border-black mx-1 overflow-hidden" style={{maxWidth: "100px", minWidth: "40px"}}>

            </span>
            <p>min</p>
          </div>

          <div className="flex ml-auto">
            <button className="cursor-pointer text-center mx-2">
              request!
            </button>
            <div className="cursor-pointer text-center mx-2" onClick={()=>dispatch({type: "toggle-form", act: false, day: 0, month: ""})}>
              cancel!
            </div>
          </div>
        </form>
        <div className="flex overflow-x-scroll " id="bar">

        </div>
      </div>
    </>
  );
};
