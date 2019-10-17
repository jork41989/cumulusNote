import {RECEIVE_SINGLE_COMMENT} from '../actions/comments_actions'
import { RECEIVE_SINGLE_SONG } from '../actions/songs_actions'
export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_SONG:
      return action.payload.comments || {}
    case RECEIVE_SINGLE_COMMENT:
      return Object.assign({}, state, { [action.comment.id]: action.comment })
    default:
      return state
}
}