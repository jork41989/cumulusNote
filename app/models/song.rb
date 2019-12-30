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


# A song has a name, a user_id (which is used to find the user who uploaded the song) and creation and updated time stamps.


class Song < ApplicationRecord
  
  validates :name, presence: true
  #verifies that there is name attached to the song before it saves.
  validates :user_id, presence: true
  #verifies that there is user_id attached to the song before it saves.

  has_one_attached :song_mp3
  #Connection to AWS to find its attached MP3 file.
  has_one_attached :song_art
  #Connection to AWS to find its attached cover art file.


  has_many :comments, class_name: "Comment", foreign_key: :song_id
  #Association for all related comments for the song.

  belongs_to :user, class_name: "User", foreign_key: :user_id
  #Association for the user who uploaded the song.



  
  

end
