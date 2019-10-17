import {RECEIVE_COMMENT_ERRORS, RECEIVE_SINGLE_COMMENT, CLEAR_ERRORS} from '../actions/comments_actions';

const _nullSession = {
  errors: []
}

export default (state = _nullSession, actions) => {
  Object.freeze(state)

  switch (actions.type) {
    case RECEIVE_COMMENT_ERRORS:
      return Object.assign({}, { errors: actions.errors });
    case CLEAR_ERRORS:
      return _nullSession
    case RECEIVE_SINGLE_COMMENT:
      return _nullSession
    default:
      return state;
  }
}