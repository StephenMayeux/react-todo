var express = require('express');
var router = express.Router();
const Authentication = require('../controllers/authentication');
const passportService = require('../services/passport');
const passport = require('passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

router.post('/signin', requireSignin, Authentication.signin);
router.post('/signup', Authentication.signup);
router.get('/secret', requireAuth, (req, res) => {
  res.send({ secret: 'there are no tacos in the house' })
})

module.exports = router;
