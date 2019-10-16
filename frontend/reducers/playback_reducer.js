import {PLAY_SONG, PAUSE_SONG, JUST_PLAY_IT} from '../actions/songs_actions';

export default function playbackReducer(state = null, action){
  switch(action.type){
    case PLAY_SONG:
      return {current_song: action.current_song, playing: true}
    case PAUSE_SONG:
      return Object.assign({}, state, {playing: false})
    case JUST_PLAY_IT:
      return Object.assign({}, state, { playing: true })
    default:
      return state;
  }
}