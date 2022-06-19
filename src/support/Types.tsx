export const initial = { data: { user: { displayName: "", email: "", photoURL: "" } }, height: window.innerHeight, month: new Date().getMonth() + 1, popup: false, input: { day: "", month: "", fromHours: "", fromMinutes: "", toHours: "", toMinutes: "" }, requests: [] };
export type state = { data: { user: { displayName: string | null; email: string | null; photoURL: string | null } }; height: number; month: number; popup: boolean; input: { day: string; month: string; fromHours: string; fromMinutes: string; toHours: string; toMinutes: string }; requests: {}[] };

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
  target?: React.MouseEvent<HTMLDivElement, MouseEvent>
  month?: string 
};
type input = {
  type: "input";
  event: React.ChangeEvent<HTMLInputElement>;
};
type requestDate = {
  type: "request-date";
};
type loadData = {
  type: "load-data";
  data: {}[];
};
export type actions = logIn | logOut | resize | changeMonth | setPopup | input | requestDate | loadData;
export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
