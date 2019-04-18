var express = require('express');
// var bodyParser = require('body-parser');


// ---- Setting PORT ------ //
var PORT = process.env.PORT || 5050;

// ---- Ussing Express ---- //
var app = express();

//---- Using static folder -----//
app.use(express.static('public'));

//---- Ussing body-parser ----//
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// --- Declaring Routes -----//
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// --- Start Server (express)----//
app.listen(PORT, function() {
  console.log('App now listening at localhost: ' + PORT);
});
