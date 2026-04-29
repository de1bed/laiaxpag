# LAIAX — F · Foundation Brief

> Salida del paso F del método F.R.A.M.E.
> Definición de objetivo, audiencia, mensaje, estructura y entregables.

---

## 1. Objetivo del sitio

Convertir directivos, founders y operadores LATAM/US en **aplicantes calificados** a MADE (cohorte 01, 2026) y posicionar LAIAX como **el** instituto LATAM de adopción exponencial.

KPIs:
- Aplicación a MADE iniciada
- Lead capturado a admisiones
- Tiempo en sitio > 90s
- Scroll depth > 70%

## 2. Audiencia

- **Primaria**: CEOs y dueños de empresas medianas LATAM (USD 5–500M revenue), 35–55 años, viajados.
- **Secundaria**: founders Series A/B latam que quieren network institucional.
- **Terciaria**: family offices, fondos, prensa.

## 3. Promesa

> **La ventaja competitiva del futuro no es información. Es velocidad de adaptación.**

LAIAX la construye en formato instituto: 17 ciudades, 17 meses, una empresa transformada.

## 4. Estilo de comunicación

- Minimalista, directo, asertivo.
- Frases cortas. Promesas que comprometen.
- Tono institución, no influencer.
- Sin emojis. Sin "amigos". Sin "let's go".

## 5. Estructura de la página (one-pager)

Orden y propósito de cada sección:

| # | Sección              | Propósito                                                  | Asset principal              |
|---|----------------------|------------------------------------------------------------|------------------------------|
| 0 | Nav fija (liquid glass) | Identidad + apply                                       | —                            |
| 1 | Hero cinematográfico | Posicionar instituto, hook, lead magnet                   | `hero-loop.mp4`              |
| 2 | Tesis                | Justificar existencia: velocidad de adopción              | `kf-01-instituto.webp`       |
| 3 | Dos marcas (LAIAX vs MADE) | Mostrar el sistema                                  | `kf-02-made.webp`            |
| 4 | MADE manifiesto + 17/17 | Producto detallado                                     | `made-loop.mp4`              |
| 5 | Itinerario (17 ciudades) | Calendario visual                                     | `kf-03-latam.webp`           |
| 6 | Manifiesto (5 frases) | Voz de marca                                            | —                            |
| 7 | Iniciativas (LABS, Fellowship) | Pipeline                                          | `kf-04-exponential.webp`     |
| 8 | Cita fundacional     | Anclaje                                                   | `quote-loop.mp4`             |
| 9 | CTA aplicar          | Conversión                                                | `kf-05-cohort.webp`          |
| 10| Footer institucional | Confianza                                                 | —                            |

## 6. Entregables del paso F

- [x] Brief (este documento)
- [x] Skill file (`01-LAIAX-SKILL.md`)
- [ ] Page structure detallada (`03-LAIAX-PAGE-STRUCTURE.md`)
- [ ] Asset prompts (`04-LAIAX-ASSET-PROMPTS.md`)
- [ ] Master one-shot (`05-LAIAX-ONESHOT.md`)

## 7. Restricciones técnicas

- Stack final: **React + TypeScript + Vite + Tailwind + framer-motion + lucide-react**
- Lenis scroll suave
- Deploy: Vercel o Netlify
- Performance: LCP < 2.5s, hero video lazy + poster, imágenes en `webp`
- A11y: `prefers-reduced-motion`, focus visible, contraste AA

## 8. Brand-safe checklist (auto QA)

Antes de aceptar cualquier render:

- [ ] ¿Usa solo paleta locked?
- [ ] ¿Cero texto generado dentro de la imagen?
- [ ] ¿Cero look "tech bro / startup gamer"?
- [ ] ¿Composición con > 30% negative space?
- [ ] ¿Lente / framing editorial coherente con resto del set?
- [ ] ¿Verde solo como acento, no base?
- [ ] ¿Saira Light en displays cuando aplica?
