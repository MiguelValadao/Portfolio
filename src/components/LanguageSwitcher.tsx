import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import "./LanguageSwitcher.css";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const current = i18n.language?.slice(0, 2) ?? "en";

  const toggle = () => {
    const next = current === "en" ? "pt" : "en";
    i18n.changeLanguage(next);
  };

  return (
    <div className="lang-switcher" role="group" aria-label="Language switcher">
      {LANGUAGES.map((lang) => (
        <button
          key={lang.code}
          className={`lang-btn mono${current === lang.code ? " lang-btn--active" : ""}`}
          onClick={toggle}
          aria-pressed={current === lang.code}
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
