import { useEffect, useRef } from "react";
import "./BackgroundEffect.css";

export default function BackgroundEffect() {
  const frame = useRef<number>(0);

  useEffect(() => {
    const updateTorch = (event: PointerEvent) => {
      cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        document.documentElement.style.setProperty("--torch-x", `${event.clientX}px`);
        document.documentElement.style.setProperty("--torch-y", `${event.clientY}px`);
      });
    };

    window.addEventListener("pointermove", updateTorch, { passive: true });
    return () => {
      window.removeEventListener("pointermove", updateTorch);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  return (
    <div className="background-effect" aria-hidden="true">
      <div className="background-effect__grid" />
      <div className="background-effect__dots" />
      <div className="background-effect__torch" />
      <div className="background-effect__vignette" />
    </div>
  );
}
