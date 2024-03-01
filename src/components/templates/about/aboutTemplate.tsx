import React from 'react';
import About1 from '../../../../public/images/about1.jpg';
import Image1 from '../../../../public/images/autorities/melisaayelen.jpg';
import Image3 from '../../../../public/images/autorities/valentina.jpeg';
import Image4 from '../../../../public/images/autorities/sofia.jpeg';
import Image6 from '../../../../public/images/autorities/alan.jpeg';
import Image7 from '../../../../public/images/autorities/zoe.jpeg';
import Image8 from '../../../../public/images/autorities/maitena.jpeg';
import Image9 from '../../../../public/images/autorities/emiliano.jpeg';
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
      name: 'Alan Ezequiel Castillo ',
      age: '21',
      position: 'Presidente',
      info: '"Estoy en 2do año del profesorado en Matemática y con el tiempo que llevo siendo voluntario en la ONG, descubrí muchísimas herramientas que, actualmente, hacen que siga formándome como docente. Sin embargo, estoy convencido que la educación secundaria necesita un cambio. Ese cambio lo encontré en NEXXOS y es donde quiero seguir apostando para lograr que los jóvenes se desafíen y desarrollen habilidades ¿Como se logra eso? Construyendo una educación integral y de calidad que permita a los y las estudiantes a potenciarse en cada aspecto de su vida. Seamos parte de la transformación del presente garantizando los frutos para el futuro."',
      image: Image6,
    },
    {
      name: 'Melissa Ayelen Oliva',
      age: '20',
      position: 'Vicepresidente',
      info: '"Soy estudiante de Derecho en la UNMDP. En mi recorido por la secundaria participe en Modelos de Naciones Unidas realizados por Nexxos y gracias a esas experiencias pude descubrir que a lo que me queria dedicar era a las Relaciones Internacionales. Participe de Simulacros a nivel nacional e internacional junto a la Facultad. En 2022 me uni a la ONG con el objetivo de adentrarme en la organizacion que tiene cada uno de los simulacros y sobre todo para poder cambiar y mejorar constantemente la educacion. Nexxos es un espacio en el que prevalece el respeto, la perseverancia y el aprender a romper con muchas de las estructuras impuestas por la sociedad y uno mismo."',
      image: Image1,
    },
    {
      name: 'Zoe Holgado',
      age: '21',
      position: 'Secretaria General',
      info: '"Estudiante de la Licenciatura en Administración de Empresas. Conocí NEXXOS cuando estaba en el secundario, y me uní para devolver al menos un poco de lo que la organización hizo por mí cuando era participante. Desde entonces, he tenido la oportunidad de integrar diferentes proyectos y actividades en lo que respecta a la educación, ello me ha permitido adquirir experiencia en gestión de proyectos, liderazgo y sobre todas las cosas trabajo en equipo. Además, he podido conocer acerca de las realidades y problemáticas que aquejan en la educación actual, y estoy totalmente convencida que hay que hacer un cambio, y es por eso hacemos lo que hacemos."',
      image: Image7,
    },
    {
      name: 'Valentina Fardin',
      age: '23',
      position: 'Tesorera',
      info: '"Estudiante de Licenciatura y Profesorado en Geografía. Mi pasión por la educación y mi convicción de empoderar a los jóvenes me llevaron a unirme a NEXXOS.  Cómo estudiante comprendo la importancia de una educación que desarrolle habilidades poderosas que nos permitan enfrentar los desafíos del mundo actual. En NEXXOS encontré la plataforma perfecta para fomentar un pensamiento crítico de la realidad y a alzar sus voces para construir un futuro más brillante."',
      image: Image3,
    },
    {
      name: 'Sofía Ali',
      age: '20',
      position: 'Vocal',
      info: '"Unirme a Nexxos fue el primer paso para contribuir en el cambio de lo que más influyó en quién soy hoy, la educación. Ser voluntaria me permite aprender constantemente de quienes me rodean y el trabajo en equipo me motiva a sacar cada día una mejor versión de mi. Estudio derecho en la UNMDP, represente a mi facultad en modelos de ONU realizados en el país y en el exterior. Me interesa el feminismo y en los fines de semana suelo dar apoyo escolar a jovenes y niños/as de manera voluntaria."',
      image: Image4,
    },
    {
      name: 'Maitena Granda',
      age: '19',
      position: 'Vocal',
      info: '"Son pocas las cosas que tengo en claro y que no necesito reafirmar continuamente, una de ellas es mi pertenencia en NEXXOS, la disconformidad que en un principio me condujo hasta el voluntariado se transformó en interés por la educación y ayudar a jóvenes a desarrollar pensamiento crítico. Además de ayudar a formar ciudadanos íntegros en esta ong, estoy cursando el segundo año de la carrera de Comunicación Audiovisual en la UNMDP."',
      image: Image8,
    },
    {
      name: 'Emiliano Iché',
      age: '20',
      position: 'Vocal',
      info: '"Soy estudiante de historia, y es por ello que encontré en NEXXOS la posibilidad de trabajar con jóvenes, con quiénes son el futuro, sin estar graduado. Sin embargo, entiendo la educación secundaria necesita un cambio estructural muy profundo, y veo en la ONG los pilares de esa modificación, los valores y las herramientas que se brindan desde otra forma de enseñar son la base de una mejor educación secundaria."',
      image: Image9,
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
        <h1 className={'text-WHITE text-4xl lg:text-5xl text-center'}>
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
          className={'w-full h-[43rem] md:w-[50rem] md:h-[32rem]'}
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
                    'col items-center w-5/6 h-[38rem] md:w-[40rem] md:h-[28rem] justify-start rounded-lg'
                  }
                  style={{
                    background: 'linear-gradient(to bottom, #CF142A, #5D2C80',
                  }}
                >
                  <div
                    className={
                      'my-6 w-full md:w-4/5 row items-center justify-evenly md:justify-around'
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
            ¡Sumate como voluntario!
          </p>
          <h1 className={'mb-6'}>Sé parte de la transformación educativa.</h1>
          <p className={'leading-relaxed text-base'}>
            Si terminaste el colegio secundario.
            <br /> Si sos mayor de edad.
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
                'main-red-button mt-8 transition duration-300 hover:bg-RED_G20 w-[300px]'
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
          <div
            className={'col md:row md:justify-evenly items-center md:mx-8 mt-8'}
          >
            {/* <button
              className={
                'main-red-button mb-4 md:mb-0 transition duration-300 hover:bg-RED_G20'
              }
            >
              Mas informacion
            </button> */}
            <Link
              href={'/contact'}
              className={
                'main-red-button transition duration-300 hover:bg-RED_G20 w-[300px]'
              }
            >
              Quiero ser Sponsor
            </Link>
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
