export const initial = { data: { user: { displayName: "", email: "", photoURL: "" } }, height: window.innerHeight, month: new Date().getMonth() + 1, popup: {value: false, day: "", month: "", fromHours: "", fromMinutes: "", toHours: "", toMinutes: ""}};
export type state = { data: { user: { displayName: string | null; email: string | null; photoURL: string | null } }; height: number; month: number; popup: {value: boolean, day: string | null | undefined, month: string, fromHours: string, fromMinutes: string, toHours: string, toMinutes: string}};

type logIn = {
  type: "sign";
  data: { user: { displayName: string | null; email: string | null; photoURL: string | null } };
};
type logOut = {
  type: "out";
};
type resize = {
  type: "resize";
};
type changeMonth = {
  type: "change-month";
  event: React.MouseEvent<HTMLImageElement, MouseEvent>;
};
type setPopup = {
  type: "set-popup";
  act: boolean
  target: React.MouseEvent<HTMLDivElement, MouseEvent>
  month: string 
};
type loadData = {
  type: "load-data";
  data: {}[];
};
type inputPopup = {
  type: "input-popup",
  event: React.ChangeEvent<HTMLInputElement>
}
export type actions = logIn | logOut | resize | changeMonth | setPopup  | loadData | inputPopup;
export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
