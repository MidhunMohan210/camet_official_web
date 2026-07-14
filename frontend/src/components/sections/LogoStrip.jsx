import { motion } from 'framer-motion'
import {
  FaGoogle,
  FaSlack,
  FaAmazon,
  FaMicrosoft,
  FaShopify,
  FaDropbox,
  FaStripe,
} from 'react-icons/fa'
import { SiZoom } from 'react-icons/si'

const logos = [
  { name: 'Google', icon: FaGoogle, color: 'text-[#4285F4]' },
  { name: 'Slack', icon: FaSlack, color: 'text-[#4A154B]' },
  { name: 'Amazon', icon: FaAmazon, color: 'text-[#FF9900]' },
  { name: 'Microsoft', icon: FaMicrosoft, color: 'text-[#00A4EF]' },
  { name: 'Zoom', icon: SiZoom, color: 'text-[#2D8CFF]' },
  { name: 'Shopify', icon: FaShopify, color: 'text-[#95BF47]' },
  { name: 'Dropbox', icon: FaDropbox, color: 'text-[#0061FF]' },
  { name: 'Stripe', icon: FaStripe, color: 'text-[#635BFF]' },
]

function LogoItem({ icon: Icon, name, color }) {
  return (
    <div className="flex items-center justify-center gap-3 min-w-fit px-6 md:px-8 py-3">
      <Icon className={`text-[26px] md:text-[30px] shrink-0 ${color}`} />
      <span className="text-[12px] md:text-[13px] uppercase tracking-[0.22em] text-slate-600 whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

function LogoStrip() {
  return (
    <section className="relative overflow-hidden bg-[#efefec] py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <div className="text-center">
          <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-slate-500 mb-3">
            // Trusted Platforms
          </p>
          <h2 className="text-[22px] sm:text-[28px] md:text-[34px] font-light tracking-tight text-slate-900">
            Platforms that power connected business operations.
          </h2>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-[#efefec] to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-[#efefec] to-transparent z-10" />

        <motion.div
          className="flex items-center gap-2 md:gap-4 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {[...logos, ...logos].map((logo, index) => (
            <LogoItem
              key={`${logo.name}-${index}`}
              icon={logo.icon}
              name={logo.name}
              color={logo.color}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default LogoStrip