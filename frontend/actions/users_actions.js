import { fetchAUser, fetchAllUsers, updateUser } from '../util/api_util';

export const RECEIVE_ALL_USERS = 'RECEIVE_ALL_USERS';
export const RECEIVE_SINGLE_USER = 'RECEIVE_SINGLE_USER';


export const receiveAllUsers = users => ({
  type: RECEIVE_ALL_USERS,
  users
})

export const receiveAUser = user => ({
  type: RECEIVE_SINGLE_USER,
  user
})

export const requestSingleUser = userId => (dispatch) => (
  fetchAUser(userId).then(user => dispatch(receiveAUser(user)))
)

export const requestAllUsers = () => (dispatch) => (
  fetchAllUsers().then(users => dispatch(receiveAUser(users)))
)

export const updateAuser = user => (dispatch) => (
  updateUser(user).then(user => dispatch(receiveAUser(user)))
)