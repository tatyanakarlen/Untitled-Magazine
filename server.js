const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// to ensure we can read secrets
// from the .env file
require('dotenv').config();
// runs mongoose.connect code
require('./config/database')

const app = express();

app.use(logger('dev'));
app.use(express.json());


// Configure both serve-favicon & static middlewares
// to serve from the production 'build' folder
//app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// below routes for POST requests
app.use('/api/users', require('./routes/api/users'));
app.use('/api/contributorSubmissions', require('./routes/api/contributorSubmissions.js'));

app.use('/api/articleSubmissions', require('./routes/api/articleSubmissions.js'));
// below routes for GET requests
// app.use('/api', require('./routes/api/contributorSubmissions.js'));
// app.use('/api', require('./routes/api/articleSubmissions.js'));







// Put API routes here, before the "catch all" route
///////////
//////////


// The following "catch all" route (note the *)is necessary
// for a SPA's client-side routing to properly work
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });


// Configure to use port 3001 instead of 3000 during
// development to avoid collision with React's dev server
const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});
