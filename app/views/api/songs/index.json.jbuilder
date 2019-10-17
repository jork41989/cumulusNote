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
      json.user do 
          json.extract! song.user, :username, :id, :f_name, :l_name
          if song.user.profile_photo.attached? 
            json.profile_photo url_for(song.user.profile_photo)
          end
    end
    end
  end
end