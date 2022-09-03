import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { en, de, lv } from '@assets/dictionaries';

const resources = {
  en,
  de,
  lv,
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'de', 'lv'],
    fallbackLng: 'en',
    defaultNS: '',
    debug: process.env.NODE_ENV !== 'production',
    detection: {
      order: ['querystring', 'navigator'],
      lookupQuerystring: 'lng',
    },
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'a', 'p', 'strong', 'i'],
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
