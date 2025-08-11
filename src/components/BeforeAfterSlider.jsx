"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Accessible Before/After slider with mouse, touch, keyboard and a range input fallback.
export default function BeforeAfterSlider({
  beforeSrc = "/next.svg",
  afterSrc = "/vercel.svg",
  altBefore = "Avant",
  altAfter = "Après",
  height = 460,
}) {
  const containerRef = useRef(null);
  const [pos, setPos] = useState(0.5); // 0..1

  useEffect(() => {
    function onMove(e) {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.touches ? e.touches[0].clientX : e.clientX) - rect.left;
      setPos(Math.min(1, Math.max(0, x / rect.width)));
    }
    const el = containerRef.current;
    if (!el) return;
    const onMouseMove = (e) => {
      if (e.buttons === 1 || e.type === "mousemove") {
        if (isDragging.current) onMove(e);
      }
    };
    const isDragging = { current: false };
    const onDown = (e) => {
      isDragging.current = true;
      onMove(e);
    };
    const onUp = () => (isDragging.current = false);

    el.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("mousemove", onMouseMove);
    el.addEventListener("touchstart", onDown, { passive: true });
    window.addEventListener("touchend", onUp);
    window.addEventListener("touchmove", onMove, { passive: true });
    return () => {
      el.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("touchstart", onDown);
      window.removeEventListener("touchend", onUp);
      window.removeEventListener("touchmove", onMove);
    };
  }, []);

  return (
    <div className="w-full" aria-label="Comparateur avant après">
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black"
        style={{ height }}
        role="group"
      >
        {/* After (full) */}
        <Image
          src={afterSrc}
          alt={altAfter}
          fill
          className="object-cover select-none pointer-events-none"
          sizes="100vw"
          priority
        />
        {/* Before (clipped) */}
        <div
          className="absolute inset-0 will-change-contents"
          style={{ width: `${pos * 100}%` }}
        >
          <Image
            src={beforeSrc}
            alt={altBefore}
            fill
            className="object-cover select-none pointer-events-none"
            sizes="100vw"
            priority
          />
        </div>
        {/* Handle */}
        <div
          className="absolute inset-y-0"
          style={{ left: `${pos * 100}%`, transform: "translateX(-50%)" }}
          aria-hidden
        >
          <div className="h-full w-px bg-white/60" />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-10 w-10 rounded-full bg-white/90 text-black grid place-items-center shadow-[0_0_0_3px_rgba(0,0,0,0.2)]">
            ↔
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-3">
        <span className="text-xs text-white/60">Avant</span>
        <input
          type="range"
          min={0}
          max={100}
          value={Math.round(pos * 100)}
          onChange={(e) => setPos(parseInt(e.target.value) / 100)}
          className="w-full accent-white/80"
          aria-label="Glissière de comparaison"
        />
        <span className="text-xs text-white/60">Après</span>
      </div>
    </div>
  );
}