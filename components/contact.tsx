"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin } from "lucide-react"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    setFormData({ name: "", phone: "", service: "", message: "" })
  }

  return (
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground">Ready to transform your vehicle? Contact us today</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Phone className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Phone</h3>
                  <a href="tel:314-939-6740" className="text-muted-foreground hover:text-primary transition-smooth">
                    314-939-6740
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Email</h3>
                  <a
                    href="mailto:camparadalmar@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-smooth"
                  >
                    camparadalmar@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass rounded-xl p-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">Location</h3>
                  <p className="text-muted-foreground">St. Louis, MO</p>
                  <p className="text-sm text-muted-foreground">Mobile service available</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass rounded-xl p-8 space-y-6"
          >
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
                placeholder="Your phone number"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Service</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth"
              >
                <option value="">Select a service</option>
                <option value="interior">Interior Detailing</option>
                <option value="exterior">Exterior Detailing</option>
                <option value="full">Full Detailing</option>
                <option value="ceramic">Ceramic Coating</option>
                <option value="paint">Paint Correction</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-input border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-smooth resize-none"
                placeholder="Tell us about your vehicle..."
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-smooth"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
