import { HabitsState } from './../store/auth/types';
import { HabitActionTypes, FETCH_HABITS } from '../actions/types';
// import { AuthStates, AuthState } from '../store/auth/types';

export default function (state = { habits: null }, action: HabitActionTypes): HabitsState {
  console.log('-- habitReducer --');
  console.log(state);
  console.log(action);

  switch (action.type) {
    case FETCH_HABITS:
      console.log('FETCH_HABITS', action.payload);
      return {
        habits: action.payload || null,
      };
    // return action.payload || false;
    default:
      return state;
  }
}
