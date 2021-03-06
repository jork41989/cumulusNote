import { requestAllUserSongs, removeASignleSong, playAsong, pauseAsong, justPlayIt} from '../../actions/songs_actions';
import ProfileSongIndex from './profile_songs_index';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  let currentSong;
  let playback;
  if (state.ui.playback) {
    currentSong = state.ui.playback.current_song
    playback = state.ui.playback.playing
  }
  return {
    songs: state.entities.songs,
    currentUser: state.session.currentUser,
    currentSong: currentSong,
    playback: playback
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
 
  return {
  requestAllUserSongs: (userId) => dispatch(requestAllUserSongs(userId)),
    removeASignleSong: (songId) => dispatch(removeASignleSong(songId)),
    playAsong: (song) => dispatch(playAsong(song)),
    pauseAsong: () => dispatch(pauseAsong()),
    justPlayIt: () => dispatch(justPlayIt())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileSongIndex);