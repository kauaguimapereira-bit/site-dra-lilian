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

## Antes de publicar

1. **Fotos de antes/depois**: a seção `Resultados` usa placeholders elegantes.
   Substitua os blocos em `src/components/BeforeAfter.tsx` por imagens reais
   (com autorização das pacientes) usando `next/image`.
2. **Domínio**: atualize a constante `siteUrl` em `src/app/layout.tsx` e os
   arquivos `robots.ts` / `sitemap.ts` com o domínio definitivo.
3. **Mapa**: o iframe do rodapé usa uma busca genérica por "Joinville, SC".
   Troque pelo endereço exato do consultório para exibir o pino correto.
4. **WhatsApp/Instagram**: já configurados em `src/lib/constants.ts`.
5. **Favicon/OG image**: adicione `favicon.ico` em `src/app/` e opcionalmente
   uma imagem 1200x630 dedicada para Open Graph.

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
