import { Instagram, MessageCircle, MapPin, ShieldCheck } from "lucide-react";
import { SITE, whatsappLink } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-ink text-ivory/80">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        <div>
          <p className="font-display text-2xl text-ivory">{SITE.name}</p>
          <p className="text-xs tracking-[0.25em] uppercase text-gold-light mt-2">
            {SITE.role}
          </p>
          <p className="mt-6 text-sm leading-relaxed text-ivory/60 max-w-xs">
            Estética facial e corporal com ciência, precisão e elegância.
            Resultados naturais que respeitam a sua identidade.
          </p>
          <div className="mt-6 flex items-center gap-2 text-xs text-ivory/50">
            <ShieldCheck size={14} className="text-gold-light" />
            {SITE.crf} · {SITE.city}
          </div>
        </div>

        <div>
          <p className="text-sm tracking-[0.2em] uppercase text-ivory/50 mb-5">
            Contato
          </p>
          <div className="flex flex-col gap-4 text-sm">
            <a
              href={whatsappLink("Olá! Gostaria de agendar uma avaliação.")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-gold-light transition-colors"
            >
              <MessageCircle size={17} />
              {SITE.whatsappDisplay}
            </a>
            <a
              href="https://www.instagram.com/dralilianguimaraesestetica"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 hover:text-gold-light transition-colors"
            >
              <Instagram size={17} />
              {SITE.instagramHandle}
            </a>
            <div className="flex items-center gap-3 text-ivory/60">
              <MapPin size={17} />
              Joinville - Santa Catarina, Brasil
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm tracking-[0.2em] uppercase text-ivory/50 mb-5">
            Localização
          </p>
          <div className="overflow-hidden rounded-2xl border border-ivory/10 shadow-soft">
            <iframe
              title="Mapa - Joinville, SC"
              src="https://www.google.com/maps?q=Joinville,SC&output=embed"
              width="100%"
              height="180"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-90"
            />
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ivory/40">
          <p>
            © {new Date().getFullYear()} {SITE.name} — {SITE.crf}. Todos os
            direitos reservados.
          </p>
          <p>Joinville, Santa Catarina</p>
        </div>
      </div>
    </footer>
  );
}
