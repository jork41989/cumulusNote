import React from 'react';
import { connect } from 'react-redux';
import {playAsong, pauseAsong, justPlayIt} from '../../actions/songs_actions';
import Playback from './playback';

const mapStateToProps = (state, ownProps) => {

  
  if (state.ui.playback){
    return { playing: state.ui.playback.playing, curentSong: state.ui.playback.current_song}
  } else {
    return {}
  }
  

}

const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    playAsong: () => dispatch(playAsong(songId)),
    pauseAsong: () => dispatch(pauseAsong()),
    justPlayIt: () => dispatch(justPlayIt())
  }
}

export default connect(mapStateToProps , mapDispatchToProps)(Playback)