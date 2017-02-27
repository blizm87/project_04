var mongoose = require('mongoose');

var userProfiles = new mongoose.Schema({
  _id: Number,
  f_name: String,
  l_name: String,
  profileName: String,
  avatar: String,
  tictactoe_stats: {
    wins: Number,
    losses: Number,
    draw: Number,
    wl_ratio: Number,
    totalGamesPlayed: Number
  },
  trivia_stats: {
    right_Answers: Number,
    wrong_Answers: Number,
    rw_ratio: Number,
    totalQuestionsAsked: Number,
    totalGamesPlayed: Number
  },
  createdAt: { type: Date, default: Date.now }
})

var userProfile = mongoose.model('userProfiles', userProfiles);

module.exports = userProfile;
