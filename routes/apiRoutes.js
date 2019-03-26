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
};

  // // Create a new example
  // app.post("/api/rail_stop", function(req, res) {
  //   db.rail_stop.create(req.body).then(function(dbRail_stop) {
  //     res.json(dbExample);
  //   });
  // });

  // Delete an example by id
  //   app.delete("/api/rail_stop/:id", function(req, res) {
  //     db.rail_stop.destroy({ where: { id: req.params.id } }).then(function(dbRail_stop) {
  //       res.json(dbExample);
  //     });
// });

