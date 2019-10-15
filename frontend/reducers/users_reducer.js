import { RECEIVE_CURRENT_USER } from "../actions/session_actions"
import { RECEIVE_SINGLE_USER, RECEIVE_ALL_USERS } from "../actions/users_actions"
import {RECEIVE_SINGLE_SONG} from '../actions/songs_actions'




export default (state = {}, action) => {
  Object.freeze(state);

  switch (action.type){
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, {[action.user.id]: action.user})
    case RECEIVE_SINGLE_USER:
      return Object.assign({}, state, {[action.user.id]: action.user})
    case RECEIVE_SINGLE_SONG:
      return Object.assign({}, state, {[action.payload.user.id]: action.payload.user})
    case RECEIVE_ALL_USERS:
      return action.users
    default:
      return state;
  }
}