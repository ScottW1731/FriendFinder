var express = require('express');
var bodyParser = require('body-parser');
var apiRoutes = require('./app/routing/apiRoutes')
var htmlRoutes = require('./app/routing/htmlRoutes')

// ---- Setting PORT ------ //
var PORT = process.env.PORT || 5050;

// ---- Ussing Express ---- //
var app = express();

//---- Using static folder -----//
app.use(express.static('public'));

//---- Ussing body-parser ----//
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// --- Declaring Routes -----//
app.use(apiRoutes);
app.use(htmlRoutes);

// --- Start Server (express)----//
app.listen(PORT, function() {
  console.log('App now listening at localhost: ' + PORT);
});
