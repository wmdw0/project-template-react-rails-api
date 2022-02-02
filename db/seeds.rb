# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🌱 Seeding spices..."

# Spice Data from spicejungle.com
# User.create!([
#   {
#     displayName: "Shunryu",
#     username: "@shunryusuzuki",
#     verified: true,
#     text: "Author",
#     avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F8e%2F96%2Fd0%2F8e96d0739b2be6fcd685f12372e9806b.jpg&f=1&nofb=1",
#     image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc6%2F28%2F4d%2Fc6284d148a7bd89a86d9a8f7eb03224f.jpg&f=1&nofb=1",
#   },
  # {
  #   displayName: "Steven",
  #   username: "@steven123",
  #   verified: true,
  #   text: "NYC",
  #   avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FfHWDktXMaaltwjIRt-vpB60qO_w%3D%2F0x72%3A2360x1308%2Ffit-in%2F1200x630%2Fcdn2.vox-cdn.com%2Fuploads%2Fchorus_asset%2Ffile%2F8182395%2F519635264.jpg&f=1&nofb=1",
  #   image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc6%2F28%2F4d%2Fc6284d148a7bd89a86d9a8f7eb03224f.jpg&f=1&nofb=1"
  # },
  # {
  #   displayName: "Peter Wong",
  #   username: "@peterwong23",
  #   verified: true,
  #   text: "Testing",
  #   avatar: "https://randomuser.me/api/portraits/men/90.jpg",
  #   image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc6%2F28%2F4d%2Fc6284d148a7bd89a86d9a8f7eb03224f.jpg&f=1&nofb=1"
  # },
  # {
  #   displayName: "Test2",
  #   username: "@testuser2",
  #   verified: true,
  #   text: "Testing2",
  #   avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F8e%2F96%2Fd0%2F8e96d0739b2be6fcd685f12372e9806b.jpg&f=1&nofb=1",
  #   image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc6%2F28%2F4d%2Fc6284d148a7bd89a86d9a8f7eb03224f.jpg&f=1&nofb=1"
  # },
  # {
  #   displayName: "Test3",
  #   username: "@testuser3",
  #   verified: true,
  #   text: "Testing3",
  #   avatar: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2F8e%2F96%2Fd0%2F8e96d0739b2be6fcd685f12372e9806b.jpg&f=1&nofb=1",
  #   image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc6%2F28%2F4d%2Fc6284d148a7bd89a86d9a8f7eb03224f.jpg&f=1&nofb=1"
  # },
  # {
  #   displayName: "Test4",
  #   username: "@testuser4",
  #   verified: true,
  #   text: "Testing4",
  #   avatar: "https://randomuser.me/api/portraits/men/88.jpg",
  #   image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc6%2F28%2F4d%2Fc6284d148a7bd89a86d9a8f7eb03224f.jpg&f=1&nofb=1"
  # },
  # {
  #   displayName: "Test5",
  #   username: "@testuser5",
  #   verified: true,
  #   text: "Testing5",
  #   avatar: "https://randomuser.me/api/portraits/men/88.jpg",
  #   image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc6%2F28%2F4d%2Fc6284d148a7bd89a86d9a8f7eb03224f.jpg&f=1&nofb=1"
  # },
  # {
  #   displayName: "Test6",
  #   username: "@testuser6",
  #   verified: true,
  #   text: "Testing6",
  #   avatar: "https://randomuser.me/api/portraits/men/88.jpg",
  #   image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc6%2F28%2F4d%2Fc6284d148a7bd89a86d9a8f7eb03224f.jpg&f=1&nofb=1"
  # },
  # {
  #   displayName: "Test7",
  #   username: "@testuser7",
  #   verified: true,
  #   text: "Testing7",
  #   avatar: "https://randomuser.me/api/portraits/men/88.jpg",
  #   image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc6%2F28%2F4d%2Fc6284d148a7bd89a86d9a8f7eb03224f.jpg&f=1&nofb=1"
  # },
#   {
#     displayName: "Test8",
#     username: "@testuser8",
#     verified: true,
#     text: "Testing8",
#     avatar: "https://randomuser.me/api/portraits/men/88.jpg",
#     image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.pinimg.com%2Foriginals%2Fc6%2F28%2F4d%2Fc6284d148a7bd89a86d9a8f7eb03224f.jpg&f=1&nofb=1"
#   }
# ])
Notification.create!([
  {
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F580b57fcd9996e24bc43c53e.png&f=1&nofb=1",
    message: "@user2 followed you",
    time: 1,
  },
  {
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F580b57fcd9996e24bc43c53e.png&f=1&nofb=1",
    message: "@user4 retweeted your tweet",
    time: 5,
  },
  {
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F580b57fcd9996e24bc43c53e.png&f=1&nofb=1",
    message: "@user4 liked your tweet",
    time: 15,
  },
  {
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F580b57fcd9996e24bc43c53e.png&f=1&nofb=1",
    message: "@user3 followed you",
    time: 30,
  },
  {
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F580b57fcd9996e24bc43c53e.png&f=1&nofb=1",
    message: "@user3 liked your tweet",
    time: 45,
  }
])

Trending.create!([
  {
    topic: "NBA",
    status: "Trending",
    title: "Westbrook posterizes Gobert in Lakers W over Jazz",
    description: "In the Lakers’ 101-95 win over the Utah Jazz on Tuesday, Westbrook delivered a vicious one-handed dunk in the second quarter over Jazz center Rudy Gobert.",
    image_url: "https://lebronwire.usatoday.com/wp-content/uploads/sites/37/2022/01/1365284746.jpg?resize=1638,2048", 
  },
  {
    topic: "NFL",
    status: "Trending",
    title: "Mahomes tears apart Steelers defense with 5-TD performance",
    description: "Patrick Mahomes throws for 404 yards and five touchdowns as the Chiefs defeat the Steelers and move on to the divisional round.",
    image_url: "https://chiefswire.usatoday.com/wp-content/uploads/sites/70/2022/01/USATSI_17517989.jpg?w=1000&h=600&crop=1",
  },
  {
    topic: "NBA",
    status: "Trending",
    title: "Barrett, Randle power Knicks past Hawks for 3rd straight win",
    description: "RJ Barrett scored 26 points, Julius Randle added 24 and the New York Knicks beat the Atlanta Hawks 117-108 on Saturday night for their third straight victory.",
    image_url: "https://a.espncdn.com/media/motion/2022/0110/ss_20220110_214212670_18588021330/ss_20220110_214212670_18588021330.jpg"
  },
  {
    topic: "NBA",
    status: "Trending",
    title: "Brooklyn Nets expect Kevin Durant to miss 4-6 weeks with sprained MCL",
    description: "After the Brooklyn Nets diagnosed All-NBA forward Kevin Durant with a sprained MCL of his left knee, the franchise expects a four- to six-week rehabilitation before his return, sources told ESPN.",
    image_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.si.com%2F.image%2Ft_share%2FMTg2NzI3NDU5MTQyNTEwMDYz%2Fkevin-durant.jpg&f=1&nofb=1",
  },
  {
    topic: "NFL",
    status: "Trending",
    title: "Matthew Stafford leads Los Angeles Rams to dominant win over Arizona Cardinals",
    description: "The Los Angeles Rams breezed through their wildcard game against the Arizona Cardinals 34-11, with quarterback Matthew Stafford securing his first ever playoff win.",
    image_url: "https://s.yimg.com/ny/api/res/1.2/jgdUS0eYoR9snP9DRLA4uA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTU0MDtjZj13ZWJw/https://s.yimg.com/uu/api/res/1.2/yE6B2N9BEFYykG1iowRojA--~B/aD0xNDkzO3c9MjY1NTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/pa-sport.com/1b138a73eea9d7c36e6a913f78faa3cf"
  },
])

Tweet.create!([
  {
    user_id: 1,
    content: "NYC",
    location: "69 Park Ave, New York, NY",
    image: "https://images.unsplash.com/photo-1640666198458-8cfebc96f594?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTc3fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60.jpg",
    # likes: 7,
  },
  {
    user_id: 2,
    content: "Snow",
    location: "Madison Square Park, Manhattan, NY",
    image: "https://images.unsplash.com/photo-1641004594288-9d87c13c8462?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=712&q=80",
    # likes: 12,
  },
  {
    user_id: 2,
    content: "Test",
    location: "Manhattan, NY",
    image: "https://images.unsplash.com/photo-1636886519725-6a048800b5b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    # likes: 14
  }
])

Notification.create!([
  {
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F580b57fcd9996e24bc43c53e.png&f=1&nofb=1",
    message: "@user2 followed you",
    time: 1,
  },
  {
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F580b57fcd9996e24bc43c53e.png&f=1&nofb=1",
    message: "@user4 retweeted your tweet",
    time: 5,
  },
  {
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F580b57fcd9996e24bc43c53e.png&f=1&nofb=1",
    message: "@user4 liked your tweet",
    time: 15,
  },
  {
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F580b57fcd9996e24bc43c53e.png&f=1&nofb=1",
    message: "@user3 followed you",
    time: 30,
  },
  {
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.stickpng.com%2Fassets%2Fimages%2F580b57fcd9996e24bc43c53e.png&f=1&nofb=1",
    message: "@user3 liked your tweet",
    time: 45,
  }
])


puts "✅ Done seeding!"
