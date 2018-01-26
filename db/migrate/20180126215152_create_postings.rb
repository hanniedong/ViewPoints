
class CreatePostings < ActiveRecord::Migration[5.1]
  def change
    create_table :postings do |t|
      t.string :latitude, null: false
      t.string :longitude, null: false
      t.integer :likes
      t.integer :user_id
      t.timestamps
    end
  end
end