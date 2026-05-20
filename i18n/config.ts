import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    supportedLngs: ["en", "pt"],
    defaultNS: "translation",
    interpolation: {
      escapeValue: false, // React already escapes
    },
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
    resources: {
      en: { translation: {} },
      pt: { translation: {} },
    },
  });

// Dynamically load locale JSON files
const loadResources = async (lng: string) => {
  const mod = await import(`../public/locales/${lng}/translation.json`);
  i18n.addResourceBundle(lng, "translation", mod.default, true, true);
};

Promise.all([loadResources("en"), loadResources("pt")]).then(() => {
  i18n.changeLanguage(i18n.language);
});

export default i18n;
