    
var db = require("../models");

module.exports = function(app) {
 // Load index page
 app.get("/", function(req, res) {
   db.Sunrail_stops.findAll({}).then(function(dbSunrail) {
     res.render("index", {
       msg: "Welcome!",
       trains: dbSunrail
     });
   });
 });

 // Load Northbound page
 app.get("/northbound", function(req, res) {
   db.Sunrail_stops.findAll({}).then(function(dbSunrail) {
     res.render("northbound", {
       trains: dbSunrail
     });
   });
 });

 // Load Southhbound page
 app.get("/southbound", function(req, res) {
   db.Sunrail_stops.findAll({}).then(function(dbSunrail) {
     res.render("southbound", {
       trains: dbSunrail
     });
   });
 });

 // Load Map page
 app.get("/map", function(req, res) {
   db.Sunrail_stops.findAll({}).then(function(dbSunrail) {
     res.render("map", {
       trains: dbSunrail
     });
   });
 });

 // Load Tickets page
 app.get("/tickets", function(req, res) {
   db.Sunrail_stops.findAll({}).then(function(dbSunrail) {
     res.render("tickets", {
       trains: dbSunrail
     });
   });
 });

 app.get("/login", function(req, res) {
   db.Sunrail_stops.findAll({}).then(function(dbSunrail) {
     res.render("login", {
       trains: dbSunrail
     });
   });
 });

 // Load example page and pass in an example by id
 app.get("/stop/:id", function(req, res) {
   db.Sunrail_stops.findOne({ where: { id: req.params.id } }).then(function(
     dbSunrail
   ) {
     console.log(dbSunrail);
     res.render("example", {
       trains: dbSunrail
     });
   });
 });

 // Render 404 page for any unmatched routes
 app.get("*", function(req, res) {
   res.render("404");
 });
};