const express = require('express');

const server = express();

const AuthRouter = require('./auth/auth-router');
const UserRouter = require('./users/user-router');

// plug middleware
server.use(express.json());

// ROUTERS
server.use('/api', AuthRouter);
server.use('/api/users', UserRouter);

// catch-all endpoint
server.get('*', handleDefault)
function handleDefault(req, res) {
  res.json('hello and welcome to the WebAuthIII Challenge with Jayne');
}

// listen
server.listen(process.env.PORT || 3000, () => {
  console.log('listening on the server ' + (process.env.PORT || 3000));
})