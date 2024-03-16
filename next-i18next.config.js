const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
    localePath: path.resolve('./public/locales'),
    react: {
      useSuspense: true,
    },
    localeDetection: false,
  },
};
