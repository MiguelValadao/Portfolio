import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, Code, Link2, Share2 } from "lucide-react";
import { socialLinks } from "../data/portfolioData";
import FloatingPhoto from "./FloatingPhoto";
import "./Hero.css";
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const iconMap: Record<string, React.ReactNode> = {
  github: <Code size={18} />,
  linkedin: <Link2 size={18} />,
  twitter: <Share2 size={18} />,
};

export default function Hero() {
  const [photoVisible, setPhotoVisible] = useState(false);

  return (
    <section className="hero" id="hero">
      {/* Background grid */}
      <div className="hero__grid" aria-hidden />

      <FloatingPhoto
        visible={photoVisible}
        src="/images/MyPhoto.jpg"
      />

      {/* Ambient glows */}
      <div className="hero__glow hero__glow--1" aria-hidden />
      <div className="hero__glow hero__glow--2" aria-hidden />

      <div className="container hero__content">
        <motion.div
          className="hero__text"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p className="hero__greeting mono" variants={item}>
            Hi, my name is
          </motion.p>

          {/* Hoverable name — triggers the floating photo */}
          <motion.h1
            className="hero__name hero__name--hoverable"
            variants={item}
            onMouseEnter={() => setPhotoVisible(true)}
            onMouseLeave={() => setPhotoVisible(false)}
          >
            Miguel Teixeira.
            <span className="hero__name-underline" aria-hidden />
          </motion.h1>

          <motion.h2 className="hero__tagline" variants={item}>
            I build things for cellphones and backend apps.
          </motion.h2>

          <motion.p className="hero__description" variants={item}>
            I'm a full-stack developer specialising in crafting exceptional
            digital experiences. Currently focused on building{" "}
            <span className="hero__highlight">accessible && performant</span>{" "}
            products at the intersection of design and engineering.
          </motion.p>

          <motion.div className="hero__actions" variants={item}>
            <a href="#projects" className="btn hero__btn-primary">
              View my work <ArrowDownRight size={16} />
            </a>
            <a href="#contact" className="btn hero__btn-ghost">
              Get in touch
            </a>
          </motion.div>
        </motion.div>

        {/* Social sidebar */}
        <motion.div
          className="hero__social"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.url}
              className="hero__social-link"
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
            >
              {iconMap[s.icon]}
            </a>
          ))}
          <div className="hero__social-line" />
        </motion.div>

        {/* Email sidebar */}
        <motion.div
          className="hero__email"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1, duration: 0.5 }}
        >
          <a
            href="mailto:migueltvaladao@gmail.com"
            className="hero__email-link mono"
          >
            migueltvaladao@gmail.com
          </a>
          <div className="hero__social-line" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="hero__scroll-dot" />
      </motion.div>
    </section>
  );
}
