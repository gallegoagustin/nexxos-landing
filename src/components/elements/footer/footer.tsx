import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import IconNexxos from '../../../../public/images/icons/nexxos-footer.png';
import IconInstagram from '../../../../public/images/icons/social-media/instagram.svg';
import IconTwitter from '../../../../public/images/icons/social-media/twitter.svg';
import IconYoutube from '../../../../public/images/icons/social-media/youtube.svg';
// import IconLinkedIn from '../../../../public/images/icons/social-media/linkedin.svg';
// import IconDiscord from '../../../../public/images/icons/social-media/discord.svg';

function Footer() {
  return (
    <div
      className={
        'w-full py-8 lg:py-20 bg-RED_MEDIUM col centered font-thin text-WHITE text-xs'
      }
    >
      <div
        className={
          'col lg:row w-5/6 lg:w-1/2 h-full justify-between items-center lg:items-start'
        }
      >
        <Link href={'/'}>
          <Image
            src={IconNexxos}
            alt={'icon'}
            className={'mb-8 mx-auto lg:mb-0 w-1/2 h-1/2'}
          />
        </Link>
        <div
          className={
            'w-full lg:w-3/5 text-center lg:text-left row justify-between'
          }
        >
          <div className={'col'}>
            <p className={'font-bold text-GREY_LIGHT mb-2'}>NEXXOS</p>
            <Link
              href={
                'https://nash21.gitbook.io/es/guias-de-usuario/guias-para-entender-nash21'
              }
              target={'_blank'}
            >
              <p className={'my-1'}>Info para sponsors</p>
            </Link>
            <Link
              href={
                'https://nash21.gitbook.io/es/guias-de-usuario/guias-para-entender-nash21'
              }
              target={'_blank'}
            >
              <p className={'my-1'}>Sumate como voluntario</p>
            </Link>
          </div>
          <div className={'col'}>
            <p className={'font-bold text-GREY_LIGHT mb-2'}>SITE</p>
            <Link href={'/services'}>
              <p className={'my-1'}>Nuestras actividades</p>
            </Link>
            <Link href={'/contact'}>
              <p className={'my-1'}>Contacto</p>
            </Link>
          </div>
          <div className={'col'}>
            <p className={'font-bold text-GREY_LIGHT mb-2'}>LEGAL</p>
            <Link href={'/terms'}>
              <p className={'my-1'}>Estatuto</p>
            </Link>
            <Link href={'/privacy'}>
              <p className={'my-1'}>Reglamento Interno</p>
            </Link>
          </div>
        </div>
      </div>
      <div className={'w-4/6 lg:w-2/12 row justify-between mt-12'}>
        <Link href={'https://www.instagram.com/nexxosar/'} target={'_blank'}>
          <Image src={IconInstagram} alt={'icon'} />
        </Link>
        <Link href={'nexxosong3315'} target={'_blank'}>
          <Image src={IconYoutube} alt={'icon'} />
        </Link>
        <Link href={'https://twitter.com/NexxosAR'} target={'_blank'}>
          <Image src={IconTwitter} alt={'icon'} />
        </Link>
      </div>
      <p className={'font-light mt-8'}>Copyright © 2023 Nexxos</p>
    </div>
  );
}

export default Footer;
