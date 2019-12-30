# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string
#  session_token   :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  f_name          :string
#  l_name          :string
#

# User Model
# A User has a name, email, password_digest, a session_token, a first name, a last name and time stamps for creation and last update
# A User also has a connection to comments, and a connection to songs for ownership lookup.
# Users also have Profile photo and Profile background connections that link to the AWS storage for their respective files.

class User < ApplicationRecord

  validates :username, presence: true, uniqueness: true
  #makes sure there is only one user with that username.

  validates :session_token, :email, :password_digest, :f_name, :l_name, presence: true
  #makes sure the user has the required feilds before saving the user.

  validates :password, length: { minimum: 6, allow_nil: true }
  #makes sure the users password length is a minimum of 6 when creating their password.
  
  after_initialize :ensure_session_token

  has_one_attached :profile_photo
  has_one_attached :profile_background
  has_many :comments, class_name: "Comment", foreign_key: :user_id
  has_many :songs, class_name: "Song", foreign_key: :user_id
  attr_reader :password

  #Used for loging in a user, it checks that there is a user with that username and then attempts to verify thier password. 
  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  #ensures there is a session token for that user.
  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  #Generates a session token.
  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  #On logout or timeout, resets the users session token.
  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  #Verifies a users entered password against their password digest.
  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  #Sets ths users Password
  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
end
