import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';
import logger from "redux-logger";
import thunk from "redux-thunk";

const configureStore = (preloadedState = {}) => {
  if (process.env.NODE_ENV === 'production') {
    return (createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(thunk)
    ))
  } else {
    return (createStore(
      rootReducer,
      preloadedState,
      applyMiddleware(thunk, logger)
    ))
  }

};
export default configureStore;
