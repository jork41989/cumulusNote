import { connect } from 'react-redux';
import {requestSingleSong, playAsong, pauseAsong} from '../../actions/songs_actions';
import SongShow from './song_show';

const mapStateToProps = (state, ownProps) => {
  const songId = parseInt(ownProps.match.params.id);
  let song = state.entities.songs[songId];
  let currentSong;
  let playback;
  console.log(state)
  if (song){
    song = Object.assign({}, song)
  }
  if (state.ui.playback){
    currentSong = state.ui.playback.current_song
    playback = state.ui.playback.playing
  }
  return {
    song: song,
    errors: state.errors,
    currentUser: state.session.currentUser,
    currentSong: currentSong,
    playback: playback
  }

}

const mapDispatchToProps = (dispatch, ownProps) => {
  const songId = parseInt(ownProps.match.params.id);
  return {
    requestSingleSong: () => dispatch(requestSingleSong(songId)),
    playAsong: (song) => dispatch(playAsong(song)),
    pauseAsong: () => dispatch(playAsong())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(SongShow)
