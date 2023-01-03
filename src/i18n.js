import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "paragraph": "our contents are translated to four languages",
      "key_zero": "language",
      "key_one": "language",
      "key_other": "languages",
    }
  },
  sp: {
    translation: {
      "paragraph": "nuestros contenidos están traducidos a cuatro idiomas"
    }
  },
  de : {
    translation: {
      "paragraph": "unsere Inhalte sind in vier Sprachen übersetzt"
    }
  },
  fr : {
    translation: {
      "paragraph": "nos contenus sont traduits en quatre langues"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    length: resources.length,
    fallbackLng: 'sp',
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;