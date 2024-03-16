import React from 'react';
import Image from 'next/image';
import SuccessModal from '@/components/elements/modals/succesModal';
import LazyLoad from 'react-lazyload';
import useDynamicTranslation from '@/components/hooks/useDynamicTranslation';

interface Props {
  name: string;
  setName: (e: string) => void;
  lastname: string;
  setLastname: (e: string) => void;
  email: string;
  setEmail: (e: string) => void;
  message: string;
  setMessage: (e: string) => void;
  type: string;
  setType: (e: string) => void;
  isLoading: boolean;
  sendError: string;
  formErrors: {
    name: boolean;
    lastname: boolean;
    email: boolean;
    message: boolean;
  };
  handleBlur: (e: string) => void;
  handleSubmit: (e: any) => void;
  isSuccess: boolean;
  handleSuccessModalClose: () => void;
  sendWhatsappLink: Function;
}

export default function Contact({
  name,
  setName,
  lastname,
  setLastname,
  email,
  setEmail,
  message,
  setMessage,
  type,
  setType,
  isLoading,
  sendError,
  formErrors,
  handleBlur,
  handleSubmit,
  isSuccess,
  handleSuccessModalClose,
  sendWhatsappLink,
}: Props) {
  const { i18nContact } = useDynamicTranslation();

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
          {i18nContact('header')}
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
            <p className={'text-GBLACK font-bold my-1'}>{i18nContact('wpp')}</p>
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
              {i18nContact('name')}{' '}
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
              <p className="text-RED_MEDIUM">{i18nContact('mandatory')}</p>
            ) : (
              <p className="text-[transparent]">-</p>
            )}
          </div>
          <div className="flex items-center mb-1">
            <p>
              {i18nContact('surname')}{' '}
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
              <p className="text-RED_MEDIUM">{i18nContact('mandatory')}</p>
            ) : (
              <p className="text-[transparent]">-</p>
            )}
          </div>
          <div className="flex items-center mb-1">
            <p>
              {i18nContact('email')}{' '}
              <span className="inline-block mr-1 text-RED_MEDIUM">*</span>
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
              <p className="text-RED_MEDIUM">{i18nContact('mandatory')}</p>
            ) : (
              <p className="text-[transparent]">-</p>
            )}
          </div>
          <div className="flex items-center mb-1">
            <p>
              {i18nContact('message')}{' '}
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
              <p className="text-RED_MEDIUM">{i18nContact('mandatory')}</p>
            ) : (
              <p className="text-[transparent]">-</p>
            )}
          </div>
          <div className="flex items-center mb-1">
            <p>{i18nContact('role')}</p>
          </div>
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="w-full p-2 mt-2 rounded-lg"
          >
            <option value="estudiante">{i18nContact('student')}</option>
            <option value="docente">{i18nContact('teacher')}</option>
            <option value="directivo">{i18nContact('manager')}</option>
            <option value="sponsor">{i18nContact('sponsor')}</option>
            <option value="otro">{i18nContact('other')}</option>
          </select>
          <button
            type="submit"
            className="main-red-button text-WHITE py-2 px-4 rounded-lg mt-6 transition duration-300 hover:bg-RED_G20 w-full"
            disabled={isLoading}
          >
            {isLoading ? i18nContact('sending') : i18nContact('send')}
          </button>
        </form>
      </div>
      <SuccessModal isOpen={isSuccess} onClose={handleSuccessModalClose} />
    </section>
  );
}
