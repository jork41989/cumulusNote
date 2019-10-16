import { RECEIVE_SINGLE_SONG, RECEIVE_ALL_USER_SONGS, REMOVE_SINGLE_SONG } from "../actions/songs_actions"

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SINGLE_SONG:
      return Object.assign({}, state, { [action.payload.song.id]: action.payload.song})
    case RECEIVE_ALL_USER_SONGS:
      return action.songs || {}
    case REMOVE_SINGLE_SONG:
      let newState = Object.assign({}, state)
      delete newState[action.song.song.id]
      return newState
    default:
      return state;
  }
}