import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER, CLEAR_ERRORS} from '../actions/session_actions';
 

const _nullSession = {
   errors: []
 }


 export default ( state = _nullSession, actions) => {
   Object.freeze(state)

   switch (actions.type) {
      case RECEIVE_SESSION_ERRORS:
        return Object.assign({}, {errors: actions.errors});
      case CLEAR_ERRORS:
        return _nullSession
      case RECEIVE_CURRENT_USER:
        return _nullSession
      default:
        return state;
   }
 }
