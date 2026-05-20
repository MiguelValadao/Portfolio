import { Code, Link2, Share2 } from "lucide-react";
import { socialLinks } from "../data/portfolioData";
import "./Footer.css";

const iconMap: Record<string, React.ReactNode> = {
  github: <Code size={16} />,
  linkedin: <Link2 size={16} />,
  twitter: <Share2 size={16} />,
};

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <p className="footer__copy mono">
          Designed &amp; Built by{" "}
          <span className="footer__name">Miguel Teixeira</span>
        </p>
        <div className="footer__socials">
          {socialLinks.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="footer__social-link"
            >
              {iconMap[s.icon]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
