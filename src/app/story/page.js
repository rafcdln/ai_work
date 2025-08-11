import Image from "next/image";
import ParallaxScroll, { ScrollReveal, ScrollTransform3D } from "@/components/ParallaxScroll";
import { MagneticButton } from "@/components/FX";

export default function StoryPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero avec parallax layers */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <ParallaxScroll speed={-0.4} className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/50 via-black to-zinc-800/40" />
        </ParallaxScroll>
        
        <ParallaxScroll speed={-0.2} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_40%_20%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(ellipse_at_80%_80%,rgba(180,180,180,0.06),transparent_70%)]" />
        </ParallaxScroll>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-8">
            <ScrollReveal delay={200}>
              <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-white leading-[0.9]">
                Notre <span className="text-chromatic">histoire</span>
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
                D'une quête pour l'image parfaite à une communauté underground. 
                Comment Face Detailer a redéfini le réalisme IA.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <MagneticButton href="/demos" variant="primary" className="text-base px-8 h-14">
                  Voir les résultats
                </MagneticButton>
                <MagneticButton href="/labs" variant="secondary" className="text-base px-8 h-14">
                  Nos workflows
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section className="relative py-32 overflow-hidden">
        <ParallaxScroll speed={0.1} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-800/5 to-transparent" />
        </ParallaxScroll>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={100}>
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-light text-white mb-6">
                L'évolution du <span className="text-chromatic-slow">réalisme</span>
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                De l'IA générique aux micro-textures ultra-précises
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-16">
            {[
              {
                title: "Le problème",
                subtitle: "2023 — L'effet plastique",
                description: "Tous les générateurs produisaient des visages parfaits mais artificiels. Pas de pores, pas de texture, pas d'âme.",
                accent: "text-chromatic-subtle"
              },
              {
                title: "La révélation",  
                subtitle: "Début 2024 — Pipeline multi-passes",
                description: "Découverte: séparer la génération de l'enhancement. Face Detailer naît d'expérimentations sur ComfyUI.",
                accent: "text-chromatic"
              },
              {
                title: "L'underground",
                subtitle: "Maintenant — Communauté fermée",
                description: "Inner Circle se forme. Partage exclusif de workflows, benchmarks GPU, et quête continue du photoréalisme absolu.",
                accent: "text-chromatic-slow"
              }
            ].map((phase, i) => (
              <ScrollReveal key={i} delay={200 + i * 200}>
                <ScrollTransform3D rotationIntensity={4} scaleRange={[0.96, 1.04]}>
                  <div className="relative">
                    <div className="grid lg:grid-cols-3 gap-8 items-center">
                      <div className="lg:col-span-2 space-y-4">
                        <h3 className="text-3xl lg:text-4xl font-light text-white">
                          <span className={phase.accent}>{phase.title}</span>
                        </h3>
                        <p className="text-lg text-white/50 font-medium">{phase.subtitle}</p>
                        <p className="text-white/70 leading-relaxed text-lg">{phase.description}</p>
                      </div>
                      <div className="relative">
                        <div className="aspect-square rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm flex items-center justify-center">
                          <div className="text-center space-y-3">
                            <div className="w-16 h-16 mx-auto rounded-2xl bg-white/10 flex items-center justify-center">
                              <Image src="/globe.svg" width={32} height={32} alt="Timeline" className="opacity-60" />
                            </div>
                            <p className="text-white/40 text-sm">Phase {i + 1}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    {i < 2 && (
                      <div className="absolute left-8 top-full h-16 w-px bg-gradient-to-b from-white/20 to-transparent" />
                    )}
                  </div>
                </ScrollTransform3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy section */}
      <section className="relative py-32">
        <ParallaxScroll speed={-0.05} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.04),transparent_70%)]" />
        </ParallaxScroll>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={200}>
            <div className="text-center space-y-8">
              <h3 className="text-4xl lg:text-5xl font-light text-white leading-tight">
                Notre <span className="text-chromatic-subtle">philosophie</span>
              </h3>
              <blockquote className="text-xl lg:text-2xl text-white/70 leading-relaxed font-light italic">
                "L'IA ne doit pas remplacer la créativité, mais révéler ce qui était impossible. 
                Chaque pixel compte, chaque pore raconte une histoire."
              </blockquote>
              <div className="pt-8">
                <p className="text-white/50 text-sm uppercase tracking-widest">— L'équipe Inner Circle</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-32">
        <ParallaxScroll speed={0.05} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-800/10 to-transparent" />
        </ParallaxScroll>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal delay={200}>
            <h4 className="text-3xl lg:text-5xl font-light text-white mb-8">
              Rejoignez notre <span className="text-chromatic">histoire</span>
            </h4>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <MagneticButton href="/contact#discord" variant="secondary" className="text-lg px-10 h-16">
                Rejoindre Discord
              </MagneticButton>
              <MagneticButton href="/access" variant="primary" className="text-lg px-10 h-16">
                Accéder au Vault
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}