const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'gmail',
  port: 587,
  secure: false,
  auth: {
    user: 'madhurendravatsa@gmail.com',//process.env.EMAIL_FROM_SENT, // replace with your email
    pass: 'kdvz rapr jhnx dbbc'//process.env.EMAIL_PASSWORD_SENT // replace with your password or use an app-specific password
  }
});

function sendEmail(to, subject, text) {
  const mailOptions = {
    from: process.env.EMAIL_FROM_SENT,
    to,
    subject,
    text
  };
  return transporter.sendMail(mailOptions);
}

module.exports = {
  sendEmail
};