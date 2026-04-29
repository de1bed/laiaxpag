import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const FEATURED_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260402_054547_9875cfc5-155a-4229-8ec8-b7ba7125cbf8.mp4";

export default function FeaturedVideoSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="overflow-hidden bg-black px-6 pb-20 pt-6 md:pb-32 md:pt-10">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="relative aspect-video overflow-hidden rounded-3xl"
        >
          <video className="h-full w-full object-cover" src={FEATURED_VIDEO} muted autoPlay loop playsInline preload="auto" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="liquid-glass max-w-md rounded-2xl p-6 md:p-8">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/50">Nuestro enfoque</p>
                <p className="text-sm leading-relaxed text-white md:text-base">
                  Combinamos estrategia empresarial, criterio operativo y exploracion de tecnologias exponenciales para
                  convertir vision en ventaja competitiva real.
                </p>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="liquid-glass self-start rounded-full px-8 py-3 text-sm font-medium text-white"
              >
                Explorar mas
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
