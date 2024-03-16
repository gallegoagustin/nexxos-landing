import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import articles from '@/constants/articles';
import alliances from '@/constants/alliances';
import reviews from '@/constants/reviews';
import LazyLoad from 'react-lazyload';

import HomeCarouselCard from '@/components/elements/homeCarouselCard/homeCarouselCard';
import Icon1 from '../../../../public/images/icons/isotipos/onu.svg';
import Icon2 from '../../../../public/images/icons/isotipos/oea.svg';
import Icon3 from '../../../../public/images/icons/isotipos/rastros.svg';
import Icon4 from '../../../../public/images/icons/isotipos/sena.svg';
import Icon7 from '../../../../public/images/icons/isotipos/hcd.svg';
import Icon8 from '../../../../public/images/icons/isotipos/un.svg';
import ArrowRightSmall from '../../../../public/images/icons/arrow-right-small.svg';

function HomeTemplate() {
  const router = useRouter();

  // Agregar un estado para determinar si es pantalla pequeña o no
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Verificar el tamaño de la pantalla y actualizar el estado
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Llamarlo inicialmente para ajustar el estado

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const carouselItems = [
    { title: 'sim.onu', icon: Icon1, id: 0 },
    { title: 'sim.oea', icon: Icon2, id: 1 },
    { title: 'sim.rastros', icon: Icon3, id: 2 },
    { title: 'sim.sena', icon: Icon4, id: 3 },
    { title: 'sim.hcd', icon: Icon7, id: 6 },
    { title: 'sim.un', icon: Icon1, id: 8 },
  ];

  const carouselCards = [
    {
      id: 0,
      title: 'sim.onu',
      subtitle: 'Simulacro de la Organización de las Naciones Unidas',
      text: 'Es una experiencia educativa pedagógica, en donde los estudiantes de los últimos 3 años de la secundaria se ponen en el papel de diplomáticos que representan distintos gobiernos de todo el globo, y tienen el objetivo de trabajar en equipo para defender los intereses de su gobierno al debatir y consensuar sobre problemáticas mundiales preseleccionadas.',
      buttonText: 'saber más',
      image:
        'https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710016488/nexxos/onu_dmh4oj.jpg?_s=public-apps',
      logo: Icon1,
      link: '/activities',
    },
    {
      id: 1,
      title: 'sim.oea',
      subtitle: 'Simulacro de la Organización de los Estados Americanos',
      text: 'Es una experiencia educativa pedagógica, en donde los estudiantes de los primeros 3 años de la secundaria se ponen en el papel de diplomáticos que representan distintos gobiernos del continente americano, y tienen el objetivo de trabajar en equipo para defender los intereses de su gobierno al debatir y consensuar sobre problemáticas americanas preseleccionadas.',
      buttonText: 'saber más',
      image:
        'https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710016490/nexxos/oea_efjlpi.jpg?_s=public-apps',
      logo: Icon2,
      link: '/activities',
    },
    {
      id: 2,
      title: 'sim.rastros',
      subtitle: 'Simulacro de una Investigación Forense',
      text: 'El sim.rastros es el simulacro dedicado al aprendizaje innovador de las Ciencias Exactas y Naturales. De esta manera, la actividad se centra en el desarrollo de una investigación policial en donde los participantes asumen el rol de detectives con el objetivo de descubrir lo ocurrido en el crimen y determinar, por medio del análisis de pistas e indicios, quién es el culpable.',
      buttonText: 'saber más',
      image:
        'https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710016622/nexxos/rastros_mlxigs.jpg?_s=public-apps',
      logo: Icon3,
      link: '/activities',
    },
    {
      id: 3,
      title: 'sim.sena',
      subtitle: 'Simulacro de la honorable Cámara de Senadores de la Argentina',
      text: 'Este es un simulacro de la Honorable Cámara de Senadores de la República Argentina, donde los estudiantes representarán a un senador ficticio, pero de un partido político real. El participante tendrá una entrevista con los organizadores para que se le asigne un senador y recibirá la información sobre el funcionario a representar: información personal, afinidades políticas, relaciones dentro y fuera del senado, leyes votadas o presentadas anteriormente, escándalos con la prensa, investigaciones anteriores, entre otros.',
      buttonText: 'saber más',
      image:
        'https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710016486/nexxos/senado_h3m0um.jpg?_s=public-apps',
      logo: Icon4,
      link: '/activities',
    },
    {
      id: 6,
      title: 'sim.hcd',
      subtitle: 'Simulacro del Honorable Concejo Deliberante',
      text: 'Esta actividad de simulación buscará recrear la dinámica y los debates que se dan en el Honorable Concejo Deliberante de la ciudad. Quienes participen de esta actividad podrán hacerlo como concejales, asesores o miembros de la prensa. Cada uno de esos roles trabaja dinámicas y habilidades distintas, todas muy enriquecedoras para la formación de nuestros jóvenes.',
      buttonText: 'saber más',
      image:
        'https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710016487/nexxos/hcd_owgp5v.jpg?_s=public-apps',
      logo: Icon7,
      link: '/activities',
    },
    {
      id: 8,
      title: 'sim.un',
      subtitle:
        'Simulacro de la Organización de las Naciones Unidas (en inglés)',
      text: 'Es un simulacro enfocado en la aplicación y la práctica del idioma inglés en las ciencias sociales, donde los y las participantes se pondrán en el lugar de quienes representan a los países del mundo en la Organización de las Naciones Unidas siguiendo el tradicional formato de esta actividad.',
      buttonText: 'saber más',
      image:
        'https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710016487/nexxos/g20_2_hen8kl.jpg?_s=public-apps',
      logo: Icon8,
      link: '/activities',
    },
  ];

  return (
    <section className={'full col justify-start items-center max-w-[1920px]'}>
      {/* BLOCK 1 */}
      <LazyLoad once className="w-full">
        <div
          className="header-image-container px-10 lg:py-32 lg:px-24"
          style={{
            background:
              'url(https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710012310/nexxos/atyb5cmr8y2v1j4idkpp.jpg?_s=public-apps)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: 'center',
            boxShadow: 'inset 0 0 0 1000px rgba(47, 47, 77, 0.4)',
          }}
        >
          <div className={'full'}>
            <div className={'mt-44 md:mt-0'}>
              <h1 className={'text-RED_MEDIUM text-4xl lg:text-6xl'}>
                El lado
              </h1>
              <h1 className={'text-RED_MEDIUM text-4xl lg:text-6xl'}>
                correcto de
              </h1>
              <h1 className={'text-WHITE text-4xl lg:text-6xl'}>
                la educación
              </h1>
            </div>
            <Link
              className={
                'main-red-button mt-4 md:mt-8 py-2 transition duration-300 hover:bg-WHITE hover:text-RED_MEDIUM w-[300px]'
              }
              href={'/contact'}
            >
              SABER MÁS
            </Link>
          </div>
        </div>
      </LazyLoad>

      {/* BLOCK 2 */}
      <div className={'col items-center py-6'}>
        <div className={'w-full row centered'}>
          <p className={'text-center text-lg w-5/6 lg:w-2/5 font-light'}>
            Somos una ONG que busca la transformación educativa en la Argentina
            y el mundo. Luchamos por una educación que tenga como eje principal
            la formación en habilidades, capacidades, inteligencias múltiples,
            autoconocimiento e interacciones sociales. Creemos en un mundo con
            menos problemáticas, en el que mejoramos nuestras comunicaciones y
            vinculaciones. Una de nuestras formas de demostrar que una educación
            distinta es posible, es organizando simulacros educativos que ponen
            a nuestros estudiantes a prueba y los empuja a crecer y aprender
            para la vida.
          </p>
        </div>

        {/* BLOCK 3 */}
        <h1 className={'text-3xl mt-12 text-RED_MEDIUM'}>
          Nuestras actividades
        </h1>
        <div className="hidden md:row w-full lg:w-2/3 mt-8 justify-center">
          {carouselItems.map((item) => {
            return (
              <button
                key={item.id}
                className={
                  isMobile
                    ? 'col-span-1 m-3 md:m-0 md:w-1/3 cursor-pointer'
                    : 'col items-center m-3 md:m-0 md:w-1/6 cursor-pointer'
                }
                onClick={() => router.push('/activities')}
              >
                <div
                  className={
                    'p-4 row centered shadow-BLUE_LIGHT shadow-md rounded-lg'
                  }
                >
                  <LazyLoad once>
                    <Image
                      src={item.icon}
                      alt={'icon'}
                      className={'h-12 w-12'}
                    />
                  </LazyLoad>
                </div>
                <p
                  className={
                    'text-center mt-2 font-bold text-xs md:text-sm w-3/4'
                  }
                >
                  {item.title}
                </p>
              </button>
            );
          })}
        </div>

        <div className={'hidden w-full lg:inline'}>
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            className={'w-[60rem] h-[40rem] mt-12'}
          >
            {carouselCards.map((item) => {
              return (
                <div key={item.id}>
                  <SwiperSlide key={item.id} className={'pb-12 px-4'}>
                    <HomeCarouselCard
                      link={item.link}
                      title={item.title}
                      subtitle={item.subtitle}
                      text={item.text}
                      buttonText={item.buttonText}
                      image={item.image}
                      logo={item.logo.src}
                    />
                  </SwiperSlide>
                </div>
              );
            })}
          </Swiper>
        </div>

        <div className={'lg:hidden row overflow-hidden mt-12'}>
          <Swiper
            pagination={true}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            className={'w-[85vw] max-w-[500px]'}
          >
            <div className={'flex w-full bg-GREY_DARK'}>
              {carouselCards.map((item) => {
                const elementId = `card-${item.title}`;

                let colorClass = '';

                if (item.title === 'sim.onu') {
                  colorClass = 'PURPLE_ONU';
                } else if (item.title === 'sim.rastros') {
                  colorClass = 'PINK_RASTROS';
                } else if (item.title === 'sim.sena') {
                  colorClass = 'LIGHTBLUE_SENA';
                } else if (item.title === 'sim.electoral') {
                  colorClass = 'BLUE_ELECTORAL';
                } else if (item.title === 'sim.g20') {
                  colorClass = 'RED_G20';
                } else if (item.title === 'sim.hcd') {
                  colorClass = 'TURQUOISE_HCD';
                } else if (item.title === 'sim.oea') {
                  colorClass = 'TEAL_OEA';
                } else {
                  colorClass = 'VIOLET_UN';
                }
                return (
                  <div key={item.id} className={'h-full col centered pb-2'}>
                    <SwiperSlide key={item.id} className={'full pb-12 px-2'}>
                      <div
                        className={
                          'full col gap-4 p-10 items-center lg:items-stretch lg:row lg:justify-between shadow-md rounded-2xl'
                        }
                      >
                        <p
                          className={`font-bold text-${colorClass} text-center`}
                        >
                          {item.title.toUpperCase()}
                        </p>
                        <h1
                          className={
                            'text-BLUE_DARK text-2xl font-light text-center'
                          }
                        >
                          {item.subtitle}
                        </h1>
                        <div className={'full'}>
                          <p className={'font-light text-center'}>
                            {item.text}
                          </p>
                        </div>
                        {item.text ? (
                          <Link
                            className={`main-red-button bg-${colorClass} w-[200px]`}
                            href={`/activities#${elementId}`}
                          >
                            {item.buttonText.toUpperCase()}
                          </Link>
                        ) : (
                          <button
                            className={'main-red-button bg-GREY_DARK w-[200px]'}
                            disabled
                          >
                            {item.buttonText.toUpperCase()}
                          </button>
                        )}
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>

      {/* BLOCK 4 */}
      <div
        className={'col items-center py-12 w-full overflow-hidden'}
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(142, 142, 211, 0.16) 0%, rgba(232, 232, 232, 0.32) 100%)',
        }}
      >
        <h1 className={'text-3xl text-RED_MEDIUM'}>En los medios</h1>
        <div className={'hidden lg:flex w-2/3 col'}>
          {articles.length && (
            <article className={'row w-full mt-8'}>
              <div className={'w-1/2 h-full row centered'}>
                <LazyLoad once>
                  <Image
                    src={articles[0].image}
                    alt={'image'}
                    className={'full'}
                    priority
                  />
                </LazyLoad>
              </div>
              <div className={'w-1/2 col p-4 justify-evenly'}>
                <p className={'text-BLUE_DARK text-3xl font-bold'}>
                  {articles[0].title}
                </p>
                {articles[0].subtitle && (
                  <p className={'text-BLUE_DARK font-light'}>
                    {articles[0].subtitle}
                  </p>
                )}
                {articles[0].from && (
                  <div className={'w-full row justify-between'}>
                    <p className={'text-GREY_DARK text-xs'}>
                      {articles[0].from}
                    </p>
                    <Link
                      className={'row'}
                      href={articles[0].link}
                      target={'_blank'}
                    >
                      <p
                        className={
                          'keep-reading-button transition duration-300'
                        }
                      >
                        SEGUIR LEYENDO
                      </p>
                      <LazyLoad once>
                        <Image
                          src={ArrowRightSmall}
                          alt={'icon'}
                          className={'ml-2 mt-[1px] w-[13px]'}
                        />
                      </LazyLoad>
                    </Link>
                  </div>
                )}
              </div>
            </article>
          )}
          <div className={'w-full row justify-between'}>
            {articles.length &&
              articles.slice(1, articles.length).map((article, index) => {
                return (
                  <article key={index} className={'col w-1/3 mt-8 mr-4'}>
                    <div className={'w-full row centered'}>
                      <LazyLoad once>
                        <Image
                          src={article.image}
                          alt={'image'}
                          className={'full'}
                          priority
                        />
                      </LazyLoad>
                    </div>
                    <div className={'full col px-4 justify-between'}>
                      <p className={'text-BLUE_DARK text-lg font-bold'}>
                        {article.title}
                      </p>
                      {article.subtitle && (
                        <p className={'text-BLUE_DARK font-light'}>
                          {article.subtitle}
                        </p>
                      )}
                      {article.from && (
                        <div className={'w-full row justify-between mt-4'}>
                          <p className={'text-GREY_DARK text-xs'}>
                            {article.from}
                          </p>
                          <Link
                            className={'row'}
                            href={article.link}
                            target={'_blank'}
                          >
                            <p
                              className={
                                'keep-reading-button transition duration-300'
                              }
                            >
                              SEGUIR LEYENDO
                            </p>
                            <Image
                              src={ArrowRightSmall}
                              alt={'icon'}
                              className={'ml-2 mt-[1px] w-[13px]'}
                              // width={13}
                              // height={10}
                            />
                          </Link>
                        </div>
                      )}
                    </div>
                  </article>
                );
              })}
          </div>
        </div>

        <div className={'lg:hidden row overflow-hidden'}>
          <div className={'flex col'}>
            {articles.length &&
              articles.map((article) => {
                return (
                  <div key={article.link} className={'col mt-8'}>
                    <div className={'w-full row centered px-4'}>
                      <LazyLoad once>
                        <Image
                          src={article.image}
                          alt={'image'}
                          className={'full'}
                          priority
                        />
                      </LazyLoad>
                    </div>
                    <div className={'full h-1/2 justify-around col px-4 py-4'}>
                      <p className={'text-BLUE_DARK text-lg font-bold'}>
                        {article.title}
                      </p>
                      {article.subtitle && (
                        <p className={'text-BLUE_DARK font-light'}>
                          {article.subtitle}
                        </p>
                      )}
                      {article.from && (
                        <div className={'w-full row justify-between pt-2'}>
                          <p className={'text-GREY_DARK text-xs'}>
                            {article.from}
                          </p>
                          <Link
                            className={'row'}
                            href={article.link}
                            target={'_blank'}
                          >
                            <p
                              className={
                                'keep-reading-button transition duration-300'
                              }
                            >
                              SEGUIR LEYENDO
                            </p>
                            <Image
                              src={ArrowRightSmall}
                              alt={'icon'}
                              className={'ml-2 mt-[1px] w-[13px]'}
                              // width={13}
                              // height={10}
                            />
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>

      {/* BLOCK 5 */}
      <div
        className={'w-full col items-center py-12'}
        style={{ background: 'rgba(176, 181, 211, 0.22)' }}
      >
        <h1 className={'hidden lg:inline text-3xl text-RED_MEDIUM'}>
          Quienes nos conocen, opinan:
        </h1>
        <h1 className={'lg:hidden text-3xl text-RED_MEDIUM text-center'}>
          Quienes nos conocen,
          <br />
          opinan:
        </h1>
        <div className={'w-full row centered'}>
          <div
            className={
              'hidden lg:flex mt-12 pb-2 row w-full flex-wrap gap-8 justify-center'
            }
          >
            {reviews.map((item) => {
              return (
                <div
                  key={item.id}
                  className={
                    'col bg-WHITE rounded-lg shadow-md p-4 justify-between w-[300px] min-h-[550px]'
                  }
                >
                  <p className={'text-xs font-light text-justify'}>
                    {'"' + item.text + '"'}
                  </p>
                  <div
                    className={
                      'row rounded-lg bg-GREY_LIGHT mt-8  p-4 gap-2 items-center'
                    }
                  >
                    <div className={'col h-12 gap-1'}>
                      <p className={'font-bold'}>{item.name}</p>
                      <p className={'text-xs'}>{item.type}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div
            className={
              'lg:hidden mt-12 pb-2 col w-5/6 max-w-[500px] justify-between overflow-hidden'
            }
          >
            {reviews.map((item) => {
              return (
                <div
                  key={item.id}
                  className={
                    'col bg-WHITE rounded-lg shadow-md mx-5 p-4 my-4 min-h-[400px]'
                  }
                  style={{ flex: '0 0 90%' }}
                >
                  <div
                    className={'row rounded-lg bg-GREY_LIGHT items-center p-4'}
                  >
                    <div className={'col'}>
                      <p className={'font-bold'}>{item.name}</p>
                      <p className={'text-xs'}>{item.type}</p>
                    </div>
                  </div>
                  <p className={'text-xs font-light p-4 text-justify'}>
                    {'"' + item.text + '"'}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* BLOCK 6 */}
      <div className={'w-full col gap-8 items-center py-12 bg-WHITE'}>
        <h1 className={'text-3xl text-RED_MEDIUM'}>Nuestras alianzas</h1>
        <div className={'hidden lg:flex w-full overflow-hidden'}>
          <Swiper
            modules={[Autoplay]}
            className={'w-2/3'}
            slidesPerView={5}
            autoplay={{
              disableOnInteraction: false,
            }}
            loop={true}
          >
            {alliances.map((item) => {
              return (
                <SwiperSlide key={item.id}>
                  <LazyLoad once>
                    <Image src={item.icon} alt={'icon'} width={96} />
                  </LazyLoad>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className={'lg:hidden w-full overflow-hidden'}>
          <div className={'row w-full justify-evenly flex-wrap items-center'}>
            {alliances.map((item) => {
              return (
                <div key={item.id} className={'m-6'}>
                  <LazyLoad once>
                    <Image src={item.icon} alt={'icon'} height={64} />
                  </LazyLoad>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeTemplate;
