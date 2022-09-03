import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import { en, ar, de, lv } from '@assets/dictionaries';

const resources = {
  en,
  ar,
  de,
  lv,
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    supportedLngs: ['en', 'ar', 'de', 'lv'],
    fallbackLng: 'en',
    defaultNS: '',
    // debug: process.env.NODE_ENV !== 'production',
    detection: {
      order: ['localStorage', 'querystring', 'navigator'],
      lookupQuerystring: 'lng',
      caches: ['localStorage'],
    },
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'a', 'p', 'href', 'target', 'strong', 'i'],
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    resources,
  });

export default i18n;
