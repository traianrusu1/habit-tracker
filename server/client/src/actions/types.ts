import { User } from '../interfaces/User';

export const FETCH_USER = 'fetch_user';
export const LOGIN_USER = 'login_user';

interface FetchUserAction {
  type: typeof FETCH_USER;
  payload: User;
}

interface LoginUserAction {
  type: typeof LOGIN_USER;
  payload: User;
}

export type AuthActionTypes = FetchUserAction | LoginUserAction;
