"use client";

import Image from "next/image";
import { GraduationCap, HeartHandshake, Sparkle, Fingerprint } from "lucide-react";
import Reveal from "./Reveal";
import Counter from "./Counter";

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: "Farmacêutica Esteta",
    text: "Formação técnica sólida em farmacologia aplicada à estética.",
  },
  {
    icon: Fingerprint,
    title: "CRF 8224",
    text: "Registro profissional ativo, atuação ética e responsável.",
  },
  {
    icon: HeartHandshake,
    title: "Atendimento humanizado",
    text: "Escuta ativa e acolhimento em cada etapa do cuidado.",
  },
  {
    icon: Sparkle,
    title: "Naturalidade sempre",
    text: "Procedimentos pensados para realçar, nunca transformar.",
  },
];

export default function About() {
  return (
    <section id="sobre" className="relative py-24 lg:py-32 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="relative flex justify-center lg:justify-start">
            <div className="arch-frame relative w-[300px] sm:w-[400px] lg:w-[440px] aspect-square shadow-soft">
              <Image
                src="/images/lilian-hero.jpeg"
                alt="Dra. Lilian Guimarães da Silveira sorrindo em seu consultório de estética"
                fill
                sizes="(max-width: 640px) 300px, (max-width: 1024px) 400px, 440px"
                className="object-cover object-top"
              />
            </div>
            <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full max-w-[300px] sm:max-w-[400px] lg:max-w-[440px] rounded-arch bg-blush/50" />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-gold-dark mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-gold-dark" />
              Sobre a profissional
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-3xl md:text-4xl lg:text-[2.6rem] leading-tight text-ink text-balance">
              Cuidado técnico e sensível para cada história de beleza.
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 text-ink-soft leading-relaxed">
              Sou Lilian Guimarães da Silveira, Farmacêutica Esteta (CRF
              8224), atuando em Joinville - SC. Ao longo da minha trajetória,
              construí minha prática em torno de um princípio simples: a
              beleza mais bonita é aquela que parece sua, só que na melhor
              versão possível.
            </p>
            <p className="mt-4 text-ink-soft leading-relaxed">
              Cada atendimento começa com uma avaliação cuidadosa da sua
              anatomia, do seu histórico e dos seus objetivos. A partir daí,
              desenho um plano de tratamento personalizado, combinando
              técnicas modernas de harmonização facial e corporal com
              segurança farmacológica e um olhar estético refinado.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 grid sm:grid-cols-2 gap-5">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3 rounded-2xl bg-mist/70 p-4 hover:bg-blush-light transition-colors duration-300"
                >
                  <div className="shrink-0 rounded-full bg-white p-2.5 shadow-soft">
                    <item.icon size={18} className="text-rose" strokeWidth={1.6} />
                  </div>
                  <div>
                    <p className="font-medium text-ink text-sm">{item.title}</p>
                    <p className="text-xs text-ink-faint mt-0.5 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-12 grid grid-cols-3 gap-4 border-t border-nude-dark/60 pt-8">
              <Counter value={100} suffix="%" label="Foco em naturalidade" />
              <Counter value={8224} label="Registro CRF" />
              <Counter value={5} suffix="★" label="Avaliação média" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
