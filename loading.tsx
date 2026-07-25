"use client";

import { useState, ComponentType } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Heart,
  Sprout,
  Wand2,
  Droplets,
  Droplet,
  ScanLine,
  PersonStanding,
  Flower2,
  Plus,
  Minus,
  MessageCircle,
} from "lucide-react";
import { PROCEDURES } from "@/lib/constants";
import { whatsappLink } from "@/lib/constants";
import Reveal from "./Reveal";

const ICONS: Record<string, ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  Sparkles,
  Heart,
  Sprout,
  Wand2,
  Droplets,
  Droplet,
  ScanLine,
  PersonStanding,
  Flower2,
};

export default function Procedures() {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  return (
    <section id="procedimentos" className="relative py-24 lg:py-32 bg-mist">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-gold-dark mb-4">
            Procedimentos
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.6rem] text-ink text-balance">
            Protocolos pensados para o seu objetivo
          </h2>
          <p className="mt-5 text-ink-soft leading-relaxed">
            Técnicas modernas de estética facial e corporal em Joinville,
            aplicadas com precisão farmacológica para resultados naturais e
            duradouros.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROCEDURES.map((proc, index) => {
            const Icon = ICONS[proc.icon] ?? Sparkles;
            const isOpen = openSlug === proc.slug;
            return (
              <Reveal key={proc.slug} delay={(index % 3) * 0.08}>
                <motion.div
                  layout
                  className="group h-full rounded-soft bg-white p-7 shadow-soft border border-transparent hover:border-gold/40 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="rounded-full bg-blush-light p-3.5 group-hover:bg-gold-light/60 transition-colors duration-300">
                      <Icon size={22} className="text-rose" strokeWidth={1.5} />
                    </div>
                    <span className="font-display text-2xl text-nude-dark">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h3 className="font-display text-xl text-ink mt-6">
                    {proc.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                    {proc.short}
                  </p>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="mt-4 text-sm text-ink-faint leading-relaxed border-t border-nude-dark/50 pt-4">
                          {proc.details}
                        </p>
                        <a
                          href={whatsappLink(
                            `Olá! Tenho interesse em saber mais sobre ${proc.title}.`
                          )}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 text-xs tracking-wide text-rose hover:text-rose-deep"
                        >
                          <MessageCircle size={14} />
                          Perguntar no WhatsApp
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <button
                    onClick={() => setOpenSlug(isOpen ? null : proc.slug)}
                    className="mt-6 inline-flex items-center gap-2 text-sm tracking-wide text-ink hover:text-rose transition-colors"
                  >
                    {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                    {isOpen ? "Ver menos" : "Saiba mais"}
                  </button>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
