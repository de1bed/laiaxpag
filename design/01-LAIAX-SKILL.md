# LAIAX — Design Skill (attach this file to your AI design sessions)

> Use as a "skill" / system prompt. Adjuntar este archivo al inicio de cualquier sesión con Claude / Cursor / GPT antes de pedir prompts, mockups o código.

---

## 1. Quién es LAIAX

LAIAX es un **instituto** Latinoamericano que acelera la adopción empresarial de IA y tecnologías exponenciales. **No es una escuela**, no es un bootcamp, no es una marca personal. Es **infraestructura institucional**.

Voz: institucional, asertiva, directa, premium. Frases cortas. Sin jerga tech infantil. Sin emojis. Sin tono "startupero".

Sub-producto: **MADE** — Maestría en Alta Dirección de Empresas, itinerante, 17 ciudades / 17 meses.

Lectores ideales: directivos, founders maduros, family offices, operadores ejecutivos LATAM + US.

Referencias mentales (mood, no copia):
- **Aman Resorts** (silencio + escala)
- **Hermès editorial**
- **a16z institucional + A24 cinematic**
- **Rimowa / Off-White editorial**
- **Mubi (motion grading)**
- **Net-a-Porter editorial photography**

---

## 2. Lo que NO es

- No look "tech startup juguetón"
- No glitch / cyberpunk / neón saturado
- No ilustraciones planas tipo Notion
- No 3D Spline juguetón
- No fotos stock de ejecutivos sonriendo
- No "AI tech bro around laptop"
- No degradados arcoiris / vaporwave
- No fonts geométricas tipo Michroma / Orbitron
- No grandes textos generados dentro de la imagen (los textos van en HTML)
- No emoji en UI

---

## 3. Sistema visual — Locked

### 3.1 Color tokens
```
--ink:        #0A0A0B   (fondo principal)
--ink-2:      #131316   (capa 2)
--ink-3:      #1A1A1E   (capa 3 / cards)
--paper:      #F5F4F0   (cream institucional, NO blanco puro)
--line:       #2A2A2E
--mute:       #7A7A82
--accent:     #00D27A   (verde LAIAX — usar con disciplina)
--accent-2:   #C6FF3D   (lime — solo halos / rara vez)
```

**Regla**: el verde es **acento institucional**, no base. Aparece en:
- líneas finísimas que trazan dirección
- un halo / glow muy controlado
- un único punto activo (live dot, link hover)
- nunca como background completo

### 3.2 Tipografía
- Display: **Saira Light (300)** — única familia para títulos
- Cuerpo: **Inter Tight 400/500**
- Eyebrows / labels / captions: **JetBrains Mono 400**, mayúsculas, tracking `0.18em`
- **Nunca** mezclar Saira con Michroma, ni con serifs raros, ni con "tech display fonts"

Si la dirección creativa exige un toque editorial premium puntual (un solo titular cinematográfico): **Instrument Serif Italic** como excepción. Una sola pieza por página.

### 3.3 Tono tipográfico
- Tracking apretado en displays grandes (`-0.02em` a `-0.03em`)
- Títulos de sección en Saira 300, **no** 200/Extralight
- Body 14–18px, line-height 1.55–1.65
- Mono labels: 11px, tracking 0.18em

### 3.4 Composición
- Máximo aire / negative space (40%+ del frame en hero)
- Asimetría intencional, no centrado obvio
- Grid 12 col, gutter 24–32, max 1280–1440
- Bordes finos `1px` en lugar de cards con sombra
- Vidrio (liquid glass) **muy** sutil, 1.4px borde gradiente, blur 4–6px
- Botones tipo pill, label en mono, icono lucide outline, peso 1.5px

### 3.5 Movimiento
- Easing: `cubic-bezier(.2,.8,.2,1)` siempre
- Duración base: 0.6s reveals, 0.9s hero, 1.2s grandes
- `prefers-reduced-motion` respetado
- Lenis para scroll suave
- Loops cinematográficos, **start frame = end frame**
- Parallax muy contenido (max 6% movimiento en scroll)

---

## 4. Lenguaje visual — **LAIAX Shimmer**

Pensar **dimensión alterna, modernísima, líquida**. NO institucional señor de boardroom.

Refs locked:
- **Annihilation** (Shimmer membrane)
- **Tron Legacy** en verde (no azul)
- **Spider-Verse multiverso glitch**
- **Apple Vision Pro keynote** (spatial, volumétrico)
- **Active Theory + Igloo Inc + Vercel ship**
- **Refik Anadol / Daniel Arsham** instalaciones de luz
- **Linear / Raycast** gradients y glass

Sujetos válidos (Shimmer-grade):
- **Vidrio líquido** verde flotando en void
- **Membrana** vertical translúcida (tipo Shimmer wall)
- **Monolitos** suspendidos en niebla volumétrica verde
- **Terreno LATAM** como wireframe topográfico de luz verde
- **Siluetas humanas** retroiluminadas por el verde, nunca caras
- **Marca líquida** que se forma de mercurio bioluminiscente
- **Ribbons de luz** atravesando el void a alta velocidad
- **Cubos** que florecen ramas fractales de luz verde

Sujetos prohibidos:
- Boardrooms con ejecutivos
- Manos sobre cuero / mesas de junta
- Aman / Hermès interiors
- Calles de ciudad fotorrealistas
- Cualquier oficina

Cinematografía:
- **35mm + ARRI ALEXA** color science empujada **fría y verde**
- **Bloom + halation** prominentes
- **Volumetric fog** en casi todo
- **Sub-surface scattering** en líquidos
- **Lensing / chromatic aberration** sutil en bordes
- Negros profundísimos, casi `#03050A`
- Verde como **ATMÓSFERA**, no como acento

---

## 5. Reglas para prompts (siempre)

### Para GPT Image 2
Estructura obligatoria, en orden:
1. **Scene/background**
2. **Subject**
3. **Key visual details** (materiales, paleta — incluir HEX)
4. **Composition / camera** (lente, framing, espacio negativo)
5. **Lighting / mood**
6. **Constraints** (qué NO hacer)

Cierre siempre con: `Photorealistic editorial photography, no text in image, no logos, no watermark, no people facing camera (unless required), brand palette only.`

### Para Kling 3.0 / Seedance 2.0
1. **Primera línea**: `Total: Xs / N shots / 16:9` (o 9:16). Es regla de la doc oficial.
2. Anclar sujetos al inicio (consistency)
3. Describir cámara explícita: `slow push-in`, `locked frame`, `dolly-in`, `lateral tracking`, `rack focus`
4. Describir motion del sujeto **beat por beat**
5. Para loop perfecto: **start frame = end frame**, usar feature Start & End Frames si existe
6. Negative prompt al final: `jitter, flicker, warped faces, oversaturated neon, cartoon style, text artifacts, glitch, low-detail textures, logo distortion`

---

## 6. Output esperado de la IA cuando le pidas algo

Cuando alguien (humano o IA) trabaje con LAIAX **debe** entregar:

1. Una pieza con **paleta locked**
2. Tipografía locked (Saira/Inter Tight/JetBrains Mono)
3. Sin elementos prohibidos de la sección 2
4. Mood institucional editorial premium
5. Texto en HTML/CSS, no quemado en imágenes

Si una herramienta no respeta esto, **rechazar y re-prompt**. No aceptar "primer intento".
