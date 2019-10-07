import {combineReducers} from 'redux';
import sessionsErrorsReducers from './sessions_errors_reducers';

const errorsReducer = combineReducers({
  session: sessionsErrorsReducers
})

export default errorsReducer;