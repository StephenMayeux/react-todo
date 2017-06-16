var express = require('express');
var router = express.Router();

router.use('/auth', require('./auth'))

router.get('/', (req, res) => {
  res.send({ msg: 'Hello there,  handsome' })
});

module.exports = router;
