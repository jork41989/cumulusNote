json.comments do
  @comments.each do |comment|
    json.extract! comment, :id, :body, :user_id, :parent_comment
  end
end

# Returns all the requested songs comments information.