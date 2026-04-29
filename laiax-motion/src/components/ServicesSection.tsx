import { motion, useInView } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

const SERVICES = [
  {
    tag: "Estrategia",
    title: "Research & Insight",
    description:
      "Analizamos datos, cultura y comportamiento para identificar palancas de crecimiento y ventaja operativa.",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
  },
  {
    tag: "Ejecucion",
    title: "Design & Execution",
    description:
      "De la tesis al despliegue: convertimos estrategia en experiencias y sistemas listos para escalar.",
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4",
  },
];

export default function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="relative overflow-hidden bg-black px-6 py-28 md:py-40">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.02)_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-10 flex items-end justify-between md:mb-14"
        >
          <h4 className="text-3xl tracking-tight text-white md:text-5xl">Lo que hacemos</h4>
          <p className="hidden text-sm text-white/40 md:block">Servicios LAIAX</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {SERVICES.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="liquid-glass group overflow-hidden rounded-3xl"
            >
              <div className="relative aspect-video overflow-hidden">
                <video
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={service.video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-6 md:p-8">
                <div className="mb-5 flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/40">{service.tag}</p>
                  <span className="liquid-glass rounded-full p-2 text-white">
                    <ArrowUpRight size={16} />
                  </span>
                </div>

                <h5 className="mb-3 text-xl tracking-tight text-white md:text-2xl">{service.title}</h5>
                <p className="text-sm leading-relaxed text-white/50">{service.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
