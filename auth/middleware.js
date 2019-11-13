const jwt = require('jsonwebtoken');
const secrets = require('../config/secrets');

module.exports = (req, res, next) => {

  const token = req.headers.authorization;

  if (token) {
    jwt.verify(
      token,
      secrets.jwtSecret,
      (error, decodedToken) => {
        if (error) {
          res.status(401).json({ message: 'you shall not pass! ' + error.message})
        } else {
          req.decodedToken = decodedToken;
          next()
        }
      }
    )
  } else {
    res.status(400).json({ message: 'No credentials provided' })
  }
}

