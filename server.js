require('dotenv').config()
var path = require('path');
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
var express = require('express');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/react-todo');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json({ type: "*/*" }))

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use('/', require('./routes'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
