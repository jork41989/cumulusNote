
json.extract! @comment, :id, :body, :parent_comment, :created_at
      json.user_id @comment.user.id 
      json.user_f_name @comment.user.f_name
      json.user_l_name @comment.user.l_name
if @comment.user.profile_photo.attached? 
        json.profile_photo url_for(@comment.user.profile_photo)
end


# Returns each somments with its owners information including their profile photo from AWS.