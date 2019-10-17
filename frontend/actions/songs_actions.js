import { fetchASong, fetchAllUsersSongs, updateSong, createSong, removeSong, fetchDiscoverySongs} from '../util/song_api_util'

export const RECEIVE_ALL_USER_SONGS = "RECEIVE_ALL_USER_SONGS";
export const RECEIVE_SINGLE_SONG = "RECEIVE_SINGLE_SONG";
export const RECEIVE_SONG_ERRORS = "RECEIVE_SONG_ERRORS";
export const REMOVE_SINGLE_SONG = "REMOVE_SINGLE_SONG";
export const CLEAR_ERRORS = "CLEAR_ERRORS";
export const PLAY_SONG = "PLAY_SONG";
export const PAUSE_SONG ="PAUSE_SONG";
export const JUST_PLAY_IT = "JUST_PLAY_IT"
const receiveAllUserSongs = payload => ({
  type: RECEIVE_ALL_USER_SONGS,
  songs: payload.songs
})

const receiveASong = payload => ({
  type: RECEIVE_SINGLE_SONG,
  payload
})


const receiveErrorsSong = errors => ({
  type: RECEIVE_SONG_ERRORS,
  errors
});
const removeASong = song => ({
 type: REMOVE_SINGLE_SONG,
 song
})

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
})

export const playAsong = song => ({
  type: PLAY_SONG,
  current_song: song
})

export const pauseAsong = () =>({
  type: PAUSE_SONG
})

export const justPlayIt = () =>({
  type: JUST_PLAY_IT
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

export const requestDiscoverySongs = () => (dispatch) => (
  fetchDiscoverySongs().then(songs => {
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

export const removeASignleSong = song => dispatch => {
  return removeSong(song).then(song => dispatch(removeASong(song)))
}