import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import LazyLoad from 'react-lazyload';
import ImageCard1 from '@public/images/icons/isotipos/onu.svg';
import ImageCard2 from '@public/images/icons/isotipos/oea.svg';
import ImageCard3 from '@public/images/icons/isotipos/rastros.svg';
import ImageCard4 from '@public/images/icons/isotipos/g20.svg';
import ImageCard5 from '@public/images/icons/isotipos/electoral.svg';
import ImageCard6 from '@public/images/icons/isotipos/sena.svg';
import ImageCard7 from '@public/images/icons/isotipos/hcd.svg';

export default function Activities() {
  const activitiesCards = [
    {
      title: 'onu',
      subtitle: 'Simulacro de la Organización de las Naciones Unidas',
      participants: '4º, 5º y 6º año.',
      image: ImageCard1,
      link_utils:
        'https://drive.google.com/drive/folders/1i6XlJmrZ4LwAYxeaAEVcv1t_yFRIT9Jm?usp=drive_link',
      date: 'Fecha estimada primera edición: mes de septiembre',
      date2: 'Fecha estimada segunda edición: mes de octubre',
    },
    {
      title: 'un',
      subtitle:
        'Simulacro de la Organización de las Naciones Unidas (en inglés)',
      participants: '4º, 5º y 6º año.',
      image: ImageCard1,
      date: 'Fecha estimada: mes de junio',
      link_utils:
        'https://drive.google.com/drive/folders/1PoSp8yJhVkY9Iqg-sEN323XJLPdTcT9O',
    },
    {
      title: 'oea',
      subtitle: 'Simulacro de la Organización de Estados Americanos',
      participants: '1º, 2º y 3º año.',
      image: ImageCard2,
      link_utils:
        'https://drive.google.com/drive/folders/1crxRST6eTpo68h0Fux8VHIuqkhRiYxc2?usp=drive_link',
      date: 'Fecha estimada: mes de septiembre',
    },
    {
      title: 'rastros',
      subtitle: 'Simulacro de la Investigación de un caso Forense',
      participants: '1º, 2º y 3º año.',
      image: ImageCard3,
      link_utils:
        'https://drive.google.com/drive/folders/1fO-pKsjNsHOk_-Jw9MNPzBsKAmu34EBi?usp=drive_link',
      date: 'Fecha estimada: mes de agosto',
    },
    {
      title: 'hcd',
      subtitle: 'Simulacro del Honorable Concejo Deliberante',
      participants: '4º, 5º y 6º año.',
      image: ImageCard7,
      date: 'Fecha estimada: mes de julio',
      link_utils:
        'https://drive.google.com/drive/folders/1oE_XR7_Pt1HOLZYvE1njqxoQCNbN_F7K?usp=drive_link',
    },
    {
      title: 'sena',
      subtitle: 'Simulacro del Senado de la Nación',
      participants: '4º, 5º y 6º año.',
      image: ImageCard6,
      date: 'Fecha estimada: mes de octubre',
      link_utils:
        'https://drive.google.com/drive/folders/1wHK6uI7TSphJT3o8hgtOb73ihU1AFTms',
    },
    {
      title: 'g20',
      subtitle: 'Simulacro del Grupo de los 20',
      participants: '4º, 5º y 6º año.',
      image: ImageCard4,
      date: 'Próxima edición 2025',
      link_utils:
        'https://drive.google.com/drive/folders/1YCVeJzKToTeQVuExDOtp_rlidTC7rZIC',
    },
    {
      title: 'electoral',
      subtitle: 'Simulacro de Elecciones',
      participants: '4º, 5º y 6º año.',
      image: ImageCard5,
      date: 'Próxima edición 2027',
      link_utils:
        'https://drive.google.com/drive/folders/1DcoGqkA0XmZZhtul-WMiv-m_uIZvJ0FL',
    },
  ];

  const router = useRouter();
  const activitiesContainerRef = useRef(null);

  useEffect(() => {
    const handleScrollToElement = () => {
      // Obtén el fragmento de la URL
      const fragment = router.asPath.split('#')[1];

      if (fragment) {
        // Verifica si el elemento container ya está en el DOM
        if (activitiesContainerRef.current) {
          // Encuentra el elemento con el ID correspondiente al fragmento
          const element = document.getElementById(fragment);

          if (element) {
            // Calcula la posición del elemento en la página
            const elementPosition = element.getBoundingClientRect().top;

            // Realiza el desplazamiento suave hacia el elemento
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth',
            });
          }
        }
      }
    };

    // Llama a la función de manejo al cargar la página
    handleScrollToElement();
  }, [router.asPath]);

  return (
    <section
      ref={activitiesContainerRef}
      className={'full col justify-start items-center'}
    >
      {/* BLOCK 1 */}
      <LazyLoad once className="w-full">
        <div
          className={`header-image-container px-12 lg:py-56 lg:px-24 row centered`}
          style={{
            background:
              'url(https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710012310/nexxos/gzl34l6s7csjsrvlauxr.jpg?_s=public-apps)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: 'top',
            boxShadow: 'inset 0 0 0 1000px rgba(47, 47, 77, 0.3)',
          }}
        >
          <h1 className={'text-WHITE text-4xl lg:text-5xl text-center'}>
            Nuestras Actividades
          </h1>
        </div>
      </LazyLoad>

      {/* BLOCK 2 */}
      <div
        className={
          'w-full col lg:row items-center justify-center py-20 bg-GREY_LIGHT'
        }
      >
        {/* SIM CARD */}
        <div
          className={
            'full col lg:row items-center justify-center flex-wrap gap-12'
          }
        >
          {activitiesCards.map((item, index) => {
            const elementId = `card-sim.${item.title}`;

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
              colorClass = 'VIOLET_UN';
            }

            return (
              <div
                key={index}
                id={elementId}
                className={
                  'w-5/6 min-w-[260px] md:w-[28rem] h-[38rem] md:h-[31rem] lg:mt-0 col lg:mx-12 p-6 lg:p-10 items-center justify-between shadow-md shadow-BLUE_LIGHT rounded-lg bg-WHITE'
                }
              >
                <div>
                  <div
                    className={
                      'self-center mb-3 col items-center justify-center'
                    }
                    id="title-container"
                  >
                    <LazyLoad once>
                      <Image src={item.image} alt={'image'} priority />
                    </LazyLoad>
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
                    <h2 className={'font-bold'}>¿Quiénes pueden participar?</h2>
                    <p className={'my-2'}>{item.participants}</p>
                  </div>
                  <div className="text-center col gap-2">
                    <p>{item.date}</p>
                    {item.date2 ? <p>{item.date2}</p> : null}
                  </div>
                </div>
                <div className="w-full row centered justify-self-end">
                  <Link
                    href={item.link_utils}
                    target="_blank"
                    className={'w-fit'}
                  >
                    <button>Más información</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
