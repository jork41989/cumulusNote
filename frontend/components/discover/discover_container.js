import { connect } from 'react-redux';
import Discover from './discover';
import { requestDiscoverySongs} from '../../actions/songs_actions';
import { openModal } from '../../actions/modal_actions';
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
    openModal: modal => dispatch(openModal(modal))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Discover)