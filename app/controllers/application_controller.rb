class ApplicationController < ActionController::Base
  
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def current_user
    return nil unless session[:session_token]
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  #Checks to see if there is a current user by looking up the session token

  def logged_in?
    !!current_user
  end

  # Checks to see if there is a current user by running the current_user method and return a boolen.

  def login!(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  # Logs the user in.

  def logout!
    current_user.reset_session_token!
    
    session[:session_token] = nil
    @current_user = nil
  end

  # Logs the user out.

  def require_logged_in
    redirect_to new_session_url unless logged_in?
  end
    
  # ensures the user is logged in before making certain requests.

end
