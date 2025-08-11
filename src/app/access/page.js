"use client";
import Image from "next/image";
import ParallaxScroll, { ScrollReveal, ScrollTransform3D } from "@/components/ParallaxScroll";
import { MagneticButton } from "@/components/FX";

export default function AccessPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero avec parallax layers */}
      <section className="relative min-h-screen overflow-hidden flex items-center">
        <ParallaxScroll speed={-0.5} className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/40 via-black to-zinc-800/30" />
        </ParallaxScroll>
        
        <ParallaxScroll speed={-0.3} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(ellipse_at_70%_70%,rgba(200,200,200,0.06),transparent_60%)]" />
        </ParallaxScroll>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-8">
            <ScrollReveal delay={200}>
              <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-white leading-[0.9]">
                <span className="text-chromatic">Accès</span> au cercle
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={400}>
              <p className="text-xl text-white/60 leading-relaxed max-w-3xl mx-auto">
                Deux voies. Même exclusivité. Own the tech — téléchargez, lancez, déployez. Sans lock‑in.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={600}>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <MagneticButton href="#plans" variant="primary" className="text-base px-8 h-14">
                  Voir les plans
                </MagneticButton>
                <MagneticButton href="/demos" variant="secondary" className="text-base px-8 h-14">
                  Voir les démos
                </MagneticButton>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Plans section */}
      <section id="plans" className="relative py-32 overflow-hidden">
        <ParallaxScroll speed={0.2} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-800/5 to-transparent" />
        </ParallaxScroll>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={100}>
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-light text-white mb-6">
                Choisissez votre <span className="text-chromatic-slow">niveau</span>
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Access instantané au Vault, Discord premium et nos workflows exclusifs
              </p>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ScrollReveal delay={200}>
              <ScrollTransform3D rotationIntensity={5} scaleRange={[0.96, 1.04]}>
                <div className="group relative h-full">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm border border-white/10" />
                  <div className="relative p-8 h-full flex flex-col">
                    <div className="mb-6">
                      <h3 className="text-2xl font-light text-white mb-2">
                        <span className="text-chromatic-subtle">Insider</span>
                      </h3>
                      <p className="text-white/70">Abonnement mensuel — Vault + Playbooks + Discord premium</p>
                    </div>
                    
                    <div className="flex-1 space-y-4 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        <span className="text-white/80">Workflows ComfyUI complets</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        <span className="text-white/80">Modèles optimisés + kits</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        <span className="text-white/80">Comparatifs HQ exclusifs</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        <span className="text-white/80">Salons privés Discord</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        <span className="text-white/80">Updates régulières</span>
                      </div>
                    </div>
                    
                    <MagneticButton href="#checkout" variant="secondary" className="w-full justify-center">
                      Choisir Insider
                    </MagneticButton>
                  </div>
                </div>
              </ScrollTransform3D>
            </ScrollReveal>

            <ScrollReveal delay={300}>
              <ScrollTransform3D rotationIntensity={5} scaleRange={[0.96, 1.04]}>
                <div className="group relative h-full">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/8 to-white/2 backdrop-blur-sm border border-white/15" />
                  <div className="relative p-8 h-full flex flex-col">
                    <div className="mb-6">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-light text-white">
                          <span className="text-chromatic">Lifetime</span>
                        </h3>
                        <span className="px-2 py-1 text-xs rounded-full bg-white/10 border border-white/20 text-white/80">Populaire</span>
                      </div>
                      <p className="text-white/70">Paiement unique — Tout Insider + accès anticipé + extras offline</p>
                    </div>
                    
                    <div className="flex-1 space-y-4 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        <span className="text-white/80">Tout d'Insider inclus</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        <span className="text-white/80">Accès à vie garanti</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        <span className="text-white/80">Accès anticipé nouveautés</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        <span className="text-white/80">Bundles exclusifs offline</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-white/60" />
                        <span className="text-white/80">Tarif figé pour toujours</span>
                      </div>
                    </div>
                    
                    <MagneticButton href="#checkout" variant="primary" className="w-full justify-center">
                      Choisir Lifetime
                    </MagneticButton>
                  </div>
                </div>
              </ScrollTransform3D>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Checkout section */}
      <section id="checkout" className="relative py-32">
        <ParallaxScroll speed={-0.1} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_70%)]" />
        </ParallaxScroll>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal delay={200}>
            <div className="space-y-8">
              <h3 className="text-4xl lg:text-5xl font-light text-white leading-tight">
                Prêt à <span className="text-chromatic-subtle">rejoindre</span> ?
              </h3>
              <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8">
                <h4 className="text-xl font-light text-white/90 mb-4">Checkout (intégration en cours)</h4>
                <p className="text-white/65 leading-relaxed mb-6">
                  Intégration paiement sécurisée à venir. Après validation : accès immédiat au Vault, 
                  rôle Discord premium (sync automatique en 1 clic), et téléchargement des workflows.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton href="/contact#discord" variant="secondary" className="px-8">
                    Rejoindre Discord
                  </MagneticButton>
                  <MagneticButton href="/demos" variant="primary" className="px-8">
                    Voir les démos
                  </MagneticButton>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}