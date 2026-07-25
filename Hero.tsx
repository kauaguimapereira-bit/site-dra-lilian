"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/constants";
import Reveal from "./Reveal";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-ivory">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal className="text-center">
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-gold-dark mb-4">
            Perguntas Frequentes
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.6rem] text-ink text-balance">
            Tire suas dúvidas
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-nude-dark/50">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question} delay={index * 0.05}>
                <div className="py-2">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg text-ink">
                      {item.question}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 rounded-full bg-blush-light p-1.5"
                    >
                      <ChevronDown size={16} className="text-rose" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="pb-6 text-sm text-ink-soft leading-relaxed">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
