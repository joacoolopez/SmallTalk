import type React from "react"
import type { Metadata } from "next"
import { Manrope, DM_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-cal-sans",
  weight: ["600", "700"],
  display: "swap",
})

const instrumentSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-instrument-sans",
  display: "swap",
})

const calSans = DM_Sans({ // Declare the variable here
  subsets: ["latin"],
  variable: "--font-cal-sans",
  weight: ["600", "700"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Koral | Agentes de IA",
  description: "Delegá tu atención al cliente en agentes de IA que califican leads, agendan citas y cierran ventas por WhatsApp las 24/7. Integración nativa con Mercado Pago y métricas en tiempo real.",
  icons: {
    icon: '/SmallTalk.ico'
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="dark">
      <body className={`${manrope.variable} ${dmSans.variable} ${instrumentSans.variable} font-sans antialiased`}>
        <div className="noise-overlay" aria-hidden="true" />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
