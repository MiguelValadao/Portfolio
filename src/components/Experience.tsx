import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { experiences } from "../data/portfolioData";
import type { Experience } from "../types";
import "./Experience.css";

export default function Experience() {
  const [active, setActive] = useState<string>(experiences[0].id);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const current = experiences.find((e) => e.id === active) as Experience;

  return (
    <section id="experience" className="experience section">
      <div className="container" ref={ref}>
        <motion.div
          className="section-divider"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">02. experience</p>
          <h2 className="section-title">Where I've Worked</h2>
        </motion.div>

        <motion.div
          className="experience__layout"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          {/* Tab list */}
          <div className="experience__tabs" role="tablist">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                role="tab"
                aria-selected={active === exp.id}
                className={`experience__tab${active === exp.id ? " experience__tab--active" : ""}`}
                onClick={() => setActive(exp.id)}
              >
                {exp.company}
              </button>
            ))}
            <div
              className="experience__tab-indicator"
              style={{
                transform: `translateY(${experiences.findIndex((e) => e.id === active) * 48}px)`,
              }}
            />
          </div>

          {/* Panel */}
          <motion.div
            key={active}
            className="experience__panel"
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            role="tabpanel"
          >
            <div className="experience__panel-header">
              <h3 className="experience__role">
                {current.role}{" "}
                <span className="experience__company">@ {current.company}</span>
              </h3>
              <p className="experience__period mono">{current.period}</p>
            </div>

            <ul className="experience__bullets">
              {current.description.map((line, i) => (
                <li key={i} className="experience__bullet">
                  <span className="glow-dot" />
                  {line}
                </li>
              ))}
            </ul>

            <div className="experience__tech">
              {current.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
