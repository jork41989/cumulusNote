class Api::SongsController < ApplicationController
  before_action :force_json, only: :search
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
 
  # Creates and saves a song

  def show 
      @song = Song.find_by(id: params[:id])
      @comments = @song.comments
      render :show
  end

  # Returns a requested song

  def index 
    if params[:user_id]
      @user = User.find_by(id: params[:user_id])
      @songs = @user.songs 
    else
      @songs = Song.last(10)
    end
    # debugger
    render :index
  end

  # Returns 10 songs for the discover page

  def destroy
    @song = Song.find_by(id: params[:id])
    @song.destroy

    render :show
  end

  # Deletes a requested song

  def update 
    @song = Song.find_by(id: params[:id])
    if @song.update(song_params)
     
      render 'api/songs/show'
    else
      # debugger
      render json: @song.errors.full_messages, status: 401
    end
  end

  # Updates a requested song with the new information provided

  def search
    @songs = Song.ransack(name_cont: params[:q]).result(distinct: true).limit(5)
  end

  # Searches for a song with the requested string
  



  private

  def force_json
    request.format = :json
  end

  def song_params
    params.require(:song).permit(:name, :user_id, :song_mp3, :song_art)
  end

  # Makes sure the submitted data is related to one of the listed conditions before saving.

end