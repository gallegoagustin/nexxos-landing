import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LazyLoad from 'react-lazyload';

function CarouselCard({
  title,
  subtitle,
  text,
  buttonText,
  image,
  logo,
  link,
}: any) {
  let colorClass = '';

  if (title === 'sim.onu') {
    colorClass = 'PURPLE_ONU';
  } else if (title === 'sim.rastros') {
    colorClass = 'PINK_RASTROS';
  } else if (title === 'sim.sena') {
    colorClass = 'LIGHTBLUE_SENA';
  } else if (title === 'sim.electoral') {
    colorClass = 'BLUE_ELECTORAL';
  } else if (title === 'sim.g20') {
    colorClass = 'RED_G20';
  } else if (title === 'sim.hcd') {
    colorClass = 'TURQUOISE_HCD';
  } else if (title === 'sim.oea') {
    colorClass = 'TEAL_OEA';
  } else {
    colorClass = 'VIOLET_UN';
  }

  return (
    <div
      className={
        'full col items-center lg:items-stretch lg:row lg:justify-between shadow-lg rounded-2xl'
      }
    >
      <div className="w-1/2 h-full bg-transparent relative">
        <div className="full z-10 row justify-center items-end absolute">
          <div className="row items-center justify-center gap-4 p-4">
            <LazyLoad once>
              <Image
                src={logo}
                alt={'nexxos'}
                width={80}
                height={30}
                priority
              />
            </LazyLoad>
            <div className="col">
              <p className="text-5xl text-GREY_LIGHT font-bold">{title}</p>
              <p className="text-base text-WHITE">{subtitle}</p>
            </div>
          </div>
        </div>
        <LazyLoad once className="full">
          <Image
            src={image}
            alt={'image'}
            width={385}
            height={100}
            style={{ objectFit: 'cover' }}
            className={
              '!rounded-l-2xl lg:rounded-none to-greyscale w-full h-full'
            }
            priority
          />
        </LazyLoad>
      </div>
      <div
        className={`w-1/2 col ${
          !text ? 'lg:justify-center' : 'justify-evenly'
        } p-1 lg:p-4`}
      >
        <p className={`font-bold text-${colorClass}`}>{title}</p>
        <h1
          className={`text-BLUE_DARK text-3xl lg:text-4xl font-light ${
            !text ? 'mt-4' : ''
          }`}
        >
          {subtitle}
        </h1>
        <p className={'font-light text-justify'}>{text}</p>
        {text ? (
          <Link
            className={`hover:bg-BLACK hover: bg-${colorClass} text-GREY_LIGHT row centered font-bold px-8 py-1 rounded-lg text-sm self-start transition duration-300 shadow-md`}
            href="/activities"
          >
            {buttonText.toUpperCase()}
          </Link>
        ) : (
          <button
            className={`bg-${colorClass} text-GREY_LIGHT row centered font-bold px-8 py-1 rounded-lg text-sm self-start bg-GREY_DARK mt-4`}
            disabled
          >
            {buttonText.toUpperCase()}
          </button>
        )}
      </div>
    </div>
  );
}

export default CarouselCard;
