"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"

export function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <footer ref={ref} id="contacto" className="border-t border-zinc-800 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8"
        >
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center mb-4">
              <span className="font-semibold text-white text-lg">SmallTalk</span>
            </a>
            <p className="text-sm text-zinc-500 mb-4 max-w-xs">Agentes de IA que venden por vos, mientras hacés crecer tu negocio.</p>
            {/* System Status */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800">
              <span className="w-2 h-2 rounded-full bg-[#18214b] pulse-glow" />
              <span className="text-xs text-zinc-400">Agente disponible</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap items-center gap-8">
            <a href="#features" className="text-sm text-zinc-500 hover:text-white transition-colors">
              Soluciones
            </a>
            <a href="#como-funciona" className="text-sm text-zinc-500 hover:text-white transition-colors">
              Como Funciona
            </a>
            <a 
              href="https://instagram.com/small.talk.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-zinc-500 hover:text-white transition-colors"
            >
              Instagram
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
