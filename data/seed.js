const mongoose = require('mongoose')
const { Profile } = require('../db/models/profile.js')

mongoose.connect('mongodb://localhost:27017/woof')
  .then(() => {
    console.log('MONGO CONNECTION OPEN')
  })
  .catch((err) => {
    console.log(err)
  })

const seedData = [
  {
    "name": "Broggy",
    "login": {
      "Email": "b@gmail.com",
      "Password": "testtesttest"
    },
    "sex": "male",
    "birthday": "06/23/2019",
    "breed": "Pug",
    "address": "90506",
    "weight": 11,
    "sexed": true,
    "vaccinated": true,
    "personality": "lazy",
    "bio": "I have sleep apnea and I'm always hungry, but I make for the best friend you'll ever have!",
    "photos": ['https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80','https://images.unsplash.com/photo-1523626797181-8c5ae80d40c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80','https://images.unsplash.com/photo-1575425186775-b8de9a427e67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80']
  },
  {
    "name": "Sandy",
    "login": {
      "Email": "s@gmail.com",
      "Password": "testtesttest"
    },
    "sex": "female",
    "birthday": "05/20/2017",
    "breed": "Golden Retriever",
    "address": "90321",
    "weight": 25,
    "sexed": true,
    "vaccinated": true,
    "personality": "loving",
    "bio": "Just looking for other amazing dogs to go on runs with",
    "photos": ['https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=662&q=80','https://images.unsplash.com/photo-1510771463146-e89e6e86560e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80']
  },
  {
    "name": "Booper",
    "login": {
      "Email": "boop@gmail.com",
      "Password": "testtesttest"
    },
    "sex": "male",
    "birthday": "05/20/2017",
    "breed": "Corgi",
    "address": "91415",
    "weight": 13,
    "sexed": false,
    "vaccinated": true,
    "personality": "goofy",
    "bio": "I love chasing butterflies and will eat all your food in a second if you're not looking",
    "photos": ['https://media-be.chewy.com/wp-content/uploads/2021/06/29102244/PembrokeWelshCorgi-FeaturedImage.jpg','https://nationaltoday.com/wp-content/uploads/2022/08/18-National-Welsh-Corgi-Day.jpg']
  },
  {
    "name": "Tony",
    "login": {
      "Email": "t@gmail.com",
      "Password": "testtesttest"
    },
    "sex": "male",
    "birthday": "01/13/2020",
    "breed": "Daschund",
    "address": "90421",
    "weight": 8,
    "sexed": false,
    "vaccinated": false,
    "personality": "playful",
    "bio": "Who else likes sniffing butts! okay, just me then??",
    "photos": ['https://images.unsplash.com/photo-1588943211346-0908a1fb0b01?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80']
  },
  {
    "name": "Allie",
    "login": {
      "Email": "a@gmail.com",
      "Password": "testtesttest"
    },
    "sex": "female",
    "birthday": "01/23/2015",
    "breed": "French Bulldog",
    "address": "92132",
    "weight": 8,
    "sexed": true,
    "vaccinated": true,
    "personality": "timid",
    "bio": "I'm a classy lady who enjoys hanging with the boys",
    "photos": ['https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80','https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80']
  },
]

const seedDB = async () => {
  await Profile.deleteMany({});
  await Profile.insertMany(seedData)
}

seedDB().then(() => {
  mongoose.connection.close();
})