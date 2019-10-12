import {requestAllUserSongs} from '../../actions/songs_actions';
import ProfileSongIndex from './profile_songs_index';
import { connect } from 'react-redux';

// const mapStateToProps = (state, ownProps) => {
  
// }

const mapDispatchToProps = (dispatch, ownProps) => {
 
  return {
  requestAllUserSongs: (userId) => dispatch(requestAllUserSongs(userId))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(ProfileSongIndex);