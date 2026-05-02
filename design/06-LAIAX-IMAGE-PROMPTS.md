# LAIAX — Image Prompts para GPT Image 2

> Prompts listos para copy-paste. Cada imagen tiene un slot exacto en `index.html` y debe guardarse con el nombre indicado dentro de `assets/img/`.

## Cómo usar

1. Copia el prompt entero (incluye negative prompt + footer institucional).
2. Genera en **GPT Image 2** con aspecto correcto (ver columna "Aspecto").
3. Guarda con el **nombre exacto** de archivo en `assets/img/`.
4. Recarga la web — la imagen aparece automáticamente.

Mientras no exista un archivo, el slot muestra un fondo cinematográfico oscuro (gradiente radial con tinte verde) que se ve **intencionalmente** premium. Puedes ir reemplazando una por una sin romper el sitio.

---

## Sistema visual locked (aplica a TODAS las imágenes)

**Estilo base:**
> Cinematic editorial photography, Tesla automotive ad campaign aesthetic, ARRI Alexa color science, soft natural light with controlled bloom, premium institutional mood, generous negative space (minimum 40% of frame empty), shot on 35mm with subtle film grain. Color grading: cool desaturated with selective highlights, neutral whites, deep but not crushed blacks. NO text, NO logos, NO watermarks, NO captions in image. Subjects must NEVER face camera directly. Photorealistic, 8K, hyper-detailed but restrained.

**Paleta global (incluir en cada prompt):**
- Backgrounds: deep neutral blacks (#0A0A0B), charcoal (#16161A), graphite (#1F1F23)
- Highlights: pure white #FFFFFF, off-white #FAFAFA, warm cream #F4F0EA
- Accent (USE SPARINGLY — only as a single point of light, never as background): institutional green #00B86A, soft glow #00D27A
- Skin tones: natural, slightly cool grading, never warm-orange "stock photo" look

**Negative prompt universal (pegar al final de cada prompt):**
> NEGATIVE: text, typography, letters, words, watermarks, logos, captions, signatures, frames, ui elements, glitch, neon saturation, cyberpunk aesthetics, vaporwave, rainbow gradients, hdr oversaturation, cartoon style, 3d render plastic look, stock photo cliché, smiling executives, suit-and-tie boardroom cliché, hands on leather table, AI tech bro around laptop, low-detail textures, blurry, distorted faces, extra fingers, asymmetric eyes.

---

## TABLA MAESTRA DE IMÁGENES

| # | Archivo | Aspecto | Página · Sección |
|---|---------|---------|------------------|
| 01 | `home-hero.jpg` | 16:9 | HOME · Hero (alterna con video) |
| 02 | `home-made.jpg` | 16:9 | HOME · MADE showcase |
| 03 | `home-labs.jpg` | 16:9 | HOME · LABS showcase |
| 04 | `home-fellowship.jpg` | 16:9 | HOME · FELLOWSHIP showcase |
| 05 | `home-quote.jpg` | 21:9 | HOME · Quote band |
| 06 | `home-closing.jpg` | 16:9 | HOME · Closing CTA |
| 07 | `instituto-hero.jpg` | 16:9 | INSTITUTO · Hero |
| 08 | `instituto-mvp.jpg` | 4:5 | INSTITUTO · Misión-Visión-Propósito split |
| 09 | `instituto-quote.jpg` | 21:9 | INSTITUTO · Quote band |
| 10 | `instituto-closing.jpg` | 16:9 | INSTITUTO · Closing |
| 11 | `principio-01.jpg` | 4:3 | INSTITUTO · Card principio 1 |
| 12 | `principio-02.jpg` | 4:3 | INSTITUTO · Card principio 2 |
| 13 | `principio-03.jpg` | 4:3 | INSTITUTO · Card principio 3 |
| 14 | `nosotros-hero.jpg` | 16:9 | NOSOTROS · Hero |
| 15 | `nosotros-origen.jpg` | 4:5 | NOSOTROS · Origen split |
| 16 | `nosotros-closing.jpg` | 16:9 | NOSOTROS · Closing |
| 17 | `person-01.jpg` | 4:5 | NOSOTROS · Persona 1 (silueta) |
| 18 | `person-02.jpg` | 4:5 | NOSOTROS · Persona 2 (silueta) |
| 19 | `person-03.jpg` | 4:5 | NOSOTROS · Persona 3 (silueta) |
| 20 | `aliado-cut.jpg` | 4:3 | NOSOTROS · Card CUT Laguna |
| 21 | `aliado-fly.jpg` | 4:3 | NOSOTROS · Card Fly Mastermind |
| 22 | `aliado-mesa.jpg` | 4:3 | NOSOTROS · Card Mesa mentores |
| 23 | `made-hero.jpg` | 16:9 | MADE · Hero |
| 24 | `made-quote.jpg` | 21:9 | MADE · Quote band |
| 25 | `made-cities.jpg` | 4:5 | MADE · Calendario split |
| 26 | `made-closing.jpg` | 16:9 | MADE · Closing |
| 27 | `pilar-01.jpg` | 4:3 | MADE · Pilar 1 |
| 28 | `pilar-02.jpg` | 4:3 | MADE · Pilar 2 |
| 29 | `pilar-03.jpg` | 4:3 | MADE · Pilar 3 |
| 30 | `comp-01.jpg` | 4:3 | MADE · Componente A |
| 31 | `comp-02.jpg` | 4:3 | MADE · Componente B |
| 32 | `comp-03.jpg` | 4:3 | MADE · Componente C |
| 33 | `comp-04.jpg` | 4:3 | MADE · Componente D |
| 34 | `mentor-cesar.jpg` | 4:5 | MADE · César Vega |
| 35 | `mentor-rodolfo.jpg` | 4:5 | MADE · Rodolfo Lau |
| 36 | `manifiesto-hero.jpg` | 16:9 | MANIFIESTO · Hero |
| 37 | `manifiesto-quote.jpg` | 21:9 | MANIFIESTO · Quote band |
| 38 | `manifiesto-closing.jpg` | 16:9 | MANIFIESTO · Closing |
| 39 | `blog-hero.jpg` | 16:9 | BLOG · Hero |
| 40 | `blog-closing.jpg` | 16:9 | BLOG · Closing |
| 41 | `article-featured.jpg` | 4:3 | BLOG · Pieza destacada |
| 42 | `article-01.jpg` | 16:10 | BLOG · Archivo 1 |
| 43 | `article-02.jpg` | 16:10 | BLOG · Archivo 2 |
| 44 | `article-03.jpg` | 16:10 | BLOG · Archivo 3 |
| 45 | `article-04.jpg` | 16:10 | BLOG · Archivo 4 |
| 46 | `article-05.jpg` | 16:10 | BLOG · Archivo 5 |
| 47 | `article-06.jpg` | 16:10 | BLOG · Archivo 6 |
| 48 | `aplicar-hero.jpg` | 16:9 | APLICAR · Hero |
| 49 | `aplicar-closing.jpg` | 16:9 | APLICAR · Closing |
| 50 | `contacto-hero.jpg` | 16:9 | CONTACTO · Hero |
| 51 | `contacto-closing.jpg` | 16:9 | CONTACTO · Closing |
| 52 | `sede-cdmx.jpg` | 16:10 | CONTACTO · Sede CDMX |
| 53 | `sede-miami.jpg` | 16:10 | CONTACTO · Sede Miami |
| 54 | `sede-la.jpg` | 16:10 | CONTACTO · Sede LA |

---

# PROMPTS POR ARCHIVO

---

## 01 · `home-hero.jpg` — HOME landing (16:9) — **LIGHT / SOBER**

> **CRÍTICO:** el landing es **claro, sobrio, aireado**. NO es cinematográfico oscuro. Pensar Tesla mostrando un Model Y blanco contra fondo blanco en hora dorada suave — aspiracional pero limpio, como una página principal de Apple, Aman Resorts o Loro Piana. El verde aparece **solo como un punto único restringido**, casi imperceptible.

> Este slot también muestra el video `assets/hero-loop.mp4` cuando exista (con `mix-blend-mode: multiply` y opacidad .55). Funciona como poster fallback. Cuando produzcas el nuevo video, reemplaza ambos.

```
Cinematic wide editorial photograph at golden hour, captured from inside a luminous contemporary architectural space looking outward through a wall of floor-to-ceiling glass onto a soft, hazy Latin American skyline at sunrise. The interior is bathed in soft warm natural light pouring in — pure white walls, polished cream travertine floor, a single architectural element (a thin black steel column or window mullion) provides quiet vertical structure. Beyond the glass: a hazy, atmospheric cityscape blurred in a misty cream-pink dawn, with the silhouettes of distant high-rises softly emerging from the morning fog. The sky is dominated by a soft warm-cream light, almost overexposed at the horizon. Generous, vast negative space — at least 60% of the frame is empty cream-white sky and ambient light. Mood: aspirational, premium, sober, the calm of a contemporary institute on the morning of an arrival. References: Aman Resort architectural photography, Apple product page hero with white-on-white minimalism, Tesla Model S landing page, Loro Piana editorial campaign, Hermès luxury brand film. Camera: medium format, 50mm, locked tripod, deep depth of field, perfect symmetry. Lighting: ONE single warm directional sun source from the right, soft diffuse fill from the left, museum-grade exposure with gentle bloom on the brightest highlights, no harsh contrast. Color palette: 80% pure off-white #FAFAFA and warm cream #F4F0EA, 15% soft warm pink-cream horizon, 4% near-black structural lines #171A20, and 1% — just one — soft point of institutional green #00B86A as a single distant glowing accent (could be a tiny LED light on a building far away, or a thin reflection on a glass edge). NO dramatic shadows. NO heavy contrast. The entire image breathes. Photorealistic, 8K, editorial luxury minimalism, premium sober aesthetic. NO people. NO text. NO logos.

NEGATIVE: dark cinematic moody atmosphere, heavy shadows, dramatic lighting, neon saturation, dark mysterious mood, brutalist heavy concrete, smog, night scene, fog drama, vaporwave, cyberpunk, glitch, oversaturation, multiple bright colors, busy composition, people facing camera, suit-and-tie boardroom cliché, stock travel photo, identifiable city landmarks, text in image, logos, watermarks, signs, billboards.
```

**Variante alternativa (si quieres probar otro acomodo):**

```
Cinematic editorial wide photograph in pure cream-white luminous studio environment — minimalist architectural still-life of a single thin polished black architectural model (an abstract long horizontal building form, no recognizable brand) suspended on an invisible mount against a vast pure cream-white seamless background that fades into atmospheric haze. Soft directional sun coming from upper-left creates a single elegant shadow on the seamless. The architectural model itself catches a single thin reflection of warm institutional green #00B86A on its top edge — the only point of color in the frame. Mood: Apple product hero shot, Tesla model showcase on white, Loro Piana campaign minimalism. Camera: medium format, 80mm, perfect symmetry, locked tripod, museum-grade exposure. Lighting: single soft warm key light, soft fill, no dramatic shadows. Color palette: 90% pure cream-white #F7F5F0 and #FAFAFA, 7% deep matte black architectural form, 3% soft shadow grey, 1% single point institutional green #00B86A. Vast negative space top and bottom. Photorealistic, 8K, editorial luxury product hero.

NEGATIVE: dark backgrounds, dramatic shadows, neon, oversaturation, multiple colors, busy clutter, people, text, logos, watermarks, recognizable brands, vaporwave, cyberpunk, glitch.
```

---

## 02 · `home-made.jpg` — MADE showcase (16:9)

```
Cinematic ground-level wide shot of a sleek modern auditorium space at night, just before an institutional summit begins. Empty rows of designer black leather chairs face a long horizon-format LED wall glowing with abstract soft green wave patterns (no text). Polished concrete floor reflects the glow. Architectural lines of a contemporary venue — exposed steel beams, raw concrete columns, floor-to-ceiling glass walls revealing a city skyline at twilight. Mood: premium executive summit, World Economic Forum cinematic, Tesla unveiling event. Camera: anamorphic wide, low angle, deep perspective leading the eye to the LED wall. Lighting: cool white key light from above, ambient ground glow from screen, subtle volumetric atmosphere. Color palette: deep blacks #0A0A0B, charcoal, polished metallic accents, single source of institutional green #00B86A from the LED wall. Generous negative space top half for text overlay. Photorealistic, 8K, editorial premium.

NEGATIVE: text, typography, letters, words, watermarks, logos, captions, signatures, people facing camera, smiling executives, cartoon, neon, glitch, oversaturation.
```

---

## 03 · `home-labs.jpg` — LABS showcase (16:9)

```
Cinematic wide shot of a high-end research laboratory / control room interior at night, viewed from a slightly elevated angle. Long parallel rows of dark workstations with subtle white monitor glow, no visible text on screens. Two human silhouettes (back to camera, far in the distance, blurred) wearing simple dark wool suits, observing data on a wall of horizontal screens displaying abstract green topographic line patterns. Architectural elements: raw concrete ceiling, exposed cable trays, polished black floor, minimalist industrial design. Lighting: cool blue-white ambient, single warm pool of light from a hanging lamp over the central console, soft volumetric haze. Mood: SpaceX mission control crossed with Apple Park interior, premium institutional research environment. Camera: anamorphic 35mm, deep focus, symmetrical composition. Color palette: deep blacks, cool whites, single tint of institutional green #00B86A from the screens. Strong negative space in upper third. Photorealistic, 8K.

NEGATIVE: text on screens, logos, watermarks, faces visible, smiling people, cartoon, neon saturation, plastic 3d look, stock photo cliché, glitch effects.
```

---

## 04 · `home-fellowship.jpg` — FELLOWSHIP showcase (16:9)

```
Cinematic aerial shot of a quiet sunrise over the San Francisco Bay area / Silicon Valley landscape, captured from above the fog layer. Soft pastel sky transitioning from deep navy to warm cream-pink. Below: a sea of low fog rolling over the bay, with the silhouettes of distant tech campus buildings emerging like islands. A single airplane contrail draws a subtle line across the sky, glowing faintly green at its leading edge — the only point of institutional green #00B86A in the entire frame. Mood: aspirational, contemplative, the moment a Latin American founder lands in the US ecosystem. Camera: drone aerial, ultra-wide, painterly composition, cinematic 35mm grain. Lighting: golden hour warmth meeting cool morning blue, soft diffused, no harsh contrast. Color palette: deep navy sky, soft cream-pink horizon, neutral cool whites, restrained green accent. Generous negative sky space top for text overlay. Photorealistic, 8K, editorial premium aesthetic similar to luxury travel campaigns.

NEGATIVE: visible logos, brand names, text, signature buildings (no Apple Park, no Google logo), neon saturation, vaporwave, cartoon, oversaturation, stock travel cliché.
```

---

## 05 · `home-quote.jpg` — Quote band background (21:9)

```
Cinematic ultra-wide horizontal shot of a translucent green liquid membrane suspended in a void of deep black, frozen mid-ripple. The membrane occupies the center horizon line of the frame, glowing softly with sub-surface scattering. Behind it: pure void darkness #0A0A0B with subtle volumetric fog catching faint green light. The membrane shimmers with internal currents like mercurial water — abstract, premium, mysterious. Mood: Annihilation Shimmer scene, Apple Vision Pro keynote abstract, Refik Anadol installation. Composition: horizontal symmetry, the membrane is a thin horizontal band across the middle, leaving generous black negative space above and below for text overlay (this is critical — at least 35% empty space top and bottom). Camera: locked anamorphic shot, shallow depth on edges. Lighting: only the green inner glow of the membrane, no external light source, deep shadows everywhere else. Color palette: 95% deep black void #0A0A0B, 5% institutional green glow #00B86A. Photorealistic, 8K, no recognizable shapes other than the abstract membrane.

NEGATIVE: text, typography, watermarks, logos, recognizable figures or objects, neon saturation, glitch, cyberpunk, vaporwave, oversaturation, cartoon, 3d plastic look.
```

---

## 06 · `home-closing.jpg` — Closing CTA (16:9)

```
Cinematic wide shot of a single straight road / runway at night, viewed from low ground level looking down its length toward a vanishing point on the horizon. The road surface is wet polished asphalt reflecting the sky. Above the horizon, a single soft green halo of light glows at the vanishing point — like the future approaching. Atmospheric thin fog rolls across the road from the sides. Sky: deep gradient from black at top to charcoal at horizon, with a single restrained green light source far away. Mood: Tesla product reveal teaser, premium automotive aspirational, the road to the future. Camera: ground-level wide angle, perfectly symmetrical perspective, deep depth of field, anamorphic 35mm. Lighting: only the distant green halo and reflections on the wet road, otherwise dark. Color palette: deep blacks #0A0A0B, wet charcoal reflections, single point of institutional green #00B86A at horizon. Generous negative sky space top half. Photorealistic, 8K.

NEGATIVE: text, signs, road markings, billboards, cars, logos, glitch, neon, oversaturation, cartoon, vaporwave.
```

---

## 07 · `instituto-hero.jpg` — INSTITUTO hero (16:9)

```
Cinematic wide architectural shot at twilight of a contemporary institutional building exterior — clean horizontal lines, raw concrete and dark glass, brutalist-meets-Aman-Resort aesthetic. The building sits in a quiet courtyard with reflecting pool in foreground. Two human silhouettes in dark wool coats walk slowly toward the entrance, far in the background, only as small distant figures (no faces). The building's interior glows with a subtle warm white through floor-to-ceiling windows, contrasted against the cool blue twilight sky. A single soft green light marks the entrance — institutional, restrained. Mood: prestigious institute campus, MIT Media Lab meets Aman, A24 cinematography. Camera: anamorphic wide, locked tripod, deep focus. Lighting: cool twilight ambient, warm interior glow, subtle volumetric atmosphere. Color palette: deep blacks, cool blues of twilight sky, warm cream interior light, single institutional green #00B86A point at entrance. Negative space: upper 40% sky empty for text. Photorealistic, 8K, editorial luxury.

NEGATIVE: text, signs, recognizable building logos, faces visible, neon, glitch, cartoon, oversaturation, busy crowds, cliché university campus look.
```

---

## 08 · `instituto-mvp.jpg` — Misión/Visión/Propósito split (4:5 vertical)

```
Cinematic vertical portrait shot of a single institutional artifact arranged on a polished concrete surface in soft directional light: a stack of three minimalist matte-black hardcover books arranged at 90-degree angles forming a tower, each spine catching a different angle of light. Beside them, a single thin green ribbon of light streaming horizontally across the surface — the only color in the frame. Background: out-of-focus deep neutral wall. Mood: Hermès editorial still-life, Aman Resorts brand photography, premium institutional artifact. Camera: medium format, 80mm lens, vertical 4:5 composition, shallow depth, hyper-detailed textures. Lighting: single soft window light from upper left, deep shadows on right, museum-grade. Color palette: matte black books, polished cool grey concrete, warm cream highlights, single thin line of institutional green #00B86A. Generous negative space top half. Photorealistic, 8K, editorial luxury still-life.

NEGATIVE: text or titles on book spines, logos, watermarks, multiple colors, cluttered composition, stock photo look, oversaturation.
```

---

## 09 · `instituto-quote.jpg` — Quote band (21:9)

```
Cinematic ultra-wide of a topographic wireframe of South America rendered in thin lines of soft green light, floating in a deep black void. Map shown from a slightly tilted aerial perspective, lines fade in and out as if scanned by a beam of light. Around the map: subtle volumetric fog catching faint green particles. No country borders visible, no text. Mood: control room visualization, Apple Vision Pro spatial UI, abstract data poetry. Composition: map occupies center middle band of horizontal frame, leaving generous black negative space above and below for text overlay (35% top, 35% bottom). Camera: locked overhead 3/4 angle, deep field. Lighting: only the green wireframe glow, no external lights. Color palette: 95% deep black void #0A0A0B, 5% institutional green #00B86A glow. Photorealistic abstract render quality, 8K.

NEGATIVE: country names, borders, labels, text, recognizable map elements, oversaturation, neon glow, vaporwave, cyberpunk, cartoon.
```

---

## 10 · `instituto-closing.jpg` — INSTITUTO closing (16:9)

```
Cinematic wide shot of a single empty modernist conference hall interior at night, captured from the back row looking forward toward a stage. Rows of designer black chairs precisely aligned. The stage features a single thin podium bathed in a soft pool of warm light, with a glowing horizon-format LED screen behind it showing a gradient of deep black to soft green (no text). Architectural details: high ceilings with exposed concrete beams, dark walls, polished floor. Mood: about to begin — institutional tension, premium summit, Tesla unveiling. Camera: anamorphic wide, low ISO, perfectly symmetrical perspective. Lighting: warm pool on podium, cool ambient on chairs, deep shadows in periphery. Color palette: deep blacks, warm cream pool of light, single institutional green #00B86A from screen. Negative space top third. Photorealistic, 8K.

NEGATIVE: people, text on screen, logos, signs, oversaturation, neon, cartoon, busy clutter.
```

---

## 11 · `principio-01.jpg` — Principio "Contenido en tiempo real" (4:3)

```
Cinematic close-up still-life of a single sheet of warm cream paper resting on a deep matte black desk, illuminated by a single shaft of cool morning light from upper left. The paper is blank but appears recently placed (slight curl at edges). Beside it: a sleek matte black fountain pen lying parallel to the page edge. The deep grain texture of the desk visible in shadow. A single thin line of institutional green light reflects subtly off the pen's edge — barely visible, restrained. Mood: today's edition, just printed, premium institutional dossier. Camera: medium format 80mm, top-down 3/4 angle, shallow depth, hyper-detailed paper texture. Lighting: single window light, museum-grade, dramatic shadow falloff. Color palette: deep matte black desk, warm cream paper, single restrained green accent. Photorealistic, 8K, editorial still-life premium.

NEGATIVE: text or writing on paper, logos, watermarks, multiple colors, busy composition, cartoon, plastic 3d look.
```

---

## 12 · `principio-02.jpg` — Principio "Operadores activos" (4:3)

```
Cinematic side-view of a single human silhouette (back to camera, no face visible) wearing a tailored dark wool blazer, standing in a wide window of a modern building, looking out onto a softly out-of-focus city skyline at golden hour. The figure is illuminated only by the warm directional sunlight from outside, creating a strong rim light on the silhouette. Architectural elements: thin window mullion frames creating a subtle grid. Background skyline blurred in cinematic bokeh. Mood: contemplative operator, looking at the territory before acting, Aman hotel hallway moment. Camera: 85mm portrait lens, shallow depth, soft natural light. Lighting: single golden window source, dramatic rim light, deep interior shadows. Color palette: warm golden highlights, deep neutral interior, no green accent in this image (skip green here for variety). Photorealistic, 8K, editorial portraiture without a face.

NEGATIVE: face visible, smiling, posed stock executive look, multiple people, text, logos, watermarks, oversaturation, cartoon.
```

---

## 13 · `principio-03.jpg` — Principio "IA como amplificador" (4:3)

```
Cinematic abstract close-up of two thin parallel lines of soft green light running horizontally across a deep black surface, slightly out of focus — one perfectly straight, the other subtly wavy as if being amplified or modulated. Surrounding void: deep matte black with subtle volumetric haze catching faint particles of green. Mood: signal amplification visualized, abstract scientific poetry, Apple keynote graphic. Camera: macro lens, ultra-shallow depth, hyper-controlled focus. Lighting: only the inherent glow of the green lines, no external light. Color palette: 90% deep black #0A0A0B, 10% institutional green #00B86A glow. Photorealistic abstract render quality, 8K.

NEGATIVE: text, numbers, ui, recognizable forms, multiple colors, neon saturation, glitch, vaporwave, cyberpunk.
```

---

## 14 · `nosotros-hero.jpg` — NOSOTROS hero (16:9)

```
Cinematic wide environmental portrait of three human silhouettes (back to camera, no faces) standing in a row at a wide floor-to-ceiling window of a modernist office, looking out onto a panoramic Latin American city skyline at twilight. Each figure wears a different shade of dark tailored wool — charcoal, deep navy, near-black. Their reflections appear faintly in the polished concrete floor. Architectural elements: sleek window frame, raw concrete walls, single horizontal LED strip on ceiling glowing soft white. The skyline outside in soft cinematic blue-purple gradient. A single warm interior light pool from off-frame illuminates the trio with rim light. Mood: institutional team contemplation, premium consulting brand campaign, McKinsey x A24. Camera: anamorphic wide, deep focus, low angle. Lighting: cool twilight outside, warm interior rim light, dramatic. Color palette: deep blacks, cool blue-purple twilight, warm cream interior, no green accent in this image (skip for variety). Negative space upper third. Photorealistic, 8K.

NEGATIVE: faces visible, smiling, posed stock photo, multiple lights, text, logos, neon, oversaturation, cartoon, busy clutter.
```

---

## 15 · `nosotros-origen.jpg` — Origen split (4:5 vertical)

```
Cinematic vertical still-life of an open vintage leather-bound dossier resting on a worn dark wooden desk, lit by a single warm desk lamp from upper right. Beside it: a stack of three minimalist matte hardcover books, a brass paperweight, and a single thin green ribbon of light streaming horizontally across the desk surface — barely visible. The dossier pages are blank (no text) but show texture of premium cream paper. Background: out-of-focus walls of a contemporary library, books spines visible as soft bokeh. Mood: institutional archive, decade of work documented, Hermès editorial. Camera: medium format, 80mm, vertical composition, shallow depth, hyper-detailed leather and paper textures. Lighting: single warm desk lamp, deep shadows, museum-grade. Color palette: deep cognac leather, warm cream paper, polished brass, deep wood, single thin institutional green #00B86A line. Negative space upper portion. Photorealistic, 8K, editorial luxury still-life.

NEGATIVE: text on pages, logos, watermarks, multiple bright colors, cluttered composition, stock library photo, oversaturation, cartoon.
```

---

## 16 · `nosotros-closing.jpg` — NOSOTROS closing (16:9)

```
Cinematic wide of an empty institutional meeting room at night — long polished concrete table with seven identical matte black designer chairs, captured from one head of the table looking down its length. Center of the table: a single thin warm white pendant light hanging low, casting a focused pool of light on the table surface. Walls: dark with no decoration. Far end of the room: a single floor-to-ceiling window showing soft city lights bokeh. A single thin trace of institutional green #00B86A on the wall lighting strip — subtle. Mood: the table is set, ready for institutional decisions, premium boardroom without cliché executives. Camera: anamorphic wide, low angle, perfect symmetry, deep focus. Lighting: focused pendant pool, cool ambient from window, deep shadows. Color palette: deep blacks, polished concrete, warm pool of pendant light, single restrained green accent. Negative space upper portion. Photorealistic, 8K.

NEGATIVE: people, text, logos, signs, multiple lights, oversaturation, neon, cartoon, busy clutter, generic boardroom stock photo.
```

---

## 17, 18, 19 · `person-01.jpg` `person-02.jpg` `person-03.jpg` — Equipo silhouettes (4:5 vertical)

> Genera 3 variaciones — cada una un perfil distinto. Sin caras visibles para mantener la flexibilidad institucional (mientras no tengas fotos reales del equipo).

**Variación 01 (`person-01.jpg`) — Dirección General:**
```
Cinematic vertical portrait, side profile of a single human silhouette from shoulder up, illuminated only by a single soft window light from the right side, against a deep neutral grey-charcoal background. The figure wears a tailored dark wool blazer and a crisp white shirt collar visible. NO face visible — only the silhouette of the head and shoulders, slightly turned away from camera, lit edge-on. Mood: institutional director, premium leadership editorial, NYT magazine portrait without identification. Camera: medium format 80mm, vertical 4:5 framing, hyper-detailed fabric texture, shallow depth. Lighting: single soft window light, deep shadow on opposite side, museum-grade. Color palette: charcoal background, near-black wool, crisp white collar, no other colors. Photorealistic, 8K, editorial portraiture, anonymous executive presence.

NEGATIVE: face visible, identifiable features, smiling, posed stock photo, multiple subjects, text, logos, neon, oversaturation, cartoon.
```

**Variación 02 (`person-02.jpg`) — Dirección Académica:**
```
Same prompt as person-01 but: figure wearing a deep grey turtleneck under a cream wool blazer, lit from the left side, slightly different head angle (looking down). Background: warm cream-grey gradient instead of charcoal. Mood: contemplative academic authority. Color palette: warm cream background, deep grey wool, soft beige tones.

NEGATIVE: face visible, identifiable features, smiling, posed stock photo, multiple subjects, text, logos, neon, oversaturation, cartoon.
```

**Variación 03 (`person-03.jpg`) — Dirección de Programa:**
```
Same prompt as person-01 but: figure wearing a black mock-neck sweater, lit from above-front (top light), creating dramatic shadow under collarbone. Background: deep matte black with subtle vignette. Mood: focused operator, working in shadow. Color palette: pure deep black background, black wool, single highlight on shoulder edge.

NEGATIVE: face visible, identifiable features, smiling, posed stock photo, multiple subjects, text, logos, neon, oversaturation, cartoon.
```

---

## 20 · `aliado-cut.jpg` — CUT Laguna card (4:3)

```
Cinematic close-up still-life of a single official-looking institutional document — a thick cream cotton paper with a clean embossed circular crest (no text or letters visible, abstract geometric circular pattern) — resting on a polished dark wooden desk. Beside it: a vintage brass paperweight and a fountain pen. Lit by a single dramatic side light. Mood: official endorsement, university charter, premium institutional credibility. Camera: medium format, 80mm, 3/4 top-down angle, shallow depth, hyper-detailed paper grain and embossing. Lighting: single warm key light, deep shadows. Color palette: cream paper, deep walnut wood, polished brass, no green accent. Photorealistic, 8K, editorial still-life.

NEGATIVE: readable text, logos, university names, watermarks, multiple bright colors, oversaturation, cartoon, plastic 3d.
```

---

## 21 · `aliado-fly.jpg` — Fly Mastermind card (4:3)

```
Cinematic ground-level shot of a small private plane on a runway at sunrise — only the wing and partial fuselage visible from a low angle, with the runway stretching toward a hazy horizon. Soft pastel sunrise sky in background. Single thin contrail high above. Mood: premium private aviation, decade of trajectory, the journey of a mentorship program. Camera: anamorphic wide, ultra-low angle, leading lines of runway. Lighting: soft golden sunrise, cool morning ambient, subtle haze. Color palette: cool charcoal of plane, warm cream-pink sunrise, neutral runway grey, no green accent. Photorealistic, 8K, editorial aviation aesthetic.

NEGATIVE: visible plane registration numbers, logos, brand names, text, oversaturation, stock photo cliché, cartoon, neon.
```

---

## 22 · `aliado-mesa.jpg` — Mesa de mentores card (4:3)

```
Cinematic top-down of a long polished walnut conference table with five matte black designer notebooks arranged in a precise row, each closed, each with a single fountain pen resting parallel beside it. A single warm pendant light pool illuminates the center of the frame. Background: deep matte black with subtle volumetric haze. Mood: the mentors mesa, ready, institutional preparation. Camera: medium format, top-down, perfect symmetry, hyper-detailed wood grain. Lighting: single pendant pool, deep shadows, museum-grade. Color palette: deep walnut, matte black notebooks, brass pen highlights, no green accent. Photorealistic, 8K, editorial luxury still-life.

NEGATIVE: people, hands, text on notebooks, logos, watermarks, multiple bright colors, oversaturation, stock photo cliché.
```

---

## 23 · `made-hero.jpg` — MADE hero (16:9)

```
Cinematic wide aerial drone shot at golden hour of a winding mountain road cutting through a dramatic landscape — could be Patagonia, Sierra Madre, or Andes — with a single dark sleek vehicle (no recognizable brand) visible far in the distance, traveling along the road. The road snakes through deep valleys with dramatic light and shadow play. Background: massive mountain ridges silhouetted against a soft warm sky. The road itself catches a single thin highlight of institutional green light reflecting off its surface — barely visible, restrained. Mood: the journey, 17 cities, Tesla road trip film, A24 cinematic landscape. Camera: aerial drone wide, anamorphic, deep focus, dramatic perspective. Lighting: golden hour rim lighting on mountains, deep valley shadows, soft atmospheric haze. Color palette: warm golden highlights, deep cool blue-purple shadows, neutral whites in sky, single thin institutional green #00B86A accent. Negative space upper third for text. Photorealistic, 8K, premium automotive ad campaign aesthetic.

NEGATIVE: visible car brand, logos, license plate, text, signs, billboards, oversaturation, neon, cartoon, vaporwave, stock travel photo.
```

---

## 24 · `made-quote.jpg` — Quote band (21:9)

```
Cinematic ultra-wide low-angle shot of a single empty modern road / street at night, viewed from the centerline looking forward, with city building silhouettes flanking both sides creating a deep canyon of perspective. Wet pavement reflects the cool moonlight and a distant warm neon glow far ahead. The vanishing point is a single point of soft institutional green light at the horizon — like the destination. Mood: "se recorre" — the path is the program. Camera: ground level, anamorphic ultra-wide, perfect symmetrical perspective, deep depth of field. Lighting: cool moonlight, distant warm and green points, wet reflections everywhere. Color palette: deep wet blacks, cool charcoal blues, distant warm amber, single point institutional green #00B86A. Generous negative space top and bottom for text overlay (35% top, 35% bottom). Photorealistic, 8K, editorial cinematic.

NEGATIVE: text, signs, billboards, logos, license plates, recognizable city landmarks, oversaturation, neon overload, cartoon.
```

---

## 25 · `made-cities.jpg` — Calendar split (4:5 vertical)

```
Cinematic vertical aerial shot of a Latin American city at dusk from a high helicopter angle — could be CDMX, Bogotá, or Buenos Aires — with the city grid stretching to the horizon. Sunset bathing the buildings in warm golden-pink light, deep cool blue shadows in the streets. A single thin contrail of an aircraft draws a precise diagonal across the upper sky, glowing institutional green at its leading edge — the only color accent. Mood: arrival in a new city, the itinerant journey, 17 ciudades. Camera: aerial drone vertical 4:5, slightly tilted, deep field. Lighting: dramatic golden hour, cool shadow, atmospheric haze. Color palette: warm golden building tops, deep cool shadows, neutral sky, single institutional green #00B86A accent. Negative space upper portion for sky / text. Photorealistic, 8K, editorial luxury travel campaign.

NEGATIVE: recognizable landmarks, text on signs, logos, billboards, oversaturation, vaporwave, neon, stock travel photo.
```

---

## 26 · `made-closing.jpg` — MADE closing (16:9)

```
Cinematic wide shot of a single empty stadium-style amphitheater at night — concentric rings of empty designer black seats descending to a central empty stage illuminated by a single dramatic spotlight. The stage floor is polished dark concrete. A single thin ribbon of institutional green light circles the stage perimeter — like an arena waiting for its operator. Mood: cohort 01 awaits, premium institutional venue, Tesla cybertruck reveal aesthetic. Camera: anamorphic wide, top-front 3/4 angle, deep focus, dramatic perspective. Lighting: single bright spotlight on stage, ambient floor wash, deep shadows in seats. Color palette: deep matte blacks, cool white spotlight, single institutional green #00B86A perimeter. Negative space upper portion. Photorealistic, 8K.

NEGATIVE: people, text, logos, signs, multiple lights, oversaturation, neon, cartoon, busy crowds.
```

---

## 27 · `pilar-01.jpg` — Mentores en activo (4:3)

```
Cinematic side portrait silhouette of a human figure (back-3/4 angle, no face visible) wearing a tailored dark blazer, standing at a window, gesturing with one hand mid-conversation as if speaking to someone off-camera. Soft warm interior light catches the rim of the figure. Background: blurred contemporary interior, deep cool tones. Mood: an operator mid-criterion-sharing, mentor in real-time. Camera: 85mm portrait, side profile, shallow depth, anamorphic. Lighting: single warm side light, deep shadow on opposite. Color palette: deep neutral tones, warm rim light, no green accent. Photorealistic, 8K, editorial portraiture without face.

NEGATIVE: face visible, smiling, posed stock executive, text, logos, oversaturation, cartoon.
```

---

## 28 · `pilar-02.jpg` — Experiencias presenciales (4:3)

```
Cinematic ground-level shot from inside a contemporary venue looking out through floor-to-ceiling glass walls onto a city skyline at night. The interior is lit warmly with soft pendant lights, while the city outside glows in cool blue. Architectural lines of the window frame create a strong grid. Mood: arrival at the next city, the experience begins, premium institutional venue. Camera: anamorphic wide, low angle, deep field. Lighting: warm interior, cool exterior contrast. Color palette: warm cream interior glow, cool blue city, deep neutral framing, no green accent. Photorealistic, 8K, editorial cinematic.

NEGATIVE: people, text on signs, logos, recognizable city landmarks, oversaturation, neon, cartoon.
```

---

## 29 · `pilar-03.jpg` — IA aplicada (4:3)

```
Cinematic abstract close-up of a thin sheet of holographic green light suspended in deep black void, partially translucent, with subtle flowing particle currents running through it — like a computational membrane. Surrounding: deep matte black, subtle volumetric atmosphere. Mood: AI as cognitive amplifier, abstract computational poetry, Apple Vision Pro spatial UI. Camera: macro, shallow depth, locked frame. Lighting: only the inherent glow of the green sheet. Color palette: 95% deep black, 5% institutional green #00B86A glow. Photorealistic abstract, 8K.

NEGATIVE: text, ui elements, recognizable shapes, neon saturation, glitch, cyberpunk, vaporwave, oversaturation, cartoon.
```

---

## 30, 31, 32, 33 · `comp-01.jpg` `comp-02.jpg` `comp-03.jpg` `comp-04.jpg` — 4 componentes (4:3)

**`comp-01.jpg` (Experiencias presenciales):**
```
Cinematic close-up still-life of a single empty matte black notebook lying open on a polished concrete table, a single fountain pen resting beside it, illuminated by a single warm pendant light from above. Background: out-of-focus institutional venue, deep neutral tones. Mood: ready for the experience, premium dossier moment. Camera: medium format, top-down 3/4, shallow depth. Lighting: single warm pool, deep shadows. Color palette: matte black, warm cream light, polished concrete, no green accent. Photorealistic, 8K, editorial still-life.

NEGATIVE: text in notebook, logos, watermarks, multiple bright colors, busy clutter, oversaturation, cartoon.
```

**`comp-02.jpg` (Sesiones digitales):**
```
Cinematic close-up of a sleek matte black tablet device standing upright on a desk, screen glowing softly with abstract gradient (no text, no UI), face partially angled away from camera. Beside it: a single small ceramic cup of black coffee, wisp of steam rising. Background: out-of-focus warm wood texture. Mood: solo deep work session, premium digital learning. Camera: medium format, 3/4 angle, shallow depth, hyper-detailed reflections on screen. Lighting: single soft window light, warm ambient, deep shadows. Color palette: matte black device, warm wood, cream coffee cup, single thin institutional green #00B86A reflection on screen edge. Photorealistic, 8K, editorial still-life.

NEGATIVE: visible app icons, text on screen, brand logos, watermarks, oversaturation, cartoon, plastic 3d look.
```

**`comp-03.jpg` (Tutoría con IA):**
```
Cinematic abstract close-up of a single thin vertical line of soft institutional green light traveling through deep black void, with subtle ripples emanating outward — like a signal of guidance. Surrounding: complete deep black, subtle volumetric haze. Mood: AI tutor presence, abstract guidance, Apple Vision Pro spatial UI. Camera: macro, locked frame, shallow depth. Lighting: only inherent green glow. Color palette: 95% deep black, 5% institutional green #00B86A. Photorealistic abstract, 8K.

NEGATIVE: text, ui elements, recognizable forms, neon saturation, glitch, cyberpunk, oversaturation, cartoon.
```

**`comp-04.jpg` (Proyecto aplicado):**
```
Cinematic top-down of a single architectural blueprint paper unrolled on a polished concrete table — abstract diagrammatic lines (no text, no labels), simple geometric forms in cool grey ink on cream paper. Beside it: a precision ruler and a graphite pencil. Soft window light from upper left. Mood: a real project being designed, the application of strategy. Camera: medium format, top-down, hyper-detailed paper texture. Lighting: single window light, deep shadows. Color palette: cream paper, cool grey ink, polished concrete, single thin institutional green #00B86A line as a measuring guide. Photorealistic, 8K, editorial still-life.

NEGATIVE: readable text, labels, logos, multiple bright colors, busy clutter, oversaturation, cartoon, plastic 3d.
```

---

## 34, 35 · `mentor-cesar.jpg` `mentor-rodolfo.jpg` — Mentores (4:5)

> Mismo enfoque que las personas (silueta sin cara) hasta tener fotos reales. Cada una con sutil variación.

**`mentor-cesar.jpg` (César Vega · Inversiones):**
```
Cinematic vertical portrait, 3/4 back angle of a human silhouette wearing a tailored deep navy wool suit, standing in front of a wall of softly glowing horizontal data lines (abstract financial data, no readable numbers or text). Lit by warm directional light from the right. NO face visible. Background wall: deep neutral charcoal with the abstract glowing lines as bokeh. Mood: capital allocator, strategic investor, premium institutional. Camera: 85mm portrait, vertical 4:5, shallow depth. Lighting: warm key from right, deep shadow on left, ambient glow from background. Color palette: deep navy wool, charcoal background, soft amber glow lines, single thin institutional green #00B86A accent in background. Photorealistic, 8K, editorial portraiture without face.

NEGATIVE: face visible, smiling, posed stock executive, readable numbers or text, brand logos, oversaturation, cartoon.
```

**`mentor-rodolfo.jpg` (Rodolfo Lau · Energía):**
```
Cinematic vertical portrait, side profile silhouette of a human figure wearing a charcoal grey tweed blazer, standing at the edge of a wide industrial space — could read as a refinery or energy facility seen out of a window in the background, blurred in cinematic bokeh, lit by the soft warm glow of distant lights. NO face visible. Mood: industrial operator, deep capital allocator, strategic energy mind. Camera: 85mm portrait, vertical 4:5, shallow depth, deep field on subject. Lighting: cool ambient interior, warm distant industrial lights. Color palette: charcoal tweed, cool interior, distant warm amber dots, no green accent in this image (skip for variety). Photorealistic, 8K, editorial portraiture without face.

NEGATIVE: face visible, smiling, posed stock executive, recognizable facility, brand logos, text on signs, oversaturation, cartoon.
```

---

## 36 · `manifiesto-hero.jpg` — MANIFIESTO hero (16:9)

```
Cinematic wide aerial shot at the exact moment of dawn — a vast empty horizon of mountain ridges or desert plains in Latin America, with the first thin band of warm light cutting across the horizon line, while the upper sky remains deep navy-black. The land is in deep cool shadow. A single thin streak of institutional green light cuts horizontally across the mid-frame like a signal — the only color accent. Mood: condemned to arrive late, but not anymore — the dawn breaks, manifesto. Camera: aerial wide, ultra-low ISO, dramatic horizon line composition. Lighting: dawn rim light on horizon, deep cool shadow above and below, atmospheric haze. Color palette: deep navy upper sky, warm cream horizon band, deep cool grey land, single institutional green #00B86A streak. Generous negative space upper portion for text. Photorealistic, 8K, editorial cinematic landscape.

NEGATIVE: visible recognizable landmarks, text, oversaturation, neon, cartoon, vaporwave, stock landscape photo.
```

---

## 37 · `manifiesto-quote.jpg` — Quote band (21:9)

```
Cinematic ultra-wide of a single empty horizon — pure flat ocean meeting sky at the exact center horizontal line. The water below is deep cool steel blue, the sky above is soft cream-grey. A single small dark sailboat silhouette appears far in the distance at the horizon, like the only operator in the frame. Mood: the open horizon of the future, contemplative manifesto, Aman editorial. Camera: locked anamorphic ultra-wide, perfect symmetrical horizon, deep field. Lighting: soft diffused dawn / dusk, no harsh direct light. Color palette: cool steel water, cream sky, deep silhouette of boat, no green accent in this one. Generous negative space top and bottom for text (35%/35%). Photorealistic, 8K, editorial luxury minimalism.

NEGATIVE: visible boat brand, logos, text, multiple ships, busy water, oversaturation, neon, cartoon.
```

---

## 38 · `manifiesto-closing.jpg` — MANIFIESTO closing (16:9)

```
Cinematic wide shot of a single tall window in a dark interior, with deep warm dawn light streaming in from outside, casting a precise rectangle of golden light onto a polished concrete floor. The room beyond is in deep shadow. A single thin streak of institutional green light reflects off the window's edge — barely visible, restrained. Mood: dawn arrives, the call of the manifesto, the moment of decision. Camera: anamorphic wide, locked, dramatic light/shadow contrast. Lighting: single dawn window source, deep interior shadow. Color palette: deep blacks, warm golden window light, polished concrete, single restrained institutional green #00B86A. Negative space upper third. Photorealistic, 8K, editorial cinematic.

NEGATIVE: people, text, logos, multiple lights, oversaturation, neon, cartoon, busy interior.
```

---

## 39 · `blog-hero.jpg` — BLOG hero (16:9)

```
Cinematic wide top-down still-life of a long polished walnut desk with a single open broadsheet newspaper-style document at the center (no readable text — just abstract grey columns suggesting layout). Beside it: a fountain pen, a single thin glass of water, a brass paperweight. Soft window light from upper left. Background: out-of-focus deep neutral wall. Mood: editorial newsroom moment, premium analysis publication, NYT magazine still-life. Camera: medium format, top-down, hyper-detailed paper grain, shallow depth. Lighting: single warm window light, museum-grade shadows. Color palette: cream paper, deep walnut wood, polished brass, single thin institutional green #00B86A line as a margin marker. Photorealistic, 8K, editorial still-life premium.

NEGATIVE: readable text, headlines, logos, brand names, oversaturation, cartoon, busy clutter, stock newspaper photo.
```

---

## 40 · `blog-closing.jpg` — BLOG closing (16:9)

```
Cinematic close-up of a single hand (only the fingers visible, no face, no full hand — premium editorial framing) holding a sleek matte black tablet device displaying a softly glowing abstract gradient on its screen (no text, no UI). Background: deep cool neutral interior, slight bokeh. Mood: a reader receives the next edition, premium digital reading. Camera: medium format, 3/4 angle, shallow depth. Lighting: soft window light, deep shadow. Color palette: matte black device, neutral skin tone (slightly cool grading), deep neutral background, single institutional green #00B86A reflection on screen edge. Photorealistic, 8K, editorial still-life.

NEGATIVE: face visible, full hand pose stock photo, brand logos, app icons, text on screen, oversaturation, cartoon, plastic 3d.
```

---

## 41 · `article-featured.jpg` — Pieza destacada (4:3)

```
Cinematic wide architectural shot of a single sleek office building façade at night — clean horizontal lines of glass and dark steel, with windows glowing softly warm white revealing minimal interior silhouettes. The building is shot from a low angle, deep cool blue night sky above. A single thin band of institutional green light runs vertically along one corner edge of the building — the velocity signal. Mood: institutional headquarters at work after hours, the heart of decision velocity, premium corporate cinematic. Camera: anamorphic wide, low angle, deep focus, dramatic perspective. Lighting: warm interior glows, cool sky, restrained green accent. Color palette: cool deep blue sky, warm cream interior windows, deep matte building, single institutional green #00B86A vertical line. Photorealistic, 8K, editorial luxury architectural.

NEGATIVE: visible brand names, signs, logos, recognizable buildings, oversaturation, neon, cartoon, busy clutter, stock corporate photo.
```

---

## 42-47 · `article-01.jpg` to `article-06.jpg` — Archivo de artículos (16:10)

> 6 imágenes para cards del archivo. Mantener variedad pero coherencia. Cada una un mood ligeramente distinto.

**`article-01.jpg` (MBA caduca):**
```
Cinematic close-up still-life of a vintage academic textbook lying closed on a polished concrete surface, dust slightly visible on the leather cover (no readable title or text), illuminated by a single dramatic side light. The book appears old, archival. Beside it: a single sleek matte black tablet device, propped up. The contrast is the visual story. Mood: old vs new, MBA caduca. Camera: medium format, 3/4 angle, shallow depth, hyper-detailed leather and metal textures. Lighting: single side window light, deep shadows. Color palette: deep cognac leather, polished concrete, matte black device, no green accent. Photorealistic, 8K, editorial still-life.

NEGATIVE: readable text, university logos, brand names, oversaturation, cartoon.
```

**`article-02.jpg` (Cohorte itinerante):**
```
Cinematic top-down of a vintage worn map of the Americas spread on a wooden desk, with a single black wax thread tracing a complex route between cities (no text or city labels visible — just abstract geometric path). Beside it: a brass compass, a fountain pen. Soft warm light from upper right. Mood: planning an itinerant cohort. Camera: medium format, top-down, hyper-detailed paper texture. Lighting: single warm desk light, deep shadows. Color palette: cream cartographic paper, deep cool ink, brass, single thin institutional green #00B86A point at one waypoint. Photorealistic, 8K, editorial still-life.

NEGATIVE: readable text, country names, city labels, modern UI, oversaturation, cartoon.
```

**`article-03.jpg` (Costo de adoptar tarde):**
```
Cinematic close-up of a single sand timer (hourglass) on a polished dark surface, sand mid-fall, illuminated by a dramatic single side light. Background: deep matte black with subtle volumetric haze. Mood: time slipping, the cost of delay. Camera: medium format, 3/4 angle, shallow depth. Lighting: single dramatic side light, museum-grade. Color palette: warm cream sand, polished dark glass, deep black background, single thin institutional green #00B86A reflection on the glass edge. Photorealistic, 8K, editorial still-life.

NEGATIVE: text, logos, multiple objects, busy clutter, oversaturation, cartoon, plastic 3d.
```

**`article-04.jpg` (Mesa de mentores):**
```
Cinematic top-down of five different sleek matte black notebooks arranged in a slight asymmetric overlap on a polished walnut surface — each one slightly different texture/finish suggesting different operators, but all in the same dark palette. A single fountain pen rests across them. Soft pendant light from above. Mood: the curated mesa, multiple voices, one institution. Camera: medium format, top-down, hyper-detailed material textures. Lighting: single pendant pool, deep shadows. Color palette: deep walnut, varied matte blacks, brass pen, no green accent. Photorealistic, 8K, editorial still-life.

NEGATIVE: text, logos, watermarks, brand names visible, oversaturation, cartoon.
```

**`article-05.jpg` (Instituto vs academia):**
```
Cinematic side-by-side comparative still life: on the left, an old marble bust silhouette (no facial detail visible — just architectural silhouette) representing tradition; on the right, a sleek matte black abstract sculpture of pure geometric form representing institution. Both on the same deep dark surface, separated by a single thin vertical line of soft institutional green light running between them. Mood: the schism between academia and institution. Camera: medium format, side angle, shallow depth, hyper-detailed material textures. Lighting: dramatic chiaroscuro, single key light from above. Color palette: warm cream marble, deep matte black sculpture, polished dark surface, single institutional green #00B86A vertical line. Photorealistic, 8K, editorial still-life.

NEGATIVE: facial features visible, text, logos, oversaturation, cartoon, busy clutter.
```

**`article-06.jpg` (Aval universitario):**
```
Cinematic close-up of a single official seal embossed on cream cotton paper — abstract circular ornamental embossing, no text or readable insignia. Beside it: a fountain pen, a brass key, a leather portfolio edge. Lit by single dramatic warm side light. Mood: official endorsement, the legal foundation. Camera: medium format, top-down 3/4, hyper-detailed embossing texture. Lighting: single warm key light, deep shadows. Color palette: cream paper, deep cognac leather, polished brass, no green accent. Photorealistic, 8K, editorial still-life.

NEGATIVE: readable text, identifiable seals, university names, brand logos, oversaturation, cartoon.
```

---

## 48 · `aplicar-hero.jpg` — APLICAR hero (16:9)

```
Cinematic wide shot of a single empty modern reception lobby at twilight — polished concrete floor, deep matte black walls, a single floating thin warm pendant light over a long reception desk in the distance. Beyond the lobby: floor-to-ceiling glass walls revealing a soft city dusk. Mood: arrival at the institute, the moment of admission, premium interview waiting moment. Camera: anamorphic wide, deep symmetrical perspective leading to the desk, low ISO. Lighting: single warm pendant pool, cool ambient from windows, dramatic shadows. Color palette: deep blacks, warm cream pendant pool, cool blue dusk windows, single thin institutional green #00B86A line on the floor edge. Negative space upper third. Photorealistic, 8K, editorial cinematic.

NEGATIVE: people, text on signs, logos, brand identifiers, oversaturation, neon, cartoon, busy clutter.
```

---

## 49 · `aplicar-closing.jpg` — APLICAR closing (16:9)

```
Cinematic close-up of two empty designer black chairs facing each other across a small polished table, just before an interview begins — captured from a low angle, slightly side. A single warm pendant light hangs above the table casting a focused pool of light. Background: deep matte black void, slight bokeh suggesting an institutional venue. Mood: the conversation about to start, premium institutional admission. Camera: medium format, low angle, shallow depth. Lighting: single warm pendant pool, deep shadows. Color palette: matte black chairs, polished dark table, warm cream light pool, single thin institutional green #00B86A line on table edge. Photorealistic, 8K, editorial still-life.

NEGATIVE: people, text, logos, signs, multiple lights, oversaturation, cartoon, stock interview photo.
```

---

## 50 · `contacto-hero.jpg` — CONTACTO hero (16:9)

```
Cinematic wide architectural shot of a single open contemporary doorway — a tall, slim black-framed glass door slightly ajar at the end of a long polished concrete hallway. Warm light spills from inside the room beyond. The hallway itself is in cool deep shadow. A single thin institutional green line illuminates the bottom edge of the door frame — restrained signal. Mood: the door is open, the institutional mesa always available. Camera: anamorphic wide, perfectly symmetrical perspective down the hallway, deep focus. Lighting: cool ambient hallway, warm interior glow through doorway, dramatic light spill on floor. Color palette: deep blacks, polished concrete, warm cream room beyond, single institutional green #00B86A line. Negative space upper third. Photorealistic, 8K, editorial cinematic.

NEGATIVE: people, text, signs, logos, multiple light sources, oversaturation, neon, cartoon, busy interior.
```

---

## 51 · `contacto-closing.jpg` — CONTACTO closing (16:9)

```
Cinematic close-up of a single sleek matte black telephone handset (vintage premium design) resting on its cradle on a polished walnut desk, illuminated by a single warm pendant light. Background: deep neutral dark wall, slight bokeh. Mood: the line is open, ready to receive. Camera: medium format, 3/4 angle, shallow depth. Lighting: single warm pendant pool, deep shadows. Color palette: matte black telephone, deep walnut wood, warm cream light, single thin institutional green #00B86A reflection on the handset. Photorealistic, 8K, editorial still-life.

NEGATIVE: text, logos, brand names, modern smartphone, oversaturation, cartoon, plastic 3d.
```

---

## 52 · `sede-cdmx.jpg` — Sede CDMX (16:10)

```
Cinematic aerial wide shot of Mexico City at twilight — looking across Reforma avenue toward Chapultepec, with the city spreading toward distant volcanoes silhouetted against a deep purple-pink sky. Building windows glow warmly in cool blue dusk. Atmospheric haze rolls between buildings. NO recognizable specific landmarks (no Angel monument, no specific identifiable building) — just the abstract metropolitan texture. Mood: arrival in CDMX, premium travel campaign. Camera: aerial drone wide, anamorphic, deep field, painterly composition. Lighting: dramatic dusk, warm interiors meeting cool sky. Color palette: deep purple-pink sky, cool blue shadows, warm cream window glows, neutral building silhouettes, no green accent in this one. Photorealistic, 8K, editorial luxury travel.

NEGATIVE: identifiable Mexico City landmarks, text on buildings, logos, brand identifiers, oversaturation, neon, cartoon, stock travel photo.
```

---

## 53 · `sede-miami.jpg` — Sede Miami (16:10)

```
Cinematic aerial wide of Miami coastline at sunset — looking from above out toward the Atlantic, with cool turquoise water meeting a soft warm horizon. The line of dark high-rise buildings curves along the coast in mid-frame. NO recognizable specific landmarks. Atmospheric soft haze, cinematic light. Mood: arrival in Miami, premium aspirational travel. Camera: aerial drone wide, anamorphic, deep field. Lighting: golden sunset, cool ocean, soft atmospheric haze. Color palette: warm cream-pink sky, cool turquoise water, deep cool building silhouettes, no green accent. Photorealistic, 8K, editorial luxury travel.

NEGATIVE: identifiable Miami landmarks, beach umbrellas, people, text, logos, oversaturation, vaporwave, cartoon, stock travel photo.
```

---

## 54 · `sede-la.jpg` — Sede LA (16:10)

```
Cinematic aerial wide of Los Angeles at golden hour — looking across the city basin toward distant mountains silhouetted against a hazy warm sun. The endless grid of buildings spreads to the horizon. Soft atmospheric smog gives the city a cinematic glow. NO recognizable specific landmarks. Mood: arrival in LA, premium West Coast travel campaign. Camera: aerial drone wide, anamorphic, deep field, painterly. Lighting: golden hour with soft atmospheric haze, dramatic mountain silhouettes. Color palette: warm golden sky, cream city tones, cool deep mountain silhouettes, no green accent. Photorealistic, 8K, editorial luxury travel.

NEGATIVE: identifiable LA landmarks, Hollywood sign, palm tree cliché, beach, people, text, logos, oversaturation, cartoon, stock travel photo.
```

---

# Workflow recomendado

1. **Empieza por los heroes** (8 imágenes: una por página). Esos son los que más impacto visual tienen.
2. **Después los closings** (8 imágenes: cierran cada página).
3. **Después las quote-bands** (4 imágenes: dan ritmo cinematográfico).
4. **Después las cards de feature** (principios, pilares, componentes, aliados, mentores, sedes).
5. **Por último las del blog** (7 imágenes).

Total: **54 imágenes**. Si estás corto de tiempo, los **24 primeros** (heroes + closings + quote bands + 3 principios) ya dan una experiencia completa. El resto se puede ir reemplazando una por una sin romper nada.

# Hero video (cuando lo grabes / generes) — **LIGHT / SOBER**

> **CRÍTICO:** el video del landing va sobre fondo claro con `mix-blend-mode: multiply` y opacidad `.55`. Eso significa: **necesitas un video que sea principalmente CLARO** (cream/white/golden) — los blancos del video desaparecerán contra el fondo (multiply) y solo se verán los tonos medios y suaves shadows. Si el video es oscuro, se verá todo grisáceo y feo. **Tiene que ser luminoso, aireado, hora dorada.**

Reemplaza los archivos:
- `assets/hero-loop.mp4` (H.264, 1920×1080, 10–15s, loop perfecto, start frame = end frame, max 8MB)
- `assets/hero-loop.webm` (VP9, mismo contenido, max 5MB)
- `assets/hero-poster.webp` (frame 0 estático, 1920×1080)

## Prompt sugerido — Hero video (Sora / Runway / Kling 3.0 / Veo 3)

```
Total: 12s / 1 shot / 16:9 / locked tripod (no camera motion or extremely subtle parallax 2-3% maximum).

SCENE: Cinematic luminous editorial photograph come to life — a wide interior view of a contemporary Aman-Resort-style architectural lobby at golden hour. Floor-to-ceiling glass walls open onto a soft hazy Latin American skyline at sunrise. Pure cream-white walls, polished travertine floor, generous negative space.

MOTION (very subtle — this is critical):
- 0–4s: Soft golden morning light slowly intensifies through the glass, gentle volumetric haze drifting horizontally inside the room from left to right (almost imperceptible).
- 4–8s: A single thin ribbon of soft institutional green light (#00B86A) very gently glows on a distant building edge in the background hazy skyline — pulses once, slowly, at half opacity.
- 8–12s: The morning haze settles back, the green ribbon fades, returning EXACTLY to the start frame. Loop perfect — start frame = end frame, no jump cut visible.

CAMERA: Locked anamorphic 35mm tripod shot, deep depth of field, perfect horizontal composition. NO camera movement (or maximum 2-3% parallax — almost zero motion is preferred).

LIGHTING: Single warm directional sun from upper-right pouring through glass, soft diffuse fill from left, museum-grade exposure, gentle controlled bloom on highlights. NEVER overexposed clipping, NEVER heavy contrast.

COLOR PALETTE (locked):
- 80% pure cream-white #F7F5F0 / off-white #FAFAFA / warm cream #F4F0EA
- 15% soft warm pink-cream horizon, golden bloom highlights
- 4% near-black architectural structural lines #171A20
- 1% — single restrained point — institutional green #00B86A glow

REFERENCES: Aman Resort architectural film, Apple product page hero film, Tesla Model S landing video, Loro Piana editorial campaign, Hermès luxury brand films, Mubi cinematography (sober editions).

OUTPUT: 1920×1080, 24fps, perfect 12s loop. The video must work both at full opacity AND at .55 opacity with multiply blend mode (it will be composited over a cream gradient on the website). Test by mentally previewing the brightest 50% of pixels — those will mostly disappear; only mid-tones and soft shadows carry the image.

NEGATIVE: jitter, flicker, warped faces, oversaturated neon, cartoon style, text artifacts, glitch, low-detail textures, logo distortion, dark cinematic mood, heavy shadows, dramatic lighting, smog night scene, vaporwave, cyberpunk, multiple bright colors, harsh transitions, harsh camera movement, zoom, fast cuts, people, faces, text, logos, watermarks, brand names, identifiable city landmarks.
```

## Variante alternativa — Hero video (still-life producto sobre cream)

> Más cercano al "Tesla mostrando un Model Y blanco sobre fondo blanco". Más simple de generar, más controlable.

```
Total: 10s / 1 shot / 16:9 / locked tripod, ZERO camera movement.

SCENE: Editorial luxury product still-life come to life — a single thin polished black architectural model (an abstract elongated minimalist horizontal form, like an institutional building scale-model, no recognizable brand or text) suspended on an invisible mount in the dead center of a vast cream-white seamless studio environment. Soft directional warm sun light from upper-left.

MOTION (very subtle):
- 0–5s: A single thin reflection of soft institutional green light (#00B86A) very slowly travels along the top edge of the architectural model from left to right, like a slow sweep of dawn light catching the edge.
- 5–10s: The reflection completes its sweep and fades; ambient haze in the background subtly breathes; returns to start frame for perfect loop.

CAMERA: Locked tripod, medium format 80mm equivalent, perfect symmetry. ZERO camera movement.

LIGHTING: Single warm key light from upper-left, soft fill, museum-grade. Soft elegant shadow from the model on the seamless background.

COLOR PALETTE (locked):
- 90% pure cream-white #F7F5F0 / off-white #FAFAFA seamless background
- 7% deep matte black architectural form
- 2% soft warm grey shadow
- 1% institutional green #00B86A traveling reflection

REFERENCES: Apple product hero loop, Tesla product reveal moment, Loro Piana product film, Hermès luxury still-life motion.

OUTPUT: 1920×1080, 24fps, perfect 10s loop, designed to be displayed at .55 opacity multiply blend on a cream-white background.

NEGATIVE: dark backgrounds, dramatic shadows, camera movement, zoom, fast cuts, harsh transitions, people, text, logos, watermarks, brand names, neon, oversaturation, vaporwave, cyberpunk, glitch, multiple colors.
```
