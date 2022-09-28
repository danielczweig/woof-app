const Rsvp = require('../models/profile.js');

const saveProfile = (req) => {
  return Rsvp.create({
    Name: req.name,
    Login: {
      Email: req.email,
      Password: req.password
    },
    Sex: req.sex,
    Birthday: req.birthday,
    Breed: req.breed,
    Address: req.address,
    Weight: req.weight,
    Sexed: req.sexed,
    Vaccinated: req.vaccinated,
    Personality: req.personality,
    Bio: req.bio
  })
}

module.exports.saveProfile = saveProfile