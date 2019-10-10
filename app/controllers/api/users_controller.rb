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

  def show 
    @user = User.find_by(id: params[:id])
    render :show
  end

  def update 
    @user = User.find_by(id: params[:id])
    if @user.update(user_params)
      # debugger
      render 'api/users/show'
    else
      # debugger
      render json: @user.errors.full_messages, status: 401
    end
  end

  def index 
    @users = User.all 
    render :index
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password, :f_name, :l_name, :profile_photo)
  end


end
