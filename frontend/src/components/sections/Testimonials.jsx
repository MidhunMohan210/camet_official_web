import { motion } from 'framer-motion'

function Testimonials() {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      company: 'ABC Enterprises',
      role: 'Managing Director',
      text: 'CAMTIT Solutions transformed our business operations with their excellent Tally implementation. Their team is professional.',
      rating: 5,
      initial: 'RK'
    },
    {
      name: 'Priya Sharma',
      company: 'XYZ Retail',
      role: 'Operations Manager',
      text: 'Outstanding service! The custom ERP solution they developed has streamlined our entire workflow. Highly recommended.',
      rating: 5,
      initial: 'PS'
    },
    {
      name: 'Arun Menon',
      company: 'Tech Innovations',
      role: 'CEO',
      text: 'Best software development company in Kerala. They delivered our project on time and within budget. Truly impressive expertise.',
      rating: 5,
      initial: 'AM'
    },
    {
      name: 'Sneha Reddy',
      company: 'Global Logistics',
      role: 'Director',
      text: 'Their support team is available 24/7 and resolved our server issues instantly. A trustworthy technology partner.',
      rating: 5,
      initial: 'SR'
    },
    {
      name: 'David John',
      company: 'Creative Hub',
      role: 'Founder',
      text: 'We love the new website and mobile app. The design is modern and the performance is lightning fast. Great job!',
      rating: 5,
      initial: 'DJ'
    }
  ]

  // Duplicate the list to create a seamless infinite loop
  const infiniteTestimonials = [...testimonials, ...testimonials]

  return (
    <section className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#4b5563_1px,transparent_1px)] [background-size:20px_20px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-brand-600 uppercase bg-brand-100 rounded-full">
            Client Feedback
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
            Trusted by Industry Leaders
          </h2>
        </motion.div>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative w-full overflow-hidden fade-mask">
        {/* Gradient Masks for edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-50 to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-50 to-transparent z-10"></div>

        <motion.div
          className="flex gap-8 w-max px-4"
          animate={{ x: ["0%", "-50%"] }} // Moves half the total width (because list is doubled)
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 30, // Adjust speed: higher = slower
          }}
          whileHover={{ animationPlayState: "paused" }} // Optional: Pause on hover logic needs CSS, simpler here to just let it flow or use onMouseEnter to stop
        >
          {infiniteTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-[350px] md:w-[400px] flex-shrink-0 bg-white rounded-2xl p-8 shadow-sm border border-slate-100 relative hover:shadow-xl transition-all duration-300 group"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-8 text-6xl text-brand-100 font-serif opacity-50 group-hover:text-brand-200 transition-colors">
                "
              </div>

              {/* Stars */}
              <div className="flex mb-6 text-yellow-400 text-sm gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-600 mb-8 leading-relaxed relative z-10 text-base italic line-clamp-3">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center pt-6 border-t border-slate-50">
                <div className="w-12 h-12 bg-gradient-to-br from-brand-500 to-brand-700 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg flex-shrink-0">
                  {testimonial.initial}
                </div>
                <div className="ml-4 overflow-hidden">
                  <p className="font-bold text-slate-900 text-sm truncate">{testimonial.name}</p>
                  <p className="text-xs font-semibold text-brand-600 truncate">{testimonial.role}</p>
                  <p className="text-xs text-slate-500 truncate">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
