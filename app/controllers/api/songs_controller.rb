class Api::SongsController < ApplicationController

  def create
 
    @song = Song.new(song_params)
    
    if @song.save
      # debugger
      render 'api/songs/show'
    else
      # debugger
      render json: @song.errors.full_messages, status: 401
    end
  end 


  def show 
      @song = Song.find_by(id: params[:id])
      @comments = @song.comments
      render :show
  end

  def index 
    
    @user = User.find_by(id: params[:user_id])
    @songs = @user.songs 
    # debugger
    render :index
  end

  def destroy
    @song = Song.find_by(id: params[:id])
    @song.destroy

    render :show
  end

  def update 
    @song = Song.find_by(id: params[:id])
    if @song.update(song_params)
     
      render 'api/songs/show'
    else
      # debugger
      render json: @song.errors.full_messages, status: 401
    end
  end

  private

  def song_params
    params.require(:song).permit(:name, :user_id, :song_mp3, :song_art)
  end

end