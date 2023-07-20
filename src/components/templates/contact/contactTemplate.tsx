import React from 'react';

function ContactTemplate() {
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
      className={'full col lg:row centered py-32'}
      style={{
        background:
          'radial-gradient(69.47% 209.97% at 88.3% 52.38%, #50508D 0%, #2F2F4D 100%)',
      }}
    >
      <div className={'columns-2 col w-3/4 lg:w-1/4'}>
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
          <p className={'text-GREEN_MEDIUM font-bold my-1'}>celular nexxos</p>
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
          <p className={'text-GREEN_MEDIUM font-bold my-1'}>mail nexxos</p>
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
          <p className={'text-GREEN_MEDIUM font-bold my-1'}>
            Contacta con nosotros
          </p>
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
          <p className={'text-GREEN_MEDIUM font-bold my-1'}>
            direccion sede nexxos
          </p>
        </div>
      </div>
      <div
        className={
          'col w-3/4 lg:w-1/4 mt-8 lg:mt-0 bg-WHITE bg-opacity-[0.25] p-4 justify-between rounded-xl'
        }
      >
        <div id={'hubspot-contact-form-wrapper'} />
      </div>
    </main>
  );
}

export default ContactTemplate;
