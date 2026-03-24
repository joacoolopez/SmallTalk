"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} id="como-funciona" className="py-24 px-4 bg-zinc-950">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-instrument-sans)" }}
          >
            Cómo funciona Koral
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Mirá cómo nuestros agentes de IA se integran a tu flujo de trabajo para transformar cada conversación en una oportunidad real. Desde entender un audio hasta validar un comprobante de pago: todo pasa en automático.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800 group"
        >
          <video
            className="w-full h-full object-cover"
            src="/VSL-Koral.mp4"
            title="Koral Demo"
            controls
            playsInline
            preload="metadata"
          />
          
          {/* Overlay gradient for aesthetics */}
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent pointer-events-none" />
        </motion.div>

        {/* Optional caption */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center text-sm text-zinc-500 mt-6"
        >
          Demo de 2 minutos mostrando el agente en acción
        </motion.p>
        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex justify-center mt-8"
        >
          <Button
            size="lg"
            className="shimmer-btn bg-[#18214b] text-white hover:bg-[#252f5c] rounded-full px-12 h-14 text-base font-medium shadow-lg shadow-[#18214b]/30"
            asChild
          >
            <a href="#calendly">
              Agendar Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
