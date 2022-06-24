const initialForm = { value: false, day: 0, month: "", text: { fromHours: "", fromMinutes: "", toHours: "", toMinutes: "" }, duration: "" };
type typeForm = { value: boolean; day: number; month: string; text: { fromHours: string; fromMinutes: string; toHours: string; toMinutes: string }, duration: string };

const initialUser = { displayName: "", email: "", photoURL: "" };
type typeUser = { displayName: string | null; email: string | null; photoURL: string | null };

export const initial = { data: { user: initialUser }, height: window.innerHeight, month: new Date().getMonth() + 1, form: initialForm, focus: 0};
export type state = { data: { user: typeUser }; height: number; month: number; form: typeForm, focus: number };

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
type toggleForm = {
  type: "toggle-form";
  act: boolean;
  day: number;
  month: string;
};
type inputChange = {
  type: "input-change";
  name: "fromHours" | "fromMinutes" | "toHours" | "toMinutes";
  value: string;
  event: React.ChangeEvent<HTMLInputElement>
};
type  focus = {
  type: "focus"
  e: React.MouseEvent<HTMLInputElement, MouseEvent>
}
type numberFocus = {
  type: "number-focus",
  item: "fromHours" | "fromMinutes" | "toHours" | "toMinutes";
}
export type actions = logIn | logOut | resize | changeMonth | toggleForm | inputChange | focus | numberFocus;
export const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
