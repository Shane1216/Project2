// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
let db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/allstops", function (req, res) {
    // findAll returns all station table entries when used with no options
    db.Sunrail_stops.findAll({}).then(function (allstops) {
      console.log(allstops);
      res.json(allstops);
    });
  });

  // Get train by station id
  app.get("/api/stopid/:id", function (req, res) {
    db.Sunrail_stops.findOne({ where: { id: req.params.id } }).then(function (stopid) {
      console.log(stopid);
      res.json(stopid);
    });
  });

  // Get train schedule by station origin 
  app.get("/api/direction_id/:id", function (req, res) {
    db.Sunrail_stop.findAll({where: {id: req.params.id} }).then(function (data) {
      res.json(data);
    });
  });

//  Get train schedule by station destination
  app.get("/api", function (req, res) {
    db.rail_stop.findAll({ where: { id: req.params.id } }).then(function (data) {
      res.json(data);
    });
  });


//import the models (as noted above use a db object)
//import express and instantiate your app object

 // Get all passengers
  app.get("/api/all", function(req, res) {
    var dbQuery = "SELECT * FROM passengers";

    connection.query(dbQuery, function(err, result) {
      if (err) throw err;
      res.json(result);
    });
  });

  // Add a Passenger
  app.post("/api/new", function(req, res) {
    console.log("Passenger Data:");
    console.log(req.body);

    var dbQuery = "INSERT INTO passengers (p_email, p_password, p_firstname, p_lastname, p_address1, p_address2, p_state, p_city, p_zip, p_createdat) VALUES (?,?,?,?,?,?,?,?,?, ?)";
  
    connection.query(dbQuery, [req.body.passenger, req.body.created_at], function(err, result) {
      if (err) throw err;
      console.log("Passenger Successfully Saved!");
      res.end();
    });
  });
};

