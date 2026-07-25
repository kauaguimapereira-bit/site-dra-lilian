"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle, ShieldCheck } from "lucide-react";
import { whatsappLink } from "@/lib/constants";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -40]);

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-petal-gradient pt-36 pb-20 lg:pt-44 lg:min-h-screen flex items-center"
    >
      {/* Ambient floral blobs */}
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blush/40 blur-3xl animate-float" />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-96 w-96 rounded-full bg-gold-light/30 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <div className="relative mx-auto max-w-7xl w-full px-6 lg:px-10 grid lg:grid-cols-2 gap-14 lg:gap-10 items-center">
        <motion.div style={{ y: textY }} className="order-2 lg:order-1">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 text-xs md:text-sm tracking-[0.25em] uppercase text-gold-dark mb-6"
          >
            <span className="h-px w-8 bg-gold-dark" />
            Farmacêutica Esteta · Joinville, SC
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.15] text-ink text-balance"
          >
            Realçando sua beleza natural com{" "}
            <span className="italic text-rose">ciência</span>, precisão e{" "}
            <span className="italic text-rose">elegância</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-6 text-base md:text-lg text-ink-soft max-w-xl leading-relaxed"
          >
            Farmacêutica Esteta especializada em harmonização facial e
            corporal, unindo técnicas modernas e olhar humanizado para
            resultados naturais que respeitam a sua identidade.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-col sm:flex-row gap-4"
          >
            <a
              href={whatsappLink("Olá! Gostaria de agendar uma avaliação.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-ink text-ivory px-8 py-4 text-sm tracking-wide hover:bg-rose-deep transition-all duration-300 shadow-soft hover:shadow-gold hover:-translate-y-0.5"
            >
              <MessageCircle size={18} />
              Agendar pelo WhatsApp
            </a>
            <a
              href="#procedimentos"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-ink/20 px-8 py-4 text-sm tracking-wide text-ink hover:border-gold hover:text-rose transition-all duration-300"
            >
              Conheça os procedimentos
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex items-center gap-3 text-xs tracking-wide text-ink-faint"
          >
            <ShieldCheck size={16} className="text-gold-dark" />
            CRF 8224 · Atendimento seguro e individualizado
          </motion.div>
        </motion.div>

        <motion.div
          style={{ y: imageY }}
          className="order-1 lg:order-2 relative flex justify-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="arch-frame w-[280px] sm:w-[340px] lg:w-[400px] aspect-[3/4] shadow-soft"
          >
            <Image
              src="/images/lilian-hero.jpeg"
              alt="Dra. Lilian Guimarães da Silveira, Farmacêutica Esteta em seu consultório em Joinville"
              fill
              priority
              sizes="(max-width: 1024px) 340px, 400px"
              className="object-cover object-top"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:translate-x-4 glass rounded-2xl px-6 py-4 shadow-soft border border-white/60 min-w-[220px]"
          >
            <p className="font-display text-lg text-ink italic">
              &ldquo;Beleza que respeita você&rdquo;
            </p>
            <p className="mt-1 text-[11px] tracking-[0.2em] uppercase text-gold-dark">
              CRF 8224 · Joinville
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
