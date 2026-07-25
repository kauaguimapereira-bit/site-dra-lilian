"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/constants";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={whatsappLink("Olá! Gostaria de agendar uma avaliação.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-[#25D366] text-white pl-4 pr-5 py-3.5 shadow-soft"
    >
      <MessageCircle size={22} fill="white" className="text-[#25D366]" />
      <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
    </motion.a>
  );
}
