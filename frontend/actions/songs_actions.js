import { fetchASong, fetchAllUsersSongs, updateSong, createSong, removeSong} from '../util/song_api_util'

export const RECEIVE_ALL_USER_SONGS = "RECEIVE_ALL_USER_SONGS";
export const RECEIVE_SINGLE_SONG = "RECEIVE_SINGLE_SONG";
export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS";
export const REMOVE_SINGLE_SONG = "REMOVE_SINGLE_SONG"
export const CLEAR_ERRORS = "CLEAR_ERRORS"
const receiveAllUserSongs = songs => ({
  type: RECEIVE_ALL_USER_SONGS,
  songs
})

const receiveASong = song => ({
  type: RECEIVE_SINGLE_SONG,
  song
})


const receiveErrorsSong = errors => ({
  type: RECEIVE_SONG_ERRORS,
  errors
});
const removeASong = songId => {
 type: REMOVE_SINGLE_SONG
}

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
})


export const requestSingleSong = songId => (dispatch) => (
  fetchASong(songId).then(song => dispatch(receiveASong(song)))
)

export const requestAllUserSongs = (userId) => (dispatch) => (
  fetchAllUsersSongs(userId).then(songs => {

    dispatch(receiveAllUserSongs(songs))
    return songs
    
    
    })
)

export const updateASong = (songId, song) => (dispatch) => (
  updateSong(songId, song).then(song => dispatch(receiveASong(song)))
)


export const createAsong = song => dispatch => {
  return createSong(song).then(song => dispatch(receiveASong(song)),
    errors => dispatch(receiveErrorsSong(errors.responseJSON)));
};

export const removeASignleSong = songId => dispatch => {
  return removeSong(songId).then(songId => dispatch(removeASong()))
}