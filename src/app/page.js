import Image from "next/image";
import ParallaxScroll, { ScrollReveal, ScrollTransform3D } from "@/components/ParallaxScroll";
import { MagneticButton } from "@/components/FX";

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section - Fullscreen avec parallax */}
      <section className="min-h-screen relative overflow-hidden flex items-center">
        {/* Background parallax layers */}
        <ParallaxScroll speed={-0.5} className="absolute inset-0 -z-20">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/40 via-black to-zinc-800/30" />
        </ParallaxScroll>
        
        <ParallaxScroll speed={-0.3} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_30%,rgba(255,255,255,0.08),transparent_60%),radial-gradient(ellipse_at_70%_70%,rgba(200,200,200,0.06),transparent_60%)]" />
        </ParallaxScroll>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <ScrollReveal delay={200}>
                <h1 className="text-5xl lg:text-7xl font-light tracking-tight text-white leading-[0.9]">
                  <span className="block">Créez</span>
                  <span className="block text-chromatic">l'irréel</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <p className="text-xl text-white/60 leading-relaxed max-w-lg">
                  Face Detailer révolutionne la qualité d'image IA. 
                  Du pixel au pore, sans effet plastique.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={600}>
                <div className="flex flex-col sm:flex-row gap-6">
                  <MagneticButton href="/demos" variant="primary" className="text-base px-8 h-14">
                    Voir les démos
                  </MagneticButton>
                  <MagneticButton href="/access" variant="secondary" className="text-base px-8 h-14">
                    Accéder maintenant
                  </MagneticButton>
                </div>
              </ScrollReveal>
            </div>

            {/* Right visual */}
            <div className="relative">
              <ScrollTransform3D rotationIntensity={8} scaleRange={[0.9, 1.1]}>
                <div className="relative aspect-square max-w-lg mx-auto">
                  <div className="absolute inset-0 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm" />
                  <div className="absolute inset-8 rounded-2xl bg-gradient-to-br from-white/10 via-zinc-500/10 to-zinc-600/10 flex items-center justify-center">
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-white/10 flex items-center justify-center">
                        <Image src="/globe.svg" width={32} height={32} alt="Demo" className="opacity-60" />
                      </div>
                      <p className="text-white/40 text-sm">Face Detailer Preview</p>
                    </div>
                  </div>
                </div>
              </ScrollTransform3D>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/40 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Models Gallery Section - Long scroll with parallax */}
      <section className="relative py-32 overflow-hidden">
        <ParallaxScroll speed={0.2} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-800/5 to-transparent" />
        </ParallaxScroll>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal delay={100}>
            <div className="text-center mb-20">
              <h2 className="text-4xl lg:text-6xl font-light text-white mb-6">
                Qualité <span className="text-chromatic-slow">ultra-réaliste</span>
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto">
                Découvrez nos modèles d'IA dernière génération avec des détails microscopiques
              </p>
            </div>
          </ScrollReveal>

          {/* Gallery grid with staggered reveals */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }, (_, i) => (
              <ScrollReveal key={i} delay={200 + i * 100}>
                <ScrollTransform3D rotationIntensity={5} scaleRange={[0.95, 1.05]}>
                  <div className="group relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-500/8 via-transparent to-zinc-600/8" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center space-y-3">
                        <div className="w-12 h-12 mx-auto rounded-xl bg-white/10 flex items-center justify-center">
                          <Image src="/globe.svg" width={24} height={24} alt="Model" className="opacity-60" />
                        </div>
                        <p className="text-white/40 text-sm">Model {i + 1}</p>
                        <p className="text-white/60 text-xs px-4">Ultra-high definition Face Detailer</p>
                      </div>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <MagneticButton href="/demos" variant="primary" className="w-full justify-center">
                        Voir détails
                      </MagneticButton>
                    </div>
                  </div>
                </ScrollTransform3D>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="relative py-32">
        <ParallaxScroll speed={-0.1} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_70%)]" />
        </ParallaxScroll>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal delay={200}>
              <div className="space-y-8">
                <h3 className="text-4xl lg:text-5xl font-light text-white leading-tight">
                  Own the <span className="text-chromatic-subtle">tech</span>
                </h3>
                <p className="text-lg text-white/60 leading-relaxed">
                  Téléchargez nos workflows ComfyUI, modèles optimisés et kits. 
                  Exécutez en local ou sur GPU 5090 à coût imbattable.
                </p>
                <div className="flex gap-6">
                  <MagneticButton href="/labs" variant="secondary">
                    Voir les coulisses
                  </MagneticButton>
                  <MagneticButton href="/demos" variant="primary">
                    Voir les Démos
                  </MagneticButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={400}>
              <div className="grid grid-cols-2 gap-6">
                {[
                  "Workflows ComfyUI",
                  "Modèles optimisés", 
                  "Playbooks opérationnels",
                  "Kits exclusifs"
                ].map((item, i) => (
                  <ScrollTransform3D key={i} rotationIntensity={3}>
                    <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm">
                      <p className="text-white/80 text-sm font-medium">{item}</p>
                    </div>
                  </ScrollTransform3D>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative py-32">
        <ParallaxScroll speed={0.1} className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-t from-black via-zinc-800/10 to-transparent" />
        </ParallaxScroll>

        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal delay={200}>
            <h4 className="text-3xl lg:text-5xl font-light text-white mb-8">
              Prêt à créer l'<span className="text-chromatic">irréel</span> ?
            </h4>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <MagneticButton href="/demos" variant="secondary" className="text-lg px-10 h-16">
                Voir toutes les démos
              </MagneticButton>
              <MagneticButton href="/access" variant="primary" className="text-lg px-10 h-16">
                Accéder maintenant
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
