const nodemailer = require('nodemailer');
require('dotenv').config();

const username = process.env.EMAIL_USERNAME;
const pass = process.env.EMAIL_PASSWORD;

export const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: username,
    pass: pass,
  },
});

export const mailOptions = {
  from: username,
  to: username,
};
