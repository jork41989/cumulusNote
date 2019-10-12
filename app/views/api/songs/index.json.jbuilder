json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :name, :user_id
      if song.song_mp3.attached?
        json.song_mp3 url_for(song.song_mp3)
      end
    end
  end
end