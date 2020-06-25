const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
  service: 'Mailgun',
  auth: {
    user: '',
    pass: '',
  },
});

exports.sendMail = (to, subject, html) => {
  const mailOptions = {
    from: 'Auth@microapi.dev',
    to,
    subject,
    html,
  };

  try {
    transport.sendMail(mailOptions);
    return `${subject} mail sent successfully`;
  } catch (error) {
    return 'An error occured, mail not deliverd.';
  }
};
