import { HabitsState } from './../store/auth/types';
import { HabitActionTypes, FETCH_HABITS } from '../actions/types';
// import { AuthStates, AuthState } from '../store/auth/types';

export default function (state = { habits: null }, action: HabitActionTypes): HabitsState {
  console.log('authReducer');
  console.log(state);
  console.log(action);

  switch (action.type) {
    case FETCH_HABITS:
      return {
        habits: action.payload || null,
      };
    // return action.payload || false;
    default:
      return state;
  }
}
