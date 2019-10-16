import { combineReducers } from 'redux';

import modal from './modal_reducer';
import playback from './playback_reducer'

export default combineReducers({
  modal,
  playback
});
