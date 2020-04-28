import { User } from '../../interfaces/User';
import { Habit } from '../../interfaces/Habit';

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

export interface HabitsState {
  // status: AuthStates;
  habits: Habit[] | null;
}

export interface RootState {
  auth: AuthState;
  habits: HabitsState;
}
