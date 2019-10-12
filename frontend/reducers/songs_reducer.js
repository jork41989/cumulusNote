import { RECEIVE_SINGLE_SONG, RECEIVE_ALL_USER_SONGS, REMOVE_SINGLE_SONG } from "../actions/songs_actions"

export default (state = {}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_SINGLE_SONG:
      return Object.assign({}, state, {[action.song.id]: action.song})
    case RECEIVE_ALL_USER_SONGS:
      return Object.assign({}, state, action.songs)
    case REMOVE_SINGLE_SONG:
      let newState = Object.assign({}, state)
      delete newState[action.song.id]
      return newState
    default:
      return state;
  }
}