import { connect } from 'react-redux';
import {requestSingleSong} from '../../actions/songs_actions';
import SongShow from './song_show';

const mapStateToProps = (state, ownProps) => {
  const songId = parseInt(ownProps.match.params.id);
  let song = state.entities.songs[songId]

  if (song){
    song = Object.assign({}, song)
  }

  return {
    song: song,
    errors: state.errors
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  const songId = parseInt(ownProps.match.params.id);
  return {
    requestSingleSong: () => dispatch(requestSingleSong(songId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SongShow)
