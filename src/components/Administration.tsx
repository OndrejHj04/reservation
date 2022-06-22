import { deleteDoc, doc, getDoc, getFirestore, setDoc } from "firebase/firestore";
import { state } from "../support/Types";

export const Administration = ({ state }: { state: state }) => {
  const db = getFirestore();
  const acceptTerm = (id: string) => {
    const docRef = doc(db, "requests", id);
    const docSnap = getDoc(docRef);

    docSnap.then((res) => {
      setDoc(doc(db, "accepted", id), {
        ...res.data(),
      });
      deleteDoc(docRef);
    });
  };
  return (
    <>
      <div className="p-2 text-2xl ">
        <h1>Administration</h1>
        <hr />

        <div className="flex overflow-x-scroll">
          {state.requests.length ? (
            state.requests.map((item) => {
              return (
                <div className="bg-orange-500 p-2 rounded-2xl m-1 flex w-fit" key={item.id}>
                  <h1>{item.day}</h1>.&nbsp;
                  <h1>{item.month}</h1>&nbsp;
                  <h1>{item.text.fromHours}</h1>:<h1>{item.text.fromMinutes}</h1>-<h1>{item.text.toHours}</h1>:<h1>{item.text.toMinutes}</h1>&nbsp;
                  <div className="w-8 h-8" onClick={() => deleteDoc(doc(db, "requests", item.id))}>
                    <img src={require("../images/cancel.png")} alt="" className="w-full h-full" />
                  </div>
                  &nbsp;
                  <div className="w-8 h-8" onClick={() => acceptTerm(item.id)}>
                    <img src={require("../images/accept.png")} alt="" className="w-full h-full" />
                  </div>
                  &nbsp;
                  <p className="whitespace-nowrap">{item.user}</p>
                </div>
              );
            })
          ) : (
            <h1>no request left</h1>
          )}
        </div>
      </div>
    </>
  );
};
