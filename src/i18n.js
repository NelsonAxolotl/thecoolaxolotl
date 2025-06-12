import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import des traductions
import translationFR from "./Locales/fr.json";
import translationEN from "./Locales/en.json";

// Configuration de détection
const languageDetectorOptions = {
  order: ["localStorage", "navigator"],
  caches: ["localStorage"],
};

const resources = {
  fr: { translation: translationFR },
  en: { translation: translationEN },
};

i18n
  .use(new LanguageDetector(null, languageDetectorOptions))
  .use(initReactI18next);

export const initI18n = async () => {
  await i18n.init({
    resources,
    fallbackLng: "fr",
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
};

export default i18n;
