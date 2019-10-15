import { connect } from 'react-redux';
import SongForm from './song_form';
import {createAsong} from '../../actions/songs_actions';

const mapStateToProps = (state, ownProps) => {
  let songInfo = {name: "", user_id:""};
  let errors = state.errors.songs.errors;
  return {
    songInfo,
    currentUser: state.session.currentUser,
    errors: errors
  }
}



const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (song) => dispatch(createAsong(song)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SongForm)