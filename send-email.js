const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const msg = {
  to: 'italo.hibiro@gmail.com',
  from: 'slemeitalo@gmail.com',
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);