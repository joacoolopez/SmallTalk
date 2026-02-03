"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { MessageCircle, Calendar, CreditCard, BarChart3, Mail } from "lucide-react"

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

function SystemStatus() {
  const [dots, setDots] = useState([true, true, true, false, true])

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => prev.map(() => Math.random() > 0.2))
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-2">
      {dots.map((active, i) => (
        <motion.div
          key={i}
          className={`w-2 h-2 rounded-full ${active ? "bg-[#18214b]" : "bg-zinc-700"}`}
          animate={active ? { scale: [1, 1.2, 1] } : {}}
          transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, delay: i * 0.2 }}
        />
      ))}
    </div>
  )
}

function KeyboardCommand() {
  const [pressed, setPressed] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setPressed(true)
      setTimeout(() => setPressed(false), 200)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex items-center gap-1">
      <motion.kbd
        animate={pressed ? { scale: 0.95, y: 2 } : { scale: 1, y: 0 }}
        className="px-2 py-1 text-xs bg-zinc-800 border border-zinc-700 rounded text-zinc-300 font-mono"
      >
        ⌘
      </motion.kbd>
      <motion.kbd
        animate={pressed ? { scale: 0.95, y: 2 } : { scale: 1, y: 0 }}
        transition={{ delay: 0.05 }}
        className="px-2 py-1 text-xs bg-zinc-800 border border-zinc-700 rounded text-zinc-300 font-mono"
      >
        K
      </motion.kbd>
    </div>
  )
}

function AnimatedChart() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const points = [
    { x: 0, y: 60 },
    { x: 20, y: 45 },
    { x: 40, y: 55 },
    { x: 60, y: 30 },
    { x: 80, y: 40 },
    { x: 100, y: 15 },
  ]

  const pathD = points.reduce((acc, point, i) => {
    return i === 0 ? `M ${point.x} ${point.y}` : `${acc} L ${point.x} ${point.y}`
  }, "")

  return (
    <svg ref={ref} viewBox="0 0 100 70" className="w-full h-24">
      <defs>
        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgb(255,255,255)" stopOpacity="0.2" />
          <stop offset="100%" stopColor="rgb(255,255,255)" stopOpacity="0" />
        </linearGradient>
      </defs>
      {isInView && (
        <>
          <path d={`${pathD} L 100 70 L 0 70 Z`} fill="url(#chartGradient)" className="opacity-50" />
          <path d={pathD} fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" className="draw-line" />
        </>
      )}
    </svg>
  )
}

export function BentoGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-instrument-sans)" }}
          >
            Todo lo que necesitas para vender mas
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Tecnología que trabaja 24/7 para que tu única preocupación sea ver cómo crecen los números.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Large card - WhatsApp Bot */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-2 group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300 overflow-hidden"
          >
            <div className="flex items-start justify-between mb-8">
              <div>
                <div className="p-2 rounded-lg bg-[#18214b]/40 w-fit mb-4">
                  <MessageCircle className="w-5 h-5 text-[#5a6cb5]" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Agente de Atencion 24/7</h3>
                <p className="text-zinc-400 text-sm">
                  Resolvé dudas sobre tus productos o servicios al instante. Que nadie se vaya a la competencia porque tardaste en contestar.
                </p>
              </div>
              <SystemStatus />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {["Mensajes", "Respuestas", "Satisfaccion"].map((metric, index) => (
                <div key={metric} className="text-center">
                  <div className="text-2xl font-bold text-white mb-1">{["+10K", "99%", "4.9"][index]}</div>
                  <div className="text-xs text-zinc-500">{metric}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Agenda de Citas */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-blue-500/20 w-fit mb-4">
              <Calendar className="w-5 h-5 text-blue-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Agenda Automatica</h3>
            <p className="text-zinc-400 text-sm mb-6">El agente gestiona tu calendario y reserva citas sin que muevas un dedo. Integración directa con Google Calendar para que tu agenda vuele.</p>
          </motion.div>

          {/* Ventas por Chat */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-amber-500/20 w-fit mb-4">
              <CreditCard className="w-5 h-5 text-amber-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Ventas con MercadoPago</h3>
            <p className="text-zinc-400 text-sm mb-4">Cierra ventas directamente en el chat con links de pago automaticos.</p>
            <AnimatedChart />
          </motion.div>

          {/* Metricas */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-purple-500/20 w-fit mb-4">
              <BarChart3 className="w-5 h-5 text-purple-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Dashboard de Metricas</h3>
            <p className="text-zinc-400 text-sm mb-4">
              Lo que no se mide, no crece. Analizá cada conversación y tasa de conversión para tomar decisiones basadas en datos reales, no en intuiciones.
            </p>
            <div className="flex items-center gap-2 text-purple-400 text-sm">
              <span className="font-mono">+45%</span>
              <span className="text-zinc-500">conversion promedio</span>
            </div>
          </motion.div>

          {/* Email Marketing */}
          <motion.div
            variants={itemVariants}
            className="group relative p-6 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-zinc-600 hover:scale-[1.02] transition-all duration-300"
          >
            <div className="p-2 rounded-lg bg-rose-500/20 w-fit mb-4">
              <Mail className="w-5 h-5 text-rose-500" strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Email Marketing</h3>
            <p className="text-zinc-400 text-sm mb-4">¿No cerraron en el momento? No hay problema. Podemos activar campañas  para recuperar esos leads y que vuelvan a elegirte.</p>
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 text-xs bg-zinc-800 rounded text-zinc-400">Seguimiento</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
