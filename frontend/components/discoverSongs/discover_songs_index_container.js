import { connect } from 'react-redux';
import { playAsong, pauseAsong, justPlayIt } from '../../actions/songs_actions';
import DiscoverySongIndex from './discover_song_index'
const mapStateToProps = (state, ownProps) => {

  let currentSong;
  let playback;


  if (state.ui.playback) {
    currentSong = state.ui.playback.current_song
    playback = state.ui.playback.playing
  }
  return {
    currentUser: state.session.currentUser,
    currentSong: currentSong,
    playback: playback,
  }

}


const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    playAsong: (song) => dispatch(playAsong(song)),
    pauseAsong: () => dispatch(pauseAsong()),
    justPlayIt: () => dispatch(justPlayIt())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DiscoverySongIndex);
