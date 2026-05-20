import { useEffect, useRef } from "react";
import { useMotionValue } from "framer-motion";

/**
 * Returns live-updated motion values for the cursor position,
 * offset so the card floats to the upper-right of the pointer.
 */
export function useCursorPosition(offsetX = 24, offsetY = -160) {
  const x = useMotionValue(-9999);
  const y = useMotionValue(-9999);
  const rafId = useRef<number>(0);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        x.set(e.clientX + offsetX);
        y.set(e.clientY + offsetY);
      });
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafId.current);
    };
  }, [x, y, offsetX, offsetY]);

  return { x, y };
}
