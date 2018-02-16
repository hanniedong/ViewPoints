class CreatePostings < ActiveRecord::Migration[5.1]
  def change
    create_table :postings do |t|
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.string :name
      t.text :description
      t.integer :user_id
      t.string :address
      t.timestamps
    end
  end
end