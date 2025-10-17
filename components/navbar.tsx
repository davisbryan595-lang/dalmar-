"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

interface NavbarProps {
  scrolled: boolean
}

export default function Navbar({ scrolled }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-smooth ${scrolled ? "glass" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="#" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:animate-glow transition-smooth">
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline">Dalmar's</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium hover:text-primary transition-smooth">
                {link.label}
              </a>
            ))}
          </div>

          {/* CTA Button */}
          <a
            href="tel:314-939-6740"
            className="hidden sm:inline-block px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-smooth"
          >
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 hover:bg-muted rounded-lg transition-smooth"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:314-939-6740"
              className="block px-4 py-2 bg-primary text-white rounded-lg font-medium text-center hover:bg-blue-700 transition-smooth"
            >
              Call Now
            </a>
          </div>
        )}
      </div>
    </nav>
  )
}
