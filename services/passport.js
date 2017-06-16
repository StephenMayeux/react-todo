const passport = require('passport');
const User = require('../models/User');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const LocalStrategy = require('passport-local');

// Create local strategy
// tell local strategy to use a usernameField named 'email' since it expects username by default
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, function(email, password, done) {
  User.findOne({ email: email }, function(err, user) { // looks for user email in db
    if (err) { return done(err); }
    if (!user) { return done(null, false); }
// if no error or user is found then compare password with instance method
// each user instance has access to comparePassword method
// this is because of: UserSchema.methods.comparePassword
    user.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false); }
      // if error is null and the password matches then make call to done with user
      return done(null, user);
      // stores user in req.user for use by the controller in authentication.js
    });
  });
});

// Setup options for JWT Strategy
const jwtOptions = { // tell strategy where to look for the token
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  // look in the header named 'authorization' and use this secret/key to decode it
  secretOrKey: process.env.SECRET
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // check database for user.id aka payload.sub (authentication.js controller)
  User.findById(payload.sub, function(err, user) {
    if (err) { return done(err, false); }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);
