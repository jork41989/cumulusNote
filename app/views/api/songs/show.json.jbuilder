json.song do
   json.partial! partial: 'api/songs/song', song: @song
end

json.user do 
  json.extract! @song.user, :username, :id, :f_name, :l_name
  if @song.user.profile_photo.attached? 
    json.profile_photo url_for(@song.user.profile_photo)
  end
end

json.comments do 
  if @comments
    @comments.each do |comment| 
      json.set! comment.id do 
        json.extract! comment, :id, :body, :parent_comment, :created_at
        json.user_id comment.user.id 
        json.user_f_name comment.user.f_name
        json.user_l_name comment.user.l_name
        if comment.user.profile_photo.attached? 
          json.profile_photo url_for(comment.user.profile_photo)
        end
      end
    end
  end
end