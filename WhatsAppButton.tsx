"use client";

import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="relative py-24 lg:py-32 bg-mist">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-gold-dark mb-4">
            Depoimentos
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.6rem] text-ink text-balance">
            Histórias de quem confiou
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, index) => (
            <Reveal key={t.name} delay={(index % 3) * 0.08}>
              <div className="h-full flex flex-col rounded-soft bg-white p-7 shadow-soft hover:shadow-card transition-shadow duration-300 relative">
                <Quote
                  size={30}
                  className="text-blush-dark absolute top-6 right-6"
                  strokeWidth={1.2}
                />
                <div className="flex gap-1 text-gold mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={15} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <p className="text-sm text-ink-soft leading-relaxed flex-1">
                  &ldquo;{t.comment}&rdquo;
                </p>
                <p className="mt-6 font-display text-lg text-ink">{t.name}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
