import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import "./globals.css"

export const metadata: Metadata = {
  title: "MiniClub Almafuerte | Gimnasio, Fútbol 5 y Parrilla en Reconquista",
  description:
    "MiniClub Almafuerte en Reconquista, Santa Fe. Gimnasio equipado, cancha de fútbol 5 iluminada y parrilla para asados en Almafuerte 760.",
  keywords:
    "miniclub almafuerte, gimnasio reconquista, futbol 5 reconquista, parrilla reconquista, club deportivo reconquista",
  openGraph: {
    title: "MiniClub Almafuerte | Gimnasio, Fútbol 5 y Parrilla en Reconquista",
    description:
      "MiniClub Almafuerte en Reconquista, Santa Fe. Gimnasio equipado, cancha de fútbol 5 iluminada y parrilla para asados en Almafuerte 760.",
    url: "https://miniclub-almafuerte.vercel.app",
    siteName: "MiniClub Almafuerte",
    images: [
      {
        url: "/images/gimnasio-completo.jpg",
        width: 1200,
        height: 630,
        alt: "Gimnasio completo MiniClub Almafuerte",
      },
    ],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MiniClub Almafuerte | Gimnasio, Fútbol 5 y Parrilla en Reconquista",
    description:
      "MiniClub Almafuerte en Reconquista, Santa Fe. Gimnasio equipado, cancha de fútbol 5 iluminada y parrilla para asados.",
    images: ["/images/gimnasio-completo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://miniclub-almafuerte.vercel.app",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <WhatsAppFloat />
        <Analytics />
      </body>
    </html>
  )
}
