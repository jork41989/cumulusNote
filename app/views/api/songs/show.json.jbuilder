json.song do
   json.partial! partial: 'api/songs/song', song: @song
end

json.user do 
  json.extract! @song.user, :username, :id, :f_name, :l_name
  if @song.user.profile_photo.attached? 
  json.profile_photo url_for(@song.user.profile_photo)
end
end