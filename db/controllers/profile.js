const { Profile, findProfile, findProfiles, addProfile } = require('../models/profile.js');


module.exports = {
  getProfile: (req, res) => {
    findProfile(req.params.id)
      .then((data) => {
        res.send(data)
      })
      .catch((err) => {
        console.log('err in controllers, getProfile:', err)
        res.status(500).send()
      })
  },
  getProfiles: (req, res) => {
    findProfiles()
      .then((data) => {
        res.send(data)})
      .catch((err) => {
        console.log('err in controllers, getProfiles:', err)
        res.status(500).send()
      })
  },
  createProfile: (req, res) => {
    addProfile(req.body.name, req.body.email, req.body.password, req.body.sex, req.body.birthday, req.body.breed, req.body.address, req.body.weight, req.body.sexed, req.body.vaccinated, req.body.personality, req.body.bio, req.body.photos)
      .then(() => res.status(201).send())
      .catch((err) => {
        console.log('err in controllers, createProfile:', err)
        res.status(500).send()
      })
  }
}