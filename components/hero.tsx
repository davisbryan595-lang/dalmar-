"use client"

import type React from "react"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Phone, Calendar } from "lucide-react"
import { motion } from "framer-motion"

export default function Hero() {
  const [sliderPosition, setSliderPosition] = useState(50)
  const [isDragging, setIsDragging] = useState(false)

  const handleMouseDown = () => setIsDragging(true)
  const handleMouseUp = () => setIsDragging(false)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return

    const container = e.currentTarget
    const rect = container.getBoundingClientRect()
    const newPosition = ((e.clientX - rect.left) / rect.width) * 100
    setSliderPosition(Math.max(0, Math.min(100, newPosition)))
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/placeholder.svg?height=1080&width=1920&query=professional%20car%20detailing%20mobile%20service)",
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

      {/* Before/After Slider */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="absolute bottom-8 left-4 right-4 md:left-8 md:right-8 max-w-md mx-auto"
      >
        <div
          className="relative h-48 md:h-64 rounded-xl overflow-hidden cursor-col-resize group"
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseUp}
        >
          {/* Before Image */}
          <div className="absolute inset-0">
            <img src="/dirty-car-before.png" alt="Before detailing" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* After Image */}
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPosition}%` }}>
            <img
              src="/clean-shiny-car-after-detailing.jpg"
              alt="After detailing"
              className="w-full h-full object-cover"
              style={{ width: `${(100 / sliderPosition) * 100}%` }}
            />
            <div className="absolute inset-0 bg-black/20" />
          </div>

          {/* Slider Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-primary transition-smooth group-hover:w-2"
            style={{ left: `${sliderPosition}%` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full p-2 shadow-lg">
              <ChevronLeft size={16} className="text-white" />
              <ChevronRight size={16} className="text-white -ml-4" />
            </div>
          </div>

          {/* Labels */}
          <div className="absolute top-4 left-4 text-white font-semibold text-sm">Before</div>
          <div className="absolute top-4 right-4 text-white font-semibold text-sm">After</div>
        </div>
      </motion.div>
    </section>
  )
}
