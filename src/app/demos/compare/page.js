"use client";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import { MagneticButton } from "@/components/FX";

export default function ComparePage() {
  return (
    <div className="font-sans min-h-screen py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-white/95">Comparatif public — <span className="text-chromatic-subtle">Face Detailer vs services tiers</span></h1>
          <p className="mt-3 text-white/70">Plus de micro‑texture utile. Moins d’artefacts. Transparence totale sur les conditions de test.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
            <h2 className="text-sm font-semibold text-white/80 mb-3">Notre pipeline — Face Detailer vX</h2>
            <BeforeAfterSlider beforeSrc="/window.svg" afterSrc="/globe.svg" altBefore="Entrée" altAfter="Sortie — Notre pipeline" height={320} />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
            <h2 className="text-sm font-semibold text-white/80 mb-3">Service tiers — Enhancor.ai</h2>
            <BeforeAfterSlider beforeSrc="/window.svg" afterSrc="/file.svg" altBefore="Entrée" altAfter="Sortie — Service tiers" height={320} />
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
            <h2 className="text-sm font-semibold text-white/80 mb-3">Générique — Upscaler commun</h2>
            <BeforeAfterSlider beforeSrc="/window.svg" afterSrc="/next.svg" altBefore="Entrée" altAfter="Sortie — Upscaler" height={320} />
          </div>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm text-white/70">
            <h3 className="text-white/90 font-medium mb-2">Conditions de test</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Sources identiques, mêmes résolutions d’entrée et d’export.</li>
              <li>Encodage et compression identiques.</li>
              <li>Paramètres documentés et reproductibles.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-sm text-white/70">
            <h3 className="text-white/90 font-medium mb-2">Débloquer le workflow exact</h3>
            <p>Accédez au pipeline complet, modèles et presets.</p>
            <div className="mt-3 flex items-center gap-3">
              <MagneticButton href="/access" variant="primary">Déverrouiller</MagneticButton>
              <MagneticButton href="/contact#discord" variant="secondary">Discord (comparatifs HQ)</MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}