require 'faker'

User.delete_all
Vote.delete_all
Pitch.delete_all
Round.delete_all
Team.delete_all


  user1 = User.create(name: Faker::Name.name, email: Faker::Internet.email, password: 'password', admin: true )

  15.times do
    User.create!({
      name: Faker::Name.name,
      email: Faker::Internet.email,
      password: 'password',
      admin: false
    })
  end