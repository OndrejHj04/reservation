import { useEffect } from "react";
import { actions, state } from "../support/Types";

export const Popup = ({ state, dispatch, date }: { state: state; dispatch: React.Dispatch<actions>; date: string }) => {
  useEffect(() => {
    const elements = Array.prototype.slice.call(document.getElementsByClassName("input"));

    elements.map((item, index) => {
      item.onclick = () => {
        dispatch({ type: "direct-focus", id: item.id });
      };
      index + 1 === state.focus && item.focus();
    });
  }, [state.focus, state.popup]);

  useEffect(() => {
    if ((state.popup.fromHours.length > 1 && state.focus === 1) || (state.popup.fromMinutes.length > 1 && state.focus === 2) || (state.popup.toHours.length > 1 && state.focus === 3)) {
      dispatch({ type: "direct-focus", id: state.focus + 1 });
    }
  }, [state.popup]);

  return (
    <>
      <div className="p-2 text-2xl">
        <h1>Request a term</h1>
        <hr />

        <form className="flex sm:flex-row flex-col sm:text-2xl text-xl" onSubmit={(e) => e.preventDefault()}>
          <div className="flex">
            <label htmlFor="">day</label>
            <input type="number" readOnly={true} className="text-center outline-none border-b-2 border-black w-8 mx-1" value={state.popup.day!} />
          </div>

          <div className="flex">
            <label htmlFor="">month</label>
            <input type="text" readOnly={true} className="text-center outline-none border-b-2 border-black w-28 mx-1" value={state.popup.month} />
          </div>

          <div className="flex">
            <label htmlFor="">from</label>
            <input type="number" name="fromHours" id="1" className=" input text-center outline-none border-b-2 border-black w-8 mx-1" value={state.popup.fromHours} onChange={(e) => dispatch({ type: "input-popup", event: e })} />:
            <input type="number" name="fromMinutes" id="2" className=" input text-center outline-none border-b-2 border-black w-8 mx-1" value={state.popup.fromMinutes} onChange={(e) => dispatch({ type: "input-popup", event: e })} />
          </div>

          <div className="flex">
            <label htmlFor="">to</label>
            <input type="number" name="toHours" id="3" className=" input text-center outline-none border-b-2 border-black w-8 mx-1" value={state.popup.toHours} onChange={(e) => dispatch({ type: "input-popup", event: e })} />:
            <input type="number" name="toMinutes" id="4" className=" input text-center outline-none border-b-2 border-black w-8 mx-1" value={state.popup.toMinutes} onChange={(e) => dispatch({ type: "input-popup", event: e })} />
          </div>

          <div className="flex ml-auto">
            <button className="cursor-pointer text-center mx-2" onClick={() => dispatch({ type: "make-request" })}>
              request!
            </button>
            <div className="cursor-pointer text-center mx-2" onClick={(e) => dispatch({ type: "set-popup", act: false, day: "", month: "" })}>
              cancel!
            </div>
          </div>
        </form>
        <div className="flex overflow-x-scroll" id="bar">
          {state.accepts.map((item) => {
            if (item.day === state.popup.day && item.month === date) {
              return (
                <div className="flex mt-2 mr-2" key={item.id}>
                  <p>{item.fromHours}</p>:<p>{item.fromMinutes}</p>-<p>{item.toHours}</p>:<p>{item.fromMinutes}</p>&nbsp;
                  <div className="w-10">
                    <img src={item.photo} alt="" className="rounded-full w-10" />
                  </div>&nbsp;
                  <p className="whitespace-pre">{item.user}</p>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};
