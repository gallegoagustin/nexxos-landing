const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('./nodemailer');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

// Ruta para recibir los datos del formulario y enviar el correo electrónico
app.post('/send-email', async (req, res) => {
  const { name, lastname, email, message, type } = req.body;

  try {
    await nodemailer.sendEmail({ name, lastname, email, message, type });
    console.log('Correo electrónico enviado correctamente');
    res.status(200).send('Correo electrónico enviado correctamente');
  } catch (error) {
    console.log(error);
    res.status(500).send('Error al enviar el correo electrónico');
  }
});
