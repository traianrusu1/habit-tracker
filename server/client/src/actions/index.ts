import axios from 'axios';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { FETCH_USER } from './types';
import { RootState } from '../store/auth/types';

const fetchUser = (): ThunkAction<void, RootState, unknown, Action<string>> => async (
  dispatch,
): Promise<void> => {
  const user = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: user.data });
};

export default fetchUser;
