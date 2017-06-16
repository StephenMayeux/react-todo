var express = require('express');
var router = express.Router();
const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');
const passport = require('passport');

// session: false | this option prevents cookie based session from being made
// specify which strategy to use for authentication
const requireAuth = passport.authenticate('jwt', { session: false });
// authenticate user with only an email and password then give them a token
const requireSignin = passport.authenticate('local', { session: false });

// passport middleware will prevent route access if they fail to authenticate
router.post('/signin', requireSignin, Authentication.signin);
router.post('/signup', Authentication.signup);
router.get('/secret', requireAuth, (req, res) => {
  res.send({ secret: 'there are no tacos in the house' })
})

module.exports = router;
