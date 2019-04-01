var db = require("../models");

module.exports = function (app) {
  // Load home page
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
      res.render("tickets", {
      });
    });

  // Load Login page
  app.get("/login", function (req, res) {
      res.render("login", {
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function (req, res) {
    res.render("404");
  });
};