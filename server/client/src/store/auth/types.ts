import { User } from '../../interfaces/User';

export enum AuthStates {
  Pending = 'pending',
  LoggedIn = 'loggedin',
  LoggedOut = 'loggedout',
  Error = 'error',
}

export interface AuthState {
  status: AuthStates;
  user: User | null;
}

export interface RootState {
  auth: AuthState;
}
