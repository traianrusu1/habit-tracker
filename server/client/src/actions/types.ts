// import { AuthStates } from "../store/auth/types";
export const FETCH_USER = "fetch_user";
export const LOGIN_USER = "login_user";

interface FetchUserAction {
  type: typeof FETCH_USER;
  payload: {};
}

interface LoginUserAction {
  type: typeof LOGIN_USER;
  payload: {};
}

export type AuthActionTypes = FetchUserAction | LoginUserAction;
