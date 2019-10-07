export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

import * as Util from "../util/session_api_util"

const receiverCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const signup = user => dispatch => {
  return Util.signup(user).then(user => dispatch(receiverCurrentUser(user)),
  errors => dispatch(receiveErrors(errors.responseJSON)) );
};

export const login = user => dispatch => {
  return Util.login(user).then(user => dispatch(receiverCurrentUser(user)),
    errors => dispatch(receiveErrors(errors.responseJSON)));
}

export const logout = () => dispatch => {
  return Util.logout().then(() => dispatch(logoutCurrentUser()));
};

