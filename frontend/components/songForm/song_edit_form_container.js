import { connect } from 'react-redux';
import {requestSingleSong, updateASong} from '../../actions/songs_actions'
import SongEditForm from './song_edit_form'

const mapStateToProps = (state, ownProps) => {
  const songId = parseInt(ownProps.match.params.id);
  let song = state.entities.songs[songId];
  let errors = state.errors.songs.errors;
  return {
    song,
    songId,
    currentUser: state.session.currentUser,
    errors: errors
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (songId, song) => dispatch(updateASong(songId, song)),
  requestSingleSong: (songId) => dispatch(requestSingleSong(songId))

})

export default connect(mapStateToProps, mapDispatchToProps)(SongEditForm)