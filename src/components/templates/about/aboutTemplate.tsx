import React from 'react';
import About1 from '../../../../public/images/about1.jpg';
import Image1 from '../../../../public/images/autorities/melisaayelen.jpg';
import Image2 from '../../../../public/images/autorities/mariasol.jpeg';
import Image3 from '../../../../public/images/autorities/valentina.jpeg';
import Image4 from '../../../../public/images/autorities/sofia.jpeg';
import Image5 from '../../../../public/images/autorities/ailen.jpeg';
import Image6 from '../../../../public/images/autorities/alan.jpeg';
import Image from 'next/image';
import Volunteer from '../../../../public/images/volunteer.png';
import Sponsor from '../../../../public/images/support.png';

import FlipCard from '@/components/elements/flipCard/flipCard';

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
      name: 'María Sol Martínez',
      age: '22',
      position: 'Vocal',
      info: '"Egresé del colegio en 2019. En 2022 me uní a Nexxos y empecé a explorar en este mundo de la educación, que definió mis experiencias y estuidos universitarios. En la ONG no sólo encontré un muy lindo grupo de amigos y un objetivo en común, sino también mi vocación. Me siento muy orgullosa de formar parte de este grupo de personas que actúa para mejorar la educación. Sé con seguridad que logramos aportar nuestro granito de arena para que el mundo sea al menos un poquito mejor cada día."',
      image: Image2,
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
        className={
          'full col lg:row items-center justify-center flex-wrap py-12 bg-GREY_LIGHT'
        }
      >
        {autorities.map((item, index) => {
          return (
            <div
              key={index}
              className={
                'p-1 w-4/6 md:w-[32rem] h-[30rem] md:h-[18rem] mb-2 mt-2 lg:mt-0 col lg:mx-6 lg:p-4'
              }
            >
              <FlipCard
                name={item.name}
                age={item.age}
                position={item.position}
                info={item.info}
                image={item.image.src}
              />
            </div>
          );
        })}
      </div>
      {/* BLOCK 3 */}
      <div
        className={
          'row items-center justify-evenly py-12 w-full overflow-hidden bg-WHITE'
        }
      >
        <div className={'ml-24'}>
          <Image src={Volunteer} alt="voluntarios" className={'w-5/6'} />
          <button className={'main-red-button'}>Quiero ser voluntario</button>
        </div>
        <div className={'w-1/3'}>
          <p className={'my-6 font-montserrat text-3xl'}>
            Sumate como voluntario !
          </p>
          <h1 className={'mb-6'}>Subtitle</h1>
          <p className={'leading-relaxed text-base'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
            efficitur tortor. Mauris sagittis sollicitudin efficitur. Quisque
            hendrerit pellentesque imperdiet. Curabitur efficitur orci a lacus
            pellentesque rutrum. Donec aliquam elementum commodo. Nullam quis ex
            eros. Mauris finibus mauris eu malesuada congue. Quisque et
            facilisis nisi, in tempor nibh. Praesent auctor.
          </p>
        </div>
      </div>
      {/* BLOCK 4 */}
      <div
        className={
          'row items-center justify-evenly py-12 w-full overflow-hidden bg-GREY_LIGHT'
        }
      >
        <div className={'w-1/3'}>
          <p className={'my-6 font-montserrat text-3xl'}>
            Donaciones y sponsors
          </p>
          <h1 className={'mb-6'}>Subtitle</h1>
          <p className={'leading-relaxed text-base'}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
            efficitur tortor. Mauris sagittis sollicitudin efficitur. Quisque
            hendrerit pellentesque imperdiet. Curabitur efficitur orci a lacus
            pellentesque rutrum. Donec aliquam elementum commodo. Nullam quis ex
            eros. Mauris finibus mauris eu malesuada congue. Quisque et
            facilisis nisi, in tempor nibh. Praesent auctor.
          </p>
        </div>
        <div className={'col w-1/3 mr-24'}>
          <Image src={Sponsor} alt="sponsors" className={'w-4/6'} />
          <div className={'row justify-evenly'}>
            <button className={'main-red-button'}>Mas informacion</button>
            <button className={'main-red-button'}>Quiero ser Sponsor</button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutTemplate;
