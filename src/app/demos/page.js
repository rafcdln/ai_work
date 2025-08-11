"use client";
import ParallaxScroll, { ScrollReveal, ScrollTransform3D } from "@/components/ParallaxScroll";
import { MagneticButton } from "@/components/FX";

export default function DemosPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden flex items-center">
        <ParallaxScroll speed={-0.5} className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/40 via-black to-zinc-800/30" />
        </ParallaxScroll>
        <ParallaxScroll speed={-0.25} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(ellipse_at_70%_70%,rgba(200,200,200,0.06),transparent_60%)]" />
        </ParallaxScroll>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-6">
            <ScrollReveal delay={150}>
              <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-white">
                <span className="text-chromatic">Démos</span> en clair
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-lg text-white/65 max-w-3xl mx-auto">
                Comparez. Choisissez. Déployez. Ce que vous voyez est ce que vous obtenez.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={450}>
              <div className="flex justify-center">
                <MagneticButton href="#grid" variant="primary">Voir les démos</MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section id="grid" className="relative py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <ScrollTransform3D rotationIntensity={5}>
                <a href="/demos/compare" className="group relative block">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/6 to-white/2 backdrop-blur-sm border border-white/10" />
                  <div className="relative p-8">
                    <h2 className="text-2xl font-light text-white mb-2">
                      <span className="text-chromatic-subtle">Comparateur</span> HQ
                    </h2>
                    <p className="text-white/70">Comparez la qualité de sortie entre modèles / workflows.</p>
                    <div className="mt-6">
                      <MagneticButton href="/demos/compare" variant="secondary">Ouvrir</MagneticButton>
                    </div>
                  </div>
                </a>
              </ScrollTransform3D>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <ScrollTransform3D rotationIntensity={5}>
                <div className="group relative">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/3 to-transparent backdrop-blur-sm border border-white/10" />
                  <div className="relative p-8">
                    <h2 className="text-2xl font-light text-white mb-2">Live Demos</h2>
                    <p className="text-white/60">Testez nos workflows directement dans le navigateur. Bientôt.</p>
                    <div className="mt-6">
                      <MagneticButton href="/contact#discord" variant="secondary">Être notifié</MagneticButton>
                    </div>
                  </div>
                </div>
              </ScrollTransform3D>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}