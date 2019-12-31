json.extract! song, :user_id, :name, :id
if song.song_mp3.attached?
  json.song_mp3 url_for(song.song_mp3)
end

if song.song_art.attached?
  json.song_art url_for(song.song_art)
end

# Returns the requested songs information including the song art and song file from AWS.