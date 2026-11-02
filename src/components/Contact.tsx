import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Mail, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./Contact.css";

export default function Contact() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="contact section">
      <div className="container" ref={ref}>
        <motion.div className="section-divider" initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
          <p className="section-label">{t("contact.label")}</p>
          <h2 className="section-title">{t("contact.title")}</h2>
        </motion.div>

        <div className="contact__grid">
          <motion.div className="contact__info" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <p>{t("contact.body")}</p>
            <div className="contact__meta">
              <div className="contact__meta-item">
                <Mail size={16} className="contact__meta-icon" />
                <a href="mailto:migueltvaladao@gmail.com" className="contact__meta-link mono">migueltvaladao@gmail.com</a>
              </div>
              <div className="contact__meta-item">
                <MapPin size={16} className="contact__meta-icon" />
                <span className="contact__meta-text">{t("contact.location")}</span>
              </div>
            </div>
            <a href="mailto:migueltvaladao@gmail.com" className="btn contact__btn">
              {t("contact.sayHello")} <Send size={14} />
            </a>
          </motion.div>

          <motion.div className="contact__form-wrap" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.22 }}>
            <form className="contact__form" action="https://formsubmit.co/migueltvaladao@gmail.com" method="POST">
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="name" className="contact__label mono">{t("contact.name")}</label>
                  <input id="name" type="text" name="name" className="contact__input" placeholder={t("contact.namePlaceholder")} />
                </div>
                <div className="contact__field">
                  <label htmlFor="email" className="contact__label mono">{t("contact.email")}</label>
                  <input id="email" type="email" name="email" className="contact__input" placeholder={t("contact.emailPlaceholder")} />
                </div>
              </div>
              <div className="contact__field">
                <label htmlFor="subject" className="contact__label mono">{t("contact.subject")}</label>
                <input id="subject" type="text" name="subject" className="contact__input" placeholder={t("contact.subjectPlaceholder")} />
              </div>
              <div className="contact__field">
                <label htmlFor="message" className="contact__label mono">{t("contact.message")}</label>
                <textarea id="message" name="message" className="contact__textarea" rows={5} placeholder={t("contact.messagePlaceholder")} />
              </div>
              <button type="submit" className="btn contact__submit">
                {t("contact.send")} <Send size={14} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
