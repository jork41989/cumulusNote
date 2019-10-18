import {RECEIVE_SINGLE_COMMENT, REMOVE_SINGLE_COMMENT} from '../actions/comments_actions'
import { RECEIVE_SINGLE_SONG } from '../actions/songs_actions'
export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_SONG:
      return action.payload.comments || {}
    case RECEIVE_SINGLE_COMMENT:
      console.log(action.comment)
      return Object.assign({}, state, { [action.comment.id]: action.comment })
    case REMOVE_SINGLE_COMMENT:
      let newState = Object.assign({}, state)
      delete newState[action.comment.id]
      return newState
    default:
      return state
}
}