const express = require('express');

const router = express.Router();

const Users = require('./user-model');
const restricted = require('../auth/middleware');

// router.get('/', (req, res) => {
//   res.status(200).json({ message: 'hello from users router'})
// })

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(error => {
      res.json({ message: 'error ' + error.message});
    })

 })






module.exports = router;