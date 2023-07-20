import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import IconNexxos from '../../../../public/images/icons/nexxos-footer.png';
import IconInstagram from '../../../../public/images/icons/social-media/instagram.svg';
import IconTwitter from '../../../../public/images/icons/social-media/twitter.svg';
import IconLinkedIn from '../../../../public/images/icons/social-media/linkedin.svg';
import IconDiscord from '../../../../public/images/icons/social-media/discord.svg';

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
          <Image src={IconNexxos} alt={'icon'} className={'mb-8 lg:mb-0'} />
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
              <p className={'my-1'}>Guía de usuario</p>
            </Link>
          </div>
          <div className={'col'}>
            <p className={'font-bold text-GREY_LIGHT mb-2'}>SITE</p>
            <Link href={'/services'}>
              <p className={'my-1'}>Nuestros servicios</p>
            </Link>
            <Link href={'/contact'}>
              <p className={'my-1'}>Contacto</p>
            </Link>
          </div>
          <div className={'col'}>
            <p className={'font-bold text-GREY_LIGHT mb-2'}>LEGAL</p>
            <Link href={'/terms'}>
              <p className={'my-1'}>Términos y Condiciones</p>
            </Link>
            <Link href={'/privacy'}>
              <p className={'my-1'}>Política de Privacidad</p>
            </Link>
            <Link href={'/cookies'}>
              <p className={'my-1'}>Política de Cookies</p>
            </Link>
          </div>
        </div>
      </div>
      <div className={'w-4/6 lg:w-1/5 row justify-between mt-12'}>
        <Link href={'https://www.instagram.com/nash21_io/'} target={'_blank'}>
          <Image src={IconInstagram} alt={'icon'} />
        </Link>
        <Link href={'https://twitter.com/nash21_io'} target={'_blank'}>
          <Image src={IconTwitter} alt={'icon'} />
        </Link>
        <Link
          href={'https://www.linkedin.com/company/nash21/'}
          target={'_blank'}
        >
          <Image src={IconLinkedIn} alt={'icon'} />
        </Link>
        <Link href={'https://bit.ly/DiscordNash21'} target={'_blank'}>
          <Image src={IconDiscord} alt={'icon'} />
        </Link>
      </div>
      <p className={'font-light mt-8'}>Copyright © 2023 Nexxos</p>
    </div>
  );
}

export default Footer;
