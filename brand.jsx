/* global React, ReactDOM, DesignCanvas, DCSection, DCArtboard */

const { useState, useEffect } = React;

/* =========================================================
   LOGO MARKS — versiones refinadas de la flecha de velocidad
   ========================================================= */

// V1 — refinamiento fiel del original: ala + estela
function MarkArrowFaithful({ color = '#0A0A0B', accent = '#00D27A', stroke = false }) {
  return (
    <svg viewBox="0 0 200 120" width="100%" height="100%" aria-label="LAIAX mark">
      {/* Ala principal (verde) — triángulo afilado, dinámico */}
      <path d="M 8 90 L 192 18 L 175 38 L 30 90 Z" fill={accent} />
      {/* Estela / sombra (negro/oscuro) — más corta, da profundidad */}
      <path d="M 95 102 L 165 60 L 158 78 L 110 102 Z" fill={color} />
    </svg>
  );
}

// V2 — minimal: una sola flecha, sin sombra, más editorial
function MarkArrowSingle({ color = '#0A0A0B' }) {
  return (
    <svg viewBox="0 0 200 120" width="100%" height="100%">
      <path d="M 8 92 L 192 16 L 168 42 L 28 92 Z" fill={color} />
    </svg>
  );
}

// V3 — geométrico: dos triángulos en paralelo (movimiento continuo)
function MarkArrowDual({ color = '#0A0A0B', accent = '#00D27A' }) {
  return (
    <svg viewBox="0 0 200 120" width="100%" height="100%">
      <path d="M 8 60 L 192 8 L 178 26 L 22 70 Z" fill={accent} />
      <path d="M 8 100 L 192 56 L 178 74 L 22 110 Z" fill={color} opacity="0.85"/>
    </svg>
  );
}

// V4 — "X" de LAIAX integrada con velocidad: una flecha que cruza
function MarkX({ color = '#0A0A0B', accent = '#00D27A' }) {
  return (
    <svg viewBox="0 0 200 120" width="100%" height="100%">
      <path d="M 12 18 L 188 102 L 174 102 L 12 32 Z" fill={color} />
      <path d="M 188 18 L 12 102 L 26 102 L 188 32 Z" fill={accent} />
    </svg>
  );
}

/* =========================================================
   WORDMARK — tipo display wide, ligero, tracking generoso
   ========================================================= */

function Wordmark({ color = '#FFFFFF', size = 96, tracking = 0.18 }) {
  return (
    <div style={{
      fontFamily: 'Saira, sans-serif',
      fontSize: size,
      letterSpacing: `${tracking}em`,
      color,
      fontWeight: 200,
      lineHeight: 1,
      paddingLeft: `${tracking}em`,
    }}>
      LAIAX
    </div>
  );
}

/* =========================================================
   SHARED UI BLOCKS
   ========================================================= */

const Eyebrow = ({ children, color = '#7A7A82' }) => (
  <div style={{
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: 11,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    color,
  }}>{children}</div>
);

const Caption = ({ children, color = '#7A7A82' }) => (
  <div style={{
    fontFamily: 'JetBrains Mono, monospace',
    fontSize: 11,
    color,
    letterSpacing: '0.04em',
  }}>{children}</div>
);

/* =========================================================
   ARTBOARDS
   ========================================================= */

// ---- Logo: lockup principal sobre negro ----
function LockupHero({ accent = '#00D27A' }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#0A0A0B', color: '#fff',
      display: 'flex', flexDirection: 'column',
      padding: 72, justifyContent: 'space-between',
    }}>
      <Eyebrow color="#5A5A60">LAIAX / PRIMARY LOCKUP — DARK</Eyebrow>

      <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
        <div style={{ width: 220, height: 132 }}>
          <MarkArrowFaithful color="#FFFFFF" accent={accent} />
        </div>
        <div style={{ width: 1, height: 120, background: '#2A2A2E' }} />
        <Wordmark color="#FFFFFF" size={120} tracking={0.22} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Caption color="#5A5A60">INSTITUTO DE INTELIGENCIA APLICADA</Caption>
        <Caption color="#5A5A60">v1.0 / 2026</Caption>
      </div>
    </div>
  );
}

// ---- Logo: lockup sobre claro ----
function LockupLight({ accent = '#00D27A' }) {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#F5F4F0', color: '#0A0A0B',
      display: 'flex', flexDirection: 'column',
      padding: 72, justifyContent: 'space-between',
    }}>
      <Eyebrow color="#7A7A82">PRIMARY LOCKUP — LIGHT</Eyebrow>

      <div style={{ display: 'flex', alignItems: 'center', gap: 48 }}>
        <div style={{ width: 220, height: 132 }}>
          <MarkArrowFaithful color="#0A0A0B" accent={accent} />
        </div>
        <div style={{ width: 1, height: 120, background: '#D4D2CC' }} />
        <Wordmark color="#0A0A0B" size={120} tracking={0.22} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <Caption color="#7A7A82">PAPER · INK · ACCENT</Caption>
        <Caption color="#7A7A82">USO EDITORIAL</Caption>
      </div>
    </div>
  );
}

// ---- Logo: 4 variaciones del símbolo ----
function MarkExplorations() {
  const items = [
    { name: 'ARROW / FAITHFUL', node: <MarkArrowFaithful color="#0A0A0B" accent="#00D27A" />, note: 'Refinamiento del original. Ala + estela.' },
    { name: 'ARROW / SINGLE',   node: <MarkArrowSingle color="#0A0A0B" />,                     note: 'Una sola flecha. Más editorial.' },
    { name: 'ARROW / DUAL',     node: <MarkArrowDual color="#0A0A0B" accent="#00D27A" />,      note: 'Dos planos en paralelo. Continuidad.' },
    { name: 'X / VELOCITY',     node: <MarkX color="#0A0A0B" accent="#00D27A" />,              note: 'La X de LAIAX como vector cruzado.' },
  ];
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#F5F4F0', padding: 56,
      display: 'flex', flexDirection: 'column', gap: 32,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <Eyebrow>EXPLORACIONES DEL SÍMBOLO</Eyebrow>
          <div style={{ fontFamily: 'Michroma', fontSize: 22, marginTop: 12, letterSpacing: '0.08em' }}>
            CUATRO DIRECCIONES
          </div>
        </div>
        <Caption>elige una y la pulimos</Caption>
      </div>

      <div style={{
        flex: 1, display: 'grid',
        gridTemplateColumns: '1fr 1fr', gridTemplateRows: '1fr 1fr',
        gap: 1, background: '#D4D2CC', border: '1px solid #D4D2CC',
      }}>
        {items.map((it, i) => (
          <div key={i} style={{
            background: '#FFFFFF', padding: 40,
            display: 'flex', flexDirection: 'column', gap: 16,
            justifyContent: 'space-between',
          }}>
            <Caption>0{i+1} · {it.name}</Caption>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
              <div style={{ width: '70%', maxWidth: 240 }}>{it.node}</div>
            </div>
            <div style={{ fontFamily: 'Inter Tight', fontSize: 13, color: '#3A3A40' }}>{it.note}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Tipografía principal: la propuesta wide tipo Michroma ----
function TypePrimary() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#0A0A0B', color: '#fff',
      padding: 72, display: 'flex', flexDirection: 'column', gap: 40,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Eyebrow color="#5A5A60">TIPOGRAFÍA PRIMARIA / DISPLAY</Eyebrow>
        <Caption color="#5A5A60">Michroma · Google Fonts · libre</Caption>
      </div>

      <div style={{ fontFamily: 'Michroma', fontSize: 140, letterSpacing: '0.08em', lineHeight: 1 }}>
        LAIAX
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'start' }}>
        <div>
          <Caption color="#5A5A60">CARACTERES</Caption>
          <div style={{ fontFamily: 'Michroma', fontSize: 28, letterSpacing: '0.06em', marginTop: 16, lineHeight: 1.4 }}>
            ABCDEFGHIJKLM<br/>
            NOPQRSTUVWXYZ<br/>
            0123456789
          </div>
        </div>
        <div>
          <Caption color="#5A5A60">USO</Caption>
          <div style={{ fontFamily: 'Inter Tight', fontSize: 15, marginTop: 16, color: '#C8C8CC', lineHeight: 1.6 }}>
            Solo para mayúsculas grandes: wordmark, títulos editoriales, números de capítulo, marcadores de cohorte.
            Tracking nunca menor a <span style={{ fontFamily: 'JetBrains Mono', color: '#fff' }}>0.06em</span>.
            Nunca en párrafos.
          </div>
        </div>
      </div>

      <div style={{ marginTop: 'auto' }}>
        <Caption color="#5A5A60">TAMAÑOS DE MUESTRA</Caption>
        <div style={{ fontFamily: 'Michroma', letterSpacing: '0.1em', marginTop: 16, display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ fontSize: 56 }}>MAESTRÍA</div>
          <div style={{ fontSize: 32 }}>COHORTE 01</div>
          <div style={{ fontSize: 18 }}>INSTITUTO LATINOAMERICANO</div>
        </div>
      </div>
    </div>
  );
}

// ---- Tipografía primaria — alternativa: Saira Light ----
function TypePrimaryAlt() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#F5F4F0', color: '#0A0A0B',
      padding: 72, display: 'flex', flexDirection: 'column', gap: 40,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Eyebrow>ALTERNATIVA / DISPLAY MÁS FLEXIBLE</Eyebrow>
        <Caption>Saira · Light 200 · Google Fonts</Caption>
      </div>

      <div style={{ fontFamily: 'Saira', fontWeight: 200, fontSize: 180, letterSpacing: '0.14em', lineHeight: 1 }}>
        LAIAX
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
        <div>
          <Caption>POR QUÉ</Caption>
          <div style={{ fontFamily: 'Inter Tight', fontSize: 14, marginTop: 16, color: '#3A3A40', lineHeight: 1.6 }}>
            Más cercana a tu referencia: trazos delgados, X con remates afilados,
            soporta múltiples pesos para títulos en distintos niveles.
            Funciona también en tamaños medianos (Michroma solo brilla en grande).
          </div>
        </div>
        <div>
          <Caption>PESOS</Caption>
          <div style={{ fontFamily: 'Saira', marginTop: 16, display: 'flex', flexDirection: 'column', gap: 6, fontSize: 26, letterSpacing: '0.08em' }}>
            <div style={{ fontWeight: 100 }}>LAIAX · THIN 100</div>
            <div style={{ fontWeight: 200 }}>LAIAX · LIGHT 200</div>
            <div style={{ fontWeight: 300 }}>LAIAX · REGULAR 300</div>
            <div style={{ fontWeight: 500 }}>LAIAX · MEDIUM 500</div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Tipografía secundaria: Inter Tight ----
function TypeSecondary() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#F5F4F0', color: '#0A0A0B',
      padding: 72, display: 'flex', flexDirection: 'column', gap: 32,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Eyebrow>TIPOGRAFÍA SECUNDARIA / TEXTO</Eyebrow>
        <Caption>Inter Tight · Google Fonts · libre</Caption>
      </div>

      <div style={{ fontFamily: 'Inter Tight', fontWeight: 400, fontSize: 96, letterSpacing: '-0.02em', lineHeight: 1 }}>
        Aa Bb Cc
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 56 }}>
        <div>
          <Caption>PÁRRAFO DE MUESTRA</Caption>
          <p style={{ fontFamily: 'Inter Tight', fontSize: 18, lineHeight: 1.55, marginTop: 16, color: '#1A1A1E', textWrap: 'pretty' }}>
            LAIAX no es una escuela tradicional ni un bootcamp. Es un territorio
            de marca pensado como un instituto de élite, donde la maestría se
            recorre, no se obtiene en un curso. Acompañamos a empresarios y
            líderes latinoamericanos en la adopción de inteligencia artificial
            y modelos de organización exponencial.
          </p>
        </div>
        <div>
          <Caption>JERARQUÍA</Caption>
          <div style={{ marginTop: 16, fontFamily: 'Inter Tight', display: 'flex', flexDirection: 'column', gap: 14 }}>
            <div style={{ fontSize: 40, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1 }}>H1 / Title 40</div>
            <div style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.015em', lineHeight: 1.1 }}>H2 / Section 28</div>
            <div style={{ fontSize: 20, fontWeight: 500, letterSpacing: '-0.01em' }}>H3 / Subhead 20</div>
            <div style={{ fontSize: 16, fontWeight: 400, color: '#3A3A40' }}>Body / 16 · regular</div>
            <div style={{ fontSize: 13, fontWeight: 400, color: '#7A7A82' }}>Caption / 13</div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 'auto', borderTop: '1px solid #D4D2CC', paddingTop: 24, display: 'flex', justifyContent: 'space-between' }}>
        <Caption>PESOS RECOMENDADOS · 300 / 400 / 500 / 600</Caption>
        <Caption>NUMERALES TABULARES PARA DATOS</Caption>
      </div>
    </div>
  );
}

// ---- Tipografía mono / técnica ----
function TypeMono() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#131316', color: '#F5F4F0',
      padding: 72, display: 'flex', flexDirection: 'column', gap: 32,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <Eyebrow color="#5A5A60">TIPOGRAFÍA TÉCNICA / MONO</Eyebrow>
        <Caption color="#5A5A60">JetBrains Mono · etiquetas, datos, códigos</Caption>
      </div>

      <div style={{ fontFamily: 'JetBrains Mono', fontSize: 64, letterSpacing: '-0.01em', lineHeight: 1.1 }}>
        [ LAIAX_v1.0 ]
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 'auto' }}>
        <div>
          <Caption color="#5A5A60">USO 01</Caption>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 13, marginTop: 12, color: '#C8C8CC' }}>
            COHORTE_01 / 2026<br/>
            14 EMPRESARIOS<br/>
            12 SEMANAS
          </div>
        </div>
        <div>
          <Caption color="#5A5A60">USO 02</Caption>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 13, marginTop: 12, color: '#C8C8CC' }}>
            CAPÍTULO 03<br/>
            ORG. EXPONENCIAL<br/>
            04 → 11 NOV
          </div>
        </div>
        <div>
          <Caption color="#5A5A60">USO 03</Caption>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 13, marginTop: 12, color: '#C8C8CC' }}>
            ETIQUETAS<br/>
            METADATA<br/>
            EYEBROWS
          </div>
        </div>
      </div>
    </div>
  );
}

// ---- Pareja en uso ----
function TypePairing() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#F5F4F0', padding: 72,
      display: 'flex', flexDirection: 'column', gap: 32,
    }}>
      <Eyebrow>LA PAREJA EN ACCIÓN</Eyebrow>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28 }}>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 12, letterSpacing: '0.18em', color: '#7A7A82' }}>
          COHORTE 01 — 2026
        </div>
        <div style={{ fontFamily: 'Michroma', fontSize: 64, letterSpacing: '0.06em', lineHeight: 1.05, color: '#0A0A0B' }}>
          LA MAESTRÍA<br/>SE RECORRE
        </div>
        <div style={{ fontFamily: 'Inter Tight', fontSize: 19, lineHeight: 1.55, maxWidth: 560, color: '#1A1A1E', textWrap: 'pretty' }}>
          Doce semanas de inmersión para empresarios que quieren convertir su
          organización en un sistema exponencial. No tomas un curso: recorres
          un territorio.
        </div>
        <div style={{ display: 'flex', gap: 16, marginTop: 12 }}>
          <div style={{
            fontFamily: 'JetBrains Mono', fontSize: 12, letterSpacing: '0.12em',
            background: '#0A0A0B', color: '#F5F4F0', padding: '14px 22px',
          }}>POSTULAR →</div>
          <div style={{
            fontFamily: 'JetBrains Mono', fontSize: 12, letterSpacing: '0.12em',
            border: '1px solid #0A0A0B', padding: '14px 22px',
          }}>VER MANIFIESTO</div>
        </div>
      </div>
    </div>
  );
}

// ---- Paleta principal ----
function PaletteCore() {
  const swatches = [
    { name: 'INK', hex: '#0A0A0B',  role: 'fondo principal · territorio',  fg: '#F5F4F0' },
    { name: 'INK 2', hex: '#131316', role: 'paneles, tarjetas',            fg: '#F5F4F0' },
    { name: 'PAPER', hex: '#F5F4F0', role: 'fondo claro · editorial',      fg: '#0A0A0B' },
    { name: 'LINE', hex: '#2A2A2E',  role: 'divisores en oscuro',          fg: '#F5F4F0' },
    { name: 'MUTE', hex: '#7A7A82',  role: 'texto secundario, etiquetas',  fg: '#FFFFFF' },
  ];
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#F5F4F0', padding: 56,
      display: 'flex', flexDirection: 'column', gap: 32,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <Eyebrow>PALETA / NEUTROS</Eyebrow>
          <div style={{ fontFamily: 'Michroma', fontSize: 22, marginTop: 12, letterSpacing: '0.08em' }}>
            EL TERRITORIO
          </div>
        </div>
        <Caption>negro profundo, no #000</Caption>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 2fr 2fr 1fr 1fr', gap: 1, background: '#D4D2CC', flex: 1 }}>
        {swatches.map(s => (
          <div key={s.name} style={{
            background: s.hex, color: s.fg,
            padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}>
            <div style={{ fontFamily: 'Michroma', fontSize: 14, letterSpacing: '0.1em' }}>{s.name}</div>
            <div>
              <div style={{ fontFamily: 'Inter Tight', fontSize: 12, opacity: 0.7, marginBottom: 8 }}>{s.role}</div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 12 }}>{s.hex}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Paleta de acentos: 3 propuestas ----
function PaletteAccents() {
  const accents = [
    { name: 'A · VELOCIDAD',  hex: '#00D27A', note: 'Verde refinado del original. Energía, movimiento, "ir".' },
    { name: 'B · VOLTAJE',    hex: '#C6FF3D', note: 'Lima eléctrico. Más editorial, más joven, más "tech".' },
    { name: 'C · SEÑAL',      hex: '#FF5B2E', note: 'Rojo cálido. Más latino, más cálido, menos crypto.' },
    { name: 'D · MONO',       hex: '#FFFFFF', note: 'Sin acento. Solo blanco sobre negro. Máxima elegancia.' },
  ];
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#0A0A0B', color: '#fff',
      padding: 56, display: 'flex', flexDirection: 'column', gap: 28,
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div>
          <Eyebrow color="#5A5A60">ACENTO / 4 DIRECCIONES</Eyebrow>
          <div style={{ fontFamily: 'Michroma', fontSize: 22, marginTop: 12, letterSpacing: '0.08em' }}>
            EL ACENTO
          </div>
        </div>
        <Caption color="#5A5A60">elige uno</Caption>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, flex: 1 }}>
        {accents.map(a => (
          <div key={a.name} style={{
            border: '1px solid #2A2A2E',
            display: 'flex', flexDirection: 'column',
          }}>
            <div style={{
              flex: 1, background: a.hex,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              minHeight: 160,
            }}>
              <div style={{ width: '70%' }}>
                <MarkArrowFaithful color="#0A0A0B" accent={a.hex} />
              </div>
            </div>
            <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ fontFamily: 'Michroma', fontSize: 11, letterSpacing: '0.1em' }}>{a.name}</div>
              <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#7A7A82' }}>{a.hex}</div>
              <div style={{ fontFamily: 'Inter Tight', fontSize: 12, color: '#C8C8CC', lineHeight: 1.45 }}>{a.note}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- Manifiesto / vibe ----
function VibeManifesto() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#0A0A0B', color: '#F5F4F0',
      padding: 80, display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* línea decorativa */}
      <div style={{
        position: 'absolute', top: '50%', right: -100, width: 600, height: 1,
        background: 'linear-gradient(90deg, transparent, #00D27A 60%, #00D27A)',
        transform: 'rotate(-12deg)', opacity: 0.5,
      }} />

      <Eyebrow color="#5A5A60">VIBE / TONO</Eyebrow>

      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ fontFamily: 'Michroma', fontSize: 56, letterSpacing: '0.05em', lineHeight: 1.15 }}>
          INSTITUTO,<br/>
          NO ESCUELA.
        </div>
        <div style={{
          fontFamily: 'Inter Tight', fontSize: 19, lineHeight: 1.55,
          maxWidth: 580, color: '#C8C8CC', marginTop: 32, textWrap: 'pretty',
        }}>
          Élite sin ostentación. Geometría limpia, mucho aire, tipografía
          ancha y delgada. El acento aparece poco y cuando aparece, marca
          dirección. Negro como territorio, no como decoración.
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, position: 'relative', zIndex: 2 }}>
        {['PRECISO', 'ATEMPORAL', 'EN MOVIMIENTO', 'LATINOAMERICANO'].map(w => (
          <div key={w} style={{ borderTop: '1px solid #2A2A2E', paddingTop: 14 }}>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.18em', color: '#7A7A82' }}>—</div>
            <div style={{ fontFamily: 'Michroma', fontSize: 13, letterSpacing: '0.1em', marginTop: 8 }}>{w}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   COVER / INTRO
   ========================================================= */
function Cover() {
  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#F5F4F0', padding: 80,
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Eyebrow>BRAND FOUNDATIONS · v1</Eyebrow>
        <Caption>28 abril 2026</Caption>
      </div>

      <div>
        <div style={{ fontFamily: 'Michroma', fontSize: 96, letterSpacing: '0.12em', lineHeight: 1 }}>
          LAIAX
        </div>
        <div style={{ fontFamily: 'Inter Tight', fontSize: 22, marginTop: 24, color: '#3A3A40', maxWidth: 560, lineHeight: 1.45, textWrap: 'pretty' }}>
          Primera ronda de fundamentos: símbolo, tipografía y color.
          El resto del sistema (voz, aplicaciones, sistema editorial) viene después.
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, borderTop: '1px solid #D4D2CC', paddingTop: 20 }}>
        <Caption>01 · LOGO</Caption>
        <Caption>02 · TIPOGRAFÍA</Caption>
        <Caption>03 · COLOR</Caption>
        <Caption>04 · VIBE</Caption>
      </div>
    </div>
  );
}

/* =========================================================
   SUB-LOGO / MONOGRAMA LX — exploración
   Usa la flecha de velocidad como elemento integrador.
   Acentos del sistema: verde (protagonista), lima, naranja.
   ========================================================= */

const ACCENTS = {
  green: '#00D27A',
  lime:  '#C6FF3D',
  amber: '#FF5B2E',
  ink:   '#0A0A0B',
  ink2:  '#1C1C20',
};

/* Line-art LX. Trazos finos dibujados en SVG.
   Acento verde como microdetalle (último 25-30% de un trazo).
   Mucho aire alrededor. Ink #0A0A0B + green #00D27A.
*/

const INK = '#0A0A0B';
const GRN = '#00D27A';

// Geometría base del LX line-art:
//   L: vertical x=80, top y=70, bottom y=170, base hasta x=130
//   X: dos diagonales cruzando entre x=160..240, y=70..170
// viewBox 320x240. Trazo 2.2.

const SW = 2.2;

function LXFrame({ children, bg = '#F5F4F0' }) {
  return (
    <div style={{
      width: '100%', height: '100%', background: bg,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <svg viewBox="0 0 320 240" width="78%" style={{ maxWidth: 280 }}>
        {children}
      </svg>
    </div>
  );
}

// 01 — Verde solo en el último tramo de la base de la L
function LX01() {
  return (
    <LXFrame>
      <line x1="80"  y1="70"  x2="80"  y2="170" stroke={INK} strokeWidth={SW} />
      <line x1="80"  y1="170" x2="105" y2="170" stroke={INK} strokeWidth={SW} />
      <line x1="105" y1="170" x2="130" y2="170" stroke={GRN} strokeWidth={SW} />
      <line x1="160" y1="70"  x2="240" y2="170" stroke={INK} strokeWidth={SW} />
      <line x1="240" y1="70"  x2="160" y2="170" stroke={INK} strokeWidth={SW} />
    </LXFrame>
  );
}

// 02 — Verde solo en el último tramo del trazo ↗ de la X (arriba-derecha)
function LX02() {
  return (
    <LXFrame>
      <line x1="80"  y1="70"  x2="80"  y2="170" stroke={INK} strokeWidth={SW} />
      <line x1="80"  y1="170" x2="130" y2="170" stroke={INK} strokeWidth={SW} />
      <line x1="160" y1="170" x2="240" y2="70"  stroke={INK} strokeWidth={SW} />
      <line x1="160" y1="70"  x2="240" y2="170" stroke={INK} strokeWidth={SW} />
      {/* tapa el último 30% del ↗ con verde */}
      <line x1="216" y1="100" x2="240" y2="70"  stroke={GRN} strokeWidth={SW} />
    </LXFrame>
  );
}

// 03 — Combinado: ambos detalles
function LX03() {
  return (
    <LXFrame>
      <line x1="80"  y1="70"  x2="80"  y2="170" stroke={INK} strokeWidth={SW} />
      <line x1="80"  y1="170" x2="105" y2="170" stroke={INK} strokeWidth={SW} />
      <line x1="105" y1="170" x2="130" y2="170" stroke={GRN} strokeWidth={SW} />
      <line x1="160" y1="170" x2="240" y2="70"  stroke={INK} strokeWidth={SW} />
      <line x1="160" y1="70"  x2="240" y2="170" stroke={INK} strokeWidth={SW} />
      <line x1="216" y1="100" x2="240" y2="70"  stroke={GRN} strokeWidth={SW} />
    </LXFrame>
  );
}

// 04 — Mínimo absoluto: solo un punto verde cortando el trazo ↗
function LX04() {
  return (
    <LXFrame>
      <line x1="80"  y1="70"  x2="80"  y2="170" stroke={INK} strokeWidth={SW} />
      <line x1="80"  y1="170" x2="130" y2="170" stroke={INK} strokeWidth={SW} />
      <line x1="160" y1="170" x2="240" y2="70"  stroke={INK} strokeWidth={SW} />
      <line x1="160" y1="70"  x2="240" y2="170" stroke={INK} strokeWidth={SW} />
      {/* dash verde corto en el ↗ */}
      <line x1="228" y1="84"  x2="240" y2="70"  stroke={GRN} strokeWidth={SW} />
    </LXFrame>
  );
}

// 05 — Sobre fondo papel cálido (alternativa de fondo)
function LX05() {
  return (
    <LXFrame bg="#FFFFFF">
      <line x1="80"  y1="70"  x2="80"  y2="170" stroke={INK} strokeWidth={SW} />
      <line x1="80"  y1="170" x2="105" y2="170" stroke={INK} strokeWidth={SW} />
      <line x1="105" y1="170" x2="130" y2="170" stroke={GRN} strokeWidth={SW} />
      <line x1="160" y1="70"  x2="240" y2="170" stroke={INK} strokeWidth={SW} />
      <line x1="240" y1="70"  x2="160" y2="170" stroke={INK} strokeWidth={SW} />
    </LXFrame>
  );
}

// 06 — Versión sobre negro del 03
function LX06() {
  return (
    <LXFrame bg="#0A0A0B">
      <line x1="80"  y1="70"  x2="80"  y2="170" stroke="#F5F4F0" strokeWidth={SW} />
      <line x1="80"  y1="170" x2="105" y2="170" stroke="#F5F4F0" strokeWidth={SW} />
      <line x1="105" y1="170" x2="130" y2="170" stroke={GRN}     strokeWidth={SW} />
      <line x1="160" y1="170" x2="240" y2="70"  stroke="#F5F4F0" strokeWidth={SW} />
      <line x1="160" y1="70"  x2="240" y2="170" stroke="#F5F4F0" strokeWidth={SW} />
      <line x1="216" y1="100" x2="240" y2="70"  stroke={GRN}     strokeWidth={SW} />
    </LXFrame>
  );
}

function SubLogoExplorations() {
  const concepts = [
    { id: '01', name: 'AMBOS DETALLES · LIGHT',     node: <LX03 />, note: 'L base + punta ↗ en verde. Versión clara.' },
    { id: '02', name: 'AMBOS DETALLES · DARK',      node: <LX06 />, note: 'Versión sobre fondo negro. Para uso oscuro.' },
  ];

  return (
    <div style={{
      width: '100%', height: '100%',
      background: '#F5F4F0', padding: 56,
      display: 'flex', flexDirection: 'column', gap: 28,
      position: 'relative', overflow: 'hidden',
    }}>
      {/* línea de acento decorativa */}
      <div style={{
        position: 'absolute', top: 70, right: -80, width: 480, height: 1,
        background: `linear-gradient(90deg, transparent, ${ACCENTS.green})`,
        opacity: 0.6,
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', position: 'relative', zIndex: 2 }}>
        <div>
          <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, letterSpacing: '0.18em', color: '#7A7A82' }}>
            01.B · SUB-LOGO / MONOGRAMA
          </div>
          <div style={{ fontFamily: 'Saira', fontWeight: 200, fontSize: 44, marginTop: 10, letterSpacing: '0.14em' }}>
            LX · TIPOGRÁFICO
          </div>
          <div style={{ fontFamily: 'Inter Tight', fontSize: 14, color: '#3A3A40', marginTop: 8, maxWidth: 600 }}>
            Construido sobre Saira Light. Trazos delgados, terminales rectos.
            El verde aparece en detalles selectivos: línea base de la L,
            trazo ↗ de la X, o un subrayado de marca.
          </div>
        </div>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 11, color: '#7A7A82' }}>
          06 DIRECCIONES · ELIGE 1–2
        </div>
      </div>

      <div style={{
        flex: 1,
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gridAutoRows: '1fr',
        gap: 1,
        background: '#D4D2CC',
        border: '1px solid #D4D2CC',
        position: 'relative', zIndex: 2,
        minHeight: 540,
      }}>
        {concepts.map(c => (
          <div key={c.id} style={{
            background: '#FFFFFF', padding: 24,
            display: 'flex', flexDirection: 'column', gap: 12,
            justifyContent: 'space-between',
          }}>
            <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.16em', color: '#7A7A82' }}>
              CONCEPT {c.id}
            </div>
            <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 0', minHeight: 200 }}>
              {c.node}
            </div>
            <div>
              <div style={{ fontFamily: 'Saira', fontWeight: 300, fontSize: 13, letterSpacing: '0.08em', color: '#0A0A0B' }}>
                {c.name}
              </div>
              <div style={{ fontFamily: 'Inter Tight', fontSize: 11, color: '#5A5A60', marginTop: 4, lineHeight: 1.4 }}>
                {c.note}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div style={{
        display: 'flex', justifyContent: 'space-between',
        borderTop: '1px solid #D4D2CC', paddingTop: 14,
        position: 'relative', zIndex: 2,
      }}>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.16em', color: '#7A7A82' }}>
          ACENTOS · #00D27A · #C6FF3D · #FF5B2E
        </div>
        <div style={{ fontFamily: 'JetBrains Mono', fontSize: 10, letterSpacing: '0.16em', color: '#7A7A82' }}>
          BASE · INK #0A0A0B
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   APP
   ========================================================= */

function App() {
  return (
    <DesignCanvas title="LAIAX · Brand Foundations" subtitle="Logo, tipografía, color · v1">

      <DCSection id="intro" title="Punto de partida">
        <DCArtboard id="cover" label="Cover" width={1280} height={800}>
          <Cover />
        </DCArtboard>
        <DCArtboard id="vibe" label="Vibe / tono" width={1280} height={800}>
          <VibeManifesto />
        </DCArtboard>
      </DCSection>

      <DCSection id="logo" title="01 · Logo">
        <DCArtboard id="lockup-dark" label="Lockup principal — fondo oscuro" width={1280} height={760}>
          <LockupHero />
        </DCArtboard>
        <DCArtboard id="lockup-light" label="Lockup — fondo claro" width={1280} height={760}>
          <LockupLight />
        </DCArtboard>
        <DCArtboard id="sublogo-lx" label="Sub-logo · monograma LX" width={1280} height={760}>
          <SubLogoExplorations />
        </DCArtboard>
      </DCSection>

      <DCSection id="type" title="02 · Tipografía">
        <DCArtboard id="type-primary" label="Primaria · Michroma (display)" width={1280} height={820}>
          <TypePrimary />
        </DCArtboard>
        <DCArtboard id="type-primary-alt" label="Alternativa · Saira Light" width={1280} height={820}>
          <TypePrimaryAlt />
        </DCArtboard>
        <DCArtboard id="type-secondary" label="Secundaria · Inter Tight (texto)" width={1280} height={820}>
          <TypeSecondary />
        </DCArtboard>
        <DCArtboard id="type-mono" label="Técnica · JetBrains Mono" width={1280} height={820}>
          <TypeMono />
        </DCArtboard>
        <DCArtboard id="type-pairing" label="Pareja en acción" width={1280} height={820}>
          <TypePairing />
        </DCArtboard>
      </DCSection>

      <DCSection id="color" title="03 · Color">
        <DCArtboard id="palette-core" label="Neutros / territorio" width={1280} height={620}>
          <PaletteCore />
        </DCArtboard>
        <DCArtboard id="palette-accents" label="Acento · 4 direcciones para elegir" width={1280} height={760}>
          <PaletteAccents />
        </DCArtboard>
      </DCSection>

      <DCSection id="apps-logo" title="04 · Logo system">
        <DCArtboard id="logo-suite" label="Suite completa de logos" width={1440} height={620}>
          <MK_LogoSuite />
        </DCArtboard>
      </DCSection>

      <DCSection id="apps-print" title="05 · Material impreso">
        <DCArtboard id="business-card-v2" label="Tarjetas · 4 variantes (v2)" width={1280} height={820}>
          <MK_BusinessCardV2 />
        </DCArtboard>
        <DCArtboard id="badge-v2" label="Gafete + pulseras NFC (v2)" width={1440} height={860}>
          <MK_BadgeV2 />
        </DCArtboard>
        <DCArtboard id="letterhead" label="Hoja membretada" width={1100} height={820}>
          <MK_Letterhead />
        </DCArtboard>
        <DCArtboard id="invoice" label="Factura + diploma" width={1280} height={820}>
          <MK_Invoice />
        </DCArtboard>
      </DCSection>

      <DCSection id="apps-digital" title="06 · Digital">
        <DCArtboard id="landing-v2" label="Landing page · laiax.org (v2)" width={1440} height={920}>
          <MK_LandingV2 />
        </DCArtboard>
        <DCArtboard id="email-v2" label="Email + loading (v2)" width={1280} height={860}>
          <MK_EmailLoadingV2 />
        </DCArtboard>
      </DCSection>

      <DCSection id="apps-environment" title="07 · OOH + kit">
        <DCArtboard id="banner" label="Espectacular + agenda + pluma + pin" width={1440} height={820}>
          <MK_BannerStationery />
        </DCArtboard>
      </DCSection>

      <DCSection id="system" title="08 · Sistema + sub-marca">
        <DCArtboard id="icons" label="Iconografía" width={1280} height={760}>
          <MK_Icons />
        </DCArtboard>
        <DCArtboard id="manifesto" label="Manifiesto" width={1280} height={820}>
          <MK_Manifesto />
        </DCArtboard>
        <DCArtboard id="made" label="MADE · sub-marca" width={1280} height={820}>
          <MK_MADE />
        </DCArtboard>
      </DCSection>

    </DesignCanvas>
  );
}

/* expose Wordmark + MarkArrowFaithful so mockups can reuse if needed */
Object.assign(window, { MarkArrowFaithful, Wordmark });

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
