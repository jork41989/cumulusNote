class Song < ApplicationRecord
  validates :name, presence: true
  validates :user_id, presence: true
  has_one_attached :song_mp3
  has_one_attached :song_art


  belongs_to :user, class_name: "User", foreign_key: :user_id

  private 
  def song_there
    if song_mp3.attached? == false
      errors.add(:song_mp3, 'No song attached')
    end
  end

end
