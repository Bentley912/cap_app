// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************
// Dependencies
// =============================================================
var path = require("path");
// Routes
// =============================================================
module.exports = function(app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.
  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });

  app.get("/admin", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/admin.html"));    
  });   
  
  app.get("/emergency_contact", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/emergency.html"));    
  }); 

  app.get("/household", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/household.html"));    
  }); 

  app.get("/income", function(req, res) {
    res.sendFile(path.join(__dirname + "/../public/income.html"));    
  }); 
}
