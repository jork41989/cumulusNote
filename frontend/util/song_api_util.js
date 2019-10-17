export const fetchASong = songId => ($.ajax({
  url: `/api/songs/${songId}`,
  type: 'GET'
}));


export const fetchAllUsersSongs = (userId) => ($.ajax({
  url: `/api/users/${userId}/songs`,
  type: 'GET'
}));

export const fetchDiscoverySongs = () => ($.ajax({
  url: `/api/songs`,
  type: 'GET'
}))


export const updateSong = (songId, song) => {

  return $.ajax({
    method: `PATCH`,
    url: `/api/songs/${songId}`,
    data: song,
    contentType: false,
    processData: false
  })
}

export const createSong = (song) => {
  return $.ajax({
    method: 'POST',
    url: `/api/songs`,
    data: song,
    contentType: false,
    processData: false
  })
}

export const removeSong = (songId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/songs/${songId}`
  })
}