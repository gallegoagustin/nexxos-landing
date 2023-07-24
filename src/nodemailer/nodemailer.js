const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    // meter estos datos en un .env
    user: 'tu_correo@gmail.com',
    pass: 'tu_contraseña',
  },
});

const sendEmail = async ({ name, lastname, email, message, type }) => {
  const mailOptions = {
    from: 'tu_correo@gmail.com',
    to: email,
    subject: `Gracias por contactarnos, ${name} ${lastname}`,
    text: `Tipo: ${type}\nMensaje: ${message}`,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo electrónico enviado: ' + info.response);
  } catch (error) {
    console.log(error);
    throw error;
  }
};
