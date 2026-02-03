"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"


const textRevealVariants = {
  hidden: { y: "100%" },
  visible: (i: number) => ({
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      delay: i * 0.1,
    },
  }),
}

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 pt-24 pb-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-950 to-zinc-900 pointer-events-none" />

      {/* Subtle radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-zinc-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#18214b] pulse-glow" />
          <span className="text-sm text-zinc-400">No dejes ni un mensaje sin responder.</span>
        </motion.div>

        {/* Headline with text mask animation */}
        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6"
          style={{ fontFamily: "var(--font-cal-sans), sans-serif" }}
        >
          <span className="block overflow-hidden">
            <motion.span className="block" variants={textRevealVariants} initial="hidden" animate="visible" custom={0}>
              Vende en automático.
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block text-[#5a6cb5]"
              variants={textRevealVariants}
              initial="hidden"
              animate="visible"
              custom={1}
            >
              Escala sin límites.
            </motion.span>
          </span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Small Talk se integra a su flujo de trabajo para gestionar leads y ventas de forma autónoma. Con capacidad para validar pagos y automatizar el seguimiento, nuestros agentes aseguran una disponibilidad total 24/7.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            className="shimmer-btn bg-[#18214b] text-white hover:bg-[#252f5c] rounded-full px-8 h-12 text-base font-medium shadow-lg shadow-[#18214b]/30"
            asChild
          >
            <a 
              href="#calendly" 
            >
              Agendar Demo Gratis
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 h-12 text-base font-medium border-zinc-800 text-zinc-300 hover:bg-zinc-900 hover:text-white hover:border-zinc-700 bg-transparent"
            asChild
          >
            <a href="https://wa.me/541172415244?text=Hola,%20me%20gustaría%20agendar%20una%20demo%20gratis">Contactarse con ventas</a>
          </Button>
        </motion.div>

        {/* Key Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-6"
        >
          {["Disponible 24/7", "Respuestas instantaneas", "Integrado con WhatsApp"].map((benefit, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-zinc-400">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5a6cb5]" />
              <span>{benefit}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
