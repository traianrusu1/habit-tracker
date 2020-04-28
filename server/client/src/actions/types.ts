import { User } from '../interfaces/User';
import { Habit } from '../interfaces/Habit';

export const FETCH_USER = 'fetch_user';
export const LOGIN_USER = 'login_user';
export const FETCH_HABITS = 'fetch_habits';

interface FetchUserAction {
  type: typeof FETCH_USER;
  payload: User;
}

interface LoginUserAction {
  type: typeof LOGIN_USER;
  payload: User;
}

interface FetchHabitsAction {
  type: typeof FETCH_HABITS;
  payload: Habit[];
}

export type AuthActionTypes = FetchUserAction | LoginUserAction;

export type HabitActionTypes = FetchHabitsAction;
