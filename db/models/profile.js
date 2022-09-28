const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  Name: String,
  Login: {
    Email: String,
    Password: String
  },
  Sex: String,
  Birthday: Date,
  Breed: String,
  Address: String,
  Weight: String,
  Sexed: Boolean,
  Vaccinated: Boolean,
  Personality: [String],
  Bio: String,
  Seen: [{ type : mongoose.ObjectId, ref: 'Profile' }],
  Connections: [{ type : mongoose.ObjectId, ref: 'Profile' }],
  Likes: Number
});

const Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;