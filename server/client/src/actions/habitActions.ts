import { Habit } from './../interfaces/Habit';
import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { FETCH_HABITS, CREATE_HABIT, DELETE_HABIT } from './types';
import { RootState } from '../store/auth/types';
import { message } from 'antd';

export const fetchHabits = (): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
): Promise<void> => {
  try {
    const habits = await axios.get('/api/habits');
    dispatch({ type: FETCH_HABITS, payload: habits.data });
  } catch (err) {
    console.error('-- fetchHabits --', err);
    message.error('Sorry, an error occurred fetching your habits. Please Try again.');
  }
};

export const createHabit = (
  habit: Habit,
): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch): Promise<void> => {
  try {
    const newHabit = await axios.post('/api/habits', habit);
    dispatch({ type: CREATE_HABIT, payload: newHabit.data });
    message.success('Habit successfully added.');
  } catch (err) {
    console.error('-- createHabit --', err);
    message.error('Sorry, an error occurred. Please Try again.');
  }
};

export const deleteHabit = (
  habitId: string,
): ThunkAction<void, RootState, unknown, Action<string>> => async (dispatch): Promise<void> => {
  try {
    const deleteHabit = await axios.delete(`/api/habits/${habitId}`);
    dispatch({ type: DELETE_HABIT, payload: deleteHabit.data });
    message.success('Habit successfully deleted.');
  } catch (err) {
    console.error('-- deleteHabit --', err);
    message.error('Sorry, an error occurred. Please Try again.');
  }
};
