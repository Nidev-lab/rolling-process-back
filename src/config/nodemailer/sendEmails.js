const nodemailer = require('nodemailer');
const { recoverPassword } = require('./viewsEmails');

const sendEmails = async ({ email, title }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.NODEMAILER_HOST,
      port: process.env.NODEMAILER_PORT,
      secure: true,
      auth: { user: process.env.NODEMAILER_EMAIL, pass: process.env.NODEMAILER_PASS },
    });
    await transporter.sendMail({
      to: email,
      from: 'Rolling Process',
      subject: title,
      html: recoverPassword(btoa(email)),
    });
    return { response: `email enviado a ${email}, revise su cuenta!` };
  } catch (error) {
    return null;
  }
};

module.exports = { sendEmails };
