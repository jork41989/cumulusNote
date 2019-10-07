import {RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';
 

const _nullSession = {
   errors: []
 }


 export default ( state = _nullSession, actions) => {
   Object.freeze(state)

   switch (actions.type) {
      case RECEIVE_SESSION_ERRORS:
        return Object.assign({}, {errors: actions.errors});
      case RECEIVE_CURRENT_USER:
        return _nullSession
      default:
        return state;
   }
 }
