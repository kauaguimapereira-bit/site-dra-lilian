"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, SITE, whatsappLink } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass shadow-soft py-3"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
        <a href="#top" className="flex flex-col leading-none group">
          <span className="font-display text-xl md:text-2xl tracking-wide text-ink">
            Lilian Guimarães
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-gold-dark mt-1">
            Farmacêutica Esteta
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-ink-soft hover:text-rose transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href={whatsappLink("Olá! Gostaria de agendar uma avaliação.")}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 rounded-full bg-ink text-ivory px-6 py-2.5 text-sm tracking-wide hover:bg-rose-deep transition-colors duration-300 shadow-soft"
        >
          <MessageCircle size={16} strokeWidth={1.75} />
          Agendar
        </a>

        <button
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-ink"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden glass"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-ink-soft hover:text-rose transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={whatsappLink("Olá! Gostaria de agendar uma avaliação.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink text-ivory px-6 py-3 text-sm tracking-wide mt-2"
              >
                <MessageCircle size={16} />
                Agendar pelo WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
