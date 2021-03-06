import { signup, login, logout, demoLogin } from '../util/session_api_util'

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const CLEAR_SESSION_ERRORS = "CLEAR_SESSION_ERRORS";

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveSessionErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const clearSessionErrors = () => ({
  type: CLEAR_SESSION_ERRORS,
});

export const createUser = formUser => dispatch => signup(formUser)
  .then(user => dispatch(receiveCurrentUser(user)))
  .fail(errors => (dispatch(receiveSessionErrors(errors.responseJSON))));

export const loginUser = formUser => dispatch => login(formUser)
  .then(user => dispatch(receiveCurrentUser(user)))
  .fail(errors => (dispatch(receiveSessionErrors(errors.responseJSON))));

export const logoutUser = () => dispatch => logout()
  .then(() => dispatch(logoutCurrentUser()))
  .fail(errors => (dispatch(receiveSessionErrors(errors.responseJSON))));

export const loginDemo = () => dispatch => demoLogin()
  .then(demoUser => dispatch(receiveCurrentUser(demoUser)))
  .fail(errors => (dispatch(receiveSessionErrors(errors.responseJSON))));
