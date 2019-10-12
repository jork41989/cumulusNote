json.extract! song, :user_id, :name, :id
if song.song_mp3.attached?
  json.song_mp3 url_for(song.song_mp3)
end