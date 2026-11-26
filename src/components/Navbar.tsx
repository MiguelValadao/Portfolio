import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getNavLinks } from "../data/portfolioData";
import LanguageSwitcher from "./LanguageSwitcher";
import { useActiveSection } from "../hooks/useActiveSection";
import type { NavLink } from "../types";
import "./Navbar.css";

const SECTION_IDS = ["about", "experience", "projects", "contact"];

export default function Navbar() {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const navLinks = getNavLinks(t);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        className={`navbar${scrolled ? " navbar--scrolled" : ""}`}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
      <div className="navbar__inner container">
        {/* Logo */}
        <a href="#" className="navbar__logo">
          <span className="mono navbar__logo-bracket">&lt;</span>
          <span className="navbar__logo-text">dev</span>
          <span className="mono navbar__logo-bracket"> /&gt;</span>
        </a>

        {/* Desktop nav */}
        <nav className="navbar__links">
          {navLinks.map((link: NavLink, i: number) => (
            <motion.a
              key={link.href}
              href={link.href}
              className={`navbar__link${activeSection === link.href.slice(1) ? " navbar__link--active" : ""}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.08 }}
            >
              <span className="navbar__link-num mono">0{i + 1}.</span>
              {link.label}
            </motion.a>
          ))}
          <a
            href="/My_Resume.pdf"
            className="btn navbar__resume"
            target="_blank"
            rel="noreferrer"
          >
            {t("nav.resume")}
          </a>
          <LanguageSwitcher />
        </nav>

        {/* Mobile burger */}
        <button
          className="navbar__burger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={t("nav.toggleMenu")}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      </motion.header>

      {/* Render outside the animated header so it cannot be trapped in its stacking context. */}
      {createPortal(
        <AnimatePresence>
          {menuOpen && (
            <motion.div className="navbar__menu-layer">
              <motion.button
                type="button"
                className="navbar__backdrop"
                aria-label="Close navigation menu"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setMenuOpen(false)}
              />
              <motion.nav
                id="mobile-navigation"
                className="navbar__drawer"
                aria-label="Mobile navigation"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.3 }}
              >
                {navLinks.map((link: NavLink, i: number) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="navbar__drawer-link"
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="mono" style={{ color: "var(--accent)", fontSize: "0.75rem" }}>
                      0{i + 1}.
                    </span>
                    {link.label}
                  </a>
                ))}
                <a href="/My_Resume.pdf" className="btn" target="_blank" rel="noreferrer">
                  {t("nav.resume")}
                </a>
                <LanguageSwitcher />
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>,
        document.getElementById("root") ?? document.body,
      )}
    </>
  );
}
