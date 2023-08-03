import React from 'react';
import Image from 'next/image';
import Activities1 from '../../../../public/images/activities1.jpg';
import ImageCard1 from '../../../../public/images/icons/isotipos/onu.svg';
import ImageCard2 from '../../../../public/images/icons/isotipos/oea.svg';
import ImageCard3 from '../../../../public/images/icons/isotipos/rastros.svg';
import ImageCard4 from '../../../../public/images/icons/isotipos/g20.svg';
import ImageCard5 from '../../../../public/images/icons/isotipos/electoral.svg';
import ImageCard6 from '../../../../public/images/icons/isotipos/sena.svg';
import ImageCard7 from '../../../../public/images/icons/isotipos/hcd.svg';
import ImageCard8 from '../../../../public/images/icons/isotipos/juicio.svg';
import Link from 'next/link';

function ActivitiesTemplate() {
  const activitiesCards = [
    {
      title: 'onu',
      subtitle: 'Simulacro de la Organización de las Naciones Unidas',
      participants: 'Ciclo Superior - Cs. Sociales',
      image: ImageCard1,
      link_utils:
        'https://drive.google.com/drive/folders/1i6XlJmrZ4LwAYxeaAEVcv1t_yFRIT9Jm?usp=drive_link',
      link_pre: '',
      link_inscrip: '',
    },
    {
      title: 'oea',
      subtitle: 'Simulacro de la Organización de Estados Americanos',
      participants: 'Ciclo Básico - Cs. Sociales',
      image: ImageCard2,
      link_utils:
        'https://drive.google.com/drive/folders/1crxRST6eTpo68h0Fux8VHIuqkhRiYxc2?usp=drive_link',
      link_pre: '',
      link_inscrip: '',
    },
    {
      title: 'rastros',
      subtitle: 'Simulacro de la Investigación de un caso Forense',
      participants: 'Nivel 1: Ciclo Básico - Cs Naturales y Cs. Exactas',
      participants2: 'Nivel 2: Ciclo Superior - Cs Naturales y Cs. Exactas',
      image: ImageCard3,
      link_utils:
        'https://drive.google.com/drive/folders/1fO-pKsjNsHOk_-Jw9MNPzBsKAmu34EBi?usp=drive_link',
      link_pre: '',
      link_inscrip: '',
    },
    {
      title: 'sena',
      subtitle: 'Simulacro de la Honorable Cámara de Senadores de la Nación',
      participants: 'Ciclo Superior - Cs. Humanas',
      image: ImageCard6,
      link_utils:
        'https://drive.google.com/drive/folders/1q9MAinbBOq3I00gV-Go7Hf9lex6z7VN8?usp=drive_link',
      link_pre: '',
      link_inscrip: '',
    },
    {
      title: 'electoral',
      subtitle: 'Simulacro de un Debate Electoral',
      participants: 'Ciclo Superior - Cs. Humanas',
      image: ImageCard5,
      link_utils:
        'https://drive.google.com/drive/folders/1DcoGqkA0XmZZhtul-WMiv-m_uIZvJ0FL?usp=drive_link',
      link_pre: '',
      link_inscrip: '',
    },
    {
      title: 'g20',
      subtitle: 'Simulacro del Grupo de los 20',
      participants: 'Ciclo Superior - Cs. Sociales',
      image: ImageCard4,
      link_utils:
        'https://drive.google.com/drive/folders/1YCVeJzKToTeQVuExDOtp_rlidTC7rZIC?usp=drive_link',
      link_pre: '',
      link_inscrip: '',
    },
    {
      title: 'hcd',
      subtitle: 'Simulacro del Honorable Concejo Deliberante',
      participants: 'Ciclo Superior - Cs. Humanas',
      image: ImageCard7,
      link_utils:
        'https://drive.google.com/drive/folders/1oE_XR7_Pt1HOLZYvE1njqxoQCNbN_F7K?usp=drive_link',
      link_pre: '',
      link_inscrip: '',
    },
    {
      title: 'juicio',
      subtitle: 'Simulacro de un Juicio por Jurado',
      participants: 'Ciclo Superior - Cs. Humanas',
      image: ImageCard8,
      link_utils:
        'https://drive.google.com/drive/folders/1lRhoUs6st8IiGhpdejLhs2zjfBd6_d4y?usp=drive_link',
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
          Nuestras Actividades
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
          className={'full col lg:row items-center justify-center flex-wrap'}
        >
          {activitiesCards.map((item, index) => {
            let colorClass = '';

            if (item.title === 'onu') {
              colorClass = 'PURPLE_ONU';
            } else if (item.title === 'rastros') {
              colorClass = 'PINK_RASTROS';
            } else if (item.title === 'sena') {
              colorClass = 'LIGHTBLUE_SENA';
            } else if (item.title === 'electoral') {
              colorClass = 'BLUE_ELECTORAL';
            } else if (item.title === 'g20') {
              colorClass = 'RED_G20';
            } else if (item.title === 'hcd') {
              colorClass = 'TURQUOISE_HCD';
            } else if (item.title === 'oea') {
              colorClass = 'TEAL_OEA';
            } else {
              colorClass = 'GREEN_JUICIO';
            }
            return (
              <div
                key={index}
                className={
                  'w-4/6 md:w-[28rem] h-[38rem] md:h-[31rem] mb-6 mt-8 lg:mt-0 col lg:mx-12 p-6 lg:p-10 items-center shadow-md shadow-BLUE_LIGHT rounded-lg bg-WHITE relative'
                }
                id="card-container"
              >
                <div
                  className={'self-center mb-3 col items-center justify-center'}
                  id="title-container"
                >
                  <Image src={item.image} alt={'image'} />
                  <p
                    className={
                      'font-montserrat font-bold text-3xl text-GREY_NEXXOS'
                    }
                  >
                    sim.
                    <span className={`text-${colorClass}`}>{item.title}</span>
                  </p>
                </div>
                <div
                  className={'w-full justify-center text-center'}
                  id="text-container"
                >
                  <p className={'font-bold my-6 text-lg'}>{item.subtitle}</p>
                  <h2 className={'font-bold'}>¿Quienes pueden participar?</h2>
                  <p className={'my-2'}>{item.participants}</p>
                  {item.participants2 ? (
                    <p className={'my-2'}>{item.participants2}</p>
                  ) : null}
                </div>
                <div
                  className={
                    'w-full col justify-center items-center absolute bottom-8'
                  }
                  id="buttons-container"
                >
                  <Link
                    href={item.link_utils}
                    target="_blank"
                    className={'self-center mt-4 lg:w-1/2 text-center'}
                  >
                    <button className={'w-full lg:w-3/5 lg:my-4'}>
                      Mas informacion
                    </button>
                  </Link>
                  <div
                    className={'col md:row justify-center'}
                    id="inscrip-buttons"
                  >
                    <button className={`bg-${colorClass} card-common-button`}>
                      Preinscripcion
                    </button>
                    <button className={`bg-${colorClass} card-common-button`}>
                      Inscripcion
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default ActivitiesTemplate;