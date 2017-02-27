const express = require('express');
const router = express.Router();
const title = 'PoliView Entertainment';

router.get('/', (req, res, next) => {
  console.log('I am rendering the home page');
  res.render('index', {title: title});
});

module.exports = router;
