import { combineReducers } from 'redux';
import authReducer from './authReducer';
import habitReducer from './habitReducer';

export default combineReducers({
  authState: authReducer,
  habitsState: habitReducer,
});
