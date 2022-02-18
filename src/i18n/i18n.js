import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import { Language } from '../common/constant';

import ja from './locales/ja/defaults.json';
import en from './locales/en/defaults.json';
import ko from './locales/ko/defaults.json';
import cn from './locales/cn/defaults.json';

export const resources = {
  en: {
    translation: en,
  },
  ja: {
    translation: ja,
  },
  ko: {
    translation: ko,
  },
  cn: {
    translation: cn,
  },
};

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: { default: ['en'] },
    nsSeparator: false,
    detection: {
      order: ['localStorage', 'navigator', 'querystring', 'cookie', 'htmlTag'],
      lookupQuerystring: 'lang',
      lookupCookie: 'i18n',
      lookupLocalStorage: 'language',
      caches: ['localStorage', 'cookie'],
    },
  });

export default i18n;

window.i18n = i18n;

export function getCurrentLanguage() {
  return localStorage.getItem('language') || Language.EN;
}
