const express = require('express');
const request = require('request');
const router = express.Router();

const client_id = process.env.GOOGLE_CLIENT_ID;
const client_secret = process.env.GOOGLE_CLIENT_SECRET;

router.get('/youtube/login', function(req, res, next){
  if(!process.env.prod) {
    var redirect_uri = 'http://127.0.0.1:3001/auth/youtube/callback';
  } else {
      var redirect_uri = 'https://hidden-reaches-26134.herokuapp.com/auth/youtube/callback';
    }

  const url = 'https://accounts.google.com/o/oauth2/v2/auth';
  const queryParams = `response_type=code&client_id=${client_id}&scope=profile&state=poli&redirect_uri=${redirect_uri}`;
  res.redirect(url + '?' + queryParams);
});

router.get('/youtube/callback', (req, res, next) => {
  if(!process.env.prod) {
    var redirect_uri = 'http://127.0.0.1:3001/auth/youtube/callback';
  } else {
      var redirect_uri = 'https://hidden-reaches-26134.herokuapp.com/auth/youtube/callback';
    }
  const code = req.query.code;
  const state = req.query.state;
  const url = 'https://www.googleapis.com/oauth2/v4/token';
  const form = {
    code,
    client_id,
    client_secret,
    redirect_uri,
    grant_type: 'authorization_code'
  }
  request.post(url, {form}, (err, resp, body) => {
    const data = JSON.parse(body);
    req.session.access_token = data.access_token;
    request.get(`https://www.googleapis.com/plus/v1/people/me?access_token=${req.session.access_token}`, (err, response, bod) => {
      req.session.user_data = bod;
      res.redirect('https://pacific-savannah-27114.herokuapp.com/');
    });
  });
});

router.get('/searchVid', (req, res, next) => {
  console.log('I am the search vid: ' + req.session.access_token);
  console.log(req.query.keyword)
  const url = `https://gdata.youtube.com/feeds/api/users/default/uploads?access_token=${req.session.access_token}`;
  request.get(url, (err, response, body) => {
    res.json(body);
  });
});

router.get('/youtube/signout', function(req, res, next){
  console.log( 'I am the access_token: ' + req.session.access_token)
  req.session.access_token = ' ';
  req.session.user_data = ' ';
  res.redirect('https://pacific-savannah-27114.herokuapp.com/');
});

module.exports = router;
