class Song < ApplicationRecord
  validates :name, presence: true
  validates :user_id, presence: true
  has_one_attached :song_mp3

  belongs_to :user, class_name: "User", foreign_key: :user_id
end
