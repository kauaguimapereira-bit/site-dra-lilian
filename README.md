# Dra. Lilian Guimarães da Silveira — Site Institucional

Site premium para clínica de estética facial e corporal, construído com
Next.js 15 (App Router), React, TypeScript, Tailwind CSS e Framer Motion.

## Como rodar localmente

```bash
npm install
npm run dev
```

Acesse http://localhost:3000

## Build de produção

```bash
npm run build
npm run start
```

## Estrutura

```
src/
  app/
    layout.tsx      → metadata, SEO, fontes, JSON-LD
    page.tsx         → composição das seções
    globals.css       → estilos globais e elemento de assinatura (arco)
    robots.ts / sitemap.ts
  components/         → Navbar, Hero, About, Procedures, BeforeAfter,
                        Testimonials, Differentials, FAQ, CtaSection,
                        Footer, WhatsAppButton, BackToTop, Reveal, Counter
  lib/
    constants.ts      → dados do site (contatos, procedimentos, depoimentos, FAQ)
public/
  images/
    lilian-hero.jpeg  → foto da profissional (Hero e Sobre)
```

## Paleta de design

| Token       | Cor       |
|-------------|-----------|
| Ivory       | `#FEFDFB` |
| Nude        | `#F1E4D8` |
| Blush       | `#F3D9D4` |
| Rose        | `#B76E79` |
| Gold        | `#C6A664` |
| Ink (texto) | `#3A3532` |

Tipografia: **Playfair Display** (títulos) + **Poppins** (corpo de texto).

Elemento de assinatura: molduras em arco (`.arch-frame`), inspiradas nos
quadros do próprio consultório da Dra. Lilian, usadas no Hero e em Sobre.
