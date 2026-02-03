"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const logos = [
  { name: "Restaurantes", width: 100 },
  { name: "Inmobiliarias", width: 90 },
  { name: "E-commerce", width: 100 },
  { name: "Salones de Belleza", width: 100 },
  { name: "Gimnasios", width: 90 },
  { name: "Consultorios Medicos", width: 100 },
  { name: "Tiendas", width: 90 },
]

export function LogoMarquee() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-16 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-sm text-zinc-500 uppercase tracking-wider font-medium">Ideal para todo tipo de negocios</p>
      </motion.div>

      <div className="relative">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10 pointer-events-none" />

        {/* Marquee container */}
        <div className="flex animate-marquee">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              /* Cambiamos min-w fijo por flex-shrink-0 para que el texto mande */
              className="flex items-center justify-center flex-shrink-0 h-16 mx-8 opacity-50 hover:opacity-100 transition-all duration-300"
            >
              <span 
                /* whitespace-nowrap es la clave aquí */
                className="text-zinc-400 font-medium text-lg whitespace-nowrap"
                style={{ fontFamily: "var(--font-instrument-sans)" }}
              >
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
