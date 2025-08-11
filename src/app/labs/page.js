"use client";
import ParallaxScroll, { ScrollReveal, ScrollTransform3D } from "@/components/ParallaxScroll";
import { MagneticButton } from "@/components/FX";

export default function LabsPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden flex items-center">
        <ParallaxScroll speed={-0.45} className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/40 via-black to-zinc-800/30" />
        </ParallaxScroll>
        <ParallaxScroll speed={-0.2} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(ellipse_at_70%_70%,rgba(200,200,200,0.06),transparent_60%)]" />
        </ParallaxScroll>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-6">
            <ScrollReveal delay={150}>
              <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-white">
                <span className="text-chromatic">Labs</span> — nos coulisses
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-lg text-white/65 max-w-3xl mx-auto">
                Prototypes, R&D, notebooks. Le cœur des innovations à venir.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="relative py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Face Detailer++", desc: "Pipeline avancé de restauration faciale multi‑étapes avec SR adaptatif." },
              { title: "Recraft Studio", desc: "Génération contrôlée de détails via prompts latents + guidance." },
              { title: "SR+ Temporal", desc: "Super‑résolution spatio‑temporelle pour vidéo avec stabilité." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={150 + i * 100}>
                <ScrollTransform3D rotationIntensity={5}>
                  <div className="group relative">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/6 to-white/2 backdrop-blur-sm border border-white/10" />
                    <div className="relative p-8">
                      <h2 className="text-2xl font-light text-white mb-2">
                        <span className="text-chromatic-subtle">{item.title}</span>
                      </h2>
                      <p className="text-white/70">{item.desc}</p>
                      <div className="mt-6">
                        <MagneticButton href="#" variant="secondary">Voir</MagneticButton>
                      </div>
                    </div>
                  </div>
                </ScrollTransform3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal delay={150}>
            <h3 className="text-4xl lg:text-5xl font-light text-white">
              Accès aux <span className="text-chromatic">sources</span>
            </h3>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <p className="text-white/65 max-w-2xl mx-auto mt-6">
              Code, workflows, checkpoints. Disponible dans le Vault pour Insider / Lifetime.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={450}>
            <div className="mt-8 flex items-center justify-center gap-4">
              <MagneticButton href="/access" variant="primary">Rejoindre</MagneticButton>
              <MagneticButton href="/contact" variant="secondary">Nous contacter</MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}