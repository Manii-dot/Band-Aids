// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
let nodemailer = require('nodemailer');

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(function() {
        res.redirect(307, "/api/login");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });
  app.post("/api/mail", function(req, res){
    console.log(req.body);
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: "band.aid.nodemailer@gmail.com",
        pass: "Test#Test2020",
      },
    });
  
    // send mail with defined transport object
    let mailOptions = {
      from: '"Band-Aid Development Team" <band.aid.nodemailer@gmail.com>',
      to: req.body.email,
      subject: 'Welcome to Band-Aid!',
      html: '<h1>Welcome to Band-Aid!</h1><p>We are excited to have a new member share, explore, and discover music events happening around the world!</p>'
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log(info)
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
  })
  //Route for creating new event
  app.post("/api/addevent", function(req, res) {
    db.Event.create({
      place: req.body.place,
      date: req.body.date,
      user_id: req.body.user_id,
      band: req.body.band,
      description: req.body.description,
      genre: req.body.genre,
      image: req.body.image
    })
      .then(function() {
        res.redirect(307, "/");
      })
      .catch(function(err) {
        res.status(401).json(err);
      });
  });

  app.get("/api/events", function(req, res) {
    db.Event.findAll({}).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  app.get("/api/events/user/:user_id", function(req, res) {
    db.Event.findAll({
      where: {
        user_id: req.params.user_id
      }
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  app.delete("/api/event/:id", function(req, res) {
    db.Event.destroy({
      where: {
        id: req.params.id
      }
    }).then(function() {
      res.end();
    });
  });

  app.get("/api/events/:id", function(req, res) {
    db.Event.findOne({
      where: {
        genre: req.params.id
      }
    }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  app.get("/api/events/:genre", function(req, res) {
    db.Event.findAll({
      where: {
        genre: req.params.genre
      }
    }).then(function(dbGenre) {
      res.json(dbGenre);
    });
  });

  app.put("/api/events", function(req, res) {
    db.Event.update(
      req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function(dbEvent) {
      res.json(dbEvent);
    });
  });

  app.delete("api/events/:id", function(req, res){
    db.Event.destroy({
      where: {
        id: req.params.id
      }
      
    }).then(function(dbEvent){
      res.json(dbEvent);
    })
    
  })

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
};
