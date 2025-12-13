"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white shadow-sm">
      <div className="container flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-serif text-2xl font-bold">
            Ishan Nitin Vengurlekar
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:gap-8">
          <Link href="/" className="text-base font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-base font-medium transition-colors hover:text-primary">
            About
          </Link>
          <Link href="/research-practice" className="text-base font-medium transition-colors hover:text-primary">
            Research & Practice
          </Link>
          <Link href="/mentoring" className="text-base font-medium transition-colors hover:text-primary">
            Mentoring
          </Link>
          <Link href="/contact" className="text-base font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="block md:hidden" onClick={toggleMenu} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 top-20 z-50 flex flex-col bg-background p-6 transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <nav className="flex flex-col space-y-6 text-xl">
          <Link href="/" className="font-medium transition-colors hover:text-primary" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" className="font-medium transition-colors hover:text-primary" onClick={toggleMenu}>
            About
          </Link>
          <Link
            href="/research-practice"
            className="font-medium transition-colors hover:text-primary"
            onClick={toggleMenu}
          >
            Research & Practice
          </Link>
          <Link href="/mentoring" className="font-medium transition-colors hover:text-primary" onClick={toggleMenu}>
            Mentoring
          </Link>
          <Link href="/contact" className="font-medium transition-colors hover:text-primary" onClick={toggleMenu}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  )
}

