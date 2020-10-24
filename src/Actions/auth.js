import {microsoftProvider} from '../Util/firebaseConfig'

// Action Types
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_ERROR = 'LOGOUT_ERROR'

// Thunk Action Creators
export const handleLogin = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signInWithPopup(microsoftProvider)
    .then((result) => {
      dispatch({type: LOGIN_SUCCESS});
    })
    .catch((err) => {
      dispatch({type: LOGIN_ERROR});
    })
  }
}

export const handleLogout = () => {
  return (dispatch, getState, {getFirebase}) => {
    const firebase = getFirebase();
    firebase.auth().signOut()
    .then(()=>{
      dispatch({type: LOGOUT_SUCCESS})
    })
    .catch((err) => {
      dispatch({type: LOGOUT_ERROR, err})
    })
  }
}