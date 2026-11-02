import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { skillGroups } from "../data/portfolioData";
import "./About.css";

export default function About() {
  const { t } = useTranslation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const stats = [
    { val: "+2", label: t("about.stats.experience") },
    { val: "+5", label: t("about.stats.projects") },
    { val: "3", label: t("about.stats.languages") },
    { val: "99.9%", label: t("about.stats.variables") },
    { val: "+3", label: t("about.stats.coding") },
  ];

  return (
    <section id="about" className="about section">
      <div className="container" ref={ref}>
        <motion.div className="section-divider" initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.5 }}>
          <p className="section-label">{t("about.label")}</p>
          <h2 className="section-title">{t("about.title")}</h2>
        </motion.div>

        <div className="about__grid">
          <motion.div className="about__text" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.1 }}>
            <p>
              {t("about.introBefore")} <strong style={{ color: "#e6f1ff" }}>Miguel</strong>{t("about.introAfter")}
            </p>
            <p>{t("about.journey")}</p>
            <p>{t("about.interests")}</p>

            <div className="about__skills">
              {skillGroups.map((group) => (
                <div key={group.categoryKey} className="about__skill-group">
                  <h4 className="about__skill-heading mono">{t(group.categoryKey)}</h4>
                  <ul className="about__skill-list">
                    {group.items.map((item) => (
                      <li key={item} className="about__skill-item">
                        <span className="about__skill-arrow mono">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="about__avatar-wrap" initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.25 }}>
            <div className="about__stats">
              {stats.map((stat) => (
                <div key={stat.label} className="about__stat">
                  <span className="about__stat-val">{stat.val}</span>
                  <span className="about__stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
