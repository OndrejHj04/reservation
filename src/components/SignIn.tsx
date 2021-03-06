import { auth, provider } from "../support/firebase";
import { signInWithPopup } from "firebase/auth";
import {actions, state} from "../support/Types"

export const SignIn = ({dispatch, state}:{state: state, dispatch: React.Dispatch<actions>}) => {

  const sign = () => {
    signInWithPopup(auth, provider)
      .then((res) => dispatch({ type: "sign", data: res }))
      .catch((err) => console.log(err));
  };
  
  return (
    <div className="m-auto max-w-3xl h-screen flex p-2" style={{height: state.height}}>
      <div className="text-center my-auto w-full p-3 shadow-2xl rounded-3xl">
        <h1 className="text-5xl">Reservation system</h1>
        <p className="text-2xl my-3">made by Ondřej Hájek</p>
        <div className="flex bg-slate-300 p-2 rounded-full mx-auto w-fit cursor-pointer" onClick={sign}>
          <p className="my-auto text-2xl">SIGN IN WITH</p>
          <img src={require("../images/google.png")} alt="" className="w-10 h-10 mx-1" />
        </div>
      </div>
    </div>
  );
};
