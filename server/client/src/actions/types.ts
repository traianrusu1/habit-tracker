import { User } from '../interfaces/User';
import { Habit } from '../interfaces/Habit';

export const FETCH_USER = 'fetch_user';
export const LOGIN_USER = 'login_user';
export const FETCH_HABITS = 'fetch_habits';
export const CREATE_HABIT = 'create_habit';
export const DELETE_HABIT = 'delete_habit';
export const PATCH_HABIT = 'patch_habit';

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

interface CreateHabitAction {
  type: typeof CREATE_HABIT;
  payload: Habit;
}

interface DeleteHabitAction {
  type: typeof DELETE_HABIT;
  payload: Habit;
}

interface PatchHabitAction {
  type: typeof PATCH_HABIT;
  payload: Habit;
}

export type AuthActionTypes = FetchUserAction | LoginUserAction;

export type HabitActionTypes =
  | FetchHabitsAction
  | CreateHabitAction
  | DeleteHabitAction
  | PatchHabitAction;
