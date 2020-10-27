// This is middleware for restricting routes a user is not allowed to visit if not logged in
module.exports = function(req, res, next) {
  // If the user is logged in, continue with the request to the restricted route
  if (req.user) {
    //go to next
    return next();
  }

  // If the user isn't logged in, redirect them to the login page
  // returns to the main page
  return res.redirect("/");
};
