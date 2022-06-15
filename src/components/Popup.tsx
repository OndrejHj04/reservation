import { setPopup } from "../support/Types";

export const Popup = ({ height, dispatch }: { height: number; dispatch: React.Dispatch<setPopup> }) => {
  return (
    <div className="flex w-full bg-slate-200 text-2xl justify-center">
      <div className="flex flex-col my-auto w-full max-w-xl">
        <div className="flex justify-between">
          <div>
            <label htmlFor="">from </label>
            <input type="number" name="day" className="bg-slate-200 outline-none border-b-2 border-black w-7 mb-auto" />:
            <input type="number" name="day" className="bg-slate-200 outline-none border-b-2 border-black w-7 mb-auto" />
            <label className="ml-4" htmlFor="">to</label>
            <input type="number" name="day" className="bg-slate-200 outline-none border-b-2 border-black w-7 mb-auto" />:
            <input type="number" name="day" className="bg-slate-200 outline-none border-b-2 border-black w-7 mb-auto" />
          </div>
          <p>request</p>
        </div>

        <div className="flex justify-between">
          <div>
            <label htmlFor="">day </label>
            <input type="number" name="day" className="bg-slate-200 outline-none border-b-2 border-black w-7 mb-auto" />
            <label style={{marginLeft: 60}} htmlFor="">month </label>
            <input type="number" name="day" className="bg-slate-200 outline-none border-b-2 border-black w-7 mb-auto" />
          </div>

          <p onClick={()=>dispatch({type: "set-popup"})}>cancel</p>
        </div>
      </div>
    </div>
  );
};
