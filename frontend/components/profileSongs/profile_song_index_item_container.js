import { playAsong, pauseAsong, justPlayIt, removeASignleSong } from '../../actions/songs_actions';
import ProfileSongIndexItem from './profile_song_index_item';
import { connect } from 'react-redux';


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
    playback: playback
  }
}



const mapDispatchToProps = (dispatch, ownProps) => {

  return {
    removeASignleSong: (songId) => dispatch(removeASignleSong(songId)),
    playAsong: (song) => dispatch(playAsong(song)),
    pauseAsong: () => dispatch(pauseAsong()),
    justPlayIt: () => dispatch(justPlayIt())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileSongIndexItem);
