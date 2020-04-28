import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { FETCH_HABITS } from './types';
import { RootState } from '../store/auth/types';

const fetchHabits = (): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
): Promise<void> => {
  const habits = await axios.get('/api/habits');
  dispatch({ type: FETCH_HABITS, payload: habits.data });
};

export default fetchHabits;
