# Mapa de assets visuales LAIAX — imágenes, fondos y elementos gráficos

Documento de trabajo para sustituir o crear **todos los visuales** con generación asistida (referencia: **GPT Image 2** / flujo ChatGPT Imágenes), alineado a las referencias **Tesla** (full-bleed cinematográfico, sensación “producto premium”, ritmo de sección) y **Robinhood** (superficies casi enteras de imagen, contraste alto, bloques de iconografía abstracta y geometría limpia).

**Alcance:** solo lo que vive en producción en `index.html` más huecos de diseño ya previstos en CSS (sin rampear `brand-print.html` salvo que decidan unificar criterio de marca).

---

## 1. Criterios de arte (resumen)

| Rol visual | Referencia | Qué buscamos en LAIAX |
|------------|------------|------------------------|
| **Secciones full-bleed** | Tesla Shop / Tesla web | Imagen o vídeo que **define** la franja; texto encima con overlay legible; transición limpia a la siguiente sección. |
| **Fondo “atmósfera”** | Robinhood | Imagen pensada como **lienzo** (no como “foto suelta”); bordes y composición pensados para recorte vertical en móvil. |
| **Gráficos / iconos** | Robinhood | Formas **abstractas**, líneas finas, nodos, wireframes suaves; en LAIAX: verde `#00B86A` / `#00D27A`, negros y grises del sistema, sin caricatura “stock”. |
| **Fotorrealismo “Tesla”** | Tesla | Escenas que parezcan **rodaje o CGI de alta gama** (iluminación controlada, profundidad de campo, sin exceso de clichés de IA genérica). |
| **Excepción** | Manifiesto / datos | Donde el mensaje es **diagrama o metáfora**, puede ser claramente **ilustración o visualización** (no fingir foto). |

**Tono LAIAX ya logrado en CSS:** blanco dominante, carbón, acento verde medido. Los nuevos fondos no deben introducir paletas ajenas (no azules eléctricos ni Magenta “startup genérica”) sin revisión.

---

## 2. GPT Image 2 — notas técnicas (OpenAI)

Fuente: [GPT Image Generation Models Prompting Guide](https://cookbook.openai.com/examples/multimodal/image-gen-models-prompting-guide) y documentación de modelo **gpt-image-2**.

**Modelo recomendado para producción:** `gpt-image-2` (calidad `low` / `medium` / `high` según iteración vs coste).

**Restricciones de tamaño** (parámetro `size`):

- Borde máximo **&lt; 3840px**
- Ambos lados **múltiplos de 16**
- Relación **largo:ancho ≤ 3:1**
- Píxeles totales entre **655 360** y **8 294 400**
- Por encima de **2560×1440** (2K): considerar resultados **más variables**; conviene pruebas A/B o `medium`/`high`

**Tamaños de referencia útiles:**

| Uso en web | Resolución orientativa | Nota |
|------------|-------------------------|------|
| Hero widescreen “seguro” | **2560×1440** | Tope de fiabilidad citado por OpenAI |
| Landscape estándar API legacy | 1536×1024 | Útil si integran flujos mixtos |
| Recorte móvil | Misma pieza o variante **más vertical** (1024×1536) | Generar **dos masters** si el recorte automático arruina la composición |

**Prompting (resumen de la guía):**

- Ser explícitos en **estilo** (cinematic, editorial, 35mm, soft fog, etc.) y en **qué NO** queremos (sin texto en imagen salvo brief controlado, sin logos de terceros, etc.).
- Para **infografías o texto en imagen**, GPT Image 2 está fuerte; igual revisar ortografía y pixelación.
- Iterar por **edición** cuando ya exista una base aprobada.

**Vídeo del hero:** no es GPT Image; requiere **otra herramienta** (generación de vídeo, stock licenciado, o loop corto compuesto). Este mapa lo lista como asset aparte.

---

## 3. Leyenda de columnas en las tablas

- **Prioridad:** P0 crítico para percepción de marca / pedido explícito; P1 alto; P2 mejora; P3 opcional.
- **Acción:** *Reemplazar* (archivo existe pero no sirve), *Nuevo* (no hay `data-bg` / falta pieza), *Rediseñar* (UI/SVG, no solo raster), *Mantener provisional*, *Revisar política* (fotos de personas).
- **Tipo:** F = fotorrealismo metáfora; G = gráfico abstracto / wireframe; I = infografía ligera; P = retrato / persona; Ícono = asset vectorial o raster de icono grande.

---

## 4. HOME (`#home`)

| # | Bloque / selector | Asset o comportamiento actual | Prioridad | Acción | Tipo | Brief / notas |
|---|-------------------|---------------------------------|-----------|--------|------|----------------|
| H1 | `#js-hero-landing` + vídeo | `assets/video/hero.mp4` | P1 | Reemplazar / brief vídeo | Cinemático | Loop corto: LATAM × tecnología × velocidad; sin texto en frame; fundido compatible con máscara CSS actual (negro abajo). |
| H2 | `.hero-bridge` | Solo CSS (patrón + textura) | P3 | Opcional: capa de imagen muy sutil | G | Si aburre el plano: bruma verde muy suave o noise premium; no competir con el copy. |
| H3 | `.triptych__bg` | `made-cities.jpg` | P1 | Reemplazar | F | Mapa itinerario / metrópoli dual hemisferio; composición **horizontal** con interés también en **tercio central** (móvil). |
| H4 | `#home-instituto .split__media` | `instituto-hero.jpg` | P1 | Reemplazar | F | “Infraestructura / velocidad” sin literalismo MBA; luz editorial, no stock sonriente. |
| H5 | `#home-problema` · `.info--soft.home-problema--layer` | **Sin imagen** (gradiente + puntos) | **P0** | **Nuevo** fondo full-bleed | F o G | **Tu punto 2:** imagen Robinhood/Tesla que **llene toda la franja**; probar variante oscura con texto claro o imagen clara con overlay oscuro en CSS (ajustar tokens si hace falta). Master horizontal + prueba de lectura móvil. |
| H6 | `#home-tesis` `.quote-band__bg` | `home-quote.jpg` | P1 | Reemplazar | F | Banda cinematográfica; copy ya va en HTML — fondo sin tipografía incrustada. |
| H7 | `#home-provoca` · `.provoca-grid` | Iconos **SVG inline** genéricos | **P0** | **Rediseñar** | Ícono / G | **Tu punto 3:** iconografía estilo Robinhood (abstracta, grande), colores marca; puede ser **SVG exportado** desde prompts o dibujo + IA para textura. Subir tamaño en CSS. |
| H8 | `#home-made` `.split__media` | `home-made.jpg` | **P0** | Reemplazar | F / I | **Tu punto 4:** evitar cliché “IA futurista” genérico; preferir **equipo en sala**, **ciudad**, **briefing**, o **visualización de datos** creíble. |
| H9 | `.specs` (MADE cohorte 01) | Solo tipografía / rejilla | P2 | Nuevo opcional | G | **Tu punto 5:** textura ligera, mapa tenue, o franja de datos abstractos detrás del bloque — sin competir con números. |
| H10 | `#home-pipeline` thumbs | `home-labs.jpg`, `home-fellowship.jpg` | P1 | Reemplazar | F / I | Labs = taller / laboratorio; Fellowship = puente USA–LATAM metafórico; mismo grading. |
| H11 | Cierre `.fs--dark` `#home` último artículo | `home-closing.jpg` + `fs__bg--g4` | **P0** | Reemplazar | F | **Tu punto CTA home:** menos “capas chocadas”; una sola lectura de luz + profundidad (noche en ciudad, auditorium, etc.). |

---

## 5. INSTITUTO (`#instituto`)

| # | Bloque / selector | Asset actual | Prioridad | Acción | Tipo | Brief / notas |
|---|-------------------|--------------|-----------|--------|------|----------------|
| I1 | `.hero-split__visual` | `instituto-hero.jpg` | P1 | Reemplazar (coherente con H4) | F | Misma línea que home instituto o variante de sesión; evitar duplicar **exactamente** el mismo archivo si buscan sensación “institucional viva”. |
| I2 | Definición dual columns | Ninguna | — | — | — | Solo texto; sin cambio de imagen. |
| I3 | `.split--cream` MVP | `instituto-mvp.jpg` | P1 | Reemplazar | F | Misión/visión como **ambiente** (mesa, horizonte, documento), no iconos obvios. |
| I4 | `.quote-band` | `instituto-quote.jpg` | P1 | Reemplazar | F | Refuerzo del diagnóstico “tarde vs talento”; escala humana o paisaje urbano tenso. |
| I5 | Principios `.feat__card__media` ×3 | `principio-01.jpg` … `03.jpg` | P1 | Reemplazar | F / I | Tres piezas **distintas** (tiempo real, operadores, amplificador); estilo unificado tipo editorial Tesla. |
| I6 | Marco institucional | Ninguna imagen | — | — | — | Statbar texto; opcional P3 textura de fondo muy sutil en `.info--cream`. |
| I7 | `cta-strip--cream` cierre | Ninguna | — | — | — | Superficie sólida; opcional P3 geometría Robinhood muy suave en CSS/SVG. |

---

## 6. NOSOTROS (`#nosotros`)

| # | Bloque / selector | Asset actual | Prioridad | Acción | Tipo | Brief / notas |
|---|-------------------|--------------|-----------|--------|------|----------------|
| N1 | `.hero-split__visual` | `nosotros-hero.jpg` | P1 | Reemplazar | F | Equipo / mesa institucional; luz natural premium. |
| N2 | Puente `.nosotros-bridge` | Solo texto | P3 | Opcional fondo | G | Muy sutil si quieren menos “bloque gris plano”. |
| N3 | Origen `.split__media` | `nosotros-origen.jpg` | P1 | Reemplazar | F | Evolución Fly → instituto (viaje, itinerancia); sin logos de terceros en imagen. |
| N4 | Equipo `.person__photo` ×3 | `person-01.jpg` … `03.jpg` | **Revisar política** | Reemplazar o sustituir por ilustración | P / F | Si los nombres son reales: **fotografía real** puede ser obligatoria por veracidad; si aceptan IA: **siluetas / entornos** sin rostro identificable o retratos acordados. |
| N5 | Aliados `.feat__card__media` ×3 | `aliado-cut.jpg`, `aliado-fly.jpg`, `aliado-mesa.jpg` | P1 | Reemplazar | F | Campus/edificio abstracto; comunidad; red — sin infringir marcas; no reproducir logotipos en IA. |
| N6 | `.specs` snapshot | Solo números | P2 | Igual que H9 | G | Opcional textura. |
| N7 | `cta-strip--card` | Tarjeta CSS, sin foto | — | — | — | OK como está; opcional P3 patrón geométrico suave en borde. |

---

## 7. MADE (`#made`)

| # | Bloque / selector | Asset actual | Prioridad | Acción | Tipo | Brief / notas |
|---|-------------------|--------------|-----------|--------|------|----------------|
| M1 | Hero `.fs--made-tight` | `made-hero.jpg` | P0 | Reemplazar | F | Full-bleed “maestría itinerante”; evitar montajes genéricos; coherente con `made-hero-rail`. |
| M2 | `.specs.specs--cream` | Sin imagen | P2 | Opcional | G | Mismo criterio que H9. |
| M3 | `.quote-band` | `made-quote.jpg` | P1 | Reemplazar | F | Carretera / horizonte / movimiento; sin texto en imagen. |
| M4 | Pilares `.pilar-flow__photo` ×3 | `pilar-01.jpg` … `03.jpg` | P1 | Reemplazar | F | Mentores, ciudad, interfaz IA **creíble** (no cliché glow). |
| M5 | Componentes `.feat__card__media` ×4 | `comp-01.jpg` … `04.jpg` | P1 | Reemplazar | F / I | Cuatro historias distintas; posible estilo “product shot” Tesla para componentes digitales. |
| M6 | Calendario `.split__media` | `made-cities.jpg` (reuso) | P1 | Reemplazar o desduplicar | F | Si triptych ya usa una pieza, **variar** ángulo/ciudad para no repetir asset en misma sesión de usuario. |
| M7 | Lista ciudades | Sin thumbs | — | — | — | Solo tipografía. |
| M8 | Mentores `.person__photo` ×2 | `mentor-cesar.jpg`, `mentor-rodolfo.jpg` | **Revisar política** | Igual que N4 | P | Misma cautela: retratos reales vs ilustrativos. |
| M9 | Inversión | Sin imagen | — | — | — | OK. |
| M10 | Cierre `.cta-strip--split` | `made-closing.jpg` | P1 | Reemplazar | F | Columna visual fuerte; encajar con copy “operadores del presente”. |

---

## 8. MANIFIESTO (`#manifiesto`)

| # | Bloque / selector | Asset actual | Prioridad | Acción | Tipo | Brief / notas |
|---|-------------------|--------------|-----------|--------|------|----------------|
| Q1 | Hero corto `.fs--short` | `manifiesto-hero.jpg` | P1 | Reemplazar | F | Tensión “tarde vs liderazgo”; atmósfera nocturna o amanecer urbano. |
| Q2 | `.manif-contrast__photo` | `manifiesto-quote.jpg` | P1 | Reemplazar | F | Panel derecho: imagen **nítida** que contraste con texto (ya hay overlay en CSS). |
| Q3 | Frases archivo | Ninguna | — | — | — | Tipográfico. |
| Q4 | Statbar “contra qué” | Ninguna | P3 | Opcional iconos | G | Si quieren más Robinhood: pequeños símbolos abstractos por celda (SVG). |
| Q5 | Cierre split | `manifiesto-closing.jpg` | P1 | Reemplazar | F | Cierre emocional + espacio para titular. |

---

## 9. EDITORIAL (`#blog`)

| # | Bloque / selector | Asset actual | Prioridad | Acción | Tipo | Brief / notas |
|---|-------------------|--------------|-----------|--------|------|----------------|
| E1 | `.article--featured` media | `article-featured.jpg` | P1 | Reemplazar | F / I | Pieza “tesis velocidad”; aspect ratio 16:9 + **recorte** en móvil (grid ya fuerza layout). |
| E2 | Archivo `.archive-row__thumb` ×6 | `article-01.jpg` … `06.jpg` | P1 | Reemplazar | F / I | Una ilustración por tema de fila; coherencia de grilla (luz, saturación). |
| E3 | Cierre `cta-strip--rail` | Sin imagen | — | — | — | Franja con borde verde; OK. |

---

## 10. APLICAR (`#aplicar`)

| # | Bloque / selector | Asset actual | Prioridad | Acción | Tipo | Brief / notas |
|---|-------------------|--------------|-----------|--------|------|----------------|
| A1 | `.action-hero--apply` | **Sin `data-bg` en HTML** (existe `aplicar-hero.jpg` en carpeta pero **no enlazado**) | P2 | **Nuevo** o cablear | F | Hero de admisión con misma jerarquía Tesla; opción: usar archivo huérfano o regenerar. |
| A2 | Pasos / inversión / FAQ | Sin imágenes | — | — | — | OK. |
| A3 | `cta-strip--inset` | Inset CSS | P3 | Opcional patrón | G | Muy sutil. |

---

## 11. CONTACTO (`#contacto`)

| # | Bloque / selector | Asset actual | Prioridad | Acción | Tipo | Brief / notas |
|---|-------------------|--------------|-----------|--------|------|----------------|
| C1 | `.contact-gate` | Sin imagen hero | P3 | Opcional | F | No obligatorio; página ya es utilitaria. |
| C2 | `.sede__photo` ×3 | `sede-cdmx.jpg`, `sede-miami.jpg`, `sede-la.jpg` | P1 | Reemplazar | F | Ciudades ancla; **consistencia** de altura y horizonte entre las tres. |
| C3 | Cierre `cta-strip--contact-min` | Sin foto | — | — | — | OK. |

---

## 12. Activos en disco sin uso en `index.html` (revisar)

Estos archivos aparecen bajo `assets/img/` pero **no** están referenciados en el HTML actual del repo:

- `aplicar-hero.jpg`, `blog-hero.jpg`, `contacto-hero.jpg`
- `instituto-closing.jpg`, `nosotros-closing.jpg`, `blog-closing.jpg`, `contacto-closing.jpg`

**Acción sugerida:** o bien **integrarlos** en una futura iteración (heroes de blog/contacto/aplicar), o **archivarlos** para no confundir al equipo de arte.

---

## 13. Resumen de conteos (orden de magnitud)

| Categoría | Cantidad aprox. |
|-----------|-----------------|
| Slots `data-bg` / medios en `index.html` | **~45** referencias a `assets/img/` + **1** vídeo |
| Prioridad P0 (explícito + crítico percepción) | **4** (H5 provoca iconos, H7, H8, H11 + vídeo H1 si cuenta aparte) |
| Nuevos huecos sin imagen hoy | **H5**, **H9/M2 opcional**, **A1**, opcionales varios P3 |
| Piezas “política retrato” | **5** fotos de personas (equipo 3 + mentores 2) |
| Iconografía Robinhood (provoca) | **4** ítems + posible statbar manifiesto |

---

## 14. Orden sugerido de implementación “página por página”

1. **Home:** H5 (fondo “Por qué existe”) → H7 (iconos provoca) → H8 → H11 → H1 vídeo → resto H*.
2. **MADE:** M1 → M4/M5 → M6/M10 → M3/M2.
3. **Instituto + Nosotros:** I1–I5, N1–N5, decisiones N4.
4. **Manifiesto + Editorial:** Q1–Q5, E1–E2.
5. **Contacto + Aplicar:** C2, A1 opcional.

---

## 15. Dudas abiertas (para alinear contigo)

1. **Retratos:** ¿100 % IA aunque haya nombres propios en copy, o fotos reales para mentores y equipo?
2. **Texto dentro de imagen:** ¿Prohibido siempre, o permitido en thumbs editoriales generados?
3. **Vídeo hero:** ¿Presupuesto/tiempo para clip generado vs stock licenciado vs loop abstracto?
4. **Unificación:** ¿Los mismos tres pilares visuales (p. ej. “ciudad + sala + dato”) en todo el sitio para reconocimiento, o variedad máxima?

Cuando confirmes estas cuatro, los briefs de IA pueden quedar más cerrados y con menos retrabajo.

---

*Última actualización del mapa: alineado a `index.html` del repo y referencias visuales Tesla / Robinhood proporcionadas.*
