import React from 'react';
import About1 from '../../../../public/images/about1.jpg';
import Image1 from '../../../../public/images/autorities/melisaayelen.jpg';
import Image3 from '../../../../public/images/autorities/valentina.jpeg';
import Image4 from '../../../../public/images/autorities/sofia.jpeg';
import Image5 from '../../../../public/images/autorities/ailen.jpeg';
import Image6 from '../../../../public/images/autorities/alan.jpeg';
import Image from 'next/image';
import Volunteer from '../../../../public/images/volunteer.png';
import Sponsor from '../../../../public/images/support.png';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function AboutTemplate() {
  const autorities = [
    {
      name: 'Valentina Fardin',
      age: '22',
      position: 'Presidente',
      info: '"Estudiante de Licenciatura y Profesorado en Geografía. Mi pasión por la educación y mi convicción de empoderar a los jóvenes me llevaron a unirme a NEXXOS.  Cómo estudiante comprendo la importancia de una educación que desarrolle habilidades poderosas que nos permitan enfrentar los desafíos del mundo actual. En NEXXOS encontré la plataforma perfecta para fomentar un pensamiento crítico de la realidad y a alzar sus voces para construir un futuro más brillante."',
      image: Image3,
    },
    {
      name: 'Ailen Benítez Zarate',
      age: '21',
      position: 'Vicepresidente',
      info: '"Un 82,5% Licenciada en Comunicación Social y un 100% convencida de que NEXXOS es el lado correcto de la educación. Actualmente trabajo en el área de comunicación digital en la campaña electoral de un candidato a intendente. Soy de las que creen que con pasión y disciplina todo se puede lograr. La curiosidad, el respeto y la valentía siempre por delante. NEXXOS es la herramienta transformadora del presente de los jóvenes."',
      image: Image5,
    },
    {
      name: 'Melissa Ayelen Oliva',
      age: '20',
      position: 'Secreataria General',
      info: '"Soy estudiante de Derecho en la UNMDP. Participe en Modelos de Naciones Unidas en representación de la Facultad de Derecho."',
      image: Image1,
    },
    {
      name: 'Alan Ezequiel Castillo ',
      age: '20',
      position: 'Tesorero',
      info: '"Estoy en 2do año del profesorado en Matemática y con el tiempo que llevo siendo voluntario en la ONG, descubrí muchísimas herramientas que, actualmente, hacen que siga formándome como docente. Sin embargo, estoy convencido que la educación secundaria necesita un cambio. Ese cambio lo encontré en NEXXOS y es donde quiero seguir apostando para lograr que los jóvenes se desafíen y desarrollen habilidades ¿Como se logra eso? Construyendo una educación integral y de calidad que permita a los y las estudiantes a potenciarse en cada aspecto de su vida. Seamos parte de la transformación del presente garantizando los frutos para el futuro."',
      image: Image6,
    },
    {
      name: 'Sofia Ali',
      age: '19',
      position: 'Vocal',
      info: '"Unirme a Nexxos fue el primer paso para contribuir en el cambio de lo que más influyó en quién soy hoy, la educación. Ser voluntaria me permite aprender constantemente de quienes me rodean y el trabajo en equipo me motiva a sacar cada día una mejor versión de mi. Estudio derecho en la UNMDP, represente a mi facultad en modelos de ONU realizados en el país y en el exterior. Me interesa el feminismo y en los fines de semana suelo dar apoyo escolar a jovenes y niños/as de manera voluntaria."',
      image: Image4,
    },
  ];

  return (
    <main className={'full col justify-start items-center'}>
      {/* BLOCK 1 */}
      <div
        className={`header-image-container px-12 lg:py-56 lg:px-24 row centered`}
        style={{
          background: `url(${About1.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: 'center',
          boxShadow: 'inset 0 0 0 1000px rgba(47, 47, 77, 0.3)',
        }}
      >
        <h1 className={'text-WHITE text-3xl lg:text-5xl text-center'}>
          Conocenos
        </h1>
      </div>

      {/* BLOCK 2 */}
      <div
        className={'full col lg:row items-center justify-center py-12 bg-WHITE'}
      >
        <Swiper
          pagination={true}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          className={'w-[21rem] h-[43rem] md:w-[50rem] md:h-[30rem]'}
        >
          {autorities.map((item, index) => {
            return (
              <SwiperSlide
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                key={index}
              >
                <div
                  className={
                    'bg-RED_MEDIUM col items-center w-[18rem] h-[38rem] md:w-[40rem] md:h-[25rem] justify-evenly rounded-lg'
                  }
                  style={{
                    background: 'linear-gradient(to bottom, #CF142A, #5D2C80',
                  }}
                >
                  <div
                    className={
                      'w-full md:w-4/5 row items-center justify-evenly md:justify-around'
                    }
                  >
                    <Image
                      src={item.image}
                      alt={'image'}
                      width={150}
                      height={150}
                      className={'rounded-full md:w-40 md:h-40 w-28 h-28'}
                    />
                    <div className={'w-[8rem] md:w-1/2 text-WHITE'}>
                      <h1>{item.name}</h1>
                      <p>{item.position}</p>
                      <p>Edad: {item.age} años.</p>
                    </div>
                  </div>
                  <p className={'text-WHITE w-5/6 text-justify md:p-4'}>
                    {item.info}
                  </p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* BLOCK 3 */}
      <div
        className={
          'col md:row items-center justify-evenly py-12 w-full overflow-hidden'
        }
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(142, 142, 211, 0.16) 0%, rgba(232, 232, 232, 0.32) 100%)',
        }}
      >
        <div className={'w-5/6 md:w-1/3'}>
          <p className={'my-6 font-montserrat text-3xl'}>
            Sumate como voluntario !
          </p>
          <h1 className={'mb-6'}>Sé parte de la transformación educativa.</h1>
          <p className={'leading-relaxed text-base'}>
            Si terminaste el colegio secundario.
            <br /> Si tenés entre 18 y 99 años.
            <br /> Si te gusta explorar en las nuevas y diferentes maneras de
            aprender.
            <br /> Si te interesan las actividades académicas.
            <br /> Y sobre todo, si tenés ganas de contribuir a innovar en
            educación…
            <br /> ¡Sumate a NEXXOS!
          </p>
        </div>
        <div
          className={
            'col w-5/6 justify-center items-center mt-6 md:mt-0 md:ml-24 md:w-[24rem]'
          }
        >
          <Image
            src={Volunteer}
            alt="voluntarios"
            className={'w-1/2 h-1/2 md:w-5/6 md:h-5/6'}
          />
          <Link
            href={
              'https://docs.google.com/forms/d/e/1FAIpQLSe1BmhKQI2NCoyoFwtOo_Ie1P9Sps_o-u8JCbJSftEmWyVd5A/viewform?usp=sf_link'
            }
            target="_blank"
          >
            <button
              className={
                'main-red-button mt-8 transition duration-300 hover:bg-RED_G20'
              }
            >
              Quiero ser voluntario
            </button>
          </Link>
        </div>
      </div>

      {/* BLOCK 4 */}
      <div
        className={
          'col md:row items-center justify-evenly py-12 w-full overflow-hidden bg-WHITE'
        }
      >
        <div
          className={'col w-5/6 md:w-[32rem] md:mr-24 order-2 md:order-none'}
        >
          <Image
            src={Sponsor}
            alt="sponsors"
            className={'w-3/6 self-center my-10 md:my-0'}
          />
          <div className={'col md:row md:justify-evenly md:mx-8 mt-8'}>
            <button
              className={
                'main-red-button mb-4 md:mb-0 transition duration-300 hover:bg-RED_G20'
              }
            >
              Mas informacion
            </button>
            <button className={'main-red-button duration-300 hover:bg-RED_G20'}>
              Quiero ser Sponsor
            </button>
          </div>
        </div>
        <div className={'w-5/6 md:w-1/3 order-1 md:order-none'}>
          <p className={'my-6 font-montserrat text-3xl'}>
            Donaciones y sponsors
          </p>
          <h1 className={'mb-6'}>¡Ayúdanos a crecer!</h1>
          <p className={'leading-relaxed text-base'}>
            NEXXOS cuenta con una amplia oferta de actividades académicas. Tu
            contribución o sponsoreo nos ayuda a hacer más actividades y de
            mejor calidad.
            <br />
            ¡Sumá tu aporte!
          </p>
        </div>
      </div>
    </main>
  );
}

export default AboutTemplate;
