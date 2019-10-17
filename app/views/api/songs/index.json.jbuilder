json.songs do
  @songs.each do |song|
    json.set! song.id do
      json.extract! song, :id, :name, :user_id
      if song.song_mp3.attached?
        json.song_mp3 url_for(song.song_mp3)
      end

      if song.song_art.attached?
        json.song_art url_for(song.song_art)
      end
      json.user_l_name song.user.l_name
      json.user_f_name song.user.f_name
    end
  end
end