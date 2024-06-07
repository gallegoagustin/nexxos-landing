import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import useDynamicTranslation from '@/components/hooks/useDynamicTranslation';
import LazyLoad from 'react-lazyload';

import IconNexxos from '../../../../public/images/nexxos/nexxos_4.png';
import IconInstagram from '../../../../public/images/icons/social-media/instagram.svg';
import IconTwitter from '../../../../public/images/icons/social-media/twitterx.svg';
import IconYoutube from '../../../../public/images/icons/social-media/youtube.svg';

function Footer() {
  const { i18nCommon } = useDynamicTranslation();

  return (
    <footer
      className={
        'w-full py-8 lg:py-20 bg-RED_MEDIUM col centered font-thin text-WHITE text-xs'
      }
    >
      <div className="w-full col lg:row">
        <div className="w-full lg:w-1/2 row centered">
          <Link href={'/'}>
            <LazyLoad once>
              <Image
                src={IconNexxos}
                alt={'icon'}
                className={'mb-8 lg:mb-0'}
                width={200}
              />
            </LazyLoad>
          </Link>
        </div>
        <div className="w-full lg:w-1/2 col lg:row items-center lg:items-start text-center gap-8">
          <div className={'col'}>
            <p className={'font-bold text-GREY_LIGHT mb-2'}>
              {i18nCommon('footer.nexxos')}
            </p>
            <Link
              href={
                'https://docs.google.com/forms/d/e/1FAIpQLSe1BmhKQI2NCoyoFwtOo_Ie1P9Sps_o-u8JCbJSftEmWyVd5A/viewform?usp=sf_link'
              }
              target={'_blank'}
            >
              <p className={'my-1'}>{i18nCommon('footer.volunteer')}</p>
            </Link>
          </div>
          <div className={'col'}>
            <p className={'font-bold text-GREY_LIGHT mb-2'}>
              {i18nCommon('footer.site')}
            </p>
            <Link href={'/'}>
              <p className={'my-1'}>{i18nCommon('footer.home')}</p>
            </Link>
            <Link href={'/activities'}>
              <p className={'my-1'}>{i18nCommon('footer.activities')}</p>
            </Link>
            <Link href={'/about'}>
              <p className={'my-1'}>{i18nCommon('footer.about')}</p>
            </Link>
            <Link href={'/contact'}>
              <p className={'my-1'}>{i18nCommon('footer.contact')}</p>
            </Link>
          </div>
          <div className={'col'}>
            <p className={'font-bold text-GREY_LIGHT mb-2'}>
              {i18nCommon('footer.legal')}
            </p>
            <Link
              href={
                'https://drive.google.com/file/d/1FK8LytKXklcbZ-XOuMEEEHReW3wvghzc/view?usp=drive_link'
              }
              target="_blank"
            >
              <p className={'my-1'}>{i18nCommon('footer.paper')}</p>
            </Link>
            <Link
              href={
                'https://drive.google.com/file/d/1AtUkMvlfgXHSXtti1M2A0KCaorJFsh7Z/view?usp=drivesdk'
              }
              target="_blank"
            >
              <p className={'my-1'}>{i18nCommon('footer.reglament')}</p>
            </Link>
          </div>
        </div>
      </div>
      <div className={'w-4/6 lg:w-1/2 row justify-center gap-12 mt-12'}>
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
      <p className={'font-light mt-8'}>{i18nCommon('footer.copyright')}</p>
    </footer>
  );
}

export default Footer;
