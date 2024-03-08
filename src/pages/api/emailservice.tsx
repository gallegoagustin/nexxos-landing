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
      return res.status(400).json({ message: 'Bad form type' });
    }
    try {
      const textWithUserData = `Nombre: ${data.name}\nApellido: ${data.lastname}\n\nEmail: ${data.email}\n\nRol: ${data.type}\n\nMensaje: ${data.message}`;

      await transporter.sendMail({
        ...mailOptions,
        subject: 'Contacto - Formulario web',
        text: textWithUserData,
      });
      return res.status(200).json({ success: true });
    } catch (error: any) {
      return res.status(400).json({ message: error.message });
    }
  }
  return res.status(400).json({ message: 'Bad Request' });
};

export default handler;
