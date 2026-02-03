"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect } from "react"

export function FinalCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    const script = document.createElement("script")
    script.src = "https://assets.calendly.com/assets/external/widget.js"
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <section className="py-24 px-4" id="calendly">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          style={{ fontFamily: "var(--font-cal-sans)" }}
        >
          Listo para vender mas?
        </h2>
        <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          Unete a cientos de negocios que ya automatizan sus ventas con agentes de IA. Agenda una demo gratuita hoy.
        </p>

        {/* Calendly Embed */}
        <div 
          className="calendly-inline-widget rounded-xl overflow-hidden" 
          data-url="https://calendly.com/francoperronest/reunion-estrategica?hide_gdpr_banner=1&background_color=18181b&text_color=ffffff&primary_color=18214b"
          style={{ minWidth: "320px", height: "900px" }}
        />

        <p className="mt-8 text-sm text-zinc-500">Sin compromiso. Te mostramos como funciona en 15 minutos.</p>
      </motion.div>
    </section>
  )
}
