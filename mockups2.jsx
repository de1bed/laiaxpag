/* global React */
/* Versiones v2 — más creativas, gradientes, layering */
const X_INK = '#0A0A0B';
const X_INK2 = '#131316';
const X_PAPER = '#F5F4F0';
const X_LINE = '#2A2A2E';
const X_MUTE = '#7A7A82';
const X_GRN = '#00D27A';
const X_LIME = '#C6FF3D';
const X_AMBER = '#FF5B2E';

const xSaira = { fontFamily: 'Saira, sans-serif', fontWeight: 200 };
const xInter = { fontFamily: 'Inter Tight, sans-serif' };
const xMono = { fontFamily: 'JetBrains Mono, monospace' };

function XArrow({ color = X_INK, accent = X_GRN }) {
  return (
    <svg viewBox="0 0 200 120" width="100%" height="100%">
      <path d="M 8 90 L 192 18 L 175 38 L 30 90 Z" fill={accent} />
      <path d="M 95 102 L 165 60 L 158 78 L 110 102 Z" fill={color} />
    </svg>
  );
}
function XLX({ color = X_INK, accent = X_GRN, sw = 2.2 }) {
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
function XWord({ color = X_INK, size = 60, tracking = 0.22 }) {
  return <div style={{ ...xSaira, fontSize: size, color, letterSpacing: `${tracking}em`, paddingLeft: `${tracking}em`, lineHeight: 1 }}>LAIAX</div>;
}
const XCap = ({ children, c = X_MUTE }) => <div style={{ ...xMono, fontSize: 10, color: c, letterSpacing: '0.04em' }}>{children}</div>;
const XEye = ({ children, c = X_MUTE }) => <div style={{ ...xMono, fontSize: 10, letterSpacing: '0.22em', color: c, textTransform: 'uppercase' }}>{children}</div>;
const XHead = ({ kicker, title, sub, dark }) => (
  <div>
    <XEye c={dark ? '#5A5A60' : X_MUTE}>{kicker}</XEye>
    <div style={{ ...xSaira, fontSize: 36, marginTop: 10, letterSpacing: '0.14em', color: dark ? '#fff' : X_INK }}>{title}</div>
    {sub && <div style={{ ...xInter, fontSize: 13, color: dark ? '#C8C8CC' : '#3A3A40', marginTop: 6, maxWidth: 600 }}>{sub}</div>}
  </div>
);

/* ============ BUSINESS CARD V2 ============ */
function MK_BusinessCardV2() {
  const grad = `radial-gradient(circle at 80% 20%, ${X_GRN}33, transparent 50%), radial-gradient(circle at 10% 90%, ${X_AMBER}22, transparent 60%), ${X_INK}`;
  return (
    <div style={{ width: '100%', height: '100%', background: `linear-gradient(180deg, #1a1a1d, #0a0a0b)`, padding: 56, display: 'flex', flexDirection: 'column', gap: 28 }}>
      <XHead kicker="05 · TARJETAS / 4 VARIANTES" title="BUSINESS CARDS" sub="De confidencial a member edition. Acabados distintos según el rol." dark />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)', gap: 24 }}>
        {/* 1 · Gradiente miembro */}
        <div style={{ background: grad, color: '#fff', padding: 30, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 30px 60px rgba(0,0,0,0.4)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(125deg, transparent 60%, ${X_GRN}22 80%, transparent)`, pointerEvents: 'none' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
            <div style={{ width: 40 }}><XArrow color="#fff" /></div>
            <div style={{ ...xMono, fontSize: 9, color: X_GRN }}>● MEMBER · 001 / 014</div>
          </div>
          <div style={{ position: 'relative' }}>
            <XCap c="#888">FOUNDING FELLOW</XCap>
            <div style={{ ...xSaira, fontSize: 24, letterSpacing: '0.06em', marginTop: 8 }}>ANDREA<br/>VARGAS</div>
            <div style={{ ...xMono, fontSize: 10, marginTop: 14, color: '#C8C8CC' }}>andrea@laiax.org</div>
          </div>
          <XEye c="#5A5A60">CONFIDENCIAL · MMXXVI</XEye>
        </div>

        {/* 2 · Embossed verde */}
        <div style={{ background: X_GRN, color: X_INK, padding: 30, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 30px 60px rgba(0,0,0,0.4)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -60, right: -60, width: 240, height: 240, border: `1px solid ${X_INK}33`, borderRadius: '50%' }} />
          <div style={{ position: 'absolute', top: -100, right: -100, width: 320, height: 320, border: `1px solid ${X_INK}22`, borderRadius: '50%' }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
            <div style={{ width: 40 }}><XArrow color={X_INK} accent={X_INK} /></div>
            <XEye c={X_INK}>FRONT · GREEN EDITION</XEye>
          </div>
          <div style={{ ...xSaira, fontSize: 56, letterSpacing: '0.2em', position: 'relative' }}>LAIAX</div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <XCap c={X_INK}>laiax.org</XCap>
            <XCap c={X_INK}>HOT-FOIL · NEGRO</XCap>
          </div>
        </div>

        {/* 3 · Mesh degradado */}
        <div style={{ background: `conic-gradient(from 220deg at 30% 60%, ${X_INK}, ${X_INK2}, ${X_GRN} 70%, ${X_INK})`, color: '#fff', padding: 30, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 30px 60px rgba(0,0,0,0.4)', position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,11,0.55)' }} />
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between' }}>
            <XEye c="#888">DIRECTORS · BACK</XEye>
            <XCap c="#C8C8CC">/ 02</XCap>
          </div>
          <div style={{ position: 'relative' }}>
            <div style={{ ...xSaira, fontSize: 22, letterSpacing: '0.06em' }}>SALIM ISMAIL</div>
            <XCap c="#C8C8CC">MENTOR · ExO</XCap>
          </div>
          <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div style={{ ...xMono, fontSize: 10, lineHeight: 1.6 }}>
              salim@laiax.org<br/>
              <span style={{ color: X_GRN }}>laiax.org</span>
            </div>
            <div style={{ width: 30 }}><XLX color="#fff" /></div>
          </div>
        </div>

        {/* 4 · Papel uncoated, lateral verde */}
        <div style={{ background: X_PAPER, color: X_INK, padding: 0, display: 'flex', boxShadow: '0 30px 60px rgba(0,0,0,0.4)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ width: 16, background: `linear-gradient(180deg, ${X_GRN}, ${X_LIME})` }} />
          <div style={{ flex: 1, padding: 30, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div style={{ width: 36 }}><XArrow /></div>
              <XCap>STAFF · 014</XCap>
            </div>
            <div>
              <XCap>OPS DIRECTOR</XCap>
              <div style={{ ...xSaira, fontSize: 22, letterSpacing: '0.06em', marginTop: 6 }}>CARLOS<br/>MENDOZA</div>
            </div>
            <div style={{ ...xMono, fontSize: 10, color: X_MUTE }}>+52 55 0000 0000 · laiax.org</div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============ BADGE V2 — Gradiente, holográfico, premium ============ */
function MK_BadgeV2() {
  return (
    <div style={{ width: '100%', height: '100%', background: `radial-gradient(ellipse at top, #1a1a1d, #0a0a0b 70%)`, padding: 56, display: 'flex', flexDirection: 'column', gap: 28 }}>
      <XHead kicker="06 · ACCESO / GAFETES + PULSERAS" title="ACCESS SYSTEM" sub="3 niveles de gafete con acabados distintos. Pulseras NFC con el monograma serigrafiado." dark />

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32, alignItems: 'center' }}>

        {/* Tres gafetes con cordón */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, alignItems: 'flex-start', justifyItems: 'center' }}>
          {[
            { kind: 'FELLOW', tone: 'fellow', accent: X_GRN, name: 'CARLOS\nMENDOZA' },
            { kind: 'MENTOR', tone: 'mentor', accent: X_LIME, name: 'SALIM\nISMAIL' },
            { kind: 'STAFF',  tone: 'staff',  accent: X_AMBER, name: 'STAFF\nPRODUCCIÓN' },
          ].map((b, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              {/* cordón */}
              <div style={{ width: 32, height: 60, background: `linear-gradient(180deg, ${b.accent}, ${b.accent}66 60%, transparent)`, clipPath: 'polygon(40% 0, 60% 0, 90% 100%, 10% 100%)' }} />
              <div style={{ width: 70, height: 12, background: X_INK, borderRadius: '0 0 30px 30px', boxShadow: 'inset 0 -3px 6px rgba(0,0,0,0.5)' }} />
              {/* gafete */}
              <div style={{
                width: 240, height: 360,
                background: b.tone === 'fellow'
                  ? `linear-gradient(160deg, #0a0a0b 0%, #1c1c20 50%, ${X_GRN}22 100%), #0a0a0b`
                  : b.tone === 'mentor'
                    ? `linear-gradient(160deg, ${X_INK}, ${X_INK})`
                    : `linear-gradient(160deg, ${X_PAPER}, #ECEAE3)`,
                color: b.tone === 'staff' ? X_INK : '#fff',
                padding: 18,
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                boxShadow: '0 30px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.05)',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* punch */}
                <div style={{ position: 'absolute', top: 10, left: '50%', transform: 'translateX(-50%)', width: 32, height: 5, background: '#000', borderRadius: 3, opacity: 0.4 }} />
                {/* halo */}
                {b.tone === 'fellow' && <div style={{ position: 'absolute', top: -80, right: -80, width: 200, height: 200, background: `radial-gradient(circle, ${X_GRN}55, transparent 60%)` }} />}
                {b.tone === 'mentor' && <div style={{ position: 'absolute', bottom: -60, left: -60, width: 200, height: 200, background: `radial-gradient(circle, ${X_LIME}33, transparent 60%)` }} />}

                <div style={{ marginTop: 14, display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
                  <div style={{ width: 38 }}><XArrow color={b.tone === 'staff' ? X_INK : '#fff'} accent={b.accent} /></div>
                  <div style={{ ...xMono, fontSize: 8, color: b.accent, letterSpacing: '0.2em' }}>● {b.kind}</div>
                </div>

                {/* foto holográfica */}
                <div style={{
                  width: '100%', aspectRatio: '1/1',
                  background: b.tone === 'staff'
                    ? `repeating-linear-gradient(135deg, #D4D2CC, #D4D2CC 6px, #ECEAE3 6px, #ECEAE3 12px)`
                    : `linear-gradient(135deg, ${b.accent}33, ${X_LINE} 50%, ${b.accent}22)`,
                  position: 'relative',
                }}>
                  <div style={{ ...xMono, fontSize: 8, color: b.tone === 'staff' ? X_MUTE : '#5A5A60', position: 'absolute', bottom: 6, left: 6 }}>· FOTO ·</div>
                </div>

                <div style={{ position: 'relative' }}>
                  <div style={{ ...xMono, fontSize: 7, letterSpacing: '0.2em', color: b.tone === 'staff' ? X_MUTE : '#888' }}>COHORTE 01 · 2026</div>
                  <div style={{ ...xSaira, fontSize: 14, letterSpacing: '0.06em', marginTop: 4, whiteSpace: 'pre-line' }}>{b.name}</div>
                </div>

                {/* QR + LX */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', position: 'relative' }}>
                  <div style={{ width: 30, height: 30, background: b.tone === 'staff' ? X_INK : '#fff', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 1, padding: 2 }}>
                    {Array.from({length:25}).map((_,k)=>(
                      <div key={k} style={{ background: Math.random()>0.5 ? (b.tone === 'staff' ? X_PAPER : X_INK) : 'transparent' }} />
                    ))}
                  </div>
                  <div style={{ width: 16 }}><XLX color={b.tone === 'staff' ? X_INK : '#fff'} accent={b.accent} /></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pulseras + NFC */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <XEye c="#888">PULSERAS NFC · COHORTE 01</XEye>

          <div style={{ height: 72, background: `linear-gradient(90deg, ${X_INK} 0%, ${X_INK} 70%, ${X_GRN} 100%)`, borderRadius: 8, color: '#fff', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 14px 30px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.08)' }}>
            <div style={{ width: 32 }}><XArrow color="#fff" /></div>
            <div style={{ ...xSaira, fontSize: 14, letterSpacing: '0.34em' }}>FELLOW · 001</div>
            <div style={{ width: 18, height: 18, border: `1.5px solid ${X_GRN}`, borderRadius: '50%', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 4, border: `1.5px solid ${X_GRN}`, borderRadius: '50%' }} />
            </div>
          </div>

          <div style={{ height: 72, background: `linear-gradient(90deg, ${X_INK2}, ${X_INK})`, borderRadius: 8, color: '#fff', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 14px 30px rgba(0,0,0,0.4)', border: `1px solid ${X_LIME}`, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 80% 50%, ${X_LIME}22, transparent 50%)` }} />
            <div style={{ width: 32, position: 'relative' }}><XArrow color="#fff" accent={X_LIME} /></div>
            <div style={{ ...xSaira, fontSize: 14, letterSpacing: '0.34em', position: 'relative' }}>MENTOR · VIP</div>
            <div style={{ ...xMono, fontSize: 9, color: X_LIME, position: 'relative' }}>NFC ●</div>
          </div>

          <div style={{ height: 72, background: X_PAPER, borderRadius: 8, color: X_INK, padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxShadow: '0 14px 30px rgba(0,0,0,0.4)' }}>
            <div style={{ width: 32 }}><XArrow color={X_INK} /></div>
            <div style={{ ...xSaira, fontSize: 14, letterSpacing: '0.34em' }}>DAY PASS</div>
            <XCap c={X_AMBER}>● INVITADO</XCap>
          </div>

          <XCap c="#888">silicona médica · serigrafía blanca · chip NFC NTAG215</XCap>
        </div>
      </div>
    </div>
  );
}

/* ============ LANDING V2 — gradiente, mesh, hero más cinematográfico ============ */
function MK_LandingV2() {
  return (
    <div style={{ width: '100%', height: '100%', background: '#1a1a1d', padding: 28, display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <XEye c="#888">09 · WEB / LANDING</XEye>
        <XCap c="#888">laiax.org · desktop 1440 · v2</XCap>
      </div>
      <div style={{ flex: 1, background: X_INK, borderRadius: 8, overflow: 'hidden', display: 'flex', flexDirection: 'column', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', position: 'relative' }}>
        {/* mesh gradient hero background */}
        <div style={{ position: 'absolute', inset: 0, background: `
          radial-gradient(ellipse 800px 400px at 75% 30%, ${X_GRN}26, transparent 60%),
          radial-gradient(ellipse 600px 600px at 15% 90%, ${X_AMBER}1A, transparent 60%),
          radial-gradient(ellipse 500px 300px at 50% 100%, ${X_LIME}14, transparent 70%),
          ${X_INK}
        ` }} />
        {/* grid sutil */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(${X_LINE}88 1px, transparent 1px), linear-gradient(90deg, ${X_LINE}88 1px, transparent 1px)`, backgroundSize: '80px 80px', opacity: 0.15, maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)' }} />

        {/* chrome */}
        <div style={{ height: 30, background: 'rgba(19,19,22,0.9)', borderBottom: `1px solid ${X_LINE}`, display: 'flex', alignItems: 'center', padding: '0 14px', gap: 8, position: 'relative', backdropFilter: 'blur(10px)' }}>
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FF5B5B' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#FFB72E' }} />
          <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28C940' }} />
          <div style={{ ...xMono, fontSize: 10, color: X_MUTE, marginLeft: 14 }}>laiax.org</div>
        </div>

        {/* nav */}
        <div style={{ padding: '20px 56px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#fff', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 28 }}><XArrow color="#fff" /></div>
            <XWord color="#fff" size={14} tracking={0.22} />
          </div>
          <div style={{ display: 'flex', gap: 32, ...xMono, fontSize: 10, letterSpacing: '0.18em', color: '#C8C8CC' }}>
            <div>INSTITUTO</div><div>COHORTES</div><div>MENTORES</div><div style={{ color: X_AMBER }}>● MADE</div><div>MANIFIESTO</div>
          </div>
          <div style={{ ...xMono, fontSize: 10, letterSpacing: '0.18em', background: `linear-gradient(90deg, ${X_GRN}, ${X_LIME})`, color: X_INK, padding: '8px 16px', fontWeight: 600 }}>POSTULAR →</div>
        </div>

        {/* hero */}
        <div style={{ flex: 1, padding: '50px 56px', color: '#fff', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 40, position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
              <div style={{ width: 8, height: 8, background: X_GRN, borderRadius: '50%', boxShadow: `0 0 14px ${X_GRN}` }} />
              <XEye c="#C8C8CC">COHORTE 01 · POSTULACIONES ABIERTAS · 04 JUN 2026</XEye>
            </div>
            <div>
              <div style={{ ...xSaira, fontSize: 84, letterSpacing: '0.02em', lineHeight: 0.98, fontWeight: 200 }}>
                LA MAESTRÍA<br/>NO SE OBTIENE.<br/>
                <span style={{ background: `linear-gradient(90deg, ${X_GRN}, ${X_LIME})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>SE RECORRE.</span>
              </div>
              <div style={{ ...xInter, fontSize: 16, marginTop: 24, color: '#C8C8CC', maxWidth: 540, lineHeight: 1.55 }}>
                Instituto latinoamericano para empresarios y líderes que están
                transformando sus organizaciones con IA y modelos exponenciales.
                14 fellows. 12 mentores que operan. Un territorio.
              </div>
              <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
                <div style={{ ...xMono, fontSize: 11, letterSpacing: '0.18em', background: `linear-gradient(90deg, ${X_GRN}, ${X_LIME})`, color: X_INK, padding: '14px 22px', fontWeight: 600 }}>POSTULAR →</div>
                <div style={{ ...xMono, fontSize: 11, letterSpacing: '0.18em', border: `1px solid ${X_LINE}`, color: '#fff', padding: '14px 22px', backdropFilter: 'blur(10px)', background: 'rgba(255,255,255,0.03)' }}>VER MANIFIESTO ↓</div>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18, borderTop: `1px solid ${X_LINE}`, paddingTop: 16 }}>
              {[['14','FELLOWS'],['12','MENTORES'],['ExO','FRAMEWORK'],['MX·CO·AR','SEDES']].map(([k,v])=>(
                <div key={v}>
                  <div style={{ ...xSaira, fontSize: 26, letterSpacing: '0.04em', background: `linear-gradient(180deg, #fff, #888)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{k}</div>
                  <XCap c="#5A5A60">{v}</XCap>
                </div>
              ))}
            </div>
          </div>

          {/* card flotante con mentor del mes */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignSelf: 'center' }}>
            <div style={{ background: `linear-gradient(160deg, rgba(255,255,255,0.04), rgba(255,255,255,0.01))`, border: `1px solid ${X_LINE}`, borderRadius: 12, padding: 22, backdropFilter: 'blur(10px)', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, right: 0, width: 120, height: 120, background: `radial-gradient(circle at top right, ${X_GRN}33, transparent 60%)` }} />
              <XEye c="#888">MENTOR · ESTA SEMANA</XEye>
              <div style={{ ...xSaira, fontSize: 22, letterSpacing: '0.04em', marginTop: 14 }}>SALIM ISMAIL</div>
              <XCap c="#C8C8CC">FUNDADOR · OPENExO</XCap>
              <div style={{ ...xInter, fontSize: 11, color: '#C8C8CC', marginTop: 16, lineHeight: 1.55 }}>
                "La IA no es la herramienta. Es la nueva organización."
              </div>
              <div style={{ marginTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  {[X_GRN, X_LIME, X_AMBER].map((c,i)=>(
                    <div key={i} style={{ width: 18, height: 18, borderRadius: '50%', background: `radial-gradient(circle, ${c}, ${X_INK})`, border: `1px solid ${X_LINE}` }} />
                  ))}
                  <XCap c="#888">+9 mentores</XCap>
                </div>
                <div style={{ ...xMono, fontSize: 9, color: X_GRN }}>VER →</div>
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.02)', border: `1px solid ${X_LINE}`, borderRadius: 12, padding: 18, backdropFilter: 'blur(10px)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <XCap c="#888">PRÓXIMA SESIÓN ABIERTA</XCap>
                <XCap c={X_GRN}>● EN VIVO</XCap>
              </div>
              <div style={{ ...xSaira, fontSize: 16, marginTop: 8, letterSpacing: '0.04em' }}>IA · ORG. EXPONENCIAL</div>
              <div style={{ ...xMono, fontSize: 10, color: '#888', marginTop: 4 }}>14 MAY · 19:00 CDMX · 350 inscritos</div>
              <div style={{ marginTop: 12, height: 4, background: X_LINE, borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ width: '72%', height: '100%', background: `linear-gradient(90deg, ${X_GRN}, ${X_LIME})` }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============ EMAIL + LOADING V2 ============ */
function MK_EmailLoadingV2() {
  return (
    <div style={{ width: '100%', height: '100%', background: `linear-gradient(180deg, #1a1a1d, #0a0a0b)`, padding: 56, display: 'flex', flexDirection: 'column', gap: 28 }}>
      <XHead kicker="10 · DIGITAL / EMAIL + LOADING" title="DIGITAL TOUCHPOINTS" sub="Newsletter dark, transaccional limpio, loaders cinematográficos." dark />
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 32 }}>

        {/* EMAIL DARK */}
        <div style={{ background: X_INK, color: '#fff', padding: 32, display: 'flex', flexDirection: 'column', gap: 16, boxShadow: '0 30px 60px rgba(0,0,0,0.5)', position: 'relative', overflow: 'hidden', borderRadius: 8, border: `1px solid ${X_LINE}` }}>
          <div style={{ position: 'absolute', top: 0, right: 0, width: 300, height: 200, background: `radial-gradient(ellipse at top right, ${X_GRN}22, transparent 70%)` }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: `1px solid ${X_LINE}`, paddingBottom: 14, position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 24 }}><XArrow color="#fff" /></div>
              <XWord color="#fff" size={14} tracking={0.22} />
            </div>
            <XCap c="#888">DISPATCH · 014</XCap>
          </div>
          <XCap c="#888">28 · ABRIL · 2026</XCap>
          <div style={{ ...xSaira, fontSize: 30, letterSpacing: '0.04em', lineHeight: 1.1, position: 'relative' }}>
            Esta semana en LAIAX:<br/>
            <span style={{ background: `linear-gradient(90deg, ${X_GRN}, ${X_LIME})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>tres movimientos.</span>
          </div>
          <div style={{ ...xInter, fontSize: 13, color: '#C8C8CC', lineHeight: 1.6, position: 'relative' }}>
            Se abrió la postulación para Cohorte 01. Salim Ismail confirma su
            participación como mentor invitado. El nuevo programa MADE tiene
            fecha: octubre 2026.
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 4, position: 'relative' }}>
            {[
              ['01', 'Cohorte 01 · postulaciones abiertas', X_GRN],
              ['02', 'Salim Ismail se une como mentor',     X_LIME],
              ['03', 'MADE · una nueva división',           X_AMBER],
            ].map(([n, t, c]) => (
              <div key={n} style={{ display: 'grid', gridTemplateColumns: '40px 1fr auto', alignItems: 'center', padding: '12px 0', borderTop: `1px solid ${X_LINE}` }}>
                <div style={{ ...xMono, fontSize: 10, color: c }}>● {n}</div>
                <div style={{ ...xInter, fontSize: 13 }}>{t}</div>
                <div style={{ ...xMono, fontSize: 10, color: c }}>LEER →</div>
              </div>
            ))}
          </div>
          <div style={{ ...xMono, fontSize: 9, color: '#888', marginTop: 'auto', borderTop: `1px solid ${X_LINE}`, paddingTop: 14, display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
            <span>laiax.org</span>
            <span>UNSUBSCRIBE · ARCHIVO</span>
          </div>
        </div>

        {/* LOADING + STATES */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ flex: 1.6, background: X_INK, color: '#fff', padding: 32, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', overflow: 'hidden', borderRadius: 8, border: `1px solid ${X_LINE}` }}>
            {/* mesh */}
            <div style={{ position: 'absolute', inset: 0, background: `
              radial-gradient(ellipse 600px 300px at 50% 50%, ${X_GRN}22, transparent 60%),
              radial-gradient(ellipse 400px 200px at 30% 80%, ${X_AMBER}14, transparent 70%)
            ` }} />
            <XEye c="#888">LOADING · LAIAX.ORG</XEye>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', flex: 1, gap: 28, position: 'relative' }}>
              <div style={{ width: 80, height: 80, position: 'relative' }}>
                <svg viewBox="0 0 80 80" style={{ animation: 'lspin 2s linear infinite' }}>
                  <defs>
                    <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor={X_GRN} />
                      <stop offset="100%" stopColor={X_LIME} />
                    </linearGradient>
                  </defs>
                  <circle cx="40" cy="40" r="32" stroke={X_LINE} strokeWidth="1.5" fill="none" />
                  <circle cx="40" cy="40" r="32" stroke="url(#lg1)" strokeWidth="2" fill="none" strokeDasharray="60 200" strokeLinecap="round" />
                </svg>
                <style>{`@keyframes lspin{to{transform:rotate(360deg)}}`}</style>
                <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <div style={{ width: 32 }}><XArrow color="#fff" /></div>
                </div>
              </div>
              <div style={{ ...xSaira, fontSize: 14, letterSpacing: '0.5em', textAlign: 'center' }}>
                CARGANDO<br/>
                <span style={{ color: X_GRN }}>TERRITORIO</span>
              </div>
              <div style={{ width: 200, height: 2, background: X_LINE, borderRadius: 2, overflow: 'hidden' }}>
                <div style={{ width: '64%', height: '100%', background: `linear-gradient(90deg, ${X_GRN}, ${X_LIME})` }} />
              </div>
            </div>
            <div style={{ ...xMono, fontSize: 9, color: '#888', display: 'flex', justifyContent: 'space-between', position: 'relative' }}>
              <span>laiax.org</span><span>v.1.0 · MMXXVI</span>
            </div>
          </div>

          {/* push toast */}
          <div style={{ background: `linear-gradient(135deg, ${X_INK2}, ${X_INK})`, color: '#fff', padding: 18, display: 'flex', alignItems: 'center', gap: 14, borderRadius: 10, border: `1px solid ${X_GRN}44`, boxShadow: `0 0 30px ${X_GRN}22` }}>
            <div style={{ width: 36, height: 36, background: `linear-gradient(135deg, ${X_GRN}, ${X_LIME})`, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 8 }}>
              <div style={{ width: 22 }}><XArrow color={X_INK} accent={X_INK} /></div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ ...xInter, fontSize: 12, fontWeight: 500 }}>Tu postulación fue recibida.</div>
              <div style={{ ...xMono, fontSize: 9, color: X_MUTE, marginTop: 2 }}>FOLIO 2026/0142 · respondemos en 72h</div>
            </div>
            <XCap c={X_GRN}>● ACTIVO</XCap>
          </div>

          {/* live ticker */}
          <div style={{ background: X_INK, color: '#fff', padding: 16, display: 'flex', alignItems: 'center', gap: 14, borderRadius: 10, border: `1px solid ${X_LINE}`, position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(90deg, transparent, ${X_GRN}11, transparent)` }} />
            <div style={{ width: 8, height: 8, background: X_GRN, borderRadius: '50%', boxShadow: `0 0 14px ${X_GRN}`, position: 'relative' }} />
            <div style={{ ...xMono, fontSize: 11, letterSpacing: '0.18em', position: 'relative' }}>EN VIVO · CONFERENCIA · COHORTE 01</div>
            <div style={{ ...xMono, fontSize: 11, color: X_MUTE, marginLeft: 'auto', position: 'relative' }}>00:14:22</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { MK_BusinessCardV2, MK_BadgeV2, MK_LandingV2, MK_EmailLoadingV2 });
