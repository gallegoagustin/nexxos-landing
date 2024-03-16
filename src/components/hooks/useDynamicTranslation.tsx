/**
 * Custom hook for dynamic translation using react-i18next.
 * @returns An object containing the current locale and translation functions for different namespaces.
 */

import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { LocaleTypes } from '@/config/i18n';

interface Options {
  variables?: Record<string, any>;
  plainText?: boolean;
}

export default function useDynamicTranslation() {
  const { i18n } = useTranslation();

  const { t: i18nAbout } = useTranslation(LocaleTypes.ABOUT);
  const { t: i18nActivities } = useTranslation(LocaleTypes.ACTIVITIES);
  const { t: i18nCommon } = useTranslation(LocaleTypes.COMMON);
  const { t: i18nContact } = useTranslation(LocaleTypes.CONTACT);
  const { t: i18nHome } = useTranslation(LocaleTypes.HOME);

  const dynamicFunction = (
    localeFunction: Function,
    baseLocale: LocaleTypes,
    value: string,
    options?: Options,
  ) => {
    const interpolations = options?.variables || {};

    if (options?.plainText)
      return localeFunction(`${baseLocale}.${value}`, interpolations);

    return (
      <Trans
        i18nKey={`${baseLocale}.${value}`}
        defaults={localeFunction(`${baseLocale}.${value}`)}
        values={interpolations}
        components={{
          italic: <i />,
          bold: <strong />,
          redText: <span className="text-RED_MEDIUM" />,
          blueText: <span className="text-theme-secondary font-bold" />,
          lightBlueText: <span className="text-BLUE_FOCUS" />,
          mediumText: <p className="font-medium mt-3" />,
          underlineBold: <span className="font-bold underline" />,
          underlineBlue: (
            <span className="font-bold underline text-theme-secondary" />
          ),
        }}
      />
    );
  };

  return {
    locale: i18n.language,
    i18nAbout: (value: string, variables?: Object) =>
      dynamicFunction(i18nAbout, LocaleTypes.ABOUT, value, variables),
    i18nActivities: (value: string, variables?: Object) =>
      dynamicFunction(i18nActivities, LocaleTypes.ACTIVITIES, value, variables),
    i18nCommon: (value: string, variables?: Object) =>
      dynamicFunction(i18nCommon, LocaleTypes.COMMON, value, variables),
    i18nContact: (value: string, variables?: Object) =>
      dynamicFunction(i18nContact, LocaleTypes.CONTACT, value, variables),
    i18nHome: (value: string, variables?: Object) =>
      dynamicFunction(i18nHome, LocaleTypes.HOME, value, variables),
  };
}
