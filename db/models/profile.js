const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  name: String,
  Login: {
    email: String,
    password: String
  },
  sex: String,
  birthday: Date,
  breed: String,
  address: String,
  weight: Number,
  sexed: Boolean,
  vaccinated: Boolean,
  personality: String,
  bio: String,
  photos: [String],
  seen: [{ type : mongoose.ObjectId, ref: 'Profile' }],
  connections: [{ type : mongoose.ObjectId, ref: 'Profile' }],
  likes: Number
});

const Profile = mongoose.model('Profile', profileSchema);

const addProfile = (name, email, password, sex, birthday, breed, address, weight, sexed, vaccinated, personality, bio, photos ) => {
  console.log('made it to models, addProfile')
  return Profile.create({
    name: name,
      login: {
        Email: email,
        Password: password
      },
      sex: sex,
      birthday: birthday,
      breed: breed,
      address: address,
      weight: weight,
      sexed: sexed,
      vaccinated: vaccinated,
      personality: personality,
      bio: bio,
      photos: photos
  })
}

module.exports.Profile = Profile;
module.exports.addProfile = addProfile;