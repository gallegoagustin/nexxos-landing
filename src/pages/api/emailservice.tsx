import type { NextApiRequest, NextApiResponse } from 'next';
import { mailOptions, transporter } from '../../config/nodemailer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const data = req.body;
    if (
      !data.name ||
      !data.lastname ||
      !data.email ||
      !data.message ||
      !data.type
    ) {
      return res.status(400).json({ message: 'Bad Request' });
    }
    try {
      const textWithUserData = `Nombre: ${data.name}\nApellido: ${data.lastname}\nEmail: ${data.email}\nRol: ${data.type}\nMensaje: ${data.message}`;

      await transporter.sendMail({
        ...mailOptions,
        subject: 'CONTACTO WEB',
        text: textWithUserData,
      });
      console.log('Email enviado de forma exitosa');
      return res.status(200).json({ success: true });
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: 'Bad Request' });
};

export default handler;
