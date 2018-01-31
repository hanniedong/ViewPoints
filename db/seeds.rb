require 'faker'

User.destroy_all
Posting.destroy_all


15.times do
  User.create!({
    first_name: Faker::Name.name,
    last_name: Faker::Name.name,
    email: Faker::Internet.email,
    password_digest: 'password',
  })
end

center_point = { lat: 37.76174409364952, lng: -122.40686460327152 }

100.times do 
  Posting.create({ 
    user_id: rand(15),
    latitude: center_point[:lat] + rand(-0.05..0.05),
    longitude: center_point[:lng] + rand(-0.05..0.05),
    description: Faker::Lorem.paragraph(2),
    name: Faker::Address.street_name,
    likes: rand(20)
    })
end


  Favorite.create!({
    :user_id => rand(15),
    :posting_id => rand(15),
    :favorited => true 
  })