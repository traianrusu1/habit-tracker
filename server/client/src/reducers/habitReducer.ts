import { HabitsState } from './../store/auth/types';
import {
  HabitActionTypes,
  FETCH_HABITS,
  CREATE_HABIT,
  DELETE_HABIT,
  PATCH_HABIT,
} from '../actions/types';
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
    case CREATE_HABIT:
      console.log('CREATE_HABIT', action.payload);
      return state;
    // return { ...state, [...state.habits] };
    // return action.payload || false;
    case DELETE_HABIT:
      console.log('DELETE_HABIT', action.payload);
      return state;
    case PATCH_HABIT:
      console.log('PATCH_HABIT', action.payload);
      return state;
    default:
      return state;
  }
}
