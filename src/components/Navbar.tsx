import { state, logIn, logOut } from "../support/Types";
export const Navbar = ({ state, dispatch }: { state: { data: state }; dispatch: React.Dispatch<logIn | logOut> }) => {
  return (
    <div className="flex text-2xl justify-between m-1">
        <img className="rounded-full my-auto" src={state.data.user.photoURL!} alt="" width={70} />

      <div className="flex flex-col">
        <h1 className="my-auto text-center">{state.data.user.displayName}</h1>
        <div onClick={() => dispatch({ type: "out" })} className="my-auto cursor-pointer text-center">LOG OUT</div>
      </div>

    </div>
  );
};
