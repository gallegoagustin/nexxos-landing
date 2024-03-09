import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import IconInstagram from '../../../../public/images/icons/social-media/instagram.svg';
import IconTwitter from '../../../../public/images/icons/social-media/twitterx.svg';
import IconYoutube from '../../../../public/images/icons/social-media/youtube.svg';
import LazyLoad from 'react-lazyload';

function Footer() {
  return (
    <footer
      className={
        'w-full py-8 lg:py-20 bg-RED_MEDIUM col centered font-thin text-WHITE text-xs'
      }
    >
      <div
        className={
          'col lg:row w-5/6 lg:w-1/2 h-full justify-between items-center'
        }
      >
        <Link href={'/'}>
          <LazyLoad once>
            <Image
              src="https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710015441/nexxos/nexxos-footer_pguij0.jpg?_s=public-apps"
              alt={'icon'}
              className={'mb-8 mx-auto lg:mb-0'}
              width={282}
              height={241}
            />
          </LazyLoad>
        </Link>
        <div
          className={
            'w-full lg:w-3/5 text-center lg:text-left col lg:row gap-4 justify-between'
          }
        >
          <div className={'col'}>
            <p className={'font-bold text-GREY_LIGHT mb-2'}>NEXXOS</p>
            <Link
              href={
                'https://docs.google.com/forms/d/e/1FAIpQLSe1BmhKQI2NCoyoFwtOo_Ie1P9Sps_o-u8JCbJSftEmWyVd5A/viewform?usp=sf_link'
              }
              target={'_blank'}
            >
              <p className={'my-1'}>Sumate como voluntario</p>
            </Link>
          </div>
          <div className={'col'}>
            <p className={'font-bold text-GREY_LIGHT mb-2'}>SITE</p>
            <Link href={'/activities'}>
              <p className={'my-1'}>Nuestras actividades</p>
            </Link>
            <Link href={'/contact'}>
              <p className={'my-1'}>Contacto</p>
            </Link>
          </div>
          <div className={'col'}>
            <p className={'font-bold text-GREY_LIGHT mb-2'}>LEGAL</p>
            <Link
              href={
                'https://drive.google.com/file/d/1FK8LytKXklcbZ-XOuMEEEHReW3wvghzc/view?usp=drive_link'
              }
              target="_blank"
            >
              <p className={'my-1'}>Estatuto</p>
            </Link>
            {/* <Link
              href={
                'https://drive.google.com/file/d/15BKHJxWVVXJBFoLzEwcXLt1b4Xg3Fl20/view?usp=drive_link'
              }
              target="_blank"
            >
              <p className={'my-1'}>Reglamento Interno</p>
            </Link> */}
          </div>
        </div>
      </div>
      <div className={'w-4/6 lg:w-2/12 row justify-between mt-12'}>
        <Link href={'https://www.instagram.com/nexxosar/'} target={'_blank'}>
          <LazyLoad once>
            <Image src={IconInstagram} alt={'icon'} />
          </LazyLoad>
        </Link>
        <Link href={'https://www.youtube.com/@nexxosong3315'} target={'_blank'}>
          <LazyLoad once>
            <Image src={IconYoutube} alt={'icon'} />
          </LazyLoad>
        </Link>
        <Link href={'https://twitter.com/NexxosAR'} target={'_blank'}>
          <LazyLoad once>
            <Image src={IconTwitter} alt={'icon'} />
          </LazyLoad>
        </Link>
      </div>
      <p className={'font-light mt-8'}>Copyright © 2024 Nexxos ONG</p>
    </footer>
  );
}

export default Footer;
