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


        </div>
      </div>
    </>
  );
};
