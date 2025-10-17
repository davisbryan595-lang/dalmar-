"use client"

import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg mb-4">Dalmar's Detailing</h3>
            <p className="text-muted-foreground text-sm">Premium mobile auto detailing services in St. Louis, MO</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-primary transition-smooth">
                  Interior Detailing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-smooth">
                  Exterior Detailing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-smooth">
                  Ceramic Coating
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-smooth">
                  Paint Correction
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="tel:314-939-6740" className="hover:text-primary transition-smooth">
                  314-939-6740
                </a>
              </li>
              <li>
                <a href="mailto:camparadalmar@gmail.com" className="hover:text-primary transition-smooth">
                  camparadalmar@gmail.com
                </a>
              </li>
              <li>St. Louis, MO</li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-muted rounded-lg hover:bg-primary/20 transition-smooth">
                <Facebook size={20} className="text-primary" />
              </a>
              <a href="#" className="p-2 bg-muted rounded-lg hover:bg-primary/20 transition-smooth">
                <Instagram size={20} className="text-primary" />
              </a>
              <a href="#" className="p-2 bg-muted rounded-lg hover:bg-primary/20 transition-smooth">
                <Twitter size={20} className="text-primary" />
              </a>
              <a href="#" className="p-2 bg-muted rounded-lg hover:bg-primary/20 transition-smooth">
                <Linkedin size={20} className="text-primary" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Dalmar's Detailing. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
