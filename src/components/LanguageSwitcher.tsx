import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./LanguageSwitcher.css";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const current = i18n.language?.slice(0, 2) ?? "en";

  return (
    <div className="lang-switcher" role="group" aria-label={t("language.switcher")}>
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          className={`lang-btn mono${current === lang.code ? " lang-btn--active" : ""}`}
          onClick={() => i18n.changeLanguage(lang.code)}
          aria-pressed={current === lang.code}
          aria-label={t("language.switchTo", {
            language: lang.code === "en" ? t("language.english") : t("language.portuguese"),
          })}
        >
          {current === lang.code && (
            <motion.span
              className="lang-btn__indicator"
              layoutId="lang-indicator"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="lang-btn__label">{lang.label}</span>
        </button>
      ))}
    </div>
  );
}
