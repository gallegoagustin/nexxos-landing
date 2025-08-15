import React from 'react';
import useDynamicTranslation from '@/components/hooks/useDynamicTranslation';
import About from './about';

export default function AboutContainer() {
  const { i18nAbout } = useDynamicTranslation();

  const autorities = [
    {
      name: 'Luciano Monuera Siri',
      position: i18nAbout('authorities.one.position', { plainText: true }),
      image: '/images/team/01.png',
    },
    {
      name: 'Melissa Ayelen Oliva',
      position: i18nAbout('authorities.two.position', { plainText: true }),
      image: '/images/team/02.png',
    },
    {
      name: 'David Sangiacomo',
      position: i18nAbout('authorities.three.position', { plainText: true }),
      image: '/images/team/03.png',
    },
    {
      name: 'Zoe Holgado',
      position: i18nAbout('authorities.four.position', { plainText: true }),
      image: '/images/team/04.png',
    },
    {
      name: 'Jeremías Chavarría',
      position: i18nAbout('authorities.five.position', { plainText: true }),
      image: '/images/team/05.png',
    },
    {
      name: 'Rocío Caiazzo',
      position: i18nAbout('authorities.six.position', { plainText: true }),
      image: '/images/team/06.png',
    },
    {
      name: 'Abril Luna Casella',
      position: i18nAbout('authorities.seven.position', { plainText: true }),
      image: '/images/team/07.png',
    },
  ];

  const childProps = {
    autorities,
  };

  return <About {...childProps} />;
}
