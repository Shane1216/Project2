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
// app.get("/api/rail_stops/:id", function (req, res) {
  //   db.Sunrail_stop.create(req.body).then(function (data) {
    //     res.json(data);
    // });
    // });
    
    // Get train schedule by station destination
  // app.get("/api/rail_stops/:id", function (req, res) {
  //   db.rail_stop.destroy({ where: { id: req.params.id } }).then(function (data) {
  //     res.json(data);
  //   });
  // });
};

//import the models (as noted above use a db object)
//import express and instantiate your app object

// app.get('/api/', (req, res) => {  
//   db.users.findAll({
//     include: [
//       {
//         model: db.posts,
//         include: [
//           {
//             model: db.comments
//           }
//         ]
//       }
//     ]
//   }).then(users => {
//     const resObj = users.map(user => {

//       //tidy up the user data
//       return Object.assign(
//         {},
//         {
//           user_id: user.id,
//           username: user.username,
//           role: user.role,
//           posts: user.posts.map(post => {

//             //tidy up the post data
//             return Object.assign(
//               {},
//               {
//                 post_id: post.id,
//                 user_id: post.user_id,
//                 content: post.content,
//                 comments: post.comments.map(comment => {

//                   //tidy up the comment data
//                   return Object.assign(
//                     {},
//                     {
//                       comment_id: comment.id,
//                       post_id: comment.post_id,
//                       commenter: comment.commenter_username,
//                       commenter_email: comment.commenter_email,
//                       content: comment.content
//                     }
//                   )
//                 })
//               }
//               )
//           })
//         }
//       )
//     });
//     res.json(resObj)
//   });
// });

