"use client";
import { useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CursorHalo, NoiseOverlay, MagneticButton } from "@/components/FX";

export default function ClientShell({ children }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      {/* Effets globaux */}
      <CursorHalo size={320} strength={0.1} />
      <div className="fixed inset-0 z-[1] pointer-events-none" aria-hidden>
        <NoiseOverlay opacity={0.035} />
      </div>

      {/* Header (masqué sur la home) */}
      {!isHome && (
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/20 border-b border-white/5">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Link href="/" className="text-sm font-semibold tracking-widest uppercase text-white/80 hover:text-white">Inner Circle</Link>
            <nav className="hidden md:flex items-center gap-6 text-sm text-white/70">
              <Link href="/demos" className="hover:text-white">Démos</Link>
              <Link href="/labs" className="hover:text-white">Labs</Link>
              <Link href="/story" className="hover:text-white">Story</Link>
              <Link href="/contact" className="hover:text-white">Contact</Link>
            </nav>
            <div className="flex items-center gap-3 sm:gap-4">
              <MagneticButton href="/access" variant="primary">Accéder</MagneticButton>
              <MagneticButton href="/contact#discord" variant="secondary">Rejoindre Discord</MagneticButton>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" aria-hidden />
        </header>
      )}

      <main className="relative z-10">{children}</main>
      <footer className="border-t border-white/5 mt-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 text-xs text-white/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {year} Inner Circle — Luxe · Underground · Haute Fidélité</p>
          <div className="flex items-center gap-4">
            <Link href="/access" className="hover:text-white">Accès</Link>
            <Link href="/legal" className="hover:text-white">Mentions</Link>
          </div>
        </div>
      </footer>
    </>
  );
}