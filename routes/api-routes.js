'use strict';
const nodemailer = require('nodemailer');
var db = require("../models");

//nodemailer setup with ethereal email account
const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'zu4motzrieoumqo5@ethereal.email',
        pass: 'tJyWevpAKeSfJzX5EK'
    }
});
// Routes
// =============================================================
module.exports = function(app) {
//   GET route for getting all of the posts
  app.get("/api/applicants/", function(req, res) {
    db.Applicant.findAll({})
    .then(function(appPost) {
      res.json(appPost);
    });
  });
  // Get route for returning posts of a specific category
//   app.get("/api/posts/category/:category", function(req, res) {
//     db.Post.findAll({
//       where: {
//         category: req.params.category
//       }
//     })
//     .then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });
  // Get rotue for retrieving a single post
//   app.get("/api/posts/:id", function(req, res) {
//     db.Post.findOne({
//       where: {
//         id: req.params.id
//       }
//     })
//     .then(function(dbPost) {
//       res.json(dbPost);
//     });
//   });
  // POST route for saving a new post
    app.post("/api/applicants", function(req, res) {

      console.log(req.body);
      db.Applicant.create(req.body.applicant)
      .then(function(appPost) {
        res.json(appPost);
      // }).then(function(){
      //     //mail details for nodemailer
      //     let mailOptions = {
      //         from: '"notifications@cap.org" <app@cap.org>', // sender address
      //         to: 'zu4motzrieoumqo5@ethereal.email', // list of receivers
      //         subject: 'Application Submitted', // Subject line
      //         text: req.body.firstname + ' ' + req.body.last_name + ' just sent you a message!', // plain text body
      //         html: '<b>'+req.body.first_name+'</b>' + '</br>' +
      //         ''
      //          // html body
      //     };
      //     transporter.sendMail(mailOptions, (error, info) => {
      //         if (error) {
      //             return console.log(error);
      //         }
      //         console.log('Message sent: %s', info.messageId);
      //         // Preview only available when sending through an Ethereal account
      //         console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
      //         // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
      //         // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      //     });
      // });
        });
    // DELETE route for deleting posts
  //   app.delete("/api/posts/:id", function (req, res) {
  //     console.log(req);
  //     db.Post.destroy({
  //       where: {
  //         id: req.params.id
  //       }
  //     })
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  //   });
    // PUT route for updating posts
  //   app.put("/api/posts", function(req, res) {
  //     db.Post.update(req.body,
  //       {
  //         where: {
  //           id: req.body.id
  //         }
  //       })
  //     .then(function(dbPost) {
  //       res.json(dbPost);
  //     });
  //   });
    })

};