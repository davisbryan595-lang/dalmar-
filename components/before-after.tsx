"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const gallery = [
  {
    before: "/dirty-car-interior.png",
    after: "/clean-car-interior-after-detailing.jpg",
    title: "Interior Deep Clean",
  },
  {
    before: "/dusty-car-exterior-before-wash.jpg",
    after: "/shiny-car-exterior-after-ceramic-coating.jpg",
    title: "Ceramic Coating",
  },
  {
    before: "/scratched-car-paint-before-correction.jpg",
    after: "/perfect-car-paint-after-correction.jpg",
    title: "Paint Correction",
  },
  {
    before: "/faded-car-before-detailing.jpg",
    after: "/glossy-car-after-full-detailing.jpg",
    title: "Full Detailing",
  },
]

export default function BeforeAfter() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [sliderPositions, setSliderPositions] = useState<{ [key: number]: number }>({})

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + gallery.length) % gallery.length)
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % gallery.length)
  }

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPositions({
      ...sliderPositions,
      [currentIndex]: Number.parseFloat(e.target.value),
    })
  }

  const currentSliderPosition = sliderPositions[currentIndex] || 50

  return (
    <section id="gallery" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Before & After</h2>
          <p className="text-lg text-muted-foreground">See the transformation our detailing services deliver</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Slider */}
            <div className="flex flex-col justify-center">
              <div className="relative h-96 rounded-xl overflow-hidden mb-6">
                {/* Before Image */}
                <img
                  src={gallery[currentIndex].before || "/placeholder.svg"}
                  alt="Before"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* After Image */}
                <div className="absolute inset-0 overflow-hidden" style={{ width: `${currentSliderPosition}%` }}>
                  <img
                    src={gallery[currentIndex].after || "/placeholder.svg"}
                    alt="After"
                    className="w-full h-full object-cover"
                    style={{ width: `${(100 / currentSliderPosition) * 100}%` }}
                  />
                </div>

                {/* Slider Handle */}
                <div className="absolute top-0 bottom-0 w-1 bg-primary" style={{ left: `${currentSliderPosition}%` }}>
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full p-2 shadow-lg">
                    <ChevronLeft size={16} className="text-white" />
                    <ChevronRight size={16} className="text-white -ml-4" />
                  </div>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 text-white font-semibold text-sm bg-black/50 px-3 py-1 rounded">
                  Before
                </div>
                <div className="absolute top-4 right-4 text-white font-semibold text-sm bg-black/50 px-3 py-1 rounded">
                  After
                </div>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={currentSliderPosition}
                onChange={handleSliderChange}
                className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            {/* Gallery Info */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-3xl font-bold mb-4">{gallery[currentIndex].title}</h3>
                <p className="text-muted-foreground mb-6">
                  Drag the slider to see the dramatic transformation. Our expert detailing team brings out the best in
                  every vehicle.
                </p>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {gallery.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentIndex(index)
                      setSliderPositions({ ...sliderPositions, [index]: 50 })
                    }}
                    className={`relative h-24 rounded-lg overflow-hidden border-2 transition-smooth ${
                      index === currentIndex ? "border-primary" : "border-muted"
                    }`}
                  >
                    <img
                      src={item.before || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex gap-4">
                <button
                  onClick={handlePrev}
                  className="flex-1 px-4 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-smooth flex items-center justify-center gap-2"
                >
                  <ChevronLeft size={20} />
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="flex-1 px-4 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 transition-smooth flex items-center justify-center gap-2"
                >
                  Next
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
