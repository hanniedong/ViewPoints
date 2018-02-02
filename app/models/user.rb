class User < ApplicationRecord
  has_secure_password

  validates :email, :first_name, :last_name, presence: true
  validates :email, :password, length: { minimum: 1 }
  validates :email, uniqueness: true

  has_many :postings

  has_many :likes

end