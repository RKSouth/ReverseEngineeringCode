// include modules that exist in separate files - passport, models and passport local
var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
//set db (database) equal to the contents of models file (containing our index and user .js)
var db = require("../models");

// Telling passport we want to use a Local Strategy. In other words, we want login with a username/email and password
passport.use(new LocalStrategy(
  // Our user will sign in using an email, rather than a "username"
  {
    usernameField: "email"
  },
  // a function that tells us if we are done, takes in email and password to see if they are correct, if they aren't correct return a message
  function(email, password, done) {
    // When a user tries to sign in this code runs
    db.User.findOne({
      where: {
        email: email
      }
    }).then(function(dbUser) {
      // If there's no user with the given email
      if (!dbUser) {
        // call it not done( done is false) and returns message of incorrect
        return done(null, false, {
          message: "Incorrect email."
        });
      }
      // If there is a user with the given email, but the password the user gives us is incorrect

      else if (!dbUser.validPassword(password)) {
         // call it not done( done is false) and returns message of incorrect
        return done(null, false, {
          message: "Incorrect password."
        });
      }
      // If none of the above, return the user
      return done(null, dbUser);
    });
  }
));

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
//gets the id associated with all the current logged in data and saves it (temporarily) to the browser- deserialize looks up additional attributes after serialize grabs
passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

// Exporting our configured passport
module.exports = passport;
