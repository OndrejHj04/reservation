export const initial = { data: { user: { displayName: "", email: "", photoURL: "" } }, height: window.innerHeight, month: new Date().getMonth()+1, popup: false};
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
export type changeMonth = {
  type: "change-month",
  event: React.MouseEvent<HTMLImageElement, MouseEvent>
}
export type setPopup = {
  type: "set-popup"
}
export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
