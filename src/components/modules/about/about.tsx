import React from 'react';
import Image from 'next/image';
import Volunteer from '@public/images/volunteer.png';
import Sponsor from '@public/images/support.png';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import useDynamicTranslation from '@/components/hooks/useDynamicTranslation';

interface Props {
  autorities: {
    name: string;
    age: string;
    position: string;
    info: string;
    image: string;
  }[];
}

export default function About({ autorities }: Props) {
  const { i18nAbout } = useDynamicTranslation();

  return (
    <section className={'full col justify-start'}>
      {/* BLOCK 1 */}
      <LazyLoad once className="w-full">
        <div
          className={`header-image-container px-12 lg:py-56 lg:px-24 row centered`}
          style={{
            background:
              'url(https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710012310/nexxos/ce42346hdqzywd7bkxen.jpg?_s=public-apps)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPositionY: 'center',
            boxShadow: 'inset 0 0 0 1000px rgba(47, 47, 77, 0.3)',
          }}
        >
          <h1 className={'text-WHITE text-4xl lg:text-5xl text-center'}>
            {i18nAbout('header')}
          </h1>
        </div>
      </LazyLoad>

      {/* BLOCK 2 */}
      <div className={'full col lg:row items-center justify-center bg-WHITE'}>
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
                    <LazyLoad once>
                      <Image
                        src={item.image}
                        alt={'image'}
                        width={150}
                        height={150}
                        className={'rounded-full md:w-40 md:h-40 w-28 h-28'}
                        priority
                      />
                    </LazyLoad>
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
            {i18nAbout('volunteerHeader')}
          </p>
          <h1 className={'mb-6'}>{i18nAbout('volunteerSubtitle')}</h1>
          <p className={'leading-relaxed text-base'}>
            {i18nAbout('volunteerText')}
          </p>
        </div>
        <div
          className={
            'col w-5/6 justify-center items-center mt-6 md:mt-0 md:ml-24 md:w-[24rem]'
          }
        >
          <LazyLoad once>
            <Image
              src={Volunteer}
              alt="voluntarios"
              className={'w-1/2 h-1/2 md:w-5/6 md:h-5/6'}
            />
          </LazyLoad>
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
              {i18nAbout('volunteerCta')}
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
          <LazyLoad once>
            <Image
              src={Sponsor}
              alt="sponsors"
              className={'w-3/6 self-center my-10 md:my-0'}
            />
          </LazyLoad>
          <div
            className={'col md:row md:justify-evenly items-center md:mx-8 mt-8'}
          >
            <Link
              href={'/contact'}
              className={
                'main-red-button transition duration-300 hover:bg-RED_G20 w-[300px]'
              }
            >
              {i18nAbout('donateHeader')}
            </Link>
          </div>
        </div>
        <div className={'w-5/6 md:w-1/3 order-1 md:order-none'}>
          <p className={'my-6 font-montserrat text-3xl'}>
            {i18nAbout('donateSubtitle')}
          </p>
          <h1 className={'mb-6'}>¡Ayúdanos a crecer!</h1>
          <p className={'leading-relaxed text-base'}>
            {i18nAbout('donateText')}
          </p>
        </div>
      </div>
    </section>
  );
}
