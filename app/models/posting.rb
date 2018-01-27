class Posting < ApplicationRecord
  belongs_to :poster, class_name: :User, foreign_key: :user_id
  has_many :favorites
end
