const express = require('express');
const User = require('../models/user');
const passport = require('passport');
const router = express.Router();

const { requireJwt, register, signJwtForUser, login, isAdmin } = require('../middleware/auth')

router.use('/admin/', requireJwt, isAdmin)

router.get('/', (req, res) => {
  res.send('Anyone can view this page!')
})

router.get('/protected', requireJwt, (req, res) => {
  res.send('You have a valid token!')
})

router.get('/test', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

router.get('/admin', (req, res) => {
  res.send('Greetings Admin')
})
router.post('/register', register, signJwtForUser)



router.post('/login', login, signJwtForUser)

// router.get('/logout', (req, res) => {
//   req.logout();
//   res.redirect('/');
// });
//
module.exports = router;
