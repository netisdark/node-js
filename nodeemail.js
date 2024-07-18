const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pergap3@gmail.com',
        pass: 'pcwakyyzwgalidfs'
    }
});

let mailOptions = {
    from: '"Daniel" <pergap3@gmail.com>',
    to: 'raisha67789@example.com',
    subject: 'Test Email',
    text: 'This is a test email sent using Nodemailer'
};

transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
