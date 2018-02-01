class AddAttachmentPhotoToPostings < ActiveRecord::Migration[5.1]
  def self.up
    change_table :postings do |t|
      t.attachment :photo
    end
  end

  def self.down
    remove_attachment :postings, :photo
  end
end
