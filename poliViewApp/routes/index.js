const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  console.log('I am rendering the home page');
  res.render('index');
});

module.exports = router;
