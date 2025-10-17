"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "John Martinez",
    role: "Car Enthusiast",
    content: "Dalmar's team transformed my car! The attention to detail is incredible. Highly recommend!",
    rating: 5,
  },
  {
    name: "Sarah Thompson",
    role: "Business Owner",
    content: "Professional, punctual, and thorough. They came to my location and did an amazing job.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Fleet Manager",
    content: "We use Dalmar's for all our company vehicles. Consistent quality every single time.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Luxury Car Owner",
    content: "The ceramic coating service is worth every penny. My car looks brand new!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 bg-card">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Customer Reviews</h2>
          <p className="text-lg text-muted-foreground">See what our satisfied customers have to say</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-6 hover:border-primary/50 transition-smooth"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4">{testimonial.content}</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
