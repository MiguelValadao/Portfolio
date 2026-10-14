import { motion } from "framer-motion";
import { skills } from "../data/portfolioData";
import { useInView } from "framer-motion";
import { useRef } from "react";
import "./About.css";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="about section">
      <div className="container" ref={ref}>
        <motion.div
          className="section-divider"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">01. about me</p>
          <h2 className="section-title">Who I Am</h2>
        </motion.div>

        <div className="about__grid">
          {/* Left: text */}
          <motion.div
            className="about__text"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p>
              Hey! I'm <strong style={{ color: "#e6f1ff" }}>Miguel</strong>, a
              full-stack engineer based in Belo Horizonte, Brazil. I love turning complex
              problems into elegant, performant software that people genuinely
              enjoy using.
            </p>
            <p>
              My journey started with a curiosity about how web pages work —
              within a few years that curiosity shifted into a passion for building useful full-stack applications for both mobile and web.
            </p>
            <p>
              When I'm not pushing code, you'll find me reading philosophy, classics,
              or playing my humble guitar.
            </p>

            {/* Skills grid */}
            <div className="about__skills">
              {skills.map((group) => (
                <div key={group.category} className="about__skill-group">
                  <h4 className="about__skill-heading mono">{group.category}</h4>
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

          {/* Right: avatar card */}
          <motion.div
            className="about__avatar-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
           
            {/* Stats */}
            <div className="about__stats">
              {[
                { val: "+2", label: "Years exp." },
                { val: "+5", label: "Projects" },
                { val: "3", label: "Languages spoken" },
                { val: "99.9%", label: "Understandable variables" },
                { val: "+3", label: "Years of coding" },
              ].map((s) => (
                <div key={s.label} className="about__stat">
                  <span className="about__stat-val">{s.val}</span>
                  <span className="about__stat-label">{s.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
