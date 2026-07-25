"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Expand, X, ChevronLeft, ChevronRight } from "lucide-react";
import { BEFORE_AFTER_CASES } from "@/lib/constants";
import Reveal from "./Reveal";

export default function BeforeAfter() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openCase = (index: number) => setActiveIndex(index);
  const closeCase = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((i) =>
      i === null ? null : (i - 1 + BEFORE_AFTER_CASES.length) % BEFORE_AFTER_CASES.length
    );
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % BEFORE_AFTER_CASES.length));

  const activeCase = activeIndex !== null ? BEFORE_AFTER_CASES[activeIndex] : null;

  return (
    <section id="resultados" className="relative py-24 lg:py-32 bg-ivory">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-gold-dark mb-4">
            Resultados
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.6rem] text-ink text-balance">
            Antes &amp; Depois
          </h2>
          <p className="mt-5 text-ink-soft leading-relaxed">
            Resultados reais de pacientes, com autorização de uso de imagem.
            Clique em um card para ampliar.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BEFORE_AFTER_CASES.map((item, index) => (
            <Reveal key={item.slug} delay={(index % 3) * 0.08}>
              <button
                onClick={() => openCase(index)}
                aria-label={`Ampliar resultado: ${item.label}`}
                className="group relative w-full overflow-hidden rounded-soft shadow-soft text-left"
              >
                <div className="grid grid-cols-2">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={item.before}
                      alt={`${item.label} - antes`}
                      fill
                      sizes="(max-width: 640px) 50vw, 20vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-white/85 backdrop-blur-sm px-3 py-1 text-[10px] tracking-widest uppercase text-ink">
                      Antes
                    </span>
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={item.after}
                      alt={`${item.label} - depois`}
                      fill
                      sizes="(max-width: 640px) 50vw, 20vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-ink/85 px-3 py-1 text-[10px] tracking-widest uppercase text-ivory">
                      Depois
                    </span>
                  </div>
                </div>

                <div className="absolute inset-0 flex items-center justify-center bg-ink/0 group-hover:bg-ink/20 transition-colors duration-500">
                  <span className="rounded-full bg-white/90 backdrop-blur-sm p-3 opacity-0 group-hover:opacity-100 scale-90 group-hover:scale-100 transition-all duration-400 shadow-soft">
                    <Expand size={18} className="text-rose" strokeWidth={1.75} />
                  </span>
                </div>

                <div className="bg-white px-5 py-4">
                  <p className="font-display text-lg text-ink">{item.label}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-ink-faint">
          * Fotos reais de pacientes da Dra. Lilian, publicadas com
          autorização.
        </p>
      </div>

      <AnimatePresence>
        {activeCase && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/90 backdrop-blur-sm px-4 py-10"
            onClick={closeCase}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-3xl"
            >
              <button
                onClick={closeCase}
                aria-label="Fechar"
                className="absolute -top-12 right-0 text-ivory/80 hover:text-ivory transition-colors"
              >
                <X size={26} />
              </button>

              <div className="grid grid-cols-2 rounded-soft overflow-hidden shadow-soft">
                <div className="relative aspect-[3/4] bg-ink">
                  <Image
                    src={activeCase.before}
                    alt={`${activeCase.label} - antes`}
                    fill
                    sizes="(max-width: 768px) 50vw, 480px"
                    className="object-cover"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/85 backdrop-blur-sm px-3 py-1 text-xs tracking-widest uppercase text-ink">
                    Antes
                  </span>
                </div>
                <div className="relative aspect-[3/4] bg-ink">
                  <Image
                    src={activeCase.after}
                    alt={`${activeCase.label} - depois`}
                    fill
                    sizes="(max-width: 768px) 50vw, 480px"
                    className="object-cover"
                  />
                  <span className="absolute right-4 top-4 rounded-full bg-ink/85 px-3 py-1 text-xs tracking-widest uppercase text-ivory">
                    Depois
                  </span>
                </div>
              </div>

              <p className="mt-5 text-center font-display text-xl text-ivory">
                {activeCase.label}
              </p>

              <div className="mt-4 flex items-center justify-center gap-4">
                <button
                  onClick={showPrev}
                  aria-label="Resultado anterior"
                  className="rounded-full bg-white/10 hover:bg-white/20 text-ivory p-2.5 transition-colors"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-xs tracking-widest uppercase text-ivory/50">
                  {activeIndex !== null ? activeIndex + 1 : 0} / {BEFORE_AFTER_CASES.length}
                </span>
                <button
                  onClick={showNext}
                  aria-label="Próximo resultado"
                  className="rounded-full bg-white/10 hover:bg-white/20 text-ivory p-2.5 transition-colors"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
