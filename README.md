# LAIAX — El Instituto del Presente

Sitio oficial e identidad de marca de **LAIAX** y su programa **MADE**.

> *"Construimos el presente con velocidad, voltaje y señal."*

---

## Stack

- **Static SPA** (HTML + CSS + Vanilla JS) con router por hash
- **Tipografía**: Saira (display) + Inter Tight (body) vía Google Fonts
- **Video hero**: H.264 (`mp4`) + VP9 (`webm`) + poster `webp`
- **Sin frameworks** en producción — un único `index.html` con 5 páginas internas

## Estructura

```
.
├── index.html               # Sitio principal (SPA con 5 páginas)
├── brand.html               # Brand book interactivo
├── brand-print.html         # Versión imprimible del brand book
├── assets/                  # Video, posters, documentos
├── design/                  # Documentación de marca, prompts, master doc
├── frames/                  # Frames extraídos del video hero
├── uploads/                 # Assets crudos subidos por el equipo
└── laiax-motion/            # Sandbox React (Vite) — experimentos de motion
```

## Páginas del sitio

| Ruta            | Contenido                                              | Acento  |
|-----------------|--------------------------------------------------------|---------|
| `#/home`        | Hero video + programas + manifiesto pull + CTA         | Verde   |
| `#/instituto`   | ES / NO ES, misión, visión, propósito, tesis, roadmap  | Verde   |
| `#/made`        | 17 ciudades, 3 pilares, componentes, calendario        | Ámbar   |
| `#/manifiesto`  | Manifiesto completo + frases clave                     | Verde   |
| `#/aplicar`     | 3 pasos, inversión, FAQ                                | Verde   |

## Sistema de color (brand tokens)

| Token         | Hex       | Uso                          |
|---------------|-----------|------------------------------|
| `--ink`       | `#0A0A0B` | Territorio oscuro            |
| `--paper`     | `#F5F4F0` | Territorio claro             |
| `--green`     | `#00D27A` | Acento A · Velocidad (LAIAX) |
| `--lime`      | `#C6FF3D` | Acento B · Voltaje           |
| `--amber`     | `#FF5B2E` | Acento C · Señal (MADE)      |
| `--mute`      | `#7A7A82` | Texto secundario             |

## Desarrollo local

```bash
# Servir el sitio estático (cualquier servidor HTTP sirve)
python -m http.server 5500
# → http://localhost:5500/index.html
```

Para el sandbox de motion en React:

```bash
cd laiax-motion
npm install
npm run dev
```

## Brand assets

- `design/LAIAX_DocumentoMaestro.md` — fuente única de verdad de copy
- `brand.jsx` — referencia tipográfica + paleta
- `design/04-LAIAX-ASSET-PROMPTS.md` — prompts F.R.A.M.E. para generación de assets

---

© LAIAX 2026 — Todos los derechos reservados.
