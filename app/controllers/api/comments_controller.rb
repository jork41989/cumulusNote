class Api::CommentsController < ApplicationController


  def create
 
      @comment = Comment.new(comment_params)
      
      if @comment.save
        # debugger
        render 'api/comments/show'
      else
        # debugger
        render json: @comment.errors.full_messages, status: 401
      end
  end 

def destroy
  @comment = Comment.find_by(id: params[:id])
  @comment.destroy

  render :show
end

def update 
    @comment = Comment.find_by(id: params[:id])
    if @comment.update(comment_params)
     
      render 'api/comment/show'
    else
      # debugger
      render json: @comment.errors.full_messages, status: 401
    end
end

def index 
    
    @song = Song.find_by(id: params[:song_id])
    @comments = @song.comments 
    # debugger
    render :index
end




  private

  def comment_params
    params.require(:comment).permit(:body, :user_id, :parent_comment, :song_id)
  end
end