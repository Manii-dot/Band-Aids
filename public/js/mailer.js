let nodemailer = require('nodemailer');
let cron = require('node-cron');

//e-mail message options
let mailOptions = {
    from: '<FROM_EMAIL_ADDRESS>',
    to: '<TO_EMAIL_ADDRESS>',
    subject: 'Email from Node-App: A Test Message!',
    text: 'Some content to send'
};

//e-mail transport configuration
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: '<FROM_EMAIL_ADDRESS>',
      pass: '<FROM_EMAIL_PASSWORD>'
    }
});

cron.schedule('* * * * *', () => {
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});