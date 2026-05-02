import { useRef } from "react";
import { ArrowUpRight, Globe } from "lucide-react";

const HERO_MP4 = "/assets/video/hero.mp4";
const HERO_WEBM = "/assets/video/hero.webm";
const HERO_POSTER = "/assets/hero-poster.webp";

function animateOpacity(
  el: HTMLVideoElement,
  from: number,
  to: number,
  duration = 500,
  done?: () => void
) {
  const start = performance.now();
  const delta = to - from;

  const tick = (t: number) => {
    const p = Math.min((t - start) / duration, 1);
    el.style.opacity = String(from + delta * p);
    if (p < 1) requestAnimationFrame(tick);
    else done?.();
  };

  requestAnimationFrame(tick);
}

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const fadingRef = useRef(false);

  const onCanPlay = () => {
    const video = videoRef.current;
    if (!video) return;
    video.play().catch(() => undefined);
    animateOpacity(video, 0, 1, 500);
  };

  const onTimeUpdate = () => {
    const video = videoRef.current;
    if (!video || fadingRef.current) return;
    const remaining = video.duration - video.currentTime;
    if (remaining <= 0.55) {
      fadingRef.current = true;
      const current = Number(video.style.opacity || 1);
      animateOpacity(video, current, 0, 500);
    }
  };

  const onEnded = () => {
    const video = videoRef.current;
    if (!video) return;
    video.style.opacity = "0";
    setTimeout(() => {
      video.currentTime = 0;
      video.play().catch(() => undefined);
      animateOpacity(video, 0, 1, 500, () => {
        fadingRef.current = false;
      });
    }, 100);
  };

  return (
    <section className="relative flex min-h-screen flex-col overflow-hidden bg-[#03050A]">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-0"
        muted
        autoPlay
        playsInline
        preload="auto"
        poster={HERO_POSTER}
        onCanPlay={onCanPlay}
        onTimeUpdate={onTimeUpdate}
        onEnded={onEnded}
      >
        <source src={HERO_WEBM} type="video/webm" />
        <source src={HERO_MP4} type="video/mp4" />
      </video>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(3,5,10,0.55)_75%,_rgba(3,5,10,0.95)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#03050A] via-[#03050A]/55 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-72 bg-gradient-to-t from-[#03050A] via-[#03050A]/85 to-transparent" />

      <nav className="relative z-20 px-6 py-6">
        <div className="liquid-glass mx-auto flex w-full max-w-5xl items-center justify-between rounded-full px-6 py-3">
          <div className="flex items-center gap-3">
            <span className="grid h-6 w-6 place-items-center text-[#00D27A]">
              <svg viewBox="0 0 200 120" className="h-3 w-5">
                <path d="M 8 90 L 192 18 L 175 38 L 30 90 Z" fill="#00D27A" />
                <path d="M 95 102 L 165 60 L 158 78 L 110 102 Z" fill="#F5F4F0" />
              </svg>
            </span>
            <span className="text-sm font-medium tracking-[0.18em] text-white">LAIAX</span>
            <div className="ml-8 hidden items-center gap-8 md:flex">
              <a href="#instituto" className="text-xs font-medium uppercase tracking-[0.16em] text-white/70 transition hover:text-white">
                Instituto
              </a>
              <a href="#made" className="text-xs font-medium uppercase tracking-[0.16em] text-white/70 transition hover:text-white">
                MADE
              </a>
              <a href="#manifiesto" className="text-xs font-medium uppercase tracking-[0.16em] text-white/70 transition hover:text-white">
                Manifiesto
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <span className="hidden text-xs font-medium uppercase tracking-[0.16em] text-white/50 md:inline">ES / EN</span>
            <a
              href="#aplicar"
              className="liquid-glass rounded-full px-5 py-2 text-xs font-medium uppercase tracking-[0.16em] text-white"
            >
              Aplicar
            </a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 flex flex-1 flex-col px-6 pb-12 pt-6 md:px-10">
        <div className="flex items-start justify-between text-[10px] font-medium uppercase tracking-[0.22em] text-white/55 md:text-xs">
          <div className="flex items-center gap-2">
            <span className="block h-1.5 w-1.5 animate-pulse rounded-full bg-[#00D27A] shadow-[0_0_10px_#00D27A]" />
            <span>v1.0 · Cohorte 01 abierta</span>
          </div>
          <span>LAIAX · 2026</span>
        </div>

        <div className="mt-auto flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div className="max-w-3xl">
            <p className="mb-6 text-[10px] font-medium uppercase tracking-[0.22em] text-white/55 md:text-xs">
              Latin American Institute for AI &amp; eXponential Organizations
            </p>
            <h1 className="font-light leading-[1.02] tracking-[-0.03em] text-white text-[14vw] md:text-[8.5vw] lg:text-[7.5vw]">
              <span className="block">La ventaja del</span>
              <span className="block">futuro no es</span>
              <span className="block font-instrument italic text-[#3DFFA8]">información.</span>
            </h1>
          </div>

          <div className="flex w-full max-w-md flex-col items-start gap-5 md:items-end md:text-right">
            <p className="text-sm leading-relaxed text-white/80">
              No una escuela. No una academia. Un instituto. Aceleramos la adopción de tecnologías
              exponenciales en Latinoamérica.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#made"
                className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-black transition hover:bg-[#00D27A]"
              >
                Conocer MADE
                <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#manifiesto"
                className="liquid-glass rounded-full px-6 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white"
              >
                Manifiesto
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 border-t border-white/10 pt-6 text-[10px] font-medium uppercase tracking-[0.22em] text-white/55 md:grid-cols-4 md:text-xs">
          <div>
            <span className="text-white">17</span>&nbsp;<span className="text-white/55">Ciudades</span>
          </div>
          <div>
            <span className="text-white">17</span>&nbsp;<span className="text-white/55">Meses</span>
          </div>
          <div>
            <span className="text-white">∞</span>&nbsp;<span className="text-white/55">Empresa transformada</span>
          </div>
          <div className="flex items-center gap-2 md:justify-end">
            <Globe size={14} />
            <span>↓ Scroll</span>
          </div>
        </div>
      </div>
    </section>
  );
}
