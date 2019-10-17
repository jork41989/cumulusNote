import { connect } from 'react-redux';
import Discover from './discover';
import { requestDiscoverySongs} from '../../actions/songs_actions';
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
  const songId = parseInt(ownProps.match.params.id);
  return {
    requestDiscoverySongs: () => dispatch(requestDiscoverySongs()),

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discover)