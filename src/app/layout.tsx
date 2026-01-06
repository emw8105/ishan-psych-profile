import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import "./globals.css"

// Load Inter font
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

// Load Playfair Display font
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Ishan Vengurlekar | School Psychologist",
  description:
    "Ishan Vengurlekar specializes in school-based mental health interventions, universal screening, and evidence-based research for children and adolescents. Dedicated to advancing school psychology through rigorous research and practice.",
  keywords: [
    "school psychology",
    "mental health screening",
    "child psychology",
    "adolescent mental health",
    "evidence-based interventions",
    "single-session interventions",
    "psychoeducational assessment",
    "UW-Madison",
    "school psychologist",
    "educational psychology",
  ],
  authors: [{ name: "Ishan Vengurlekar" }],
  openGraph: {
    title: "Ishan Vengurlekar | School Psychology Researcher",
    description:
      "Specializing in school-based mental health interventions, universal screening, and evidence-based research for children and adolescents.",
    url: "https://www.ishanvengurlekar.com",
    siteName: "Ishan Vengurlekar",
    images: [
      {
        url: "/images/IshanHeroCropped.jpg",
        width: 1200,
        height: 630,
        alt: "Ishan Vengurlekar",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ishan Vengurlekar | School Psychology Researcher",
    description:
      "Specializing in school-based mental health interventions, universal screening, and evidence-based research.",
    images: ["/images/IshanHeroCropped.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}