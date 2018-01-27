class CreatePostings < ActiveRecord::Migration[5.1]
  def change
    create_table :postings do |t|
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.integer :likes
      t.integer :user_id
      t.timestamps
    end
  end
end