const jwt = require('jsonwebtoken');

module.exports = {
  restricted
}




function restricted(req, res, next) {
  // Authorization
  const token = req.headers.authorization;
  // if (token && inWhiteList(token)) {
  // if (token && !inBlacklist(token)) {
  if (token) {
    // check token, if good, just next()
    jwt.verify(
      token,
      'THIS IS THE SECRET',
      (err, decodedToken) => {
        if (err) {
          // this would mean the token is bad
          res.status(401).json({ message: 'bad token'})
        } else {
          // happy path
          req.decodedToken = decodedToken;
          next()
        }
      }
    )
  } else {
    res.status(400).json({ message: 'No credentials provided' })
  }
}

