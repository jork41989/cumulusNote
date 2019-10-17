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

class Comment < ApplicationRecord
  validates :body, presence: true
  validates :user_id, presence: true
  validates :song_id, presence: true

  belongs_to :user, class_name: "User", foreign_key: :user_id
  belongs_to :song, class_name: "Song", foreign_key: :song_id
end
