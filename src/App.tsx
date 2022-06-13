import {signInWithGoogle} from "./firebase"

export const App = () => {

  

  return (
    <div>
      <button onClick={signInWithGoogle}>sign in</button>
    </div>
  );
};
