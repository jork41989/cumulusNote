import {requestAllUserSongs, removeASignleSong} from '../../actions/songs_actions';
import ProfileSongIndex from './profile_songs_index';
import { connect } from 'react-redux';

const mapStateToProps = (state, ownProps) => {
  return {
    songs: state.entities.songs,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
 
  return {
  requestAllUserSongs: (userId) => dispatch(requestAllUserSongs(userId)),
  removeASignleSong: (songId) => dispatch(removeASignleSong(songId))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileSongIndex);