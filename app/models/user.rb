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

class User < ApplicationRecord

  validates :username, presence: true, uniqueness: true
  validates :session_token, :email, :password_digest, :f_name, :l_name, presence: true
  validates :password, length: { minimum: 6, allow_nil: true }
  
  after_initialize :ensure_session_token

  has_one_attached :profile_photo
  has_one_attached :profile_background
  has_many :comments, class_name: "Comment", foreign_key: :user_id
  has_many :songs, class_name: "Song", foreign_key: :user_id
  attr_reader :password
  #FeGrip

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end
end
