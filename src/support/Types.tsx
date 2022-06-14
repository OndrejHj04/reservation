export const initial = { data: { user: { displayName: "", email: "", photoURL: "" } }, height: window.innerHeight};
export type state =   { user: { displayName: string | null; email: string | null; photoURL: string | null } }
export type logIn = {
  type: "sign";
  data: state;
};
export type logOut = {
  type: "out";
};
export type resize = {
  type: "resize"
}
