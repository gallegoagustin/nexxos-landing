import React, { useRef, useEffect, useState } from 'react';
import Link from 'next/link';
// import useEmblaCarousel from 'embla-carousel-react';
// import Autoplay from 'embla-carousel-autoplay';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

import { flushSync } from 'react-dom';
import Image from 'next/image';
import HomeCarouselCard from '@/components/elements/homeCarouselCard/homeCarouselCard';
import articles from '@/constants/articles';
import alliances from '@/constants/alliances';
import reviews from '@/constants/reviews';
import Landing1 from '../../../../public/images/landing1.jpeg';
import Icon1 from '../../../../public/images/icons/isotipos/onu.svg';
import Icon2 from '../../../../public/images/icons/isotipos/oea.svg';
import Icon3 from '../../../../public/images/icons/isotipos/rastros.svg';
import Icon4 from '../../../../public/images/icons/isotipos/sena.svg';
import Icon5 from '../../../../public/images/icons/isotipos/electoral.svg';
import Icon6 from '../../../../public/images/icons/isotipos/g20.svg';
import Icon7 from '../../../../public/images/icons/isotipos/hcd.png';
import Icon8 from '../../../../public/images/icons/isotipos/juicio.svg';
import ImageCarousel1 from '../../../../public/images/carousel-item-images/simonu.png';
import ImageCarousel2 from '../../../../public/images/carousel-item-images/simoea.png';
import ImageCarousel3 from '../../../../public/images/carousel-item-images/simrastros.png';
import ImageCarousel4 from '../../../../public/images/carousel-item-images/simsena.png';
import ImageCarousel5 from '../../../../public/images/carousel-item-images/simelectoral.png';
import ImageCarousel6 from '../../../../public/images/carousel-item-images/simg20.png';
import ImageCarousel7 from '../../../../public/images/carousel-item-images/simhcd.png';
import ImageCarousel8 from '../../../../public/images/carousel-item-images/simjuicio.png';
import ArrowRightSmall from '../../../../public/images/icons/arrow-right-small.svg';

function HomeTemplate() {
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

  // const autoplayOptions = {
  //   delay: 3500,
  //   rootNode: (emblaRoot) => emblaRoot.parentElement,
  //   stopOnInteraction: false,
  // };

  // const autoplayOptionsIcons = {
  //   delay: 1500,
  //   rootNode: (emblaRoot) => emblaRoot.parentElement,
  //   stopOnInteraction: false,
  // };

  // const autoplay = useRef(Autoplay(autoplayOptions));

  // const autoplay2 = useRef(Autoplay(autoplayOptions));

  // const autoplayIcons = useRef(Autoplay(autoplayOptionsIcons));

  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, startIndex: 2 }, [
  //   autoplay.current,
  // ]);
  // const [emblaRef2, emblaApi2] = useEmblaCarousel(
  //   { loop: true, startIndex: 2 },
  //   [autoplay2.current]
  // );
  // const [iconsRef, iconsApi] = useEmblaCarousel({ loop: true, startIndex: 5 }, [
  //   autoplayIcons.current,
  // ]);
  // const [reviewsRef, reviewsApi] = useEmblaCarousel({
  //   loop: true,
  //   startIndex: 1,
  // });
  // const [articlesRef, articlesApi] = useEmblaCarousel({
  //   loop: true,
  //   startIndex: 1,
  // });

  const carouselItems = [
    { title: 'sim.onu', icon: Icon1, id: 0 },
    { title: 'sim.oea', icon: Icon2, id: 1 },
    { title: 'sim.rastros', icon: Icon3, id: 2 },
    { title: 'sim.sena', icon: Icon4, id: 3 },
    { title: 'sim.electoral', icon: Icon5, id: 4 },
    { title: 'sim.g20', icon: Icon6, id: 5 },
    { title: 'sim.hcd', icon: Icon7, id: 6 },
    { title: 'sim.juicio', icon: Icon8, id: 7 },
  ];

  const carouselCards = [
    {
      title: 'sim.onu',
      subtitle: 'Simulacro de la Organización de las Naciones Unidas',
      text: 'Es una experiencia educativa pedagógica, en donde los estudiantes de los últimos 3 años de la secundaria se ponen en el papel de diplomáticos que representan distintos gobiernos de todo el globo, y tienen el objetivo de trabajar en equipo para defender los intereses de su gobierno al debatir y consensuar sobre problemáticas mundiales preseleccionadas.',
      buttonText: 'saber más',
      image: ImageCarousel1,
      link: '/activities',
    },
    {
      title: 'sim.oea',
      subtitle: 'Simulacro de la Organización de los Estados Americanos',
      text: 'Es una experiencia educativa pedagógica, en donde los estudiantes de los primeros 3 años de la secundaria se ponen en el papel de diplomáticos que representan distintos gobiernos del continente americano, y tienen el objetivo de trabajar en equipo para defender los intereses de su gobierno al debatir y consensuar sobre problemáticas americanas preseleccionadas.',
      buttonText: 'saber más',
      image: ImageCarousel2,
      link: '/activities',
    },
    {
      title: 'sim.rastros',
      subtitle: 'Simulacro de una Investigación Forense',
      text: 'El sim.rastros es el simulacro dedicado al aprendizaje innovador de las Ciencias Exactas y Naturales. De esta manera, la actividad se centra en el desarrollo de una investigación policial en donde los participantes asumen el rol de detectives con el objetivo de descubrir lo ocurrido en el crimen y determinar, por medio del análisis de pistas e indicios, quién es el culpable.',
      buttonText: 'saber más',
      image: ImageCarousel3,
      link: '/activities',
    },
    {
      title: 'sim.sena',
      subtitle: 'Simulacro de la honorable Cámara de Senadores de la Argentina',
      text: 'Este es un simulacro de la Honorable Cámara de Senadores de la República Argentina, donde los estudiantes interesados representarán a un senador ficticio, pero de un partido político real con representación en dicha cámara. Con dicha información, y poniéndose en el papel de dicho senador, deberá escribir una ley que presentará para debatir durante el simulacro. El participante tendrá primero una entrevista con los organizadores para que se le asigne un senador. Recibirá la información sobre el funcionario a representar, entre la cual habrá información personal, afinidades políticas, relaciones dentro y fuera del senado, leyes votadas o presentadas anteriormente, escándalos con la prensa, investigaciones anteriores, entre otros.',
      buttonText: 'saber más',
      image: ImageCarousel4,
      link: '/activities',
    },
    {
      title: 'sim.electoral',
      subtitle: 'Simulacro de un debate presidencial y ministerial',
      text: 'sim.electoral es una edición especial ofrecida sólo en años electivos. El simulacro, focalizado dentro del área de las ciencias sociales, propone a los participantes la posibilidad de ponerse en la piel de los candidatos presidenciales y de su equipo de canciller y ministros, o bien participar del formato prensa, con el objetivo de cubrir el debate desde distintas líneas editoriales a través del relevamiento periodístico y fotográfico. A lo largo de la actividad los participantes que desempeñen el rol de políticos debatirán de distintas maneras sus respectivos proyectos de país.',
      buttonText: 'saber más',
      image: ImageCarousel5,
      link: '/activities',
    },
    {
      title: 'sim.g20',
      subtitle: 'Simulacro del Grupo de los 20',
      text: 'Esta actividad de simulación buscará recrear la dinámica y los debates que se dan en el poderoso Grupo de los 20, que engloba a una veintena de las principales potencias mundiales. Quienes participen de esta actividad podrán hacerlo como cancilleres, presidentes o primeros ministros, y debatirán problemáticas preseleccionadas teniendo en cuenta la postura del gobierno al que representan con respecto a dicho tópico, así también como el contexto mundial y la geopolítica actual.',
      buttonText: 'saber más',
      image: ImageCarousel6,
      link: '/activities',
    },
    {
      title: 'sim.hcd',
      subtitle: 'Simulacro del Honorable Concejo Deliberante',
      text: 'Esta actividad de simulación buscará recrear la dinámica y los debates que se dan en el Honorable Concejo Deliberante de la ciudad. Quienes participen de esta actividad podrán hacerlo como concejales, asesores o miembros de la prensa. Cada uno de esos roles trabaja dinámicas y habilidades distintas, todas muy enriquecedoras para la formación de nuestros jóvenes.',
      buttonText: 'saber más',
      image: ImageCarousel7,
      link: '/activities',
    },
    {
      title: 'sim.juicio',
      subtitle: 'Simulacro de un Juicio por Jurados',
      text: 'En esta actividad se recrea el desarrollo de un juicio por jurados, con sus respectivas dinámicas y momentos, a partir del tratamiento de un caso. A su vez se implementará en la actividad una modalidad de prensa, que se ocupará de cubrir el avance del juicio a lo largo de todas las jornadas.',
      buttonText: 'saber más',
      image: ImageCarousel8,
      link: '/activities',
    },
  ];

  // START OF SLIDER FUNC
  // const [tweenValues, setTweenValues] = React.useState<number[] | []>([]);

  // const numberWithinRange = (number: number, min: number, max: number) =>
  //   Math.min(Math.max(number, min), max);

  // const TWEEN_FACTOR = 10;

  // const onScroll = React.useCallback(() => {
  //   if (!emblaApi) return;

  //   const engine = emblaApi.internalEngine();
  //   const scrollProgress = emblaApi.scrollProgress();

  //   const styles = emblaApi.scrollSnapList().map((scrollSnap, index) => {
  //     if (!emblaApi.slidesInView().includes(index)) return 0;
  //     let diffToTarget = scrollSnap - scrollProgress;

  //     if (engine.options.loop) {
  //       engine.slideLooper.loopPoints.forEach((loopItem) => {
  //         // const target = loopItem.target().get();
  //         const target = loopItem.target();
  //         if (index === loopItem.index && target !== 0) {
  //           const sign = Math.sign(target);
  //           if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
  //           if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
  //         }
  //       });
  //     }
  //     const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
  //     return numberWithinRange(tweenValue, 0, 1);
  //   });
  //   setTweenValues(styles);
  // }, [emblaApi, setTweenValues]);

  // const onScrollIcons = React.useCallback(() => {
  //   if (!iconsApi) return;

  //   const engine = iconsApi.internalEngine();
  //   const scrollProgress = iconsApi.scrollProgress();

  //   const styles = iconsApi.scrollSnapList().map((scrollSnap, index) => {
  //     if (!iconsApi.slidesInView().includes(index)) return 0;
  //     let diffToTarget = scrollSnap - scrollProgress;

  //     if (engine.options.loop) {
  //       engine.slideLooper.loopPoints.forEach((loopItem) => {
  //         // const target = loopItem.target().get();
  //         const target = loopItem.target();
  //         if (index === loopItem.index && target !== 0) {
  //           const sign = Math.sign(target);
  //           if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
  //           if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
  //         }
  //       });
  //     }
  //     const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
  //     return numberWithinRange(tweenValue, 0, 1);
  //   });
  //   setTweenValues(styles);
  // }, [iconsApi, setTweenValues]);

  // React.useEffect(() => {
  //   if (!emblaApi) return;

  //   emblaApi.on('scroll', () => {
  //     flushSync(() => onScroll());
  //   });

  //   onScroll();
  //   emblaApi.on('reInit', onScroll);
  // }, [emblaApi, onScroll]);

  // const onScrollEmbla2 = React.useCallback(() => {
  //   if (!emblaApi2) return;

  //   const engine = emblaApi2.internalEngine();
  //   const scrollProgress = emblaApi2.scrollProgress();

  //   const styles = emblaApi2.scrollSnapList().map((scrollSnap, index) => {
  //     if (!emblaApi2.slidesInView().includes(index)) return 0;
  //     let diffToTarget = scrollSnap - scrollProgress;

  //     if (engine.options.loop) {
  //       engine.slideLooper.loopPoints.forEach((loopItem) => {
  //         // const target = loopItem.target().get();
  //         const target = loopItem.target();
  //         if (index === loopItem.index && target !== 0) {
  //           const sign = Math.sign(target);
  //           if (sign === -1) diffToTarget = scrollSnap - (1 + scrollProgress);
  //           if (sign === 1) diffToTarget = scrollSnap + (1 - scrollProgress);
  //         }
  //       });
  //     }
  //     const tweenValue = 1 - Math.abs(diffToTarget * TWEEN_FACTOR);
  //     return numberWithinRange(tweenValue, 0, 1);
  //   });
  //   setTweenValues(styles);
  // }, [emblaApi2, setTweenValues]);

  // React.useEffect(() => {
  //   if (!emblaApi2) return;

  //   emblaApi2.on('scroll', () => {
  //     flushSync(() => onScroll());
  //   });

  //   onScroll();
  //   emblaApi2.on('reInit', onScroll);
  // }, [emblaApi2, onScrollEmbla2]);

  // React.useEffect(() => {
  //   if (!iconsApi) return;

  //   iconsApi.on('scroll', () => {
  //     flushSync(() => onScrollIcons());
  //   });

  //   onScrollIcons();
  // }, [iconsApi, onScrollIcons]);

  // const handleCarouselSlideSelection = (slide: number) => {
  //   autoplay.current.reset();
  //   emblaApi?.scrollTo(slide);
  // };

  // React.useEffect(() => {
  //   if (!articlesApi) return;

  //   articlesApi.on('scroll', () => {
  //     flushSync(() => onScrollIcons());
  //   });

  //   onScrollIcons();
  // }, [articlesApi, onScrollIcons]);

  return (
    <main className={'full col justify-start items-center'}>
      {/* BLOCK 1 */}
      <div
        className={`header-image-container px-10 lg:py-32 lg:px-24`}
        style={{
          background: `url(${Landing1.src})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: 'center',
          boxShadow: 'inset 0 0 0 1000px rgba(47, 47, 77, 0.4)',
        }}
      >
        <div className={'full'}>
          <div className={'mt-44 md:mt-0'}>
            <h1 className={'text-RED_MEDIUM text-3xl lg:text-6xl '}>El lado</h1>
            <h1 className={'text-RED_MEDIUM text-3xl lg:text-6xl'}>
              correcto de
            </h1>
            <h1 className={'text-WHITE text-3xl lg:text-6xl'}>la educacion</h1>
          </div>
          <Link
            className={'main-red-button md:mt-8 py-2 w-full md:w-1/3 lg:w-1/6'}
            href={'/contact'}
          >
            SABER MÁS
          </Link>
        </div>
      </div>

      {/* BLOCK 2 */}
      <div className={'col items-center py-6'}>
        <div className={'w-full row centered'}>
          <p className={'text-center text-lg w-4/6 lg:w-2/5 font-light'}>
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
        <h1 className={'text-3xl mt-12 text-RED_MEDIUM'}>Actividades 2023</h1>
        <div
          className={
            isMobile
              ? 'grid grid-cols-2 gap-4 mt-6'
              : 'w-full lg:w-2/3 mt-8 row justify-evenly lg:justify-between'
          }
        >
          {carouselItems.map((item, index) => {
            return (
              <button
                key={item.id}
                className={
                  isMobile
                    ? 'col-span-1 m-1 md:m-0 md:w-1/3'
                    : 'col items-center m-3 md:m-0 md:w-1/6'
                }
                // onClick={() => handleCarouselSlideSelection(index)}
              >
                <div
                  className={
                    'p-4 row centered shadow-BLUE_LIGHT shadow-md rounded-t-lg rounded-br-lg'
                  }
                >
                  <Image src={item.icon} alt={'icon'} className={'h-12 w-12'} />
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
        {/* <div className={'hidden lg:inline w-1/2 overflow-hidden'} ref={emblaRef}> */}
        <div className={'hidden w-full lg:inline overflow-hidden'}>
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
            <div className={'flex'}>
              {carouselCards.map((item, index) => {
                return (
                  <div
                    key={index}
                    className={'full p-1'}
                    style={{ flex: '0 0 100%' }}
                  >
                    <SwiperSlide className={'w-full h-full pb-12'}>
                      <HomeCarouselCard
                        link={item.link}
                        title={item.title}
                        subtitle={item.subtitle}
                        text={item.text}
                        buttonText={item.buttonText}
                        image={item.image.src}
                      />
                    </SwiperSlide>
                  </div>
                );
              })}
            </div>
          </Swiper>
        </div>

        {/* <div className={'lg:hidden row overflow-hidden mt-12'} ref={emblaRef2}> */}
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
            className={'w-[28rem] h-[40rem]'}
          >
            <div className={'flex w-[100vw] bg-GREY_DARK'}>
              {carouselCards.map((item, index) => {
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
                  colorClass = 'GREEN_JUICIO';
                }
                return (
                  <div key={index} className={'h-full col centered mx-8 pb-2'}>
                    <SwiperSlide className={'h-full w-full pb-12'}>
                      <div
                        className={
                          'full h-full col p-2 items-center lg:items-stretch lg:row lg:justify-between shadow-md rounded-2xl'
                        }
                      >
                        <div className={'w-2/3 col h-full p-1 lg:p-4'}>
                          <p
                            className={`font-bold text-${colorClass} text-center my-4`}
                          >
                            {item.title.toUpperCase()}
                          </p>
                          <h1
                            className={
                              'text-BLUE_DARK text-2xl font-light text-center my-2'
                            }
                          >
                            {item.subtitle}
                          </h1>
                          <div
                            className={'overflow-y-scroll'}
                            style={{ flex: '0 0 60%' }}
                          >
                            <p className={'font-light text-center'}>
                              {item.text}
                            </p>
                          </div>
                          <div className={'full col justify-end'}>
                            {item.text ? (
                              <Link
                                className={`main-red-button bg-${colorClass}`}
                                href={item.link}
                              >
                                {item.buttonText.toUpperCase()}
                              </Link>
                            ) : (
                              <button
                                className={'main-red-button bg-GREY_DARK mt-4'}
                                disabled
                              >
                                {item.buttonText.toUpperCase()}
                              </button>
                            )}
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  </div>
                );
              })}
            </div>
          </Swiper>
        </div>
      </div>

      {/* BLOCK 3 */}
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
            <div className={'row w-full mt-8'}>
              <div className={'w-1/2 h-full row centered'}>
                <Image
                  src={articles[0].image}
                  alt={'image'}
                  className={'full'}
                />
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
                      <p className={'text-xs text-PURPLE_ONU font-bold'}>
                        SEGUIR LEYENDO
                      </p>
                      <Image
                        src={ArrowRightSmall}
                        alt={'icon'}
                        className={'ml-2 mt-[1px]'}
                        width={13}
                      />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          )}
          <div className={'w-full row justify-between'}>
            {articles.length &&
              articles.slice(1, articles.length).map((article, index) => {
                return (
                  <div key={index} className={'col w-1/3 mt-8 mr-4'}>
                    <div className={'w-full row centered'}>
                      <Image
                        src={article.image}
                        alt={'image'}
                        className={'full'}
                      />
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
                            <p className={'text-xs text-PURPLE_ONU font-bold'}>
                              SEGUIR LEYENDO
                            </p>
                            <Image
                              src={ArrowRightSmall}
                              alt={'icon'}
                              className={'ml-2 mt-[1px]'}
                              width={13}
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
        {/* <div className={'lg:hidden row overflow-hidden'} ref={articlesRef}> */}
        <div className={'lg:hidden row overflow-hidden'}>
          <div className={'flex col'}>
            {articles.length &&
              articles.map((article) => {
                return (
                  <div key={article.link} className={'col mt-8'}>
                    <div className={'w-full row centered px-4'}>
                      <Image
                        src={article.image}
                        alt={'image'}
                        className={'full'}
                      />
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
                            <p className={'text-xs text-PURPLE_ONU font-bold'}>
                              SEGUIR LEYENDO
                            </p>
                            <Image
                              src={ArrowRightSmall}
                              alt={'icon'}
                              className={'ml-2 mt-[1px]'}
                              width={13}
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

      {/* BLOCK 4 */}
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
        {/* <div className={'w-5/6 row justify-between items-center'} ref={reviewsRef}> */}
        <div className={'w-full row justify-between items-center'}>
          <div
            className={'hidden md:flex mt-12 pb-2 row w-full justify-between'}
          >
            {reviews.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    'col bg-WHITE rounded-lg shadow-md mx-5 p-4 justify-between w-1/4'
                  }
                >
                  <p className={'text-xs font-light'}>
                    {'"' + item.text + '"'}
                  </p>
                  <div
                    className={
                      'row rounded-lg bg-GREY_LIGHT mt-8 items-center p-4'
                    }
                  >
                    <Image src={item.image} alt={'image'} className={'w-1/5'} />
                    <div className={'col ml-4'}>
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
              'md:hidden mt-12 pb-2 col w-full justify-between overflow-hidden'
            }
          >
            {reviews.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    'col bg-WHITE rounded-lg shadow-md mx-5 p-4 justify-between my-4'
                  }
                  style={{ flex: '0 0 90%' }}
                >
                  <p className={'text-xs font-light'}>
                    {'"' + item.text + '"'}
                  </p>
                  <div
                    className={
                      'row rounded-lg bg-GREY_LIGHT mt-2 items-center p-4'
                    }
                  >
                    <div className={'col ml-4'}>
                      <p className={'font-bold'}>{item.name}</p>
                      <p className={'text-xs'}>{item.type}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* BLOCK 5 */}
      <div className={'w-full col items-center py-12 bg-WHITE'}>
        <h1 className={'text-3xl text-RED_MEDIUM'}>Nuestras alianzas</h1>
        {/* <div className={'hidden lg:flex w-full overflow-hidden'} ref={iconsRef}> */}
        <div className={'hidden lg:flex w-full overflow-hidden'}>
          <Swiper
            modules={[Autoplay]}
            className={'w-5/6'}
            slidesPerView={5}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            loop={true}
          >
            <div className={'mt-12 row w-full justify-between items-center'}>
              {alliances.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className={'w-[64px]'}>
                      <Image
                        src={item.icon}
                        alt={'icon'}
                        className={'h-full'}
                      />
                    </div>
                  </SwiperSlide>
                );
              })}
            </div>
          </Swiper>
        </div>
        <div className={'lg:hidden w-full overflow-hidden'}>
          <div
            className={'mt-12 row w-full justify-evenly flex-wrap items-center'}
          >
            {alliances.map((item, index) => {
              return (
                <div key={index} className={'m-6'}>
                  <Image src={item.icon} alt={'icon'} height={64} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default HomeTemplate;
