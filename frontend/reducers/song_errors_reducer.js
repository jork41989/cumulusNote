import {RECEIVE_SONG_ERRORS, RECEIVE_SINGLE_SONG, CLEAR_ERRORS} from '../actions/songs_actions';

const _nullSession = {
  errors: []
}

export default (state = _nullSession, actions) => {
  Object.freeze(state)

  switch (actions.type) {
    case RECEIVE_SONG_ERRORS:
      return Object.assign({}, { errors: actions.errors });
    case CLEAR_ERRORS:
      return _nullSession
    case RECEIVE_SINGLE_SONG:
      return _nullSession
    default:
      return state;
  }
}