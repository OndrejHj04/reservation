import { input, setPopup, requestDate } from "../support/Types";

export const Popup = ({input, dispatch }: {input:{day: string, month: string, fromHours: string, fromMinutes: string, toHours: string, toMinutes: string}, dispatch: React.Dispatch<setPopup | input | requestDate> }) => {
  return (
    <div className="flex w-full bg-slate-200 text-2xl justify-center ">

      <div className="flex flex-col">
        <div className="flex">
          <label htmlFor="">day</label>
          <input type="number" className="w-7 bg-transparent border-b-2 border-black mx-2 outline-none" name="day" onChange={(e)=>dispatch({type: "input", event: e})} value={input.day}/>
        </div>
        <div className="flex">
          <label htmlFor="">from</label>
          <input type="number" className="w-7 bg-transparent border-b-2 border-black outline-none" name="fromHours" onChange={(e)=>dispatch({type: "input", event: e})} value={input.fromHours}/>:
          <input type="number" className="w-7 bg-transparent border-b-2 border-black outline-none" name="fromMinutes" onChange={(e)=>dispatch({type: "input", event: e})} value={input.fromMinutes}/>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex">
          <label htmlFor="">month</label>
          <input type="number" className="w-7 bg-transparent border-b-2 border-black mx-2 outline-none" name="month" onChange={(e)=>dispatch({type: "input", event: e})} value={input.month}/>
        </div>
        <div className="flex">
          <label htmlFor="">to</label>
          <input type="number" className="w-7 bg-transparent border-b-2 border-black outline-none" name="toHours" onChange={(e)=>dispatch({type: "input", event: e})} value={input.toHours}/>:
          <input type="number" className="w-7 bg-transparent border-b-2 border-black outline-none" name="toMinutes" onChange={(e)=>dispatch({type: "input", event: e})} value={input.toMinutes}/>
        </div>
      </div>
      
      <img src={require("../images/submit.png")} onClick={()=>dispatch({type: "request-date"})} alt="" className="my-auto mx-1 w-10" />
      <img src={require("../images/cancel.png")} onClick={()=>dispatch({type: "set-popup"})} alt="" className="my-auto mx-1 w-10" />
    </div>
  );
};
