const jwt = require('jwt-simple');
const User = require('../models/user');

function tokenForUser(user) { // make token by encoding user info with our salt/secret
  // we can later verify tokens with user info and our stored secret
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, process.env.SECRET);
}

exports.signin = function(req, res, next) { // give user their identifying token
  // token lets them access hidden routes and data pertaining to them
  res.send({ token: tokenForUser(req.user), user: req.user });
}

exports.signup = function(req, res, next) {
  const email = req.body.email;
  const password = req.body.password;

  if (!email || !password) {
    return res.status(422).send({ error: 'You must provide email and password'});
  }

  User.findOne({ email: email }, function(err, existingUser) { // find user by email
    if (err) { return next(err); }

    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    const user = new User({ // create new instance of the User model/schema
      email: email,
      password: password
    });

    user.save(function(err) { // save user to database and send back token
      if (err) { return next(err); }
      res.json({ token: tokenForUser(user), user: user });
    });
  });
}
