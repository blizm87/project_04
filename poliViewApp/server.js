require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const hbs = require('express-handlebars');
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
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride('_method'));
app.use(session({secret: 'keyboard cat', resave: false, saveUninitialized: true}));
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'main', layoutsDir: path.join(__dirname, 'views/layouts/')}));
app.set('view engine', 'hbs');

// ROUTES
app.use('/', require('./routes/index'));
app.use('/auth', require('./routes/auth'));
app.use('/mainpage', require('./routes/mainpage'));

// SOCKETS
// const sockets = require('./routes/sockets')(io);

// SERVER
const port = process.env.PORT || 3001;

http.listen(port, () => {
  console.log('Listening on Port: ' + port);
});
