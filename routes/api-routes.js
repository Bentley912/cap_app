'use strict';
const nodemailer = require('nodemailer');
var db = require("../models");

//nodemailer setup with ethereal email account
const transporter = nodemailer.createTransport({
  host: "smtp.office365.com", // hostname
  secureConnection: false, // TLS requires secureConnection to be false
  port: 587, // port for secure SMTP
  auth: {
      user: "egresham@stepupsavannah.org",
      pass: "Eg31401#"
  },
  tls: {
      ciphers:'SSLv3'
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
    return db.Applicant.create(req.body).then(function(appPost){
      // Respond to the HTTP request
      res.send('Successfully posted new Applicant');
      res.end(); // Ensure the response is sent before any emailing is attempted
  
      //mail details for nodemailer
      let mailOptions = {
        from: '"no-reply@CAPapplication" <egresham@stepupsavannah.org>', // sender address
        to: 'egresham@stepupsavannah.org', // list of receivers
        subject: 'Application Submitted', // Subject line
        text: req.body.firstname + ' ' + req.body.last_name + ' just sent you a message!', // plain text body
        html: '<b>'+req.body.first_name+'</b>' + '</br>' +
        ''  + req.body.last_name   + '</br>' +
        'DOB: '
        // html body
      };
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
      });
    });
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
        
};

