export const sendContactForm = async (data: {
  name: string;
  lastname: string;
  email: string;
  message: string;
  type: string;
}) =>
  fetch('api/emailservice', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  }).then((res) => {
    if (!res.ok) throw new Error('Error al enviar mensaje');
    return res.json();
  });
