# LAIAX — Page Structure & Copy

> Salida intermedia del método F.R.A.M.E.
> Listado completo de cada sección con copy ES (master) y notas de motion.

---

## 0. Nav (sticky, liquid glass pill)

```
[LAIAX (mark)]  Instituto · MADE · Manifiesto · Programas       [ES/EN]  [Aplicar]
```

- Pill liquid-glass, max-width 1100px, mx-auto
- Aparece al scroll de hero (no sobre video al inicio si quieres "manifiesto puro")

---

## 1. Hero — `#top`

**Asset:** `hero-loop.mp4` (10–15s, loop perfecto, start = end frame).

**Copy ES (display, Saira 300):**

> ## La ventaja del<br/>futuro no es<br/><em>información</em>.

**Subtítulo (Inter Tight 16–20):**
> LAIAX es la infraestructura institucional que acelera la adopción de tecnologías exponenciales en Latinoamérica. No una escuela. No una academia. Un instituto.

**CTA:**
- Primario: `Conocer MADE` →
- Ghost: `Leer manifiesto`

**Eyebrow (mono):** `LATIN AMERICAN INSTITUTE FOR AI AND EXPONENTIAL ORGANIZATIONS`
**Top tag (mono):** `● v1.0 · Cohorte abierta` (left) — `LAIAX · 2026` (right)
**Foot stripe (mono):** `17 CIUDADES   ·   17 MESES   ·   UNA EMPRESA TRANSFORMADA   ·   ↓ SCROLL`

**Motion:**
- Title rise por línea: `yPercent 118 → 0`, stagger 0.12s, 1.08s, `power4.out`
- Lead + CTA fade-up + 28px, delay 0.55–0.7
- Hero video: opacity 0 → 1 fade-in 500ms al `canplay`, fade-out 500ms a 0.55s antes de end (loop crossfade), parallax scrub `scale 1 → 1.1 / yPercent 0 → 5`

---

## 2. Tesis — `#instituto`

**Eyebrow:** `01 / TESIS`

**Title (Saira 300):**
> El instituto que <em>Latinoamérica</em> no había construido todavía.

**Quote bloque (Saira 300, 26–52px):**
> Latinoamérica no llega tarde al futuro por **falta de talento**.<br/>Llega tarde por **velocidad de adopción**.

**Grid 3 columnas (Inter + Saira 500 numerals):**
| Eyebrow         | Key (Saira 500)  | Body (Inter 14, mute) |
|-----------------|------------------|-----------------------|
| Posicionamiento | `INSTITUTO`      | "No una escuela. No una academia. Una infraestructura institucional desde la que se lanzan iniciativas." |
| Tesis central   | `VELOCIDAD`      | "La ventaja competitiva del futuro no es información. Es velocidad de adaptación. Construimos para cerrar esa brecha." |
| Geografía       | `LATAM + US`     | "Latin American Institute con sedes en Estados Unidos. Bilingüe, distribuido, itinerante por diseño." |

**Motion:** reveal `y 44 → 0`, opacity 0 → 1, ease `power3.out`, trigger `top 91%`.

---

## 3. Dos marcas — `#dos-marcas`

**Layout:** split 50/50 ink + paper, full-bleed, sin padding lateral.

**Izquierdo (LAIAX, fondo ink):**
- Tag mono: `EL CONTENEDOR`
- Brand display: **LAIAX** (Saira 300, tracking 0.14em)
- Body: "La institución. Tono institucional, autoridad, sistema, infraestructura. Seria, asertiva, directa."
- Footer mono: `INSTITUCIÓN · SISTEMA · AUTORIDAD`

**Derecho (MADE, fondo paper):**
- Tag mono: `EL PRODUCTO`
- Brand display: **MADE** (Saira 500, tracking 0.10em)
- Body: "El primer producto del instituto. Maestría en Alta Dirección de Empresas. Tono experiencial, deseable, aspiracional."
- Footer mono: `PRODUCTO · EXPERIENCIA · DESEO`

---

## 4. MADE — `#made`

**Eyebrow:** `02 / PRIMER PRODUCTO`

**Title (Saira 300):**
> MADE — la maestría <em>se recorre</em>, no se obtiene.

**Hero split (1.1fr | 1fr):**
- Izq H3 (Saira 300): "No estudias el mundo.<br/>Lo recorres."
- Der body: "Maestría en Alta Dirección de Empresas. 17 meses, 17 ciudades. Inmersión continua en los territorios donde se construye el futuro, no donde se observa."

**Stats (4 col):**
- 17 — Meses
- 17 — Ciudades
- 01 — Cohorte 2026
- ∞ — Empresas transformadas

**Asset opcional:** `made-loop.mp4` 6–8s, paneo lateral arquitectura.

---

## 5. Itinerario — `#cities`

**Eyebrow:** `03 / ITINERARIO`

**Title:** Diecisiete ciudades. Diecisiete capítulos. Una <em>misma</em> tesis.

**Lista 2 col (Saira 300, hover acento):**
01 CDMX · 02 SAN FRANCISCO · 03 BOGOTÁ · 04 NEW YORK · 05 SANTIAGO · 06 MIAMI · 07 BUENOS AIRES · 08 AUSTIN · 09 MEDELLÍN · 10 SÃO PAULO · 11 MONTERREY · 12 LIMA · 13 GUADALAJARA · 14 PANAMÁ · 15 QUITO · 16 SAN JUAN · 17 PALO ALTO · ∞ DEMO DAY (verde)

---

## 6. Manifiesto — `#manifiesto`

**Eyebrow:** `04 / MANIFIESTO`

**Title:** La marca que no necesita <em>gritar</em> para que la escuches.

**Lista (5 items, Saira 300 26–52px):**
1. Mentores que <em>operan</em>. No profesores que enseñan.
2. 17 ciudades. 17 meses. Una empresa <em>transformada</em>.
3. Donde se <em>construye</em> el futuro. No donde se observa.
4. No tomas un curso. <em>Recorres</em> un territorio.
5. Frases cortas. Promesas que <em>comprometen</em>.

**Motion:** hover `translateX 8px`, transition 0.4s.

---

## 7. Iniciativas — `#iniciativas`

**Eyebrow:** `05 / INICIATIVAS`

**Title:** El instituto es un <em>pipeline</em>. MADE es la primera salida.

**3 cards (grid):**
- 01 · MADE — `● Live` — Maestría en Alta Dirección de Empresas. Itinerante. Bilingüe.
- 02 · LAIAX LABS — `○ 2026` — Aceleración empresarial vertical. Operadores AI-first.
- 03 · LAIAX FELLOWSHIP — `○ 2027` — Inmersión para fundadores latinos en ecosistemas tecnológicos US.

---

## 8. Cita fundacional — `bigq--cinematic`

**Asset:** `quote-loop.mp4` (6–10s, abstract loop).

**Display (Saira 300):**
> "La ventaja competitiva del futuro no es información. <em>Es velocidad de adaptación.</em>"

**Sig mono:** `— LAIAX · TESIS FUNDACIONAL · 2026`

---

## 9. CTA — `#aplicar`

**Eyebrow:** `COHORTE 01 · 2026`

**Title:** Postula a <em>MADE.</em><br/>Habilita tu empresa.

**Body:** Procesos de admisión por entrevista. Plazas limitadas a 30 empresarios por cohorte.

**CTAs:**
- Iniciar postulación →
- Hablar con admisiones

---

## 10. Footer

3 columnas + brand block.
- Brand: marca + descripción + LinkedIn / Instagram
- Instituto: Tesis, Manifiesto, Iniciativas, Prensa
- Programas: MADE, Labs, Fellowship
- Contacto: hola@laiax.org, Admisiones

Footer base: `© 2026 LAIAX · ALL RIGHTS RESERVED   |   CDMX · MIAMI · SAN FRANCISCO`
