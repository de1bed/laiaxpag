# LAIAX — Image Pack para landing page

Este ZIP trae imágenes ya renombradas para coincidir con las rutas `assets/img/...` de tu `index.html`.

## Cómo usarlo en Cursor

1. Descomprime este ZIP.
2. Copia la carpeta `assets/img/` dentro de la raíz de tu proyecto, al mismo nivel que `index.html`.
3. Si Cursor te pregunta si quieres reemplazar archivos existentes, acepta.
4. Abre la landing y revisa visualmente cada sección.
5. Si alguna imagen se ve demasiado oscura, baja un poco el overlay de esa sección en CSS (`.fs__overlay` o `.quote-band__overlay`).

La estructura debe quedar así:

```txt
/tu-proyecto
  index.html
  /assets
    /img
      home-quote.jpg
      home-made.jpg
      home-labs.jpg
      ...
```

## Mapeo recomendado por sección

| Archivo | Dónde va | Por qué |
|---|---|---|
| `home-quote.jpg` | Home · Quote band | Imagen oscura perfecta para frase encima; ejecutivo viendo la ciudad. |
| `home-closing.jpg` | Home · Closing CTA | Ejecutivo en corredor claro; futuro, decisión, aspiracional. |
| `home-made.jpg` | Home · MADE showcase | Auditorio ejecutivo claro; comunica cohorte/alta dirección. |
| `home-labs.jpg` | Home · LABS | Mesa estratégica/operaciones; comunica transformación real. |
| `home-fellowship.jpg` | Home · FELLOWSHIP | Founders en aeropuerto; viaje, expansión, red internacional. |
| `instituto-hero.jpg` | Instituto · Hero | Arquitectura monumental e institucional. |
| `instituto-mvp.jpg` | Instituto · Misión/visión/propósito | Corredor claro con ejecutivo; liderazgo y claridad. |
| `instituto-quote.jpg` | Instituto · Quote band | Variante oscura para frases fuertes. |
| `nosotros-hero.jpg` | Nosotros · Hero | Reunión nocturna profesional y humana. |
| `nosotros-origen.jpg` | Nosotros · Origen | Arquitectura limpia para hablar de evolución institucional. |
| `made-hero.jpg` | MADE · Hero | Auditorio/cohorte ejecutiva. |
| `made-quote.jpg` | MADE · Quote band | Imagen oscura para frase. |
| `made-closing.jpg` | MADE · Cierre | Viaje/aeropuerto; ideal para reforzar itinerancia. |
| `aplicar-hero.jpg` | Aplicar · Hero | Entrevista/admisión selectiva. |
| `aplicar-closing.jpg` | Aplicar · Cierre | Corredor claro; decisión y futuro. |
| `contacto-hero.jpg` | Contacto · Hero | Arquitectura institucional clara. |
| `contacto-closing.jpg` | Contacto · Cierre | Imagen oscura con espacio para CTA. |
| `person-01.jpg` | Equipo/persona 1 | Retrato editorial vertical. |
| `person-02.jpg` | Equipo/persona 2 | Temporal; ideal generar retratos específicos después. |
| `person-03.jpg` | Equipo/persona 3 | Temporal; ideal generar retratos específicos después. |
| `principio-01.jpg` | Principios · contenido en tiempo real | Reunión estratégica. |
| `principio-02.jpg` | Principios · operadores activos | Auditorio ejecutivo. |
| `principio-03.jpg` | Principios · IA como amplificador | Operaciones/mesa estratégica con reflejos verdes. |
| `sede-cdmx.jpg` | Contacto · Sedes | Arquitectura institucional. |
| `sede-miami.jpg` | Contacto · Sedes | Aeropuerto/global. |
| `sede-la.jpg` | Contacto · Sedes | Ciudad moderna LATAM/global. |

## Carpeta `originals/`

También dejé una carpeta `originals/` con las imágenes descriptivas para que puedas probar otras combinaciones sin depender de los nombres del HTML.

- `01_home_city_latam_future.jpg`
- `02_dark_window_quote.jpg`
- `03_bright_founder_corridor.jpg`
- `04_late_night_strategy_room.jpg`
- `05_executive_auditorium_made.jpg`
- `06_founders_airport_fellowship.jpg`
- `07_institutional_architecture.jpg`
- `08_executive_portrait_vertical.jpg`
- `09_operations_labs_strategy.jpg`
- `10_selective_admissions_interview.jpg`

## Prompt rápido para Cursor

Copia esto en Cursor si quieres que él lo integre:

```txt
Tengo una landing en index.html que usa rutas como assets/img/home-made.jpg. Ya agregué un paquete de imágenes nuevas en assets/img. Revisa que todas las rutas data-bg carguen correctamente, no cambies textos ni estructura. Solo ajusta overlays si alguna imagen queda demasiado oscura. Mantén el estilo Tesla/Apple: limpio, premium, institucional, con acento verde.
```
