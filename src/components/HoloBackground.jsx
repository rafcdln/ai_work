"use client";
import { useEffect, useRef } from "react";

// Canvas background with holographic gradient blobs and smooth motion
export default function HoloBackground({ className = "", intensity = 0.5 }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let raf = 0;
    const DPR = Math.min(2, window.devicePixelRatio || 1);

    function resize() {
      const { width, height } = canvas.getBoundingClientRect();
      canvas.width = Math.floor(width * DPR);
      canvas.height = Math.floor(height * DPR);
      ctx.scale(DPR, DPR);
    }

    const blobs = Array.from({ length: 4 }).map((_, i) => ({
      x: Math.random(),
      y: Math.random(),
      r: 180 + Math.random() * 160,
      hue: i % 2 === 0 ? 270 + Math.random() * 20 : 190 + Math.random() * 20, // violet/cyan range
      speed: 0.06 + Math.random() * 0.08,
      phase: Math.random() * Math.PI * 2,
    }));

    function draw(t) {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, width, height);

      // subtle dark base
      ctx.fillStyle = "rgba(0,0,0,0.4)";
      ctx.fillRect(0, 0, width, height);

      blobs.forEach((b, idx) => {
        const x = (0.5 + (Math.sin(b.phase + t * 0.0003 * b.speed + idx) * 0.4)) * width;
        const y = (0.5 + (Math.cos(b.phase + t * 0.00025 * b.speed - idx) * 0.35)) * height;
        const grad = ctx.createRadialGradient(x, y, 0, x, y, b.r);
        const alpha = 0.22 * intensity;
        const color = `hsla(${b.hue}, 85%, 60%, ${alpha})`;
        grad.addColorStop(0, color);
        grad.addColorStop(1, "transparent");
        ctx.globalCompositeOperation = "lighter";
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(x, y, b.r, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = "source-over";
      raf = requestAnimationFrame(draw);
    }

    function onResize() {
      resize();
    }

    const obs = new ResizeObserver(onResize);
    obs.observe(canvas);
    resize();
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      obs.disconnect();
    };
  }, [intensity]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      <canvas ref={ref} className="w-full h-full" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.06),transparent_60%)]" />
      <div className="absolute inset-0 mix-blend-overlay opacity-[0.06]" style={{backgroundImage:"linear-gradient(0deg, rgba(255,255,255,.06), transparent 60%)"}} />
    </div>
  );
}