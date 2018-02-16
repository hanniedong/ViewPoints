class Like < ApplicationRecord
  belongs_to :user
  belongs_to :posting
end

  def as_json(_opts = {})
    {
      user_id: user_id,
      posting_id: posting_id
    }
  end