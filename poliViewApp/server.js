require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const morgan = require('morgan');
const methodOverride = require('method-override');
const path = require('path');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);

// CONFIG
require('./db/config');
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}))
app.use(methodOverride('_method'));
// app.use(session({secret: 'keyboard cat', resave: false, saveUninitialized: true}));

// ROUTES

// SOCKETS
// const sockets = require('./routes/sockets')(io);

// SERVER
const port = process.env.PORT || 3000;

http.listen(port, () => {
  console.log('Listening on Port: ' + port);
});
