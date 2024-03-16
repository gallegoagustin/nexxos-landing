import React from 'react';
import useDynamicTranslation from '@/components/hooks/useDynamicTranslation';
import About from './about';

export default function AboutContainer() {
  const { i18nAbout } = useDynamicTranslation();

  const autorities = [
    {
      name: 'Alan Ezequiel Castillo',
      age: '21',
      position: i18nAbout('authorities.one.position', { plainText: true }),
      info: i18nAbout('authorities.one.text', { plainText: true }),
      image:
        'https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710013141/nexxos/alan_ar2npf.jpg?_s=public-apps',
    },
    {
      name: 'Melissa Ayelen Oliva',
      age: '20',
      position: i18nAbout('authorities.two.position', { plainText: true }),
      info: i18nAbout('authorities.two.text', { plainText: true }),
      image:
        'https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710013140/nexxos/melisaayelen_fvtvp4.jpg?_s=public-apps',
    },
    {
      name: 'Zoe Holgado',
      age: '21',
      position: i18nAbout('authorities.three.position', { plainText: true }),
      info: i18nAbout('authorities.three.text', { plainText: true }),
      image:
        'https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710013140/nexxos/zoe_ut1md5.jpg?_s=public-apps',
    },
    {
      name: 'Valentina Fardin',
      age: '23',
      position: i18nAbout('authorities.four.position', { plainText: true }),
      info: i18nAbout('authorities.four.text', { plainText: true }),
      image:
        'https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710013142/nexxos/valentina_hnewix.jpg?_s=public-apps',
    },
    {
      name: 'Sofía Ali',
      age: '20',
      position: i18nAbout('authorities.five.position', { plainText: true }),
      info: i18nAbout('authorities.five.text', { plainText: true }),
      image:
        'https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710013140/nexxos/sofia_jai2fi.jpg?_s=public-apps',
    },
    {
      name: 'Maitena Granda',
      age: '19',
      position: i18nAbout('authorities.six.position', { plainText: true }),
      info: i18nAbout('authorities.six.text', { plainText: true }),
      image:
        'https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710013142/nexxos/maitena_q4dnbz.jpg?_s=public-apps',
    },
    {
      name: 'Emiliano Iché',
      age: '20',
      position: i18nAbout('authorities.seven.position', { plainText: true }),
      info: i18nAbout('authorities.seven.text', { plainText: true }),
      image:
        'https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710013141/nexxos/emiliano_nrwys5.jpg?_s=public-apps',
    },
  ];

  const childProps = {
    autorities,
  };

  return <About {...childProps} />;
}
