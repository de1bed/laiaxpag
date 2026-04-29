# LAIAX — Master One-Shot Prompt (M · Mount + E · Entrega)

> Pegar este prompt completo en Claude / Claude Code / Cursor / Lovable
> **junto con** `01-LAIAX-SKILL.md`, `02-LAIAX-BRIEF.md`, `03-LAIAX-PAGE-STRUCTURE.md`,
> y `04-LAIAX-ASSET-PROMPTS.md` adjuntos.
>
> Diseñado para ensamblar la página en **una sola corrida** sin gastar tokens iterando.

---

## Master One-Shot

```
You are senior brand & web designer working for LAIAX. Read the four attached files
in this order before generating anything:

1) 01-LAIAX-SKILL.md  (system rules, locked palette and typography)
2) 02-LAIAX-BRIEF.md  (objective, audience, KPIs)
3) 03-LAIAX-PAGE-STRUCTURE.md (sections, copy, motion notes)
4) 04-LAIAX-ASSET-PROMPTS.md (assets that already exist in /public/assets)

GOAL
Build a single-page premium institutional landing for LAIAX following the
F.R.A.M.E. method (we are at M · Mount). Output must be production-ready.

STACK (locked)
- React 18 + TypeScript + Vite
- Tailwind CSS v3
- framer-motion
- lucide-react
- @studio-freight/lenis (smooth scroll)
- No CSS-in-JS, no styled-components, no MUI

DESIGN SYSTEM (locked - DO NOT INVENT)
- Background: #0A0A0B (default), #131316 (layer 2), #F5F4F0 (cream sections)
- Accent green ONLY: #00D27A. Use it as a thin line / single dot / hover state. Never as a background fill.
- Typography:
  - Display: 'Saira', weight 300, tracking -0.02em on big headlines
  - Body: 'Inter Tight', 400/500
  - Mono labels: 'JetBrains Mono', 11px, tracking 0.18em, uppercase
  - Editorial accent (rare, max 1 per page): 'Instrument Serif' italic
- Liquid glass component (use everywhere a chip / pill / card-overlay is needed):
  background rgba(255,255,255,0.01), backdrop-blur 4px, inset border via 1.4px gradient mask.
- Motion: easing cubic-bezier(.2,.8,.2,1). Reveal y:44 → 0 with opacity 0 → 1, 0.95s.
- Respect prefers-reduced-motion.

STRUCTURE TO BUILD (in this exact order)
0. <Nav /> sticky liquid-glass pill
1. <Hero /> full-bleed video background using /assets/hero-loop.mp4 + .webm + poster
2. <Thesis /> with 3-cell grid
3. <TwoBrands /> 50/50 split LAIAX (ink) vs MADE (paper)
4. <Made /> stats grid (17 / 17 / 01 / ∞)
5. <Cities /> two-column itinerary list
6. <Manifesto /> 5 numbered statements
7. <Initiatives /> 3 cards (MADE live, LABS 2026, FELLOWSHIP 2027)
8. <Quote /> cinematic with /assets/quote-loop.mp4 background
9. <CTA /> dark/cream split apply block
10. <Footer />

EACH SECTION MUST
- Use copy from 03-LAIAX-PAGE-STRUCTURE.md verbatim (ES). Do NOT rewrite.
- Use ONLY palette tokens above. No greys outside the system.
- Use Saira 300 for display headings, never weight 200.
- Use lucide-react icons sparingly (max 1 per nav / card).
- Provide a sibling i18n English copy via a small dict (mirror what's in 03).
- Animate on scroll with framer-motion useInView and the motion notes in 03.

ASSETS (already produced - just reference them)
- /assets/hero-loop.mp4, .webm, hero-poster.webp
- /assets/quote-loop.mp4, .webm, quote-poster.webp
- /assets/made-loop.mp4 (optional)
- /assets/visual-01..05-*.webp (carousel)
- /assets/brand-mark.webp (optional, hero floating)

TECH RULES
- TypeScript strict. No `any`.
- Components in src/components/<Section>.tsx.
- Section file naming: HeroSection.tsx, ThesisSection.tsx, etc.
- One file = one section. Smaller atoms (Glass, Pill, Eyebrow, Label) in src/ui/.
- Index.css imports Google Fonts and the .liquid-glass component.
- Hero video must implement crossfade-loop logic via requestAnimationFrame
  (fade in on canplay, fade out at remaining<=0.55s, reset to 0 then fade in again).
- Lenis must be initialized in App.tsx and respect prefers-reduced-motion.

OUTPUT FORMAT
Return a complete file tree as code blocks. Each file labeled with its path.
Do NOT skip files. Do NOT abbreviate with "...".
Do NOT add explanatory prose between files - only the files themselves.

QA SELF-CHECK BEFORE FINAL OUTPUT
[ ] Palette only #0A0A0B / #131316 / #F5F4F0 / #00D27A used.
[ ] No font besides Saira / Inter Tight / JetBrains Mono / (rare Instrument Serif).
[ ] Hero loop crossfade implemented as described.
[ ] All section copy is verbatim from 03-LAIAX-PAGE-STRUCTURE.md.
[ ] Reduced motion path included.
[ ] Lenis initialized only when not reduced motion.
[ ] No emojis anywhere in the UI.
[ ] No "let's", "discover today", influencer phrasing.
[ ] No neon glow > 12px blur.
[ ] No drop-shadow > 0 24px 60px rgba(0,0,0,0.5).

If any rule cannot be satisfied with the assets at hand, output a TODO at the
bottom of the response listing exactly what is missing - never silently
substitute or invent.
```

---

## E · Entrega — Handoff a Claude Code (después del Mount)

Cuando ya tengas el output del paso anterior, abre Claude Code (o Cursor en
agent mode) en la carpeta del proyecto y pásale este segundo prompt:

```
Stack: Vite + React + TS + Tailwind + framer-motion + lucide-react + Lenis.
The previous one-shot generated a complete file tree for the LAIAX landing.
Implement it as a runnable Vite app at ./laiax-motion (already scaffolded).

Tasks:
1. Place every generated file at the correct path.
2. Run npm install and npm run build. Fix any compile error in place
   (do not change design tokens).
3. Verify hero video fallback works when /assets/hero-loop.mp4 is missing
   (poster image and a static gradient overlay should still render).
4. Add a Vercel config (vercel.json) with proper caching headers for .mp4/.webm/.webp.
5. Print a final report with: routes built, files created, total bundle size,
   any TODOs left from the design pass.

Constraints:
- Do not modify content copy.
- Do not change palette tokens.
- Do not introduce new dependencies beyond the locked stack above.
- Respect reduced-motion at runtime, not at build time.
```

---

## Cómo trabajarlo en práctica (orden cronológico)

1. **F (Foundation)** — Hecho: archivos 01–03 ya existen aquí.
2. **R (Render)** — Generar imágenes con `04-LAIAX-ASSET-PROMPTS.md` en GPT Image 2 → guardar en `/assets`.
3. **A (Animation)** — Generar loops con Higgsfield Seedance 2.0 (Start & End Frames) usando los stills generados en R como start = end. Exportar MP4 + WebM con ffmpeg → guardar en `/assets`.
4. **M (Mount)** — Pasar el master one-shot de arriba a Claude / Cursor / Lovable. Pega el árbol resultante en `laiax-motion/`.
5. **E (Entrega)** — Correr el segundo prompt en Claude Code, build y deploy en Vercel.

Total real con assets buenos: 1 generación de stills + 2 generaciones de loops + 1 ensamble = página premium en una tarde.
