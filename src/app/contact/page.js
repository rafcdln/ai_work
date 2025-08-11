"use client";
import ParallaxScroll, { ScrollReveal, ScrollTransform3D } from "@/components/ParallaxScroll";
import { MagneticButton } from "@/components/FX";

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden flex items-center">
        <ParallaxScroll speed={-0.4} className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/40 via-black to-zinc-800/30" />
        </ParallaxScroll>
        <ParallaxScroll speed={-0.15} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(ellipse_at_70%_70%,rgba(200,200,200,0.06),transparent_60%)]" />
        </ParallaxScroll>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center space-y-6">
            <ScrollReveal delay={150}>
              <h1 className="text-5xl lg:text-6xl font-light tracking-tight text-white">
                <span className="text-chromatic">Contact</span> — on écoute
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={300}>
              <p className="text-lg text-white/65 max-w-3xl mx-auto">
                Questions ? Support ? Collaboration ? Discord pour la communauté, email pour le business.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Contact options */}
      <section className="relative py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <ScrollTransform3D rotationIntensity={5}>
                <div id="discord" className="group relative">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/6 to-white/2 backdrop-blur-sm border border-white/10" />
                  <div className="relative p-8">
                    <h2 className="text-3xl font-light text-white mb-4">
                      <span className="text-chromatic-subtle">Discord</span>
                    </h2>
                    <p className="text-white/70 leading-relaxed mb-6">
                      Communauté active, support technique instantané, discussions workflows et partage de résultats.
                    </p>
                    <MagneticButton href="https://discord.gg/yourserver" variant="primary" className="w-full justify-center">
                      Rejoindre Discord
                    </MagneticButton>
                  </div>
                </div>
              </ScrollTransform3D>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <ScrollTransform3D rotationIntensity={5}>
                <div className="group relative">
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/4 to-white/1 backdrop-blur-sm border border-white/10" />
                  <div className="relative p-8">
                    <h2 className="text-3xl font-light text-white mb-4">Email Pro</h2>
                    <p className="text-white/70 leading-relaxed mb-6">
                      Partenariats, collaborations, projets custom et demandes entreprise.
                    </p>
                    <MagneticButton href="mailto:contact@example.com" variant="secondary" className="w-full justify-center">
                      Nous écrire
                    </MagneticButton>
                  </div>
                </div>
              </ScrollTransform3D>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24">
        <ParallaxScroll speed={0.1} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-800/5 to-transparent" />
        </ParallaxScroll>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={100}>
            <div className="text-center mb-16">
              <h3 className="text-4xl lg:text-5xl font-light text-white mb-6">
                FAQ <span className="text-chromatic">Express</span>
              </h3>
            </div>
          </ScrollReveal>

          <div className="space-y-8">
            {[
              { q: "Remboursement ?", a: "Pas de remboursement, mais essai gratuit via Discord avant achat." },
              { q: "Compatible Mac ?", a: "ComfyUI + workflows = cross-platform. Instructions dédiées Mac incluses." },
              { q: "Support technique ?", a: "Discord pour questions rapides, email pour problèmes complexes." },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={150 + i * 100}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-6">
                  <h4 className="text-lg font-light text-white/90 mb-2">{item.q}</h4>
                  <p className="text-white/65 leading-relaxed">{item.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal delay={200}>
            <h4 className="text-3xl lg:text-4xl font-light text-white mb-6">
              Prêt à <span className="text-chromatic-subtle">commencer</span> ?
            </h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton href="/access" variant="primary" className="px-8">
                Voir les plans
              </MagneticButton>
              <MagneticButton href="/demos" variant="secondary" className="px-8">
                Voir les démos
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}