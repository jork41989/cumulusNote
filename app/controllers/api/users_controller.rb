class Api::UsersController < ApplicationController
  def create
    
    @user = User.new(user_params)
    
    if @user.save
      # debugger
      login!(@user)
      render 'api/users/show'
    else
      # debugger
      render json: @user.errors.full_messages, status: 401
    end
  end 

  # Creates and saves a new user



  def show 
    @user = User.find_by(id: params[:id])
    render :show
  end

  # returns a requested users information

  def update 
    @user = User.find_by(id: params[:id])
    if @user.update(user_params)
     
      render 'api/users/show'
    else
      # debugger
      render json: @user.errors.full_messages, status: 401
    end
  end

  # Updates a requested users information

  def index 
    @users = User.all 
    render :index
  end



  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :f_name, :l_name, :profile_photo, :profile_background)
  end

  # Used to verify that the provided information fits in at least one of the provided params.

end
