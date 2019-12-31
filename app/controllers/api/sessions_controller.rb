class Api::SessionsController < ApplicationController

  def create
    
    @user = User.find_by_credentials( params[:user][:username], params[:user][:password])

    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ["Failed to log in"], status: 401
    end
  end

  # Logs a user in.

  def destroy
    @user = current_user
    if @user #Render an empty {} upon successful logout.
      logout!
      render json: {}
    else #Render a 404 message if there is no current_user to logout.
      render json: ["No current user"], status: 404
    end

  end

  # Logs a user out.


end
