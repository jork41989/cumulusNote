# == Schema Information
#
# Table name: comments
#
#  id             :bigint           not null, primary key
#  body           :string           not null
#  user_id        :integer          not null
#  parent_comment :integer
#  song_id        :integer          not null
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

# A comment has a body, a user_id (for ownership), a (possible) parent comment, a song_id (the song where the comment was created), and time stamps for creation and updates.
class Comment < ApplicationRecord
  validates :body, presence: true
  # Makes sure there is a body before saving
  validates :user_id, presence: true
  # Makes sure there is a user_id (owner) attached before saving.
  validates :song_id, presence: true
  # Makes sure there is a song_id (The song where the comment belongs) attached before saving.

  belongs_to :user, class_name: "User", foreign_key: :user_id
  # Association for user who created the comment.
  belongs_to :song, class_name: "Song", foreign_key: :song_id
  # Association for the song where the comment should be displayed.
end
