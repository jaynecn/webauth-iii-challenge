const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'hello from the api'})
})

router.get('/register', (req, res) => {
  res.status(200).json({ message: 'hello from the api'})
})





module.exports = router;