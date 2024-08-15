import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from "i18next-browser-languagedetector";
import { TRANSLATION_EN } from "./en/trans_en";
import { TRANSLATION_CHN } from "./chn/trans_chn";
import { TRANSLATION_KRN } from "./krn/trans_krn";
import { TRANSLATION_JPN } from "./jpn/trans_jpn";
import "../App.css";

i18n
  // .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: TRANSLATION_EN,
      },
      chn: {
        translation: TRANSLATION_CHN,
      },
      zh: {
        translation: TRANSLATION_CHN,
      },
      krn: {
        translation: TRANSLATION_KRN,
      },
      jpn: {
        translation: TRANSLATION_JPN,
      },
    },
    react: {
      useSuspense: false,
    },
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "navigator",
        "htmlTag",
        "path",
        "subdomain",
      ],
      caches: ["localStorage", "cookie"],
    },
  });

export default i18n;
