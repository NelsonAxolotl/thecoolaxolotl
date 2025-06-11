import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Import des fichiers de traductions
import translationFR from "./Locales/fr.json";
import translationEN from "./Locales/en.json";

// Configuration de i18n
i18n
  .use(LanguageDetector) // détecte automatiquement la langue du navigateur
  .use(initReactI18next) // connecte i18n à React
  .init({
    resources: {
      fr: {
        translation: translationFR,
      },
      en: {
        translation: translationEN,
      },
    },
    fallbackLng: "fr", // langue par défaut si aucune n'est trouvée
    debug: false, // mets à true si tu veux voir les logs i18next

    interpolation: {
      escapeValue: false, // React échappe déjà les valeurs
    },

    react: {
      useSuspense: false, // <--- Désactive le suspense, rend le contenu immédiatement (mais les traductions async arriveront ensuite)
    },
  });

export default i18n;
