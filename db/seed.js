require('./config');

// Require models
const userProfile = require('../models/userProfiles.js');

var testPlayer = new userProfile({
  _id: 1234567890,
  f_name: 'Kyle',
  l_name: 'Laverne',
  profileName: "Players prolfile name",
  email: "ldfjsdf@gmail.com",
  avatar: 'Avatar image',
  tictactoe_stats: {
    wins: 34,
    losses: 23,
    draws: 1,
    wl_ratio: 69,
    totalGamesPlayed: 57
  },
  trivia_stats: {
    right_Answers: 244,
    wrong_Answers: 434,
    rw_ratio: 44,
    totalQuestionsAsked: 189,
    totalGamesPlayed: 53
  }
});

testPlayer.save();
