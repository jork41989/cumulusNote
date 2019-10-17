import {combineReducers} from 'redux';
import sessionsErrorsReducers from './sessions_errors_reducers';
import songErrorsReducers from './song_errors_reducer';
import commentErrorsReducer from './comment_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionsErrorsReducers,
  songs: songErrorsReducers,
  comments: commentErrorsReducer
})

export default errorsReducer;