export type logIn = {
  type: "sign";
  data: { user: { displayName: string | null; email: string | null; photoURL: string | null } };
};
export type logOut = {
  type: "out";
};
