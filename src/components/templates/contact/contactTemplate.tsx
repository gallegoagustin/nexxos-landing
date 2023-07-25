import React, { useState } from 'react';
import iconNexxos from '../../../../public/images/icons/nexxos-classic.png';
import Image from 'next/image';
import { sendContactForm } from '@/lib/api';
import SuccessModal from '@/components/elements/modals/succesModal';

function ContactTemplate() {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [type, setType] = useState('voluntario');
  const [isLoading, setIsLoading] = useState(false);
  const [sendError, setSendError] = useState('');

  // Estado para controlar el mensaje de éxito y el modal
  const [isSuccess, setIsSuccess] = useState(false);

  // Función para abrir el modal de éxito
  const handleSuccessModalOpen = () => {
    setIsSuccess(true);
  };

  // Función para cerrar el modal de éxito
  const handleSuccessModalClose = () => {
    setIsSuccess(false);
  };

  const [formErrors, setFormErrors] = useState({
    name: false,
    lastname: false,
    email: false,
    message: false,
    type: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(
      '----- FORM VALUES -----',
      name,
      lastname,
      email,
      message,
      type
    );
    // Antes de enviar, validaciones:
    const hasErrors = !name || !lastname || !email || !message || !type;

    if (hasErrors) {
      setFormErrors({
        name: !name,
        lastname: !lastname,
        email: !email,
        message: !message,
        type: !type,
      });
    } else {
      setIsLoading(true);
      try {
        await sendContactForm({ name, lastname, email, message, type });
        handleSuccessModalOpen();
        setEmail('');
        setName('');
        setLastname('');
        setMessage('');
        // mostrar un mensaje de éxito.
      } catch (error) {
        setIsLoading(false);
        setSendError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleBlur = (field) => {
    if (field === 'name') {
      setFormErrors((prevErrors) => ({ ...prevErrors, name: !name }));
    } else if (field === 'lastname') {
      setFormErrors((prevErrors) => ({ ...prevErrors, lastname: !lastname }));
    } else if (field === 'email') {
      setFormErrors((prevErrors) => ({ ...prevErrors, email: !email }));
    } else if (field === 'message') {
      setFormErrors((prevErrors) => ({ ...prevErrors, message: !message }));
    } else if (field === 'type') {
      setFormErrors((prevErrors) => ({ ...prevErrors, type: !type }));
    }
  };

  const sendWhatsappLink = ({
    phoneNumber,
    message,
  }: {
    phoneNumber: string,
    message: string,
  }) => {
    const phoneNumberSanitized = phoneNumber
      .replace(/ /g, '')
      .replace(/\+/g, '');
    const messageSanitized = message;

    const url = `https://wa.me/${phoneNumberSanitized}?text=${messageSanitized}`;

    return url;
  };

  return (
    <main
      className={'full col lg:row centered py-24'}
      style={{
        background:
          'radial-gradient(69.47% 209.97% at 88.3% 52.38%, #F6F8FF 0%, #989897 100%)',
      }}
    >
      <div className={'columns-2 col w-3/4 lg:w-1/4'}>
        <Image alt="icon nexxos" src={iconNexxos} className="w-1/2 h-1/2" />
        <h1 className={'text-GREY_LIGHT text-4xl mb-4'}>
          Contacta con
          <br />
          nosotros
        </h1>
        <div className={'row items-center my-1'}>
          <a
            className="hover:opacity-90 hover:underline cursor-pointer"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/phone-icon.svg"
              alt="Whatsapp"
              className="w-4 mr-2"
            />
          </a>
          <p className={'text-BLACK font-bold my-1'}>celular nexxos</p>
        </div>
        <div className={'row items-center my-1'}>
          <a
            className="hover:opacity-90 hover:underline cursor-pointer"
            href={'mailto: hola@nash21.io'}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/email-icon.svg"
              alt="email"
              className="w-4 mr-2"
            />
          </a>
          <p className={'text-BLACK font-bold my-1'}>mail nexxos</p>
        </div>
        <div className={'row items-center my-1'}>
          <a
            className="hover:opacity-90 hover:underline cursor-pointer"
            href={sendWhatsappLink({
              phoneNumber: 'contact.whatsapp-phone',
              message: 'contact.whatsapp-message',
            })}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/header-icon-whatsapp.svg"
              alt="Whatsapp"
              className="w-4 mr-2"
            />
          </a>
          <p className={'text-GBLACK font-bold my-1'}>Envianos un whatsapp</p>
        </div>
        <div className={'row items-center my-1'}>
          <a
            className="hover:opacity-90 hover:underline cursor-pointer"
            href={'https://goo.gl/maps/J7KfwoUHqFXjzerf9?coh=178572&entry=tt'}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="/images/place-icon.svg"
              alt="Location"
              className="w-4 mr-2"
            />
          </a>
          <p className={'text-BLACK font-bold my-1'}>direccion sede nexxos</p>
        </div>
      </div>
      <div
        className={
          'col w-3/4 lg:w-1/4 mt-8 lg:mt-0 bg-WHITE bg-opacity-[0.25] p-4 justify-between rounded-xl'
        }
        style={{ height: '630px', maxHeight: '650px' }}
      >
        {sendError && (
          <h1 className="text-center text-RED_MEDIUM">{sendError}</h1>
        )}
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-1">
            <h1>Nombre</h1>
            <h1 className="inline-block mr-1 text-RED_MEDIUM">*</h1>
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              onBlur={() => handleBlur('name')}
              className={`block w-full p-2 rounded-lg ${
                formErrors.name ? 'border-red-500' : ''
              }`}
            />
            {formErrors.name && (
              <p className="text-RED_MEDIUM">Rellene este campo obligatorio</p>
            )}
          </div>
          <div className="flex items-center mb-1">
            <h1>Apellido</h1>
            <h1 className="inline-block mr-1 text-RED_MEDIUM">*</h1>
          </div>
          <div className="mb-4">
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              onBlur={() => handleBlur('lastname')}
              className={`block w-full p-2 rounded-lg ${
                formErrors.lastname ? 'border-red-500' : ''
              }`}
            />
            {formErrors.lastname && (
              <p className="text-RED_MEDIUM">Rellene este campo obligatorio</p>
            )}
          </div>
          <div className="flex items-center mb-1">
            <h1>Email</h1>
            <h1 className="inline-block mr-1 text-RED_MEDIUM">*</h1>
          </div>
          <div className="mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              onBlur={() => handleBlur('email')}
              className={`block w-full p-2 rounded-lg ${
                formErrors.email ? 'border-red-500' : ''
              }`}
            />
            {formErrors.email && (
              <p className="text-RED_MEDIUM">Rellene este campo obligatorio</p>
            )}
          </div>
          <div className="flex items-center mb-1">
            <h1>Mensaje</h1>
            <h1 className="inline-block mr-1 text-RED_MEDIUM">*</h1>
          </div>
          <div className="mb-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              onBlur={() => handleBlur('message')}
              className={`block w-full p-2 rounded-lg ${
                formErrors.message ? 'border-red-500' : ''
              }`}
            />
            {formErrors.message && (
              <p className="text-RED_MEDIUM">Rellene este campo obligatorio</p>
            )}
          </div>
          <div className="flex items-center mb-1">
            <h1>Rol</h1>
            <h1 className="inline-block mr-1 text-RED_MEDIUM">*</h1>
          </div>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 rounded-lg"
          >
            <option value="estudiante">Estudiante</option>
            <option value="docente">Docente</option>
            <option value="directivo">Directivo</option>
            <option value="other">Otro</option>

          </select>
          <button
            type="submit"
            className="main-red-button text-WHITE py-2 px-4 rounded-lg my-8"
            disabled={isLoading}
          >
            {isLoading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
      <SuccessModal isOpen={isSuccess} onClose={handleSuccessModalClose} />
    </main>
  );
}

export default ContactTemplate;
