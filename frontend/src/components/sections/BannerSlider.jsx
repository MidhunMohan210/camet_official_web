import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import bannerOne from '../../assets/image.png'
import bannerTwo from '../../assets/image1.png'
import bannerThree from '../../assets/image2.png'
import bannerFour from '../../assets/crm.png'

const slides = [
  {
    image: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    eyebrow: 'Business Software',
    title: 'Smart tools for day-to-day operations.',
    description: 'Manage workflows, reporting, and business visibility with dependable software support.',
  },
  {
    image: "https://plus.unsplash.com/premium_photo-1674489620667-eaf4a0094996?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHF1b3Rlc3xlbnwwfHwwfHx8MA%3D%3D",
    eyebrow: 'ERP Enablement',
    title: 'Built for teams that need clearer control.',
    description: 'Simplify coordination across departments with software that helps teams move faster together.',
  },
  {
    image: bannerThree,
    eyebrow: 'Automation',
    title: 'Reduce manual work with connected processes.',
    description: 'Create smoother business routines with automation, add-ons, and practical integrations.',
  },
  {
    image: bannerFour,
    eyebrow: 'CAMET Support',
    title: 'Technology guidance with local, responsive service.',
    description: 'Get implementation, training, and support designed around real business needs.',
  },
]

const headingFont = { fontFamily: 'var(--font-heading)' }

function BannerSlider() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 4500)

    return () => window.clearInterval(intervalId)
  }, [])

  const goToPrevious = () => {
    setActiveIndex((current) => (current - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setActiveIndex((current) => (current + 1) % slides.length)
  }

  const activeSlide = slides[activeIndex]

  return (
    <section className="bg-slate-950">
      <div className="relative overflow-hidden bg-slate-950">
        <div className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute inset-0"
              >
                <img
                  src={activeSlide.image}
                  alt={activeSlide.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/55 to-slate-950/25" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.18),transparent_28%)]" />
              </motion.div>
            </AnimatePresence>

            <div className="relative z-10 flex min-h-[320px] items-end p-6 sm:min-h-[420px] sm:p-8 lg:min-h-[500px] lg:p-12">
              <div className="max-w-2xl">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/70">
                  {activeSlide.eyebrow}
                </p>
                <h2
                  style={headingFont}
                  className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl"
                >
                  {activeSlide.title}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
                  {activeSlide.description}
                </p>
              </div>
            </div>

            <div className="absolute bottom-6 right-6 z-20 flex items-center gap-3 sm:bottom-8 sm:right-8">
              <button
                type="button"
                onClick={goToPrevious}
                aria-label="Previous banner"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <FaArrowLeft className="text-sm" />
              </button>
              <button
                type="button"
                onClick={goToNext}
                aria-label="Next banner"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition hover:bg-white/20"
              >
                <FaArrowRight className="text-sm" />
              </button>
            </div>
          </div>

        <div className="absolute bottom-6 left-6 z-20 flex items-center gap-2 sm:bottom-8 sm:left-8">
          {slides.map((slide, index) => (
            <button
              key={slide.title}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show banner ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                index === activeIndex ? 'w-10 bg-white' : 'w-2.5 bg-white/45 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BannerSlider
