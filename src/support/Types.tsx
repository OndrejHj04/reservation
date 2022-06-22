export const initial = { data: { user: { displayName: "", email: "", photoURL: "" } }, height: window.innerHeight, month: new Date().getMonth() + 1, popup: {value: false, day: "", month: "", fromHours: "", fromMinutes: "", toHours: "", toMinutes: ""},  requests: [], accepts: [], error: "", focus: 1, loading: true};
export type state = { data: { user: { displayName: string | null; email: string | null; photoURL: string | null } }; height: number; month: number; popup: {value: boolean, day: string, month: string, fromHours: string, fromMinutes: string, toHours: string, toMinutes: string}, requests: {day: string, fromHours: string, fromMinutes: string, month: string, toHours: string, toMinutes: string, value: boolean, id: string, user: string, photo: string}[], accepts: {day: string, fromHours: string, fromMinutes: string, month: string, toHours: string, toMinutes: string, value: boolean, id: string, user: string, photo: string}[], error: string, focus: number, loading: boolean};

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
type modifyTime = {
  type: "modify-time"
}
type makeRequest = {
  type: "make-request"
}
type loadRequests = {
  type: "load-requests",
  data: {day: string, fromHours: string, fromMinutes: string, month: string, toHours: string, toMinutes: string, value: boolean, id: string, user: string, photo: string}[]
}
type loadAccepts = {
  type: "load-accepts",
  data: {day: string; fromHours: string; fromMinutes: string; month: string; toHours: string; toMinutes: string; value: boolean; id: string, user: string, photo: string}[]
}
type focus = {
  type: "focus"
  key: string
}
type directFocus = {
  type: "direct-focus",
  id: number
}
export type actions = logIn | logOut | resize | changeMonth | setPopup   | inputPopup | modifyTime | makeRequest | loadRequests | loadAccepts | focus | directFocus;
export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
