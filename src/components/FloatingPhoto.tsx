import { motion, useSpring, AnimatePresence } from "framer-motion";
import { useCursorPosition } from "../hooks/useCursorPosition";
import "./FloatingPhoto.css";

interface FloatingPhotoProps {
  visible: boolean;
  src?: string;
  alt?: string;
}

const SPRING = { stiffness: 180, damping: 22, mass: 0.6 };

export default function FloatingPhoto({
  visible,
  src,
  alt = "Profile photo",
}: FloatingPhotoProps) {
  const { x, y } = useCursorPosition(28, -220);

  // Spring-smoothed position so the card lags slightly behind the cursor
  const springX = useSpring(x, SPRING);
  const springY = useSpring(y, SPRING);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="floating-photo"
          style={{ x: springX, y: springY }}
          initial={{ opacity: 0, scale: 0.82, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 2 }}
          exit={{ opacity: 0, scale: 0.82, rotate: -4 }}
          transition={{ duration: 0.28, ease: "easeOut" }}
        >
          {src ? (
            <img src={src} alt={alt} className="floating-photo__img" />
          ) : (
            /* ── SVG placeholder — same shapes as the About card ── */
            <svg
              className="floating-photo__svg"
              viewBox="0 0 220 280"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="fpGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#64ffda" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.25" />
                </linearGradient>
                <clipPath id="fpClip">
                  <rect width="220" height="280" rx="6" />
                </clipPath>
              </defs>

              {/* Background */}
              <rect width="220" height="280" fill="#0f1524" rx="6" />
              <rect width="220" height="280" fill="url(#fpGrad)" rx="6" />

              {/* Subtle grid */}
              {Array.from({ length: 6 }).map((_, r) =>
                Array.from({ length: 5 }).map((_, c) => (
                  <rect
                    key={`${r}-${c}`}
                    x={c * 44 + 2}
                    y={r * 47 + 2}
                    width="40"
                    height="43"
                    rx="3"
                    fill={
                      (r + c) % 4 === 0
                        ? "rgba(100,255,218,0.06)"
                        : "rgba(255,255,255,0.015)"
                    }
                  />
                ))
              )}

              {/* Person silhouette */}
              <circle cx="110" cy="95" r="40" fill="rgba(100,255,218,0.35)" clipPath="url(#fpClip)" />
              <ellipse cx="110" cy="210" rx="62" ry="46" fill="rgba(100,255,218,0.2)" clipPath="url(#fpClip)" />

              {/* Corner accents */}
              <line x1="12" y1="12" x2="36" y2="12" stroke="rgba(100,255,218,0.6)" strokeWidth="2" />
              <line x1="12" y1="12" x2="12" y2="36" stroke="rgba(100,255,218,0.6)" strokeWidth="2" />
              <line x1="208" y1="268" x2="184" y2="268" stroke="rgba(167,139,250,0.6)" strokeWidth="2" />
              <line x1="208" y1="268" x2="208" y2="244" stroke="rgba(167,139,250,0.6)" strokeWidth="2" />

              {/* Label */}
              <text
                x="110"
                y="264"
                textAnchor="middle"
                fontFamily="DM Mono, monospace"
                fontSize="9"
                fill="rgba(100,255,218,0.45)"
                letterSpacing="2"
              >
              </text>
            </svg>
          )}

          {/* Shine overlay */}
          <div className="floating-photo__shine" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
