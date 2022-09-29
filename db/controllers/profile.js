const { Profile, addProfile } = require('../models/profile.js');


module.exports = {
  createProfile: (req, res) => {
    console.log('made it to controller')
    addProfile(req.body.name, req.body.email, req.body.password, req.body.sex, req.body.birthday, req.body.breed, req.body.address, req.body.weight, req.body.sexed, req.body.vaccinated, req.body.personality, req.body.bio, req.body.photos)
      .then(() => res.status(201).send())
      .catch((err) => {
        console.log('in create profile controllers:', err)
        res.status(500).send()
      })
  }
}