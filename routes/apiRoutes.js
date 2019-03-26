var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/trains", function(req, res) {
    db.sunrail.findAll({}).then(function(dbSunrail) {
      res.json(dbSunrail);
    });
  });

  // Create a new example
  app.post("/api/trains", function(req, res) {
    db.sunrail.create(req.body).then(function(dbSunrail) {
      res.json(dbSunrail);
    });
  });
};
