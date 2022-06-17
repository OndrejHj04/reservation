import { actions, state} from "../support/Types";

export const Popup = ({state, dispatch }: {state: state, dispatch: React.Dispatch<actions> }) => {
  return (
    <div className="flex w-full bg-slate-200 text-2xl justify-center ">

      <div className="flex flex-col">
        <div className="flex">
          <label htmlFor="">day</label>
          <input type="number" className="w-7 bg-transparent border-b-2 border-black mx-2 outline-none" name="day" onChange={(e)=>dispatch({type: "input", event: e})} value={state.input.day}/>
        </div>
        <div className="flex">
          <label htmlFor="">from</label>
          <input type="number" className="w-7 bg-transparent border-b-2 border-black outline-none" name="fromHours" onChange={(e)=>dispatch({type: "input", event: e})} value={state.input.fromHours}/>:
          <input type="number" className="w-7 bg-transparent border-b-2 border-black outline-none" name="fromMinutes" onChange={(e)=>dispatch({type: "input", event: e})} value={state.input.fromMinutes}/>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex">
          <label htmlFor="">month</label>
          <input type="number" className="w-7 bg-transparent border-b-2 border-black mx-2 outline-none" name="month" onChange={(e)=>dispatch({type: "input", event: e})} value={state.input.month}/>
        </div>
        <div className="flex">
          <label htmlFor="">to</label>
          <input type="number" className="w-7 bg-transparent border-b-2 border-black outline-none" name="toHours" onChange={(e)=>dispatch({type: "input", event: e})} value={state.input.toHours}/>:
          <input type="number" className="w-7 bg-transparent border-b-2 border-black outline-none" name="toMinutes" onChange={(e)=>dispatch({type: "input", event: e})} value={state.input.toMinutes}/>
        </div>
      </div>
      
      <img src={require("../images/submit.png")} onClick={()=>dispatch({type: "request-date"})} alt="" className="my-auto mx-1 w-10" />
      <img src={require("../images/cancel.png")} onClick={()=>dispatch({type: "set-popup"})} alt="" className="my-auto mx-1 w-10" />
    </div>
  );
};
