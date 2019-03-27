// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our models
let db = require("../models");

module.exports = function (app) {
  // Get all examples
  app.get("/api/stops", function (req, res) {
    // findAll returns all entries for a table when used with no options
    db.Sunrail_stop.findAll({}).then(function (data) {
      res.json(data);
    });
  });

  // Get train by station
  app.get("/api/station/:stopname", function (req, res) {
    db.Sunrail_stop.findAll({ where: { stop_name: req.params.stopname } }).then(function (data) {
      console.log(data);
      res.json(data);
    });
  });

  // Create a new train
  app.post("/api/station", function (req, res) {
    db.Sunrail_stop.create(req.body).then(function (data) {
      res.json(data);
    });
  });

  // // Delete a train by trip id
  // app.delete("/api/rail_stops/:id", function (req, res) {
  //   db.rail_stop.destroy({ where: { id: req.params.id } }).then(function (data) {
  //     res.json(data);
  //   });
  // });
};
