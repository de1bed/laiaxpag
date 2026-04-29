import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const PHILOSOPHY_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4";

export default function PhilosophySection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="philosophy" ref={ref} className="overflow-hidden bg-black px-6 py-28 md:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.h3
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16 text-5xl tracking-tight text-white md:mb-24 md:text-7xl lg:text-8xl"
        >
          Institucion <span className="font-instrument italic text-white/40">x</span> Vision
        </motion.h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="aspect-[4/3] overflow-hidden rounded-3xl"
          >
            <video className="h-full w-full object-cover" src={PHILOSOPHY_VIDEO} muted autoPlay loop playsInline preload="auto" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">Elige tu terreno</p>
              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                Cada salto empresarial relevante nace entre disciplina estrategica y vision creativa. LAIAX opera justo en
                ese cruce, traduciendo pensamiento audaz en resultados medibles.
              </p>
            </div>

            <div className="h-px w-full bg-white/10" />

            <div>
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-white/40">Disena el futuro</p>
              <p className="text-base leading-relaxed text-white/70 md:text-lg">
                Nuestro proceso esta hecho para detectar oportunidades invisibles, conectarlas con IA aplicada y
                convertirlas en experiencias de negocio que dejan huella.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
