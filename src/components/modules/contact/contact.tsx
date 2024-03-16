import React, { useState } from 'react';
import Image from 'next/image';
import { sendContactForm } from '@/lib/api';
import SuccessModal from '@/components/elements/modals/succesModal';
import LazyLoad from 'react-lazyload';

export default function Contact() {
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

  const handleSubmit = async (e: any) => {
    e.preventDefault();
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
      } catch (error: any) {
        setIsLoading(false);
        setSendError(error.message);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleBlur = (field: any) => {
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
    phoneNumber: number;
    message: string;
  }) => {
    const phoneNumberSanitized = phoneNumber;
    const messageSanitized = message;

    const url = `https://wa.me/${phoneNumberSanitized}?text=${messageSanitized}`;

    return url;
  };

  return (
    <section
      className={'full col lg:row centered py-8 md:py-24 min-h-[1000px]'}
      style={{
        background:
          'radial-gradient(69.47% 209.97% at 88.3% 52.38%, #F6F8FF 0%, #989897 100%)',
      }}
    >
      <div className={'columns-2 col w-3/4 min-w-[260px] lg:w-1/4'}>
        <LazyLoad once>
          <Image
            alt="icon nexxos"
            src="https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1709937140/nexxos/xx_pauawm.jpg?_s=public-apps"
            priority
            width={282}
            height={241}
          />
        </LazyLoad>
        <h1 className={'text-GREY_LIGHT text-4xl mb-4'}>
          Contacta con
          <br />
          nosotros
        </h1>
        <div className={'row items-center my-1'}>
          <a
            className="hover:opacity-90 hover:underline cursor-pointer row gap-2"
            target="_blank"
            rel="noreferrer"
          >
            <LazyLoad once>
              <img
                src="/images/phone-icon.svg"
                alt="Whatsapp"
                className="w-4 mr-2"
              />
            </LazyLoad>
            <p className={'text-BLACK font-bold my-1'}>+54 9 223 6020205</p>
          </a>
        </div>
        <div className={'row items-center my-1'}>
          <a
            className="hover:opacity-90 hover:underline cursor-pointer row gap-2"
            href={'mailto: contacto@nexxos.com.ar'}
            target="_blank"
            rel="noreferrer"
          >
            <LazyLoad once>
              <img
                src="/images/email-icon.svg"
                alt="email"
                className="w-4 mr-2"
              />
            </LazyLoad>
            <p className={'text-BLACK font-bold my-1'}>
              contacto@nexxos.com.ar
            </p>
          </a>
        </div>
        <div className={'row items-center my-1'}>
          <a
            className="hover:opacity-90 hover:underline cursor-pointer row gap-2"
            href={sendWhatsappLink({
              phoneNumber: 542236020205,
              message: '¡Hola! Quisiera más información sobre la ONG',
            })}
            target="_blank"
            rel="noreferrer"
          >
            <LazyLoad once>
              <img
                src="/images/header-icon-whatsapp.svg"
                alt="Whatsapp"
                className="w-4 mr-2"
              />
            </LazyLoad>
            <p className={'text-GBLACK font-bold my-1'}>Envianos un Whatsapp</p>
          </a>
        </div>
        <div className={'row items-center my-1'}>
          <a
            className="hover:opacity-90 hover:underline cursor-pointer row gap-2"
            href={'https://goo.gl/maps/xuPLKhq9wFPn9jFu8'}
            target="_blank"
            rel="noreferrer"
          >
            <LazyLoad once>
              <img
                src="/images/place-icon.svg"
                alt="Location"
                className="w-4 mr-2"
              />
            </LazyLoad>
            <p className={'text-BLACK font-bold my-1'}>
              Matheu 4051, Mar del Plata, Buenos Aires.
            </p>
          </a>
        </div>
      </div>
      <div
        className={
          'col w-3/4 min-w-[260px] lg:w-1/4 mt-8 lg:mt-0 bg-WHITE bg-opacity-[0.25] p-4 justify-between rounded-xl'
        }
      >
        {sendError && (
          <h1 className="text-center text-RED_MEDIUM">{sendError}</h1>
        )}
        <form onSubmit={handleSubmit}>
          <div className="flex items-center mb-1">
            <p>
              Nombre{' '}
              <span className="inline-block mr-1 text-RED_MEDIUM">*</span>
            </p>
          </div>
          <div className="mb-1">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              onBlur={() => handleBlur('name')}
              className={`block w-full p-2 mt-2 rounded-lg ${
                formErrors.name ? 'border-red-500' : ''
              }`}
            />
            {formErrors.name ? (
              <p className="text-RED_MEDIUM">Rellene este campo obligatorio</p>
            ) : (
              <p className="text-[transparent]">-</p>
            )}
          </div>
          <div className="flex items-center mb-1">
            <p>
              Apellido{' '}
              <span className="inline-block mr-1 text-RED_MEDIUM">*</span>
            </p>
          </div>
          <div className="mb-1">
            <input
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
              onBlur={() => handleBlur('lastname')}
              className={`block w-full p-2 mt-2 rounded-lg ${
                formErrors.lastname ? 'border-red-500' : ''
              }`}
            />
            {formErrors.lastname ? (
              <p className="text-RED_MEDIUM">Rellene este campo obligatorio</p>
            ) : (
              <p className="text-[transparent]">-</p>
            )}
          </div>
          <div className="flex items-center mb-1">
            <p>
              Email <span className="inline-block mr-1 text-RED_MEDIUM">*</span>
            </p>
          </div>
          <div className="mb-1">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              onBlur={() => handleBlur('email')}
              className={`block w-full p-2 mt-2 rounded-lg ${
                formErrors.email ? 'border-red-500' : ''
              }`}
            />
            {formErrors.email ? (
              <p className="text-RED_MEDIUM">Rellene este campo obligatorio</p>
            ) : (
              <p className="text-[transparent]">-</p>
            )}
          </div>
          <div className="flex items-center mb-1">
            <p>
              Mensaje{' '}
              <span className="inline-block mr-1 text-RED_MEDIUM">*</span>
            </p>
          </div>
          <div className="mb-1">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              onBlur={() => handleBlur('message')}
              className={`block w-full p-2 mt-2 rounded-lg ${
                formErrors.message ? 'border-red-500' : ''
              }`}
            />
            {formErrors.message ? (
              <p className="text-RED_MEDIUM">Rellene este campo obligatorio</p>
            ) : (
              <p className="text-[transparent]">-</p>
            )}
          </div>
          <div className="flex items-center mb-1">
            <p>Rol</p>
          </div>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 mt-2 rounded-lg"
          >
            <option value="estudiante">Estudiante</option>
            <option value="docente">Docente</option>
            <option value="directivo">Directivo</option>
            <option value="sponsor">Sponsor</option>
            <option value="otro">Otro</option>
          </select>
          <button
            type="submit"
            className="main-red-button text-WHITE py-2 px-4 rounded-lg mt-6 transition duration-300 hover:bg-RED_G20 w-full"
            disabled={isLoading}
          >
            {isLoading ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
      </div>
      <SuccessModal isOpen={isSuccess} onClose={handleSuccessModalClose} />
    </section>
  );
}
