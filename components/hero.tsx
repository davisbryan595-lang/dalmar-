"use client"

import type React from "react"
import { useState } from "react"
import { Phone, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/dhero.jpg)",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="glass rounded-2xl p-8 md:p-12 backdrop-blur-md"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-4 text-balance"
          >
            Premium Mobile <span className="text-primary">Auto Detailing</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-muted-foreground mb-8"
          >
            Professional detailing services delivered to your location in St. Louis
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="tel:314-939-6740"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-smooth"
            >
              <Phone size={20} />
              Call Now
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary/10 transition-smooth"
            >
              <Calendar size={20} />
              Book Appointment
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
