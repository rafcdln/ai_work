"use client";
import { useRef, useEffect } from "react";

// Parallax optimisé pour Safari avec throttling et transforms composites
export default function ParallaxScroll({ 
  children, 
  speed = 0.5,
  className = "",
  smooth = true,
  maxTranslate = 80
}) {
  const ref = useRef(null);
  const current = useRef(0);
  const target = useRef(0);
  const rafId = useRef(0);
  const isVisible = useRef(false);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Préférer les utilisateurs qui ont désactivé les animations
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    // CSS Optimization pour Safari
    el.style.willChange = 'transform';
    el.style.transform = 'translateZ(0)'; // Force GPU
    el.style.backfaceVisibility = 'hidden';

    const io = new IntersectionObserver(([entry]) => {
      isVisible.current = entry.isIntersecting;
      if (isVisible.current) start();
      else stop();
    }, { threshold: 0, rootMargin: "-10% 0px -10% 0px" });

    io.observe(el);

    // Throttle scroll pour Safari performance
    function onScroll() {
      const now = performance.now();
      if (now - lastScrollTime.current < 16) return; // ~60fps max
      lastScrollTime.current = now;

      if (!el || !isVisible.current) return;
      const rect = el.getBoundingClientRect();
      const ratio = (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight;
      const desired = Math.max(-maxTranslate, Math.min(maxTranslate, ratio * window.innerHeight * speed));
      target.current = desired;
    }

    function loop() {
      if (!isVisible.current) return;
      const lerpFactor = smooth ? 0.08 : 1; // Plus lent pour Safari
      current.current += (target.current - current.current) * lerpFactor;
      
      // Utilisation de translate3d pour GPU
      el.style.transform = `translate3d(0, ${current.current.toFixed(2)}px, 0)`;
      rafId.current = requestAnimationFrame(loop);
    }

    function start() {
      onScroll();
      if (!rafId.current) rafId.current = requestAnimationFrame(loop);
    }

    function stop() {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = 0;
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      stop();
      if (el) {
        el.style.willChange = 'auto';
      }
    };
  }, [speed, smooth, maxTranslate]);

  return (
    <div 
      ref={ref} 
      className={className}
    >
      {children}
    </div>
  );
}

// Révélation au scroll avec styles inline pour la durée
export function ScrollReveal({ 
  children, 
  delay = 0, 
  duration = 0.8,
  triggerOnce = true,
  className = "" 
}) {
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Respecte prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Initial state: léger flou + translation + faible opacité
    node.style.opacity = prefersReducedMotion ? "1" : "0";
    node.style.filter = prefersReducedMotion ? "none" : "blur(10px)";
    node.style.transform = prefersReducedMotion ? "none" : "translateY(16px)";

    node.style.transitionProperty = "opacity, transform, filter";
    node.style.transitionTimingFunction = "cubic-bezier(0.22, 1, 0.36, 1)";
    node.style.transitionDuration = `${duration}s`;
    node.style.transitionDelay = `${delay}ms`;
    node.style.willChange = prefersReducedMotion ? "auto" : "opacity, transform, filter";
    node.style.backfaceVisibility = 'hidden';

    const observer = new IntersectionObserver(([entry]) => {
      if (prefersReducedMotion) return; // Ne pas animer si l'utilisateur ne veut pas

      if (entry.isIntersecting && (!hasAnimated.current || !triggerOnce)) {
        node.style.opacity = "1";
        node.style.filter = "blur(0px)";
        node.style.transform = "translateY(0)";
        if (triggerOnce) hasAnimated.current = true;
      } else if (!triggerOnce) {
        node.style.opacity = "0";
        node.style.filter = "blur(10px)";
        node.style.transform = "translateY(16px)";
      }
    }, { threshold: 0.1, rootMargin: "0px 0px -10% 0px" });

    observer.observe(node);
    return () => observer.disconnect();
  }, [delay, duration, triggerOnce]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}

// Transformations 3D au scroll (plus douces)
export function ScrollTransform3D({ 
  children, 
  rotationIntensity = 12,
  scaleRange = [0.92, 1.06],
  className = "" 
}) {
  const ref = useRef(null);
  const rafId = useRef(0);
  const lastScrollTime = useRef(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    el.style.willChange = 'transform';
    el.style.transformStyle = 'preserve-3d';
    el.style.backfaceVisibility = 'hidden';

    function handleScroll() {
      const now = performance.now();
      if (now - lastScrollTime.current < 16) return; // ~60fps max
      lastScrollTime.current = now;

      const rect = el.getBoundingClientRect();
      const elementCenter = rect.top + rect.height / 2;
      const windowCenter = window.innerHeight / 2;
      const distanceFromCenter = elementCenter - windowCenter;
      const maxDistance = window.innerHeight;

      const n = Math.max(-1, Math.min(1, distanceFromCenter / maxDistance));
      const rotationX = n * rotationIntensity;
      const scale = scaleRange[0] + (1 - Math.abs(n)) * (scaleRange[1] - scaleRange[0]);

      el.style.transform = `perspective(1000px) rotateX(${rotationX.toFixed(2)}deg) scale(${scale.toFixed(3)}) translateZ(0)`;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (el) {
        el.style.willChange = 'auto';
      }
    };
  }, [rotationIntensity, scaleRange]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}