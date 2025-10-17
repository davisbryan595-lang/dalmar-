"use client"

import { motion } from "framer-motion"
import { Sparkles, Droplet, Zap, Shield, Wrench } from "lucide-react"

const services = [
  {
    icon: Sparkles,
    title: "Interior Detailing",
    description: "Deep cleaning of seats, carpets, dashboard, and all interior surfaces",
  },
  {
    icon: Droplet,
    title: "Exterior Detailing",
    description: "Professional wash, wax, and polish for a showroom shine",
  },
  {
    icon: Zap,
    title: "Full Detailing",
    description: "Complete interior and exterior detailing package",
  },
  {
    icon: Shield,
    title: "Ceramic Coating",
    description: "Long-lasting protective coating for ultimate shine and durability",
  },
  {
    icon: Wrench,
    title: "Paint Correction",
    description: "Remove swirls, scratches, and imperfections from your paint",
  },
  {
    icon: Sparkles,
    title: "Premium Package",
    description: "All services combined for the ultimate detailing experience",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground">
            Professional detailing solutions tailored to your vehicle's needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-6 hover:border-primary/50 transition-smooth group cursor-pointer"
              >
                <div className="mb-4 inline-block p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-smooth">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
