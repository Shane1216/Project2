var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Sunrail_stops.findAll({}).then(function(dbSunrail) {
      res.render("home", {
        msg: "Welcome!",
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
