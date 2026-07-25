"use client";

import { ComponentType } from "react";
import {
  UserCheck,
  ShieldCheck,
  Sofa,
  Lock,
  Cpu,
  Leaf,
} from "lucide-react";
import { DIFFERENTIALS } from "@/lib/constants";
import Reveal from "./Reveal";

const ICONS: Record<string, ComponentType<{ size?: number; strokeWidth?: number; className?: string }>> = {
  UserCheck,
  ShieldCheck,
  Sofa,
  Lock,
  Cpu,
  Leaf,
};

export default function Differentials() {
  return (
    <section id="diferenciais" className="relative py-24 lg:py-32 bg-petal-gradient overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl mx-auto text-center">
          <p className="text-xs md:text-sm tracking-[0.25em] uppercase text-gold-dark mb-4">
            Diferenciais
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-[2.6rem] text-ink text-balance">
            Por que escolher esse cuidado
          </h2>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIALS.map((item, index) => {
            const Icon = ICONS[item.icon] ?? ShieldCheck;
            return (
              <Reveal key={item.title} delay={(index % 3) * 0.08}>
                <div className="h-full rounded-soft glass p-7 border border-white/60 hover:-translate-y-1.5 transition-transform duration-300">
                  <div className="inline-flex rounded-full bg-white p-3 shadow-soft">
                    <Icon size={20} className="text-rose" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display text-lg text-ink mt-5">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
