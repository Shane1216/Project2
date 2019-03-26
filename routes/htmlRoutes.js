var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.sunrail.findAll({}).then(function(dbSunrail) {
      res.render("index", {
        msg: "Welcome!",
        sunrail: dbSunrail
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/train/:trip_id", function(req, res) {
    db.sunrail.findOne({ where: { trip_id: req.params.trip_id } }).then(function(
      dbSunrail
    ) {
      res.render("train", {
        sunrail: dbSunrail
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
