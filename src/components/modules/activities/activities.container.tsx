import React, { useEffect, useRef } from 'react';
import useDynamicTranslation from '@/components/hooks/useDynamicTranslation';
import { useRouter } from 'next/router';
import Activities from './activities';

import ImageCard1 from '@public/images/icons/isotipos/onu.svg';
import ImageCard2 from '@public/images/icons/isotipos/oea.svg';
import ImageCard3 from '@public/images/icons/isotipos/rastros.svg';
import ImageCard4 from '@public/images/icons/isotipos/g20.svg';
import ImageCard5 from '@public/images/icons/isotipos/electoral.svg';
import ImageCard6 from '@public/images/icons/isotipos/sena.svg';
import ImageCard7 from '@public/images/icons/isotipos/hcd.svg';

export default function ActivitiesContainer() {
  const router = useRouter();
  const activitiesContainerRef = useRef(null);
  const { i18nActivities } = useDynamicTranslation();

  const activitiesCards = [
    {
      title: i18nActivities('activities.onu.title', { plainText: true }),
      subtitle: i18nActivities('activities.onu.subtitle', { plainText: true }),
      participants: i18nActivities('activities.onu.participants', {
        plainText: true,
      }),
      image: ImageCard1,
      link_utils:
        'https://drive.google.com/drive/folders/1i6XlJmrZ4LwAYxeaAEVcv1t_yFRIT9Jm?usp=drive_link',
      date: i18nActivities('activities.onu.date', { plainText: true }),
      date2: i18nActivities('activities.onu.date2', { plainText: true }),
    },
    {
      title: i18nActivities('activities.un.title', { plainText: true }),
      subtitle: i18nActivities('activities.un.subtitle', { plainText: true }),
      participants: i18nActivities('activities.un.participants', {
        plainText: true,
      }),
      image: ImageCard1,
      date: i18nActivities('activities.un.date', { plainText: true }),
      link_utils:
        'https://drive.google.com/drive/folders/1PoSp8yJhVkY9Iqg-sEN323XJLPdTcT9O',
    },
    {
      title: i18nActivities('activities.oea.title', { plainText: true }),
      subtitle: i18nActivities('activities.oea.subtitle', { plainText: true }),
      participants: i18nActivities('activities.oea.participants', {
        plainText: true,
      }),
      image: ImageCard2,
      link_utils:
        'https://drive.google.com/drive/folders/1crxRST6eTpo68h0Fux8VHIuqkhRiYxc2?usp=drive_link',
      date: i18nActivities('activities.oea.date', { plainText: true }),
    },
    {
      title: i18nActivities('activities.rastros.title', { plainText: true }),
      subtitle: i18nActivities('activities.rastros.subtitle', {
        plainText: true,
      }),
      participants: i18nActivities('activities.rastros.participants', {
        plainText: true,
      }),
      image: ImageCard3,
      link_utils:
        'https://drive.google.com/drive/folders/1fO-pKsjNsHOk_-Jw9MNPzBsKAmu34EBi?usp=drive_link',
      date: i18nActivities('activities.rastros.date', { plainText: true }),
    },
    {
      title: i18nActivities('activities.hcd.title', { plainText: true }),
      subtitle: i18nActivities('activities.hcd.subtitle', { plainText: true }),
      participants: i18nActivities('activities.hcd.participants', {
        plainText: true,
      }),
      image: ImageCard7,
      date: i18nActivities('activities.hcd.date', { plainText: true }),
      link_utils:
        'https://drive.google.com/drive/folders/1oE_XR7_Pt1HOLZYvE1njqxoQCNbN_F7K?usp=drive_link',
    },
    {
      title: i18nActivities('activities.sena.title', { plainText: true }),
      subtitle: i18nActivities('activities.sena.subtitle', { plainText: true }),
      participants: i18nActivities('activities.sena.participants', {
        plainText: true,
      }),
      image: ImageCard6,
      date: i18nActivities('activities.sena.date', { plainText: true }),
      link_utils:
        'https://drive.google.com/drive/folders/1wHK6uI7TSphJT3o8hgtOb73ihU1AFTms',
    },
    {
      title: i18nActivities('activities.g20.title', { plainText: true }),
      subtitle: i18nActivities('activities.g20.subtitle', { plainText: true }),
      participants: i18nActivities('activities.g20.participants', {
        plainText: true,
      }),
      image: ImageCard4,
      date: i18nActivities('activities.g20.date', { plainText: true }),
      link_utils:
        'https://drive.google.com/drive/folders/1YCVeJzKToTeQVuExDOtp_rlidTC7rZIC',
    },
    {
      title: i18nActivities('activities.electoral.title', { plainText: true }),
      subtitle: i18nActivities('activities.electoral.subtitle', {
        plainText: true,
      }),
      participants: i18nActivities('activities.electoral.participants', {
        plainText: true,
      }),
      image: ImageCard5,
      date: i18nActivities('activities.electoral.date', { plainText: true }),
      link_utils:
        'https://drive.google.com/drive/folders/1DcoGqkA0XmZZhtul-WMiv-m_uIZvJ0FL',
    },
  ];

  useEffect(() => {
    const handleScrollToElement = () => {
      // Obtén el fragmento de la URL
      const fragment = router.asPath.split('#')[1];

      if (fragment) {
        // Verifica si el elemento container ya está en el DOM
        if (activitiesContainerRef.current) {
          // Encuentra el elemento con el ID correspondiente al fragmento
          const element = document.getElementById(fragment);

          if (element) {
            // Calcula la posición del elemento en la página
            const elementPosition = element.getBoundingClientRect().top;

            // Realiza el desplazamiento suave hacia el elemento
            window.scrollTo({
              top: elementPosition,
              behavior: 'smooth',
            });
          }
        }
      }
    };

    // Llama a la función de manejo al cargar la página
    handleScrollToElement();
  }, [router.asPath]);

  const childProps = {
    activitiesCards,
    activitiesContainerRef,
  };

  return <Activities {...childProps} />;
}
