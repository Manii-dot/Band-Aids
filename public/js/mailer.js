let nodemailer = require('nodemailer');
var db = require("./models");

// create reusable transporter object using the default SMTP transport
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
    from: '"Band-Aid Development Team <band.aid.nodemailer@gmail.com>',
    to: '${db.User.email}',
    subject: 'Welcome to Band-Aid!',
    html: '<h1>Welcome to Band-Aid!</h1><p>We are excited to have a new member share, explore, and discover music events happening around the world!</p>'
};
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
  console.log("Message sent: %s", info.messageId);
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
});