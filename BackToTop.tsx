"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

type CounterProps = {
  value: number;
  suffix?: string;
  label: string;
};

export default function Counter({ value, suffix = "", label }: CounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const duration = 1600;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <p className="font-display text-4xl md:text-5xl font-semibold text-rose">
        {display}
        {suffix}
      </p>
      <p className="mt-2 text-xs md:text-sm tracking-[0.15em] uppercase text-ink-soft">
        {label}
      </p>
    </motion.div>
  );
}
