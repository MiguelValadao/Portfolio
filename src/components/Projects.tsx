import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code, ExternalLink, Folder } from "lucide-react";
import { projects } from "../data/portfolioData";
import "./Projects.css";

const featured = projects.filter((p) => p.featured);
const others = projects.filter((p) => !p.featured);

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="projects section">
      <div className="container" ref={ref}>
        <motion.div
          className="section-divider"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">03. projects</p>
          <h2 className="section-title">Things I've Built</h2>
        </motion.div>

        {/* Featured projects */}
        <div className="projects__featured">
          {featured.map((proj, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.article
                key={proj.id}
                className={`projects__featured-card${isEven ? "" : " projects__featured-card--right"}`}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
              >
                {/* Graphic placeholder */}
                <div className="projects__img-wrap">
                  {proj.image ? (
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="projects__img"
                    />
                  ) : (
                    <div className="projects__img-placeholder">
                      <svg
                        viewBox="0 0 560 360"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="560" height="360" fill="var(--surface)" />
                        {/* Decorative pattern */}
                        {Array.from({ length: 8 }).map((_, r) =>
                          Array.from({ length: 12 }).map((_, c) => (
                            <rect
                              key={`${r}-${c}`}
                              x={c * 48 + 8}
                              y={r * 48 + 8}
                              width="36"
                              height="36"
                              rx="3"
                              fill={
                                (r + c) % 5 === 0
                                  ? "rgba(100,255,218,0.08)"
                                  : (r + c) % 7 === 0
                                    ? "rgba(167,139,250,0.06)"
                                    : "rgba(255,255,255,0.02)"
                              }
                            />
                          )),
                        )}
                        <text
                          x="280"
                          y="188"
                          textAnchor="middle"
                          fontFamily="DM Mono, monospace"
                          fontSize="14"
                          fill="rgba(100,255,218,0.4)"
                        >
                          {proj.title}
                        </text>
                      </svg>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="projects__featured-info">
                  <p className="projects__featured-label mono">
                    Featured Project
                  </p>
                  <h3 className="projects__featured-title">{proj.title}</h3>
                  <div className="projects__featured-desc">
                    <p>{proj.description}</p>
                  </div>
                  <div className="projects__tech">
                    {proj.tech.map((t) => (
                      <span key={t} className="tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="projects__links">
                    {proj.github && (
                      <a
                        href={proj.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="GitHub"
                      >
                        <Code size={20} />
                      </a>
                    )}
                    {proj.live && (
                      <a
                        href={proj.live}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Live site"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Other projects grid */}
        <motion.h3
          className="projects__other-heading"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Other Noteworthy Projects
        </motion.h3>

        <div className="projects__grid">
          {others.map((proj, i) => (
            <motion.article
              key={proj.id}
              className="projects__card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.55 + i * 0.1 }}
            >
              <div className="projects__card-top">
                <Folder size={36} className="projects__card-folder" />
                <div className="projects__links">
                  {proj.github && (
                    <a
                      href={proj.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                    >
                      <Code size={18} />
                    </a>
                  )}
                  {proj.live && (
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live site"
                    >
                      <ExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
              <h3 className="projects__card-title">{proj.title}</h3>
              <p className="projects__card-desc">{proj.description}</p>
              <div className="projects__tech projects__tech--small">
                {proj.tech.map((t) => (
                  <span key={t} className="projects__card-tag mono">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
