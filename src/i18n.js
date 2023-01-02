import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      "paragraph": "react-i18next is a powerful internationalization framework"
    }
  },
  sp: {
    translation: {
      "paragraph": "react-i18next es un poderoso marco de internacionalización"
    }
  },
  hn : {
    translation: {
      "paragraph": "प्रतिक्रिया-i18next प्रतिक्रिया / प्रतिक्रिया मूल के लिए एक शक्तिशाली"
    }
  },
  fr : {
    translation: {
      "paragraph": "react-i18next est un puissant framework d'internationalisation"
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'hn',
    fallbackLng: 'sp',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;