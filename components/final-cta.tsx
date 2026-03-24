"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"

export function FinalCTA() {
  const ref = useRef(null)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [calendlyLoaded, setCalendlyLoaded] = useState(false)

  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !calendlyLoaded) {
          const script = document.createElement("script")
          script.src = "https://assets.calendly.com/assets/external/widget.js"
          script.async = true
          document.body.appendChild(script)
          setCalendlyLoaded(true)
          observer.disconnect()
        }
      },
      { rootMargin: "200px" }
    )

    observer.observe(sectionRef.current)

    return () => {
      observer.disconnect()
    }
  }, [calendlyLoaded])

  return (
    <section className="py-24 px-4" id="calendly" ref={sectionRef}>
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
          ¿Listo para vender más?
        </h2>
        <p className="text-lg sm:text-xl text-zinc-400 mb-10 max-w-2xl mx-auto">
          Unite a cientos de negocios que ya automatizan sus ventas con agentes de IA. Agendá una demo gratuita hoy.
        </p>

        {/* Calendly Embed */}
        <div 
          className="calendly-inline-widget rounded-xl overflow-hidden" 
          data-url="https://calendly.com/francoperronest/reunion-estrategica?hide_gdpr_banner=1&background_color=18181b&text_color=ffffff&primary_color=18214b"
          style={{ minWidth: "320px", height: "900px" }}
        />

        <p className="mt-8 text-sm text-zinc-500">Sin compromiso. Te mostramos cómo funciona en 15 minutos.</p>
      </motion.div>
    </section>
  )
}
