import { AuthActionTypes, FETCH_USER } from "../actions/types";
import { AuthStates } from "../store/auth/types";

export default function (
  state = { user: null, status: AuthStates.Pending },
  action: AuthActionTypes
) {
  console.log("authReducer");
  console.log(state);
  console.log(action);

  switch (action.type) {
    case FETCH_USER:
      return {
        user: action.payload || null,
        status: action.payload ? AuthStates.LoggedIn : AuthStates.LoggedOut,
      };
    // return action.payload || false;
    default:
      return state;
  }
}
