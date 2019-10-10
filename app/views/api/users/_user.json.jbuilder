json.extract! user, :username, :id, :f_name, :l_name
if user.profile_photo.attached? 
  json.photoUrl url_for(user.profile_photo)
end