"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export function TiltCard({ className = "", children, intensity = 5, shine = true }) {
  const ref = useRef(null);
  const [style, setStyle] = useState({});

  function onMove(e) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    // Translation seulement, pas de rotation
    const tx = (px - 0.5) * intensity; 
    const ty = (py - 0.5) * intensity;

    setStyle({
      transform: `translate3d(${tx.toFixed(1)}px, ${ty.toFixed(1)}px, 0)`
    });

    if (shine) {
      const sx = px * 100;
      const sy = py * 100;
      el.style.setProperty("--shine-x", `${sx}%`);
      el.style.setProperty("--shine-y", `${sy}%`);
    }
  }

  function onLeave() {
    setStyle({ transform: "translate3d(0,0,0)" });
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative will-change-transform transition-transform duration-200 ease-out ${className}`}
      style={style}
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl [background:radial-gradient(120px_120px_at_var(--shine-x,_var(--shine-y)),rgba(255,255,255,0.15),transparent_60%)] opacity-0 group-hover:opacity-100 transition" />
      {children}
    </div>
  );
}

export function MagneticButton({ href = "#", children, className = "", variant = "primary", effect = false }) {
  const ref = useRef(null);
  const innerRef = useRef(null);

  function onMove(e) {
    if (!effect) return;
    const el = ref.current;
    const inner = innerRef.current;
    if (!el || !inner) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    const tx = (px - 0.5) * 18;
    const ty = (py - 0.5) * 18;
    inner.style.transform = `translate(${tx.toFixed(1)}px, ${ty.toFixed(1)}px)`;
  }
  function onLeave() {
    const inner = innerRef.current;
    if (inner) inner.style.transform = "translate(0,0)";
  }

  // Styles minimalistes inspirés d'igloo
  const variants = {
    primary: "bg-white text-black hover:bg-white/90",
    secondary: "border border-white/15 text-white hover:border-white/30 hover:bg-white/5",
    ghost: "text-white/90 hover:text-white border-b border-white/20 hover:border-white/50 rounded-none px-0"
  };
  const baseCommon = "group relative inline-flex h-11 items-center rounded-full px-5 text-sm font-medium transition-colors duration-200";

  return (
    <Link
      href={href}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      role="button"
      aria-label={typeof children === 'string' ? children : 'Bouton'}
      className={`${baseCommon} ${variants[variant] ?? variants.primary} ${className}`}
    >
      <span ref={innerRef} className="will-change-transform transition-transform duration-150 ease-out inline-flex items-center gap-2">
        {children}
        <span aria-hidden className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
      </span>
      {effect && (
        <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(60px_60px_at_center,rgba(255,255,255,0.25),transparent_60%)] opacity-0 group-hover:opacity-100 transition" />
      )}
    </Link>
  );
}

export function CursorHalo({ size = 280, strength = 0.12, className = "" }) {
  const ref = useRef(null);
  const last = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const rafId = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    el.style.willChange = 'transform, opacity';
    el.style.transform = 'translate3d(0,0,0)';
    el.style.backfaceVisibility = 'hidden';

    function update() {
      last.current.x += (target.current.x - last.current.x) * 0.18;
      last.current.y += (target.current.y - last.current.y) * 0.18;
      el.style.transform = `translate3d(${(last.current.x - size / 2).toFixed(1)}px, ${(last.current.y - size / 2).toFixed(1)}px, 0)`;
      rafId.current = requestAnimationFrame(update);
    }

    function onPointerMove(e) {
      target.current = { x: e.clientX, y: e.clientY };
      if (!rafId.current) rafId.current = requestAnimationFrame(update);
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true });

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = 0;
    };
  }, [size]);

  return (
    <div
      ref={ref}
      className={`pointer-events-none fixed z-[5] hidden md:block ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div className="absolute inset-0 rounded-full blur-3xl opacity-70" style={{
        background: `radial-gradient(circle at 50% 50%, rgba(117,70,255,${strength}), rgba(58,214,250,${strength * 0.8}) 60%, transparent 70%)`
      }} />
    </div>
  );
}

export function NoiseOverlay({ opacity = 0.035, className = "" }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 mix-blend-overlay ${className}`}
      style={{
        backgroundImage:
          "repeating-linear-gradient(0deg, rgba(255,255,255,0.06), rgba(255,255,255,0.06) 1px, transparent 1px, transparent 2px), repeating-linear-gradient(90deg, rgba(255,255,255,0.03), rgba(255,255,255,0.03) 1px, transparent 1px, transparent 2px)",
        opacity,
      }}
    />
  );
}