import React from 'react';
import PropTypes, { InferProps } from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import Counter from '../../../../public/images/counter.gif';
import ArrowUpServices from '../../../../public/images/icons/arrow-up-services.svg';

function HomeCarouselCard({
  title,
  subtitle,
  text,
  buttonText,
  image,
  link,
  isGif,
}: Props) {
  return (
    <div
      className={
        'full col items-center lg:items-stretch lg:row lg:justify-between shadow-md rounded-2xl'
      }
    >
      {!isGif && (
        <Image
          src={image}
          alt={'image'}
          width={100}
          height={100}
          className={'rounded-2xl lg:rounded-none w-2/5 lg:w-1/2'}
        />
      )}
      {/* {isGif && (
        <div
          className={'w-1/2 h-[392px] bg-BLUE_DARK row centered rounded-l-2xl'}
        >
          <div
            className={
              'w-5/6 row items-center shadow-md shadow-BLUE_LIGHT rounded-lg bg-WHITE'
            }
          >
            <Image src={ArrowUpServices} alt={'icon'} className={'w-1/4'} />
            <div className={'col w-full ml-4'}>
              <p>RENTA FLUIDA</p>
              <Image src={Counter} alt={'counter'} className={'w-1/2'} />
            </div>
          </div>
        </div>
      )} */}
      <div
        className={`w-1/2 col  ${
          !text ? 'lg:justify-center' : 'justify-evenly'
        } p-1 lg:p-4`}
      >
        <p className={'font-bold text-RED_MEDIUM'}>{title.toUpperCase()}</p>
        <h1
          className={`text-BLUE_DARK text-3xl lg:text-4xl font-light ${
            !text ? 'mt-4' : ''
          }`}
        >
          {subtitle}
        </h1>
        <p className={'font-light'}>{text}</p>
        {text ? (
          <Link className={'main-red-button  self-start'} href={link}>
            {buttonText.toUpperCase()}
          </Link>
        ) : (
          <button
            className={'main-red-button  self-start bg-GREY_DARK mt-4'}
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
  isGif: PropTypes.bool,
};

type Props = InferProps<typeof HomeCarouselCard.propTypes>;

export default HomeCarouselCard;
