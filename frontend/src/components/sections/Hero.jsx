import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'
import heroVideo from '../../assets/184489-873483996.mp4'

function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35" />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 min-h-screen flex items-center pt-16 sm:pt-20 lg:pt-24">
        <div className="max-w-4xl">
          <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-6xl font-semibold leading-[1.05] tracking-tight">
            Smart Business
            <br />
            Software for
            <br />
            Modern Growth
          </h1>

          <p className="mt-6 text-white/80 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed">
            TallyPrime, ERP, add-ons, and custom software solutions designed to
            simplify operations and accelerate your business.
          </p>

          <div className="mt-8">
            <a
              href="tel:+919876543210"
              className="inline-flex items-center justify-center rounded-md bg-white text-slate-900 px-6 py-3 text-sm sm:text-base font-semibold shadow-lg hover:bg-slate-100 hover:scale-105 transition-all duration-300 animate-[pulse_3s_ease-in-out_infinite]"
            >
              Call Now
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 right-5 sm:right-8 lg:right-12 z-30 flex flex-col items-end gap-3">
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="relative max-w-[220px] rounded-2xl bg-white/90 backdrop-blur-md px-4 py-3 shadow-[0_12px_35px_rgba(15,23,42,0.16)]"
        >
          <p className="text-[12px] sm:text-[13px] leading-5 text-slate-800">
            Need help? Chat with us.
          </p>
          <span className="absolute -bottom-2 right-5 h-4 w-4 rotate-45 bg-white/90"></span>
        </motion.div>

        <motion.a
          href="https://wa.me/919876543210?text=Hello%20CAMET%20IT%20Solutions%2C%20I%20want%20to%20know%20more%20about%20your%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.96 }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_14px_35px_rgba(37,211,102,0.45)] hover:bg-[#1ebe5b]"
        >
          <FaWhatsapp className="text-[28px]" />
        </motion.a>
      </div>
    </section>
  )
}

export default Hero