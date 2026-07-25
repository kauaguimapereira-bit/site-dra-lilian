"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/constants";
import Reveal from "./Reveal";

export default function CtaSection() {
  return (
    <section id="contato" className="relative py-24 lg:py-32 bg-ink overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-rose/20 blur-3xl" />
        <div className="absolute bottom-0 right-10 h-80 w-80 rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10 text-center">
        <Reveal>
          <p className="text-xs md:text-sm tracking-[0.3em] uppercase text-gold-light mb-6">
            Agende sua avaliação
          </p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-3xl md:text-5xl leading-tight text-ivory text-balance">
            Sua melhor versão começa com uma conversa.
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="mt-6 text-ivory/70 leading-relaxed max-w-xl mx-auto">
            Marque sua avaliação individual e descubra, com segurança e
            transparência, o plano de tratamento ideal para o seu objetivo.
          </p>
        </Reveal>
        <Reveal delay={0.3}>
          <a
            href={whatsappLink("Olá! Gostaria de agendar minha avaliação.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-ivory text-ink px-10 py-5 text-base tracking-wide hover:bg-gold-light transition-all duration-300 shadow-gold hover:-translate-y-1"
          >
            <MessageCircle size={20} />
            Falar no WhatsApp agora
          </a>
        </Reveal>
      </div>
    </section>
  );
}
