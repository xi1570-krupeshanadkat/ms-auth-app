import { LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_ERROR, LOGOUT_SUCCESS } from "../actions/auth";

const initialState = {
  authError: null
}

// Authed User Reducer
const auth = (state = initialState, action) => {
  switch(action.type){
    case LOGIN_ERROR:
      return {
        ...state,
        authError: 'Login Failed'
      };
    
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null
      }
    
    case LOGOUT_SUCCESS:
      return state;

    case LOGOUT_ERROR:
      return {
        ...state,
        authError: 'Logout Failed'
      };

    default:
      return state;
  }
}

export default auth;