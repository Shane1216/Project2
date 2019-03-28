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

  // // Create a new train
  // app.post("/api/rail_stops/:id", function (req, res) {
  //   db.Sunrail_stop.create(req.body).then(function (data) {
  //     res.json(data);
    // });
  // });

  // // Delete a train by trip id
  // app.delete("/api/rail_stops/:id", function (req, res) {
  //   db.rail_stop.destroy({ where: { id: req.params.id } }).then(function (data) {
  //     res.json(data);
  //   });
  // });
};
