// Requiring necessary npm packages
var express = require("express");

//------------------------------------------------------------------------

var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");

// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 8080;
//requiring our models file to be the same as our db "db"
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
//use express as a url encoded file and set the extension to true
//The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true)
app.use(express.urlencoded({ extended: true }));
//using as a json file
app.use(express.json());
//use the public file as a static place, does not edit -makes it so the css works
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
//the secret sessions is keyboard cat - resave it and don't initialize
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
//use passport in conjunction wit the functions initialize and session
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
//please use htm and api routes to do the things
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});
