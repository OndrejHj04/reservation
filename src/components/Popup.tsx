import { setPopup } from "../support/Types";

export const Popup = ({ height, dispatch }: { height: number; dispatch: React.Dispatch<setPopup> }) => {
  return (
    <div className="flex w-full bg-slate-200 text-2xl justify-center ">

      <div className="flex flex-col">
        <div className="flex">
          <label htmlFor="">day</label>
          <input type="number" className="w-7 bg-transparent border-b-2 border-black mx-2 outline-none" />
        </div>
        <div className="flex">
          <label htmlFor="">from</label>
          <input type="number" className="w-7 bg-transparent border-b-2 border-black outline-none" />:
          <input type="number" className="w-7 bg-transparent border-b-2 border-black outline-none" />
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex">
          <label htmlFor="">month</label>
          <input type="number" className="w-7 bg-transparent border-b-2 border-black mx-2 outline-none" />
        </div>
        <div className="flex">
          <label htmlFor="">to</label>
          <input type="number" className="w-7 bg-transparent border-b-2 border-black outline-none" />:
          <input type="number" className="w-7 bg-transparent border-b-2 border-black outline-none" />
        </div>
      </div>
      
      <img src={require("../images/submit.png")} alt="" className="my-auto mx-1 w-10" />
      <img src={require("../images/cancel.png")} onClick={()=>dispatch({type: "set-popup"})} alt="" className="my-auto mx-1 w-10" />
    </div>
  );
};
