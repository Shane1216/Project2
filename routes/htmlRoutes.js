
var db = require("../models");

module.exports = function (app) {
  // Load index page
  app.get("/", function (req, res) {
    res.render("index", {
    });
  });

  app.get("/index", function (req, res) {
    res.render("index", {
    });
  });

  // Load Northbound page
  app.get("/northbound", function (req, res) {
    res.render("northbound", {
    });
  });


  // Load Southhbound page
  app.get("/southbound", function (req, res) {
      res.render("southbound", {
      });
    });

  // Load Map page
  app.get("/map", function (req, res) {
      res.render("map", {
      });
    });


  // Load Tickets page
  app.get("/tickets", function (req, res) {
    db.Sunrail_stops.findAll({}).then(function (dbSunrail) {
      res.render("tickets", {
        trains: dbSunrail
      });
    });
  });

  app.get("/login", function (req, res) {
      res.render("login", {
    });
  });

  // Load example page and pass in an example by id
  app.get("/stopid/:id", function (req, res) {
    db.Sunrail_stops.findOne({ where: { id: req.params.id } }).then(function (
      dbSunrail
    ) {
      console.log(dbSunrail);
      res.render("example", {
        trains: dbSunrail
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });

  // Load index page
  app.get("/", function (req, res) {
    db.Sunrail_stops.findAll({}).then(function (dbSunrail) {
      res.render("home", {
        msg: "Welcome!",
        trains: dbSunrail
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/stopid/:id", function (req, res) {
    db.Sunrail_stops.findOne({ where: { id: req.params.id } }).then(function (
      dbSunrail
    ) {
      console.log(dbSunrail);
      res.render("example", {
        trains: dbSunrail
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};