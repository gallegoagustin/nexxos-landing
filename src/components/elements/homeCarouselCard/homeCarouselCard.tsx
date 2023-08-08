import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

function HomeCarouselCard({
  title,
  subtitle,
  text,
  buttonText,
  image,
  link,
}: Props) {
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
    colorClass = 'GREEN_JUICIO';
  }

  return (
    <div
      className={
        'full col items-center lg:items-stretch lg:row lg:justify-between shadow-lg rounded-2xl'
      }
    >
      <Image
        src={image}
        alt={'image'}
        width={385}
        height={100}
        className={'rounded-2xl lg:rounded-none w-2/5 lg:w-1/2'}
      />
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
            className={`bg-${colorClass} text-GREY_LIGHT row centered font-bold px-8 py-1 rounded-lg text-sm self-start`}
            href={link}
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

HomeCarouselCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

type Props = InferProps<typeof HomeCarouselCard.propTypes>;

export default HomeCarouselCard;
