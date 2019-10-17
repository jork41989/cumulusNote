# == Schema Information
#
# Table name: songs
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Song < ApplicationRecord
  validates :name, presence: true
  validates :user_id, presence: true
  has_one_attached :song_mp3
  has_one_attached :song_art

  has_many :comments, class_name: "Comment", foreign_key: :song_id
  belongs_to :user, class_name: "User", foreign_key: :user_id

  private 
  def song_there
    if song_mp3.attached? == false
      errors.add(:song_mp3, 'No song attached')
    end
  end

end
