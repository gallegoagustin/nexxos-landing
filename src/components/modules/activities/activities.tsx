import React, { RefObject } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';
import useDynamicTranslation from '@/components/hooks/useDynamicTranslation';
import LazyLoad from 'react-lazyload';
import HcdImageCarousel from '../../elements/hcd-images-carousel';
import { ImagesCarouselType } from './activities.container';
import UnImageCarousel from '@/components/elements/un-images-carousel';

interface Props {
  activitiesContainerRef: RefObject<HTMLDivElement>;
  activitiesCards: {
    title: string;
    subtitle: string;
    participants: string;
    image: StaticImport;
    link_utils: string;
    link_preinscription: string;
    date: string;
    date2?: string;
    date3?: string;
    images?: Function;
  }[];
  imagesVisible: ImagesCarouselType | null;
  setImagesVisible: (value: ImagesCarouselType | null) => void;
}

export default function Activities({
  activitiesContainerRef,
  activitiesCards,
  imagesVisible,
  setImagesVisible,
}: Props) {
  const { i18nActivities, i18nCommon } = useDynamicTranslation();

  return (
    <>
      {imagesVisible === ImagesCarouselType.HCD ? (
        <HcdImageCarousel onClose={() => setImagesVisible(null)} />
      ) : null}
      {imagesVisible === ImagesCarouselType.UN ? (
        <UnImageCarousel onClose={() => setImagesVisible(null)} />
      ) : null}
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
              {i18nActivities('header')}
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
                    'w-5/6 min-w-[260px] md:w-[28rem] h-[38rem] md:h-[31rem] lg:mt-0 col lg:mx-12 p-6 lg:p-10 items-center justify-between shadow-md shadow-BLUE_LIGHT rounded-2xl bg-WHITE'
                  }
                >
                  <div className="pb-4">
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
                        <span className={`text-${colorClass}`}>
                          {item.title}
                        </span>
                      </p>
                    </div>
                    <div
                      className={'w-full justify-center text-center'}
                      id="text-container"
                    >
                      <p className={'font-bold my-6 text-lg'}>
                        {item.subtitle}
                      </p>
                      <h2 className={'font-bold'}>{i18nActivities('for')}</h2>
                      <p className={'my-2'}>{item.participants}</p>
                    </div>
                    <div className="text-center col gap-2">
                      <p>{item.date}</p>
                      {item.date2 ? <p>{item.date2}</p> : null}
                    </div>
                  </div>
                  <div
                    className={`w-full col centered justify-self-end gap-4 text-${colorClass}`}
                  >
                    <Link
                      href={item.link_utils}
                      target="_blank"
                      className={'w-fit'}
                    >
                      <button className="hover:text-[18px]">
                        {i18nActivities('info')}
                      </button>
                    </Link>
                    <Link
                      href={item.link_preinscription}
                      target="_blank"
                      className={'w-fit'}
                    >
                      <button className="hover:text-[18px]">
                        {i18nActivities('preinscription')}
                      </button>
                    </Link>
                    {!!item.images ? (
                      <button onClick={() => item.images && item.images()}>
                        {i18nCommon('photos')}
                      </button>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
