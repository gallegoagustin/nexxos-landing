import React from 'react';
import Image from 'next/image';
import Activities1 from '../../../../public/images/activities1.jpg';
import ImageCard1 from '../../../../public/images/icons/logos/logo-onu.png';
import ImageCard2 from '../../../../public/images/icons/logos/logo-oea.png';
import ImageCard3 from '../../../../public/images/icons/logos/logo-rastros.png';
import ImageCard4 from '../../../../public/images/icons/logos/logo-g20.png';
import ImageCard5 from '../../../../public/images/icons/logos/logo-electoral.png';
import ImageCard6 from '../../../../public/images/icons/logos/logo-sena.png';
import ImageCard7 from '../../../../public/images/icons/logos/logo-hcd.png';
import ImageCard8 from '../../../../public/images/icons/logos/logo-juicio.png';

function AboutTemplate() {
  const membersProfiles = [
    {
      title: 'sim.onu',
      participants: 'Simulacro de la Organización de las Naciones Unidas',
      text: 'info util',
      image: ImageCard1,
      link_utils: '',
      link_pre: '',
      link_inscrip: '',
    },
    {
      title: 'sim.oea',
      participants: 'Simulacro de la Organización de los Estados Americanos',
      text: 'info util',
      image: ImageCard2,
      link_utils: '',
      link_pre: '',
      link_inscrip: '',
    },
    {
      title: 'sim.rastros',
      participants: 'Simulacro de una Investigación Forense',
      text: 'info util',
      image: ImageCard3,
      link_utils: '',
      link_pre: '',
      link_inscrip: '',
    },
    {
      title: 'sim.sena',
      participants:
        'Simulacro de la honorable Cámara de Senadores de la Argentina',
      text: 'info util',
      image: ImageCard4,
      link_utils: '',
      link_pre: '',
      link_inscrip: '',
    },
    {
      title: 'sim.electoral',
      participants: 'Simulacro de un debate presidencial y ministerial',
      text: 'info util',
      image: ImageCard5,
      link_utils: '',
      link_pre: '',
      link_inscrip: '',
    },
    {
      title: 'sim.g20',
      participants: 'Simulacro del Grupo de los 20',
      text: 'info util',
      image: ImageCard6,
      link_utils: '',
      link_pre: '',
      link_inscrip: '',
    },
    {
      title: 'sim.hcd',
      participants: 'Simulacro del Honorable Concejo Deliberante',
      text: 'info util',
      image: ImageCard7,
      link_utils: '',
      link_pre: '',
      link_inscrip: '',
    },
    {
      title: 'sim.juicio',
      participants: 'Simulacro de un Juicio por Jurados',
      text: 'info util',
      image: ImageCard8,
      link_utils: '',
      link_pre: '',
      link_inscrip: '',
    },
  ];

  return (
    <main className={'full col justify-start items-center'}>
      {/* BLOCK 1 */}
      <div
        className={`header-image-container px-12 lg:py-56 lg:px-24 row centered`}
        style={{
          background: `url(${Activities1.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: 'top',
          boxShadow: 'inset 0 0 0 1000px rgba(47, 47, 77, 0.3)',
        }}
      >
        <h1 className={'text-WHITE text-3xl lg:text-5xl text-center'}>
          Conocenos
        </h1>
      </div>

      {/* BLOCK 2 */}
      <div
        className={
          'w-full col lg:row items-center justify-center py-20 bg-GREY_LIGHT'
        }
      >
        {/* SIM CARD */}
        <div
          className={'full col lg:row'}
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.75rem',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {membersProfiles.map((item, index) => {
            return (
              <div
                key={index}
                className={
                  'w-4/6 lg:w-1/5 mt-8 lg:mt-0 col lg:mx-12 p-6 lg:p-10 items-center shadow-md shadow-BLUE_LIGHT rounded-lg bg-WHITE'
                }
                id="card-container"
              ></div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default AboutTemplate;
