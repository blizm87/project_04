const express = require('express');
const request = require('request');
const router = express.Router();


router.get('/', (req, res, next) => {
  console.log('I made it to mainpage')
  res.redirect('/');
});

module.exports = router;
