import { state, logIn, logOut } from "./Types";
export const Navbar = ({state, dispatch}:{state: {data: state}, dispatch: React.Dispatch<logIn | logOut>}) => {
  return (
    <div>
      <h1>welcome {state.data.user.displayName}</h1>
      <h1>your email: {state.data.user.email}</h1>
      <img className="rounded-full" src={state.data.user.photoURL!} alt="" />
      <button onClick={() => dispatch({ type: "out" })}>log out</button>
    </div>
  );
};
