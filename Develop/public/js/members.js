$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page updates the class text with date and email

  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.email);
  });
});
