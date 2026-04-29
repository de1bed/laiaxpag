/* global React */
/* LAIAX · Mockups & Aplicaciones
   Reusa: MarkArrowFaithful, Wordmark (window globals from brand.jsx)
   Paleta: ink #0A0A0B / paper #F5F4F0 / line #2A2A2E / mute #7A7A82 / green #00D27A / lime #C6FF3D / amber #FF5B2E
*/

const M_INK = '#0A0A0B';
const M_INK2 = '#131316';
const M_PAPER = '#F5F4F0';
const M_LINE = '#2A2A2E';
const M_MUTE = '#7A7A82';
const M_GRN = '#00D27A';
const M_LIME = '#C6FF3D';
const M_AMBER = '#FF5B2E';

const sairaTitle = { fontFamily: 'Saira, sans-serif', fontWeight: 200, letterSpacing: '0.18em' };
const inter = { fontFamily: 'Inter Tight, sans-serif' };
const mono = { fontFamily: 'JetBrains Mono, monospace' };

/* ---------- shared mark + LX (re-drawn small) ---------- */
function MArrow({ color = M_INK, accent = M_GRN }) {
  return (
    <svg viewBox="0 0 200 120" width="100%" height="100%">
      <path d="M 8 90 L 192 18 L 175 38 L 30 90 Z" fill={accent} />
      <path d="M 95 102 L 165 60 L 158 78 L 110 102 Z" fill={color} />
    </svg>
  );
}

function LXMark({ color = M_INK, accent = M_GRN, sw = 2.2 }) {
  return (
    <svg viewBox="0 0 320 240" width="100%" height="100%">
      <line x1="80" y1="70" x2="80" y2="170" stroke={color} strokeWidth={sw} />
      <line x1="80" y1="170" x2="105" y2="170" stroke={color} strokeWidth={sw} />
      <line x1="105" y1="170" x2="130" y2="170" stroke={accent} strokeWidth={sw} />
      <line x1="160" y1="170" x2="240" y2="70" stroke={color} strokeWidth={sw} />
      <line x1="160" y1="70" x2="240" y2="170" stroke={color} strokeWidth={sw} />
      <line x1="216" y1="100" x2="240" y2="70" stroke={accent} strokeWidth={sw} />
    </svg>
  );
}

function MWord({ color = M_INK, size = 60, tracking = 0.22 }) {
  return (
    <div style={{
      ...sairaTitle, fontSize: size, color,
      letterSpacing: `${tracking}em`, paddingLeft: `${tracking}em`, lineHeight: 1,
    }}>LAIAX</div>
  );
}

const MEyebrow = ({ children, c = M_MUTE }) => (
  <div style={{ ...mono, fontSize: 10, letterSpacing: '0.22em', color: c, textTransform: 'uppercase' }}>{children}</div>
);
const MCap = ({ children, c = M_MUTE }) => (
  <div style={{ ...mono, fontSize: 10, color: c, letterSpacing: '0.04em' }}>{children}</div>
);
const SectionHeader = ({ kicker, title, subtitle }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
    <div>
      <MEyebrow>{kicker}</MEyebrow>
      <div style={{ ...sairaTitle, fontSize: 36, marginTop: 10, letterSpacing: '0.14em', color: M_INK }}>{title}</div>
      {subtitle && <div style={{ ...inter, fontSize: 13, color: '#3A3A40', marginTop: 6, maxWidth: 600 }}>{subtitle}</div>}
    </div>
  </div>
);

/* =========================================================
   1) SUITE COMPLETA DE LOGOS (horizontal, vertical, isotipo, monograma, favicon)
   ========================================================= */
function MK_LogoSuite() {
  return (
    <div style={{ width: '100%', height: '100%', background: M_PAPER, padding: 56, display: 'flex', flexDirection: 'column', gap: 28 }}>
      <SectionHeader kicker="04 · APLICACIONES / LOGO SUITE" title="LOGO SYSTEM" subtitle="Una marca, seis usos. Mismo símbolo, distintas geometrías según el espacio." />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridTemplateRows: '1fr', gap: 1, background: '#D4D2CC', border: '1px solid #D4D2CC' }}>
        {/* Horizontal */}
        <div style={{ background: '#fff', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <MCap>01 · HORIZONTAL</MCap>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center', flex: 1 }}>
            <div style={{ width: 56 }}><MArrow /></div>
            <MWord size={28} tracking={0.18} />
          </div>
          <MCap>lockup principal</MCap>
        </div>
        {/* Vertical */}
        <div style={{ background: '#fff', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <MCap>02 · VERTICAL</MCap>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 18, flex: 1, justifyContent: 'center' }}>
            <div style={{ width: 80 }}><MArrow /></div>
            <MWord size={22} tracking={0.2} />
          </div>
          <MCap>aplicaciones cuadradas</MCap>
        </div>
        {/* Isotipo */}
        <div style={{ background: '#fff', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <MCap>03 · ISOTIPO</MCap>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <div style={{ width: 110 }}><MArrow /></div>
          </div>
          <MCap>solo símbolo</MCap>
        </div>
        {/* Monograma LX */}
        <div style={{ background: '#fff', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <MCap>04 · MONOGRAMA</MCap>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <div style={{ width: 110 }}><LXMark /></div>
          </div>
          <MCap>LX · sub-marca</MCap>
        </div>
        {/* Favicon dark */}
        <div style={{ background: M_INK, padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <MCap c="#5A5A60">05 · FAVICON / DARK</MCap>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <div style={{ width: 64, height: 64, background: M_INK2, border: `1px solid ${M_LINE}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 40 }}><MArrow color="#fff" /></div>
            </div>
          </div>
          <MCap c="#5A5A60">32×32 · 16×16</MCap>
        </div>
        {/* Favicon light */}
        <div style={{ background: '#fff', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <MCap>06 · FAVICON / LIGHT</MCap>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1 }}>
            <div style={{ width: 64, height: 64, background: M_PAPER, border: `1px solid #D4D2CC`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: 40 }}><MArrow /></div>
            </div>
          </div>
          <MCap>1024 · sello</MCap>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   2) TARJETA DE PRESENTACIÓN (front + back)
   ========================================================= */
function MK_BusinessCard() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#E8E6DF', padding: 56, display: 'flex', flexDirection: 'column', gap: 28 }}>
      <SectionHeader kicker="05 · APLICACIONES / TARJETA" title="BUSINESS CARD" subtitle="85 × 55 mm. Papel uncoated 350g. Acento solo en el frontal." />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, alignItems: 'center', justifyItems: 'center' }}>
        {/* Front */}
        <div style={{ width: 540, height: 350, background: M_INK, color: '#fff', padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 30px 60px rgba(0,0,0,0.18)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ width: 64 }}><MArrow color="#fff" /></div>
            <MCap c="#5A5A60">MEMBER · 001</MCap>
          </div>
          <div>
            <MWord color="#fff" size={42} tracking={0.22} />
            <div style={{ ...inter, fontSize: 12, marginTop: 16, color: '#C8C8CC', letterSpacing: '0.04em' }}>
              INSTITUTO LATINOAMERICANO
            </div>
          </div>
        </div>
        {/* Back */}
        <div style={{ width: 540, height: 350, background: M_PAPER, color: M_INK, padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 30px 60px rgba(0,0,0,0.10)' }}>
          <div>
            <MCap>DIRECTOR · COHORTE 01</MCap>
            <div style={{ ...sairaTitle, fontSize: 30, marginTop: 18, letterSpacing: '0.06em', color: M_INK }}>
              ANDREA<br/>VARGAS
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div style={{ ...mono, fontSize: 11, lineHeight: 1.6 }}>
              andrea@laiax.org<br/>
              +52 55 0000 0000<br/>
              <span style={{ color: M_GRN }}>laiax.org</span>
            </div>
            <div style={{ width: 36 }}><LXMark /></div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   3) GAFETE / PULSERA DE ACCESO
   ========================================================= */
function MK_Badge() {
  return (
    <div style={{ width: '100%', height: '100%', background: M_PAPER, padding: 56, display: 'flex', flexDirection: 'column', gap: 28 }}>
      <SectionHeader kicker="06 · APLICACIONES / ACCESO" title="GAFETE + PULSERA" subtitle="Identificación oficial de cohorte. Tinta serigráfica sobre PVC mate." />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 40, alignItems: 'center', justifyItems: 'center' }}>
        {/* Gafete */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0 }}>
          <div style={{ width: 6, height: 28, background: M_LINE }} />
          <div style={{ width: 60, height: 14, background: M_INK, borderRadius: '0 0 30px 30px' }} />
          <div style={{ width: 360, height: 540, background: M_INK, color: '#fff', padding: 28, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 30px 60px rgba(0,0,0,0.25)', position: 'relative' }}>
            {/* punch */}
            <div style={{ position: 'absolute', top: 14, left: '50%', transform: 'translateX(-50%)', width: 38, height: 6, background: M_PAPER, borderRadius: 4 }} />
            <div style={{ marginTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ width: 64 }}><MArrow color="#fff" /></div>
              <MCap c="#5A5A60">/ 01 / 26</MCap>
            </div>
            <div>
              <div style={{ width: '100%', aspectRatio: '1/1', background: 'repeating-linear-gradient(45deg, #1C1C20, #1C1C20 4px, #131316 4px, #131316 8px)', marginBottom: 18, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ ...mono, fontSize: 10, color: '#5A5A60' }}>· FOTO ·</div>
              </div>
              <MCap c="#5A5A60">FELLOW · COHORTE 01</MCap>
              <div style={{ ...sairaTitle, fontSize: 22, letterSpacing: '0.06em', marginTop: 8 }}>
                CARLOS<br/>MENDOZA
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: `1px solid ${M_LINE}`, paddingTop: 12 }}>
              <MCap c="#5A5A60">CDMX · 2026</MCap>
              <div style={{ width: 18 }}><LXMark color="#fff" /></div>
            </div>
          </div>
        </div>
        {/* Pulsera */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <div style={{ width: 460, height: 56, background: M_INK, borderRadius: 8, color: '#fff', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 12px 30px rgba(0,0,0,0.18)' }}>
            <div style={{ width: 28 }}><MArrow color="#fff" /></div>
            <div style={{ ...sairaTitle, fontSize: 14, letterSpacing: '0.34em' }}>LAIAX · COHORTE 01</div>
            <MCap c={M_GRN}>VIP</MCap>
          </div>
          <div style={{ width: 460, height: 56, background: M_PAPER, border: `1px solid #D4D2CC`, borderRadius: 8, color: M_INK, padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ width: 28 }}><MArrow /></div>
            <div style={{ ...sairaTitle, fontSize: 14, letterSpacing: '0.34em' }}>LAIAX · STAFF</div>
            <MCap>STAFF</MCap>
          </div>
          <div style={{ width: 460, height: 56, background: M_GRN, color: M_INK, borderRadius: 8, padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ width: 28 }}><MArrow color={M_INK} accent={M_INK} /></div>
            <div style={{ ...sairaTitle, fontSize: 14, letterSpacing: '0.34em' }}>LAIAX · DAY PASS</div>
            <MCap>INVITADO</MCap>
          </div>
          <MCap>silicona suave · 3 niveles de acceso</MCap>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   4) HOJA MEMBRETADA
   ========================================================= */
function MK_Letterhead() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#E8E6DF', padding: 56, display: 'flex', flexDirection: 'column', gap: 28 }}>
      <SectionHeader kicker="07 · APLICACIONES / EDITORIAL" title="HOJA MEMBRETADA" subtitle="A4. Papel offset 100g. Acento verde solo en el footer y un detalle." />
      <div style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ width: 560, aspectRatio: '210/297', background: '#fff', padding: 56, display: 'flex', flexDirection: 'column', boxShadow: '0 30px 60px rgba(0,0,0,0.18)', position: 'relative' }}>
          {/* header */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', borderBottom: `1px solid #D4D2CC`, paddingBottom: 18 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{ width: 30 }}><MArrow /></div>
              <MWord size={16} tracking={0.22} />
            </div>
            <div style={{ ...mono, fontSize: 8, color: M_MUTE, textAlign: 'right' }}>
              CDMX · MMXXVI<br/>FOLIO · 2026/0142
            </div>
          </div>
          {/* body */}
          <div style={{ flex: 1, paddingTop: 30 }}>
            <div style={{ ...mono, fontSize: 8, color: M_MUTE, letterSpacing: '0.18em' }}>28 · ABRIL · 2026</div>
            <div style={{ ...inter, fontSize: 11, marginTop: 18, color: M_INK, lineHeight: 1.6 }}>
              <p style={{ margin: 0 }}>A quien corresponda,</p>
              <p style={{ marginTop: 14 }}>
                Por medio de la presente, el Instituto LAIAX hace constar la admisión
                del Sr. Carlos Mendoza al programa <em>Cohorte 01 · 2026</em>, con
                inicio el 04 de junio del presente año.
              </p>
              <p style={{ marginTop: 14 }}>
                La presente carta acredita su participación oficial en el territorio
                formativo de LAIAX, conforme a los estatutos del instituto.
              </p>
              <p style={{ marginTop: 26, ...sairaTitle, fontSize: 13, letterSpacing: '0.06em' }}>ANDREA VARGAS</p>
              <div style={{ ...mono, fontSize: 8, color: M_MUTE, marginTop: 2 }}>DIRECTORA EJECUTIVA</div>
            </div>
          </div>
          {/* footer */}
          <div style={{ borderTop: `1px solid #D4D2CC`, paddingTop: 12, display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ ...mono, fontSize: 8, color: M_MUTE }}>laiax.org · hello@laiax.org</div>
            <div style={{ ...mono, fontSize: 8, color: M_GRN }}>● LAIAX · 2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   5) PLANTILLA DE FACTURA + DIPLOMA
   ========================================================= */
function MK_Invoice() {
  return (
    <div style={{ width: '100%', height: '100%', background: M_PAPER, padding: 56, display: 'flex', flexDirection: 'column', gap: 28 }}>
      <SectionHeader kicker="08 · APLICACIONES / DOCUMENTOS" title="FACTURA + DIPLOMA" subtitle="Sistema editorial: tipografía clara, datos en mono, acento verde como marcador." />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'center', justifyItems: 'center' }}>
        {/* INVOICE */}
        <div style={{ width: 460, aspectRatio: '210/297', background: '#fff', padding: 32, display: 'flex', flexDirection: 'column', gap: 16, boxShadow: '0 30px 60px rgba(0,0,0,0.10)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 26 }}><MArrow /></div>
              <MWord size={13} tracking={0.22} />
            </div>
            <div style={{ ...sairaTitle, fontSize: 18, letterSpacing: '0.18em' }}>FACTURA</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, ...mono, fontSize: 8, color: M_MUTE }}>
            <div><div style={{ color: M_INK }}>FOLIO</div>2026 / 0142</div>
            <div><div style={{ color: M_INK }}>FECHA</div>28 · ABR · 2026</div>
            <div><div style={{ color: M_INK }}>RFC</div>LAI260101XYZ</div>
            <div><div style={{ color: M_INK }}>VENCE</div>28 · MAY · 2026</div>
          </div>
          <div style={{ borderTop: `1px solid #D4D2CC`, paddingTop: 10 }}>
            <div style={{ ...mono, fontSize: 8, color: M_MUTE }}>FACTURADO A</div>
            <div style={{ ...inter, fontSize: 11, marginTop: 4 }}>
              Carlos Mendoza<br/>
              <span style={{ color: M_MUTE, ...mono, fontSize: 8 }}>MENDC890512AB1</span>
            </div>
          </div>
          <div style={{ marginTop: 6 }}>
            {[
              ['COHORTE 01 · INSCRIPCIÓN', '180,000.00'],
              ['MEMBERSHIP · ANUAL',       ' 24,000.00'],
              ['MATERIALES IMPRESOS',      '  4,500.00'],
            ].map((r, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto', padding: '8px 0', borderBottom: `1px solid #EAE8E2`, ...inter, fontSize: 11 }}>
                <div>{r[0]}</div>
                <div style={mono}>{r[1]} MXN</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderTop: `2px solid ${M_INK}`, paddingTop: 10 }}>
            <div style={{ ...mono, fontSize: 9, letterSpacing: '0.16em', color: M_MUTE }}>TOTAL</div>
            <div style={{ ...sairaTitle, fontSize: 22, letterSpacing: '0.04em' }}>
              208,500<span style={{ color: M_GRN }}>.00</span>
              <span style={{ ...mono, fontSize: 11, color: M_MUTE, marginLeft: 8 }}>MXN</span>
            </div>
          </div>
        </div>

        {/* DIPLOMA */}
        <div style={{ width: 480, aspectRatio: '297/210', background: '#fff', padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 30px 60px rgba(0,0,0,0.10)', border: `1px solid #EAE8E2`, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 14, left: 14, right: 14, bottom: 14, border: `1px solid #EAE8E2`, pointerEvents: 'none' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
            <div style={{ width: 26 }}><MArrow /></div>
            <MCap>DIPLOMA · 2026</MCap>
          </div>
          <div style={{ textAlign: 'center', position: 'relative' }}>
            <MCap>EL INSTITUTO LAIAX OTORGA A</MCap>
            <div style={{ ...sairaTitle, fontSize: 30, letterSpacing: '0.08em', marginTop: 12, marginBottom: 12 }}>
              CARLOS MENDOZA
            </div>
            <div style={{ ...inter, fontSize: 11, color: '#3A3A40', maxWidth: 360, margin: '0 auto', lineHeight: 1.6 }}>
              constancia de haber recorrido el territorio de la Cohorte 01,
              en el campo de la inteligencia artificial aplicada a la
              transformación organizacional.
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', position: 'relative' }}>
            <div>
              <div style={{ width: 80, borderBottom: `1px solid ${M_INK}`, marginBottom: 4 }} />
              <MCap>DIRECTORA</MCap>
            </div>
            <div style={{ width: 24 }}><LXMark /></div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ width: 80, borderBottom: `1px solid ${M_INK}`, marginBottom: 4, marginLeft: 'auto' }} />
              <MCap>CDMX · 2026</MCap>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   6) LANDING PAGE
   ========================================================= */
function MK_Landing() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#222', padding: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#888' }}>
        <MEyebrow c="#888">09 · APLICACIONES / WEB</MEyebrow>
        <MCap c="#888">laiax.org · desktop 1440</MCap>
      </div>
      {/* browser chrome */}
      <div style={{ flex: 1, background: M_INK, borderRadius: 6, overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 30px 60px rgba(0,0,0,0.4)' }}>
        <div style={{ height: 30, background: M_INK2, borderBottom: `1px solid ${M_LINE}`, display: 'flex', alignItems: 'center', padding: '0 14px', gap: 8 }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5B5B' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFB72E' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C940' }} />
          <div style={{ ...mono, fontSize: 10, color: M_MUTE, marginLeft: 14 }}>laiax.org</div>
        </div>

        {/* nav */}
        <div style={{ padding: '20px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${M_LINE}`, color: '#fff' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 28 }}><MArrow color="#fff" /></div>
            <MWord color="#fff" size={14} tracking={0.22} />
          </div>
          <div style={{ display: 'flex', gap: 32, ...mono, fontSize: 10, letterSpacing: '0.18em', color: '#C8C8CC' }}>
            <div>INSTITUTO</div><div>COHORTES</div><div>MENTORES</div><div>MADE</div><div>MANIFIESTO</div>
          </div>
          <div style={{ ...mono, fontSize: 10, letterSpacing: '0.18em', border: `1px solid ${M_GRN}`, color: M_GRN, padding: '8px 14px' }}>POSTULAR →</div>
        </div>

        {/* hero */}
        <div style={{ flex: 1, padding: '60px 56px', color: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
          {/* línea decorativa */}
          <div style={{ position: 'absolute', top: '40%', right: -120, width: 700, height: 1, background: `linear-gradient(90deg, transparent, ${M_GRN})`, transform: 'rotate(-8deg)', opacity: 0.6 }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <MCap c="#5A5A60">COHORTE 01 · POSTULACIONES ABIERTAS</MCap>
            <div style={{ ...mono, fontSize: 10, color: '#5A5A60' }}>
              <div>04 · JUN · 2026 →</div>
              <div>14 SEMANAS · CDMX</div>
            </div>
          </div>

          <div style={{ position: 'relative', zIndex: 2 }}>
            <div style={{ ...sairaTitle, fontSize: 76, letterSpacing: '0.04em', lineHeight: 1.02, fontWeight: 200 }}>
              LA MAESTRÍA<br/>NO SE OBTIENE.<br/>
              <span style={{ color: M_GRN }}>SE RECORRE.</span>
            </div>
            <div style={{ ...inter, fontSize: 16, marginTop: 24, color: '#C8C8CC', maxWidth: 520, lineHeight: 1.55 }}>
              Instituto latinoamericano para empresarios y líderes que están
              transformando sus organizaciones con IA y modelos exponenciales.
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
              <div style={{ ...mono, fontSize: 11, letterSpacing: '0.18em', background: M_GRN, color: M_INK, padding: '14px 22px' }}>POSTULAR →</div>
              <div style={{ ...mono, fontSize: 11, letterSpacing: '0.18em', border: `1px solid ${M_LINE}`, color: '#fff', padding: '14px 22px' }}>VER MANIFIESTO</div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, borderTop: `1px solid ${M_LINE}`, paddingTop: 18 }}>
            {[
              ['14','FELLOWS · COHORTE 01'],
              ['12','MENTORES OPERANDO'],
              ['ExO','FRAMEWORK BASE'],
              ['MX·CO·AR','SEDES 2026'],
            ].map(([k, v]) => (
              <div key={v}>
                <div style={{ ...sairaTitle, fontSize: 28, letterSpacing: '0.04em' }}>{k}</div>
                <MCap c="#5A5A60">{v}</MCap>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   7) EMAIL TEMPLATE + LOADING
   ========================================================= */
function MK_EmailLoading() {
  return (
    <div style={{ width: '100%', height: '100%', background: M_PAPER, padding: 56, display: 'flex', flexDirection: 'column', gap: 28 }}>
      <SectionHeader kicker="10 · APLICACIONES / DIGITAL" title="EMAIL + LOADING" subtitle="Plantillas para newsletter, transaccional y estados de carga." />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 32, alignItems: 'stretch' }}>
        {/* EMAIL */}
        <div style={{ background: '#fff', padding: 32, display: 'flex', flexDirection: 'column', gap: 16, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid #EAE8E2`, paddingBottom: 14 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 24 }}><MArrow /></div>
              <MWord size={14} tracking={0.22} />
            </div>
            <MCap>NEWSLETTER · 014</MCap>
          </div>
          <MCap>28 · ABRIL · 2026</MCap>
          <div style={{ ...sairaTitle, fontSize: 28, letterSpacing: '0.04em', lineHeight: 1.1 }}>
            Esta semana en LAIAX:<br/>
            <span style={{ color: M_GRN }}>tres movimientos.</span>
          </div>
          <div style={{ ...inter, fontSize: 13, color: '#3A3A40', lineHeight: 1.6 }}>
            Se abrió la postulación para Cohorte 01. Salim Ismail confirma su
            participación como mentor invitado. El nuevo programa MADE tiene
            fecha: octubre 2026.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 4 }}>
            {[
              ['01', 'Cohorte 01 · postulaciones abiertas'],
              ['02', 'Salim Ismail se une como mentor'],
              ['03', 'MADE · una nueva división'],
            ].map(([n, t]) => (
              <div key={n} style={{ display: 'grid', gridTemplateColumns: '40px 1fr auto', alignItems: 'center', padding: '12px 0', borderTop: `1px solid #EAE8E2` }}>
                <div style={{ ...mono, fontSize: 10, color: M_MUTE }}>{n}</div>
                <div style={{ ...inter, fontSize: 13 }}>{t}</div>
                <div style={{ ...mono, fontSize: 10, color: M_GRN }}>LEER →</div>
              </div>
            ))}
          </div>
          <div style={{ ...mono, fontSize: 10, color: M_MUTE, marginTop: 'auto', borderTop: `1px solid #EAE8E2`, paddingTop: 14, display: 'flex', justifyContent: 'space-between' }}>
            <span>laiax.org</span>
            <span>UNSUSCRIBE · ARCHIVO</span>
          </div>
        </div>

        {/* LOADING / STATES */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ flex: 1, background: M_INK, color: '#fff', padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
            <MCap c="#5A5A60">LOADING SCREEN · WEB</MCap>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, gap: 22 }}>
              <div style={{ width: 60, height: 60, position: 'relative' }}>
                <svg viewBox="0 0 60 60" style={{ animation: 'lspin 1.4s linear infinite' }}>
                  <circle cx="30" cy="30" r="22" stroke={M_LINE} strokeWidth="2" fill="none" />
                  <circle cx="30" cy="30" r="22" stroke={M_GRN} strokeWidth="2" fill="none" strokeDasharray="40 200" strokeLinecap="round" />
                </svg>
                <style>{`@keyframes lspin{to{transform:rotate(360deg)}}`}</style>
              </div>
              <div style={{ ...sairaTitle, fontSize: 14, letterSpacing: '0.4em' }}>CARGANDO TERRITORIO</div>
            </div>
            <div style={{ ...mono, fontSize: 9, color: '#5A5A60', display: 'flex', justifyContent: 'space-between' }}>
              <span>laiax.org</span><span>v.1.0</span>
            </div>
          </div>
          <div style={{ background: '#fff', padding: 18, display: 'flex', alignItems: 'center', gap: 16, border: `1px solid #EAE8E2` }}>
            <div style={{ width: 32 }}><MArrow /></div>
            <div style={{ flex: 1 }}>
              <div style={{ ...inter, fontSize: 12, fontWeight: 500 }}>Tu postulación fue recibida.</div>
              <div style={{ ...mono, fontSize: 9, color: M_MUTE, marginTop: 2 }}>FOLIO 2026/0142 · respondemos en 72h</div>
            </div>
            <MCap c={M_GRN}>● ACTIVO</MCap>
          </div>
          <div style={{ background: M_INK, color: '#fff', padding: 18, display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ width: 8, height: 8, background: M_GRN, borderRadius: '50%', boxShadow: `0 0 14px ${M_GRN}` }} />
            <div style={{ ...mono, fontSize: 11, letterSpacing: '0.18em' }}>EN VIVO · COHORTE 01 · CONFERENCIA</div>
            <div style={{ ...mono, fontSize: 11, color: M_MUTE, marginLeft: 'auto' }}>00:14:22</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   8) BANNER / ESPECTACULAR + AGENDA / PLUMA
   ========================================================= */
function MK_BannerStationery() {
  return (
    <div style={{ width: '100%', height: '100%', background: M_PAPER, padding: 56, display: 'flex', flexDirection: 'column', gap: 28 }}>
      <SectionHeader kicker="11 · APLICACIONES / OOH + KIT" title="ESPECTACULAR + KIT" subtitle="Banner outdoor, agenda y pluma de cohorte." />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
        {/* BILLBOARD */}
        <div style={{ aspectRatio: '4/1', background: M_INK, color: '#fff', padding: '0 56px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.18)' }}>
          <div style={{ position: 'absolute', top: '50%', right: -200, width: 900, height: 1, background: `linear-gradient(90deg, transparent, ${M_GRN})`, transform: 'rotate(-6deg)', opacity: 0.7 }} />
          <div style={{ position: 'relative' }}>
            <MCap c="#5A5A60">PERIFÉRICO SUR · CDMX</MCap>
            <div style={{ ...sairaTitle, fontSize: 56, letterSpacing: '0.04em', marginTop: 8, lineHeight: 1 }}>
              SI YA LLEGASTE AQUÍ,<br/>
              ESTÁS <span style={{ color: M_GRN }}>TARDE</span>.
            </div>
            <MCap c="#888">LAIAX · COHORTE 01 · postulaciones abiertas</MCap>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 10, position: 'relative' }}>
            <div style={{ width: 100 }}><MArrow color="#fff" /></div>
            <MWord color="#fff" size={26} tracking={0.22} />
          </div>
        </div>

        {/* KIT row */}
        <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18 }}>
          {/* AGENDA */}
          <div style={{ background: M_INK, color: '#fff', padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 20px 40px rgba(0,0,0,0.18)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ width: 26 }}><MArrow color="#fff" /></div>
              <MCap c="#5A5A60">A5 · 240 PG</MCap>
            </div>
            <div>
              <div style={{ ...sairaTitle, fontSize: 26, letterSpacing: '0.06em' }}>BITÁCORA<br/>DE COHORTE</div>
              <MCap c="#5A5A60">01 / 2026</MCap>
            </div>
            <div style={{ borderTop: `1px solid ${M_LINE}`, paddingTop: 8, ...mono, fontSize: 9, color: M_GRN }}>● LAIAX · INSTITUTO</div>
          </div>
          {/* PLUMA */}
          <div style={{ background: '#fff', padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: 18, border: `1px solid #EAE8E2` }}>
            <MCap>PLUMA DE COHORTE</MCap>
            <div style={{ width: '90%', height: 12, background: M_INK, borderRadius: 6, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
              <div style={{ width: '12%', height: '100%', background: M_GRN, borderRadius: '0 6px 6px 0' }} />
              <div style={{ position: 'absolute', left: 24, ...mono, fontSize: 7, letterSpacing: '0.4em', color: '#fff' }}>LAIAX</div>
            </div>
            <MCap>negro mate · clip aluminio · punta 0.5</MCap>
          </div>
          {/* PIN */}
          <div style={{ background: M_PAPER, padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: `1px solid #EAE8E2` }}>
            <MCap>PIN DE SOLAPA</MCap>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flex: 1, gap: 22 }}>
              <div style={{ width: 70, height: 70, background: M_INK, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 -3px 6px rgba(0,0,0,0.5), 0 6px 14px rgba(0,0,0,0.3)' }}>
                <div style={{ width: 38 }}><MArrow color="#fff" /></div>
              </div>
              <div style={{ width: 70, height: 70, background: M_GRN, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: 'inset 0 -3px 6px rgba(0,0,0,0.2), 0 6px 14px rgba(0,0,0,0.18)' }}>
                <div style={{ width: 38 }}><MArrow color={M_INK} accent={M_INK} /></div>
              </div>
            </div>
            <MCap>esmaltado mate · 18mm</MCap>
          </div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   9) ICONOS + 10) MANIFIESTO + 11) MADE SUB-MARCA
   ========================================================= */
function MK_Icons() {
  const Icon = ({ children, label }) => (
    <div style={{ background: '#fff', padding: 20, display: 'flex', flexDirection: 'column', gap: 12, alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ width: 56, height: 56, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg viewBox="0 0 40 40" width="100%" height="100%" fill="none" stroke={M_INK} strokeWidth="1.4" strokeLinecap="square">
          {children}
        </svg>
      </div>
      <MCap>{label}</MCap>
    </div>
  );
  return (
    <div style={{ width: '100%', height: '100%', background: M_PAPER, padding: 56, display: 'flex', flexDirection: 'column', gap: 28 }}>
      <SectionHeader kicker="12 · APLICACIONES / SISTEMA DE ICONOS" title="ICONOGRAFÍA" subtitle="Line-art 1.4px. Sin curvas innecesarias. Geometría pura." />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gridAutoRows: '1fr', gap: 1, background: '#D4D2CC', border: '1px solid #D4D2CC' }}>
        <Icon label="VELOCIDAD"><path d="M 4 30 L 36 10 L 30 18 L 8 32 Z" fill={M_GRN} stroke="none"/></Icon>
        <Icon label="MAESTRÍA"><circle cx="20" cy="20" r="14"/><circle cx="20" cy="20" r="6"/></Icon>
        <Icon label="MENTOR"><path d="M 8 32 L 20 8 L 32 32 Z"/><line x1="14" y1="22" x2="26" y2="22"/></Icon>
        <Icon label="COHORTE"><rect x="6" y="14" width="6" height="14"/><rect x="17" y="10" width="6" height="18"/><rect x="28" y="6" width="6" height="22"/></Icon>
        <Icon label="EXPONENCIAL"><path d="M 6 32 Q 20 32 20 20 Q 20 8 34 8"/><path d="M 28 8 L 34 8 L 34 14"/></Icon>
        <Icon label="TERRITORIO"><path d="M 6 30 L 16 14 L 24 22 L 34 8"/><line x1="6" y1="34" x2="34" y2="34"/></Icon>
        <Icon label="IA"><rect x="8" y="8" width="24" height="24" rx="2"/><circle cx="16" cy="16" r="2" fill={M_INK}/><circle cx="24" cy="24" r="2" fill={M_GRN}/><line x1="16" y1="16" x2="24" y2="24"/></Icon>
        <Icon label="CONFIDENCIAL"><rect x="10" y="16" width="20" height="16"/><path d="M 14 16 V 12 a 6 6 0 0 1 12 0 V 16"/></Icon>
        <Icon label="CONEXIÓN"><circle cx="10" cy="20" r="3"/><circle cx="30" cy="20" r="3"/><line x1="13" y1="20" x2="27" y2="20"/></Icon>
        <Icon label="ARCHIVO"><rect x="8" y="6" width="24" height="28"/><line x1="13" y1="14" x2="27" y2="14"/><line x1="13" y1="20" x2="27" y2="20"/><line x1="13" y1="26" x2="22" y2="26"/></Icon>
        <Icon label="SEÑAL"><line x1="6" y1="34" x2="34" y2="34"/><line x1="10" y1="28" x2="10" y2="34"/><line x1="18" y1="22" x2="18" y2="34"/><line x1="26" y1="14" x2="26" y2="34"/><line x1="34" y1="6" x2="34" y2="34"/></Icon>
        <Icon label="MIEMBRO"><circle cx="20" cy="14" r="6"/><path d="M 8 34 Q 20 22 32 34"/></Icon>
      </div>
    </div>
  );
}

function MK_Manifesto() {
  const lines = [
    ['I',   'No somos una escuela.', 'Somos un instituto. La maestría se recorre, no se obtiene.'],
    ['II',  'Mentores que operan.', 'No académicos teóricos. Empresarios activos con cicatrices.'],
    ['III', 'Tiempo real.', 'El material se actualiza al ritmo de la industria, no del semestre.'],
    ['IV',  'IA como amplificador.', 'No reemplaza al líder. Lo potencia. Lo desnuda. Lo acelera.'],
    ['V',   'Latinoamérica primero.', 'Pensamos desde aquí, no traducimos desde allá.'],
  ];
  return (
    <div style={{ width: '100%', height: '100%', background: M_INK, color: '#fff', padding: 72, display: 'flex', flexDirection: 'column', gap: 28, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 110, right: -140, width: 700, height: 1, background: `linear-gradient(90deg, transparent, ${M_GRN})`, transform: 'rotate(-6deg)', opacity: 0.6 }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', position: 'relative' }}>
        <div>
          <MCap c="#5A5A60">13 · MANIFIESTO</MCap>
          <div style={{ ...sairaTitle, fontSize: 56, letterSpacing: '0.06em', marginTop: 10, lineHeight: 1.05 }}>
            CINCO<br/>PRINCIPIOS.
          </div>
        </div>
        <MCap c="#5A5A60">v 1.0 · 2026</MCap>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 0, position: 'relative' }}>
        {lines.map(([n, t, d], i) => (
          <div key={n} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 2fr', gap: 24, padding: '20px 0', borderTop: `1px solid ${M_LINE}` }}>
            <div style={{ ...mono, fontSize: 13, letterSpacing: '0.18em', color: i === 1 ? M_GRN : M_MUTE }}>{n}</div>
            <div style={{ ...sairaTitle, fontSize: 22, letterSpacing: '0.04em' }}>{t}</div>
            <div style={{ ...inter, fontSize: 14, color: '#C8C8CC', alignSelf: 'center' }}>{d}</div>
          </div>
        ))}
      </div>
      <div style={{ ...mono, fontSize: 10, color: '#5A5A60', borderTop: `1px solid ${M_LINE}`, paddingTop: 12, display: 'flex', justifyContent: 'space-between' }}>
        <span>LAIAX · INSTITUTO LATINOAMERICANO</span>
        <span style={{ color: M_GRN }}>● 2026</span>
      </div>
    </div>
  );
}

function MK_MADE() {
  return (
    <div style={{ width: '100%', height: '100%', background: M_PAPER, padding: 56, display: 'flex', flexDirection: 'column', gap: 28 }}>
      <SectionHeader kicker="14 · SUB-MARCA" title="MADE · made.laiax.org" subtitle="Una división dentro de LAIAX. Misma familia tipográfica, acento ámbar para diferenciarse del verde madre." />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 32, alignItems: 'stretch' }}>
        {/* Hero MADE */}
        <div style={{ background: M_INK, color: '#fff', padding: 48, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: '40%', right: -120, width: 600, height: 1, background: `linear-gradient(90deg, transparent, ${M_AMBER})`, opacity: 0.6, transform: 'rotate(-6deg)' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ width: 30 }}><MArrow color="#fff" accent={M_AMBER} /></div>
            <MCap c="#5A5A60">DIVISIÓN DE LAIAX</MCap>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ ...sairaTitle, fontSize: 120, letterSpacing: '0.18em', lineHeight: 0.95 }}>MADE</div>
            <div style={{ ...inter, fontSize: 14, marginTop: 18, color: '#C8C8CC', maxWidth: 380, lineHeight: 1.55 }}>
              Programa de implementación. Donde LAIAX enseña el mapa, MADE
              construye el territorio dentro de tu organización.
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: `1px solid ${M_LINE}`, paddingTop: 12 }}>
            <MCap c="#5A5A60">made.laiax.org</MCap>
            <MCap c={M_AMBER}>● ACENTO ÁMBAR</MCap>
          </div>
        </div>
        {/* lockups MADE */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{ background: '#fff', padding: 28, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', border: `1px solid #EAE8E2` }}>
            <MCap>LOCKUP MAESTRO</MCap>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, justifyContent: 'center' }}>
              <div style={{ ...sairaTitle, fontSize: 36, letterSpacing: '0.18em' }}>LAIAX</div>
              <div style={{ width: 1, height: 28, background: '#D4D2CC' }} />
              <div style={{ ...sairaTitle, fontSize: 36, letterSpacing: '0.18em', color: M_AMBER }}>MADE</div>
            </div>
            <MCap>relación 1:1 · sub-marca explícita</MCap>
          </div>
          <div style={{ background: M_INK, color: '#fff', padding: 28, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <MCap c="#5A5A60">VERSIÓN DARK</MCap>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, justifyContent: 'center' }}>
              <div style={{ ...sairaTitle, fontSize: 36, letterSpacing: '0.18em', color: '#fff' }}>LAIAX</div>
              <div style={{ width: 1, height: 28, background: M_LINE }} />
              <div style={{ ...sairaTitle, fontSize: 36, letterSpacing: '0.18em', color: M_AMBER }}>MADE</div>
            </div>
            <MCap c="#5A5A60">aplicaciones digitales</MCap>
          </div>
          <div style={{ background: M_AMBER, color: M_INK, padding: 24, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ ...sairaTitle, fontSize: 28, letterSpacing: '0.18em' }}>MADE</div>
            <MCap c={M_INK}>FONDO PROPIO · USOS DE FIRMA</MCap>
          </div>
        </div>
      </div>
    </div>
  );
}

/* expose to window so brand.html can use them via babel without modules */
Object.assign(window, {
  MK_LogoSuite, MK_BusinessCard, MK_Badge, MK_Letterhead, MK_Invoice,
  MK_Landing, MK_EmailLoading, MK_BannerStationery, MK_Icons, MK_Manifesto, MK_MADE,
});
