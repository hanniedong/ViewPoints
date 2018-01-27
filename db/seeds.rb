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

coords_arr = [[37.774929, -122.419416],
              [37.496341, -122.075454],
              [37.504487, -122.070862],
              [37.496303, -122.088672],
              [37.509616, -122.087942],
              [37.514782, -122.07408],
              [37.502979, -122.100731],
              [37.623895, -122.212654],
              [37.626607, -122.206689],
              [37.621107, -122.20244],
              [37.637189, -122.212783],
              [37.637643, -122.20626],
              [37.651503, -122.197205],
              [37.647375, -122.192741],
              [37.655194, -122.184587],
              [37.651127, -122.192398],
              [37.675537, -122.299515]]


coords_arr.each do |coord|
  Posting.create({ 
                user_id: rand(15),
                latitude: coord[0],
                longitude:coord[1],
                likes: rand(20)
                })
end


  Favorite.create!({
    :user_id => rand(15),
    :posting_id => rand(15),
    :favorited => true 
  })