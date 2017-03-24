import * as SessionAPIUtil from '../util/session_api_util';
import { requestAllBooks } from './book_actions';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';
export const USER_LOGOUT = 'USER_LOGOUT';


export const signup = (user) => dispatch => (
  SessionAPIUtil.signup(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = (user) => dispatch => {
  return (SessionAPIUtil.login(user)
    .then(user => dispatch(receiveCurrentUser(user)),
      err => dispatch(receiveErrors(err.responseJSON)))
)};

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
    .then(user => dispatch(receiveCurrentUser(null)))
    .then(() => dispatch(logout_user()))
    .then(() => dispatch(requestAllBooks()))
);



export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS
});

export const logout_user = () => ({
  type: USER_LOGOUT
})
