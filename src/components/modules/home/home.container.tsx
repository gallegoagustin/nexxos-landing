import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useDynamicTranslation from '@/components/hooks/useDynamicTranslation';
import Home from './home';
import { appRoutes } from '@/constants/appRoutes';

import Icon1 from '@public/images/icons/isotipos/onu.svg';
import Icon2 from '@public/images/icons/isotipos/oea.svg';
import Icon3 from '@public/images/icons/isotipos/rastros.svg';
import Icon4 from '@public/images/icons/isotipos/sena.svg';
import Icon7 from '@public/images/icons/isotipos/hcd.svg';
import Icon8 from '@public/images/icons/isotipos/un.svg';
import IconAlliances1 from '@public/images/alliances/1.svg';
import IconAlliances2 from '@public/images/alliances/2.svg';
import IconAlliances3 from '@public/images/alliances/3.svg';
import IconAlliances4 from '@public/images/alliances/4.svg';
import IconAlliances5 from '@public/images/alliances/5.svg';
import IconAlliances6 from '@public/images/alliances/6.svg';
import IconAlliances7 from '@public/images/alliances/7.svg';
import Image1 from '@public/images/articles/mdphoy.webp';
import Image2 from '@public/images/articles/hcd.jpeg';
import Image3 from '@public/images/articles/miramar.jpeg';
import Image4 from '@public/images/articles/tandil.jpeg';

export default function HomeContainer() {
  const router = useRouter();
  const { i18nHome } = useDynamicTranslation();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const carouselItems = [
    {
      title: i18nHome('activitiesList.onu.title', { plainText: true }),
      icon: Icon1,
    },
    {
      title: i18nHome('activitiesList.oea.title', { plainText: true }),
      icon: Icon2,
    },
    {
      title: i18nHome('activitiesList.rastros.title', { plainText: true }),
      icon: Icon3,
    },
    {
      title: i18nHome('activitiesList.sena.title', { plainText: true }),
      icon: Icon4,
    },
    {
      title: i18nHome('activitiesList.hcd.title', { plainText: true }),
      icon: Icon7,
    },
    {
      title: i18nHome('activitiesList.un.title', { plainText: true }),
      icon: Icon1,
    },
  ];

  const carouselCards = [
    {
      title: i18nHome('activitiesList.onu.title', { plainText: true }),
      subtitle: i18nHome('activitiesList.onu.header', { plainText: true }),
      text: i18nHome('activitiesList.onu.description', { plainText: true }),
      buttonText: i18nHome('more', { plainText: true }),
      image:
        'https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710016488/nexxos/onu_dmh4oj.jpg?_s=public-apps',
      logo: Icon1,
      link: appRoutes.ACTIVITIES,
    },
    {
      title: i18nHome('activitiesList.oea.title', { plainText: true }),
      subtitle: i18nHome('activitiesList.oea.header', { plainText: true }),
      text: i18nHome('activitiesList.oea.description', { plainText: true }),
      buttonText: i18nHome('more', { plainText: true }),
      image:
        'https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710016490/nexxos/oea_efjlpi.jpg?_s=public-apps',
      logo: Icon2,
      link: appRoutes.ACTIVITIES,
    },
    {
      title: i18nHome('activitiesList.rastros.title', { plainText: true }),
      subtitle: i18nHome('activitiesList.rastros.header', { plainText: true }),
      text: i18nHome('activitiesList.rastros.description', { plainText: true }),
      buttonText: i18nHome('more', { plainText: true }),
      image:
        'https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710016622/nexxos/rastros_mlxigs.jpg?_s=public-apps',
      logo: Icon3,
      link: appRoutes.ACTIVITIES,
    },
    {
      title: i18nHome('activitiesList.sena.title', { plainText: true }),
      subtitle: i18nHome('activitiesList.sena.header', { plainText: true }),
      text: i18nHome('activitiesList.sena.description', { plainText: true }),
      buttonText: i18nHome('more', { plainText: true }),
      image:
        'https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710016486/nexxos/senado_h3m0um.jpg?_s=public-apps',
      logo: Icon4,
      link: appRoutes.ACTIVITIES,
    },
    {
      title: i18nHome('activitiesList.hcd.title', { plainText: true }),
      subtitle: i18nHome('activitiesList.hcd.header', { plainText: true }),
      text: i18nHome('activitiesList.hcd.description', { plainText: true }),
      buttonText: i18nHome('more', { plainText: true }),
      image:
        'https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710016487/nexxos/hcd_owgp5v.jpg?_s=public-apps',
      logo: Icon7,
      link: appRoutes.ACTIVITIES,
    },
    {
      title: i18nHome('activitiesList.un.title', { plainText: true }),
      subtitle: i18nHome('activitiesList.un.header', { plainText: true }),
      text: i18nHome('activitiesList.un.description', { plainText: true }),
      buttonText: i18nHome('more', { plainText: true }),
      image:
        'https://res.cloudinary.com/gallegoagustin/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1710016487/nexxos/g20_2_hen8kl.jpg?_s=public-apps',
      logo: Icon8,
      link: appRoutes.ACTIVITIES,
    },
  ];

  const reviews = [
    {
      name: i18nHome('reviews.one.author', { plainText: true }),
      type: i18nHome('reviews.one.position', { plainText: true }),
      text: i18nHome('reviews.one.text', { plainText: true }),
    },
    {
      name: i18nHome('reviews.two.author', { plainText: true }),
      type: i18nHome('reviews.two.position', { plainText: true }),
      text: i18nHome('reviews.two.text', { plainText: true }),
    },
    {
      name: i18nHome('reviews.three.author', { plainText: true }),
      type: i18nHome('reviews.three.position', { plainText: true }),
      text: i18nHome('reviews.three.text', { plainText: true }),
    },
    {
      name: i18nHome('reviews.four.author', { plainText: true }),
      type: i18nHome('reviews.four.position', { plainText: true }),
      text: i18nHome('reviews.four.text', { plainText: true }),
    },
  ];

  const alliances = [
    { id: '1', icon: IconAlliances1 },
    { id: '2', icon: IconAlliances2 },
    { id: '3', icon: IconAlliances3 },
    { id: '4', icon: IconAlliances4 },
    { id: '5', icon: IconAlliances5 },
    { id: '6', icon: IconAlliances6 },
    { id: '7', icon: IconAlliances7 },
  ];

  const articles = [
    {
      title: i18nHome('articles.one.title', { plainText: true }),
      subtitle: i18nHome('articles.one.subtitle', { plainText: true }),
      from: i18nHome('articles.one.from', { plainText: true }),
      image: Image1,
      link: 'https://www.mdphoy.com/mas-de-1300-estudiantes-participan-de-los-simulacros-de-la-onu-y-la-oea-277963/',
    },
    {
      title: i18nHome('articles.two.title', { plainText: true }),
      subtitle: null,
      from: i18nHome('articles.two.from', { plainText: true }),
      image: Image2,
      link: 'https://www.concejomdp.gov.ar/prensa/gacetillas/gacetilla.php?id=1968',
    },
    {
      title: i18nHome('articles.three.title', { plainText: true }),
      subtitle: null,
      from: i18nHome('articles.three.from', { plainText: true }),
      image: Image3,
      link: 'https://www.lacapitalmdp.com/unos-250-jovenes-participan-del-sim-onu-2022-en-miramar/',
    },
    {
      title: i18nHome('articles.four.title', { plainText: true }),
      subtitle: null,
      from: i18nHome('articles.four.from', { plainText: true }),
      image: Image4,
      link: 'https://eldiariodetandil.com/2019/07/08/llego-la-oea-a-tandil',
    },
  ];

  const handleRedirect = () => {
    router.push(appRoutes.ACTIVITIES);
  };

  const childProps = {
    isMobile,
    carouselItems,
    carouselCards,
    reviews,
    alliances,
    articles,
    handleRedirect,
  };

  return <Home {...childProps} />;
}
