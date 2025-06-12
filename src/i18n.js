import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import des fichiers de traductions
import translationFR from "./Locales/fr.json";
import translationEN from "./Locales/en.json";

// Options de détection de langue
const languageDetectorOptions = {
  order: ["localStorage", "navigator"], // ordre de détection
  caches: ["localStorage"], // où stocker la langue
};

i18n
  .use(new LanguageDetector(null, languageDetectorOptions)) // détection optimisée
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: translationFR },
      en: { translation: translationEN },
    },
    fallbackLng: "fr", // langue par défaut
    debug: false, // à mettre true pour voir les logs

    interpolation: {
      escapeValue: false, // React gère déjà l'échappement
    },

    react: {
      useSuspense: false, // 👈 IMPORTANT pour ne pas bloquer le rendu initial
    },
  });

export default i18n;
