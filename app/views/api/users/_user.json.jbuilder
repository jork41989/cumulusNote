json.extract! user, :username, :id, :f_name, :l_name
if user.profile_photo.attached? 
  json.profile_photo url_for(user.profile_photo)
end
if user.profile_background.attached? 
  json.profile_background url_for(user.profile_background)
end

# Returns the requested users information including their profile photo and profile background photo from AWS.