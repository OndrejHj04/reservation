export const initial = { data: { user: { displayName: "", email: "", photoURL: "" } }, height: window.innerHeight, month: new Date().getMonth() + 1, popup: { text:{fromHours: "", fromMinutes: "", toHours: "", toMinutes: ""}, day: "", month: "", value: false, duration: 0},  requests: [], accepts: [], error: "", focus: 1, loading: true};
export type state = { data: { user: { displayName: string | null; email: string | null; photoURL: string | null } }; height: number; month: number; popup: {text: {fromHours: string, fromMinutes: string, toHours: string, toMinutes: string}, duration: number, value: boolean, day: string, month: string}, requests: {day: string, month: string, text: {fromHours: string, fromMinutes: string, toHours: string, toMinutes: string}, value: boolean, id: string, user: string, photo: string}[], accepts: {day: string,  month: string, text: {fromHours: string, fromMinutes: string, toHours: string, toMinutes: string}, value: boolean, id: string, user: string, photo: string}[], error: string, focus: number, loading: boolean};


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
  month: string,
  day: string
};
type inputPopup = {
  type: "input-popup",
  event: React.ChangeEvent<HTMLInputElement>,
}
type makeRequest = {
  type: "make-request"
}
type loadRequests = {
  type: "load-requests",
  data: { day: string; text: {fromHours: string; fromMinutes: string; toHours: string; toMinutes: string;}, month: string; value: boolean; id: string; user: string; photo: string }[]
}
type loadAccepts = { 
  type: "load-accepts",
  data: { day: string; text: {fromHours: string; fromMinutes: string; toHours: string; toMinutes: string;}, month: string; value: boolean; id: string; user: string; photo: string }[]
}
type focus = {
  type: "focus"
  key: string
}
type directFocus = {
  type: "direct-focus",
  id: number
}
type duration = {
  type: "duration"
}
export type actions = logIn | logOut | resize | changeMonth | setPopup   | inputPopup  | makeRequest | loadRequests | loadAccepts | focus | directFocus | duration;
export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
