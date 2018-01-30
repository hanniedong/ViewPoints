class CreatePostings < ActiveRecord::Migration[5.1]
  def change
    create_table :postings do |t|
      t.decimal :latitude, null: false
      t.decimal :longitude, null: false
      t.string :name
      t.text :description
      t.integer :likes
      t.integer :user_id
      t.timestamps
    end
  end
end