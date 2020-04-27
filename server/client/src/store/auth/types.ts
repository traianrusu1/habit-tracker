import { User } from "../../interfaces/User";

export enum AuthStates {
  Pending = "pending",
  LoggedIn = "loggedin",
  LoggedOut = "loggedout",
  Error = "error",
}

export interface RootState {
  auth: {
    status: AuthStates;
    user: User;
  };
}
