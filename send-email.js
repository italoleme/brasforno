const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');
const msg = {
  to: 'italo.hibiro@gmail.com',
  from: 'slemeitalo@gmail.com',
  subject: 'Email enviado pela Brasforno!',
  text: 'Teste teste teste teste teste teste',
  html: '<strong>Email enviado do formulario da Brasforno</strong>',
};
sgMail.send(msg);