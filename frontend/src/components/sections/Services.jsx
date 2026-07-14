import { motion } from 'framer-motion'
import {
  FaCogs,
  FaPuzzlePiece,
  FaCloud,
  FaDatabase,
  FaTools,
  FaHospital,
  FaTruck,
  FaShoppingCart,
  FaUserShield,
  FaCodeBranch,
  FaChartLine,
  FaMobileAlt,
  FaNetworkWired,
  FaHeadset,
} from 'react-icons/fa'

const serviceGroups = [
  {
    id: 'services',
    eyebrow: 'Core Services',
    title: 'Services that move business systems forward.',
    description:
      'From software sales to cloud delivery, we build, connect, and support business platforms that stay reliable in day-to-day operations.',
    icon: FaCogs,
    accent: 'from-blue-500/20 to-cyan-400/10',
    items: [
      'Software Sales & Licensing',
      'Software Customization',
      'System Integration',
      'API Integration Services',
      'Data Migration',
      'Cloud Solutions',
      'Annual Maintenance & Support (AMC)',
    ],
  },
  {
    id: 'development',
    eyebrow: 'Customization & Development',
    title: 'Built around your workflow, not the other way around.',
    description:
      'We study your process, identify friction points, and build modules, automations, reports, and integrations that match how your team actually works.',
    icon: FaCodeBranch,
    accent: 'from-violet-500/20 to-fuchsia-400/10',
    items: [
      'Requirement Analysis Process',
      'Custom Module Development',
      'Workflow Automation',
      'Reports & Dashboards',
      'Third-party Integrations',
      'Case Examples',
    ],
  },
  {
    id: 'integration',
    eyebrow: 'Integration Solutions',
    title: 'Connect tools, platforms, and legacy systems without chaos.',
    description:
      'We create stable, scalable integrations that keep departments, data, and customer journeys connected across software environments.',
    icon: FaNetworkWired,
    accent: 'from-emerald-500/20 to-teal-400/10',
    items: [
      'ERP–CRM Integration',
      'Payment Gateway Integration',
      'GST / Tax Integration',
      'E-commerce Integration',
      'Mobile App Integration',
      'Legacy System Integration',
    ],
  },
  {
    id: 'support',
    eyebrow: 'Support & AMC',
    title: 'Post-sales support that keeps systems stable.',
    description:
      'Our support model covers issue response, SLA-driven service, remote and on-site help, and ongoing upgrades so your software remains dependable.',
    icon: FaHeadset,
    accent: 'from-rose-500/20 to-pink-400/10',
    items: [
      'Support Plans',
      'SLA Details',
      'Ticketing Process',
      'Remote & On-site Support',
      'Upgrade & Patch Management',
    ],
  },
]

const floatingIcons = [
  { icon: FaDatabase, className: 'top-10 left-[10%]' },
  { icon: FaCloud, className: 'top-20 right-[12%]' },
  { icon: FaPuzzlePiece, className: 'top-[40%] left-[18%]' },
  { icon: FaChartLine, className: 'bottom-20 right-[20%]' },
  { icon: FaMobileAlt, className: 'bottom-14 left-[8%]' },
  { icon: FaShoppingCart, className: 'top-[54%] right-[8%]' },
  { icon: FaHospital, className: 'bottom-28 left-[28%]' },
  { icon: FaTruck, className: 'top-[18%] left-[42%]' },
  { icon: FaUserShield, className: 'bottom-[16%] right-[38%]' },
  { icon: FaTools, className: 'top-[12%] right-[34%]' },
]

function Services() {
  return (
    <section className="relative overflow-hidden bg-[#f6f6f4] py-14 md:py-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.95),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(226,232,240,0.75),transparent_28%)]" />

      <div className="absolute inset-0 opacity-35 pointer-events-none">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M40 180C180 120 240 260 360 230C500 195 560 120 690 180C790 225 860 330 980 290C1110 245 1170 160 1400 220"
            stroke="url(#line1)"
            strokeWidth="14"
            strokeLinecap="round"
          />
          <path
            d="M80 520C180 460 260 620 410 560C550 500 650 410 790 470C900 515 1000 660 1150 600C1260 555 1320 510 1410 560"
            stroke="url(#line2)"
            strokeWidth="10"
            strokeLinecap="round"
          />
          <path
            d="M120 760C280 680 350 800 500 740C660 675 710 620 860 680C1000 735 1110 840 1360 780"
            stroke="url(#line3)"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="line1" x1="40" y1="180" x2="1400" y2="220" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d6d3d1" />
              <stop offset="0.5" stopColor="#bfbfbf" />
              <stop offset="1" stopColor="#e7e5e4" />
            </linearGradient>
            <linearGradient id="line2" x1="80" y1="520" x2="1410" y2="560" gradientUnits="userSpaceOnUse">
              <stop stopColor="#e5e7eb" />
              <stop offset="0.5" stopColor="#cbd5e1" />
              <stop offset="1" stopColor="#e7e5e4" />
            </linearGradient>
            <linearGradient id="line3" x1="120" y1="760" x2="1360" y2="780" gradientUnits="userSpaceOnUse">
              <stop stopColor="#d4d4d8" />
              <stop offset="0.5" stopColor="#cbd5e1" />
              <stop offset="1" stopColor="#f5f5f4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {floatingIcons.map((item, index) => {
        const Icon = item.icon
        return (
          <motion.div
            key={index}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
            className={`absolute ${item.className} hidden xl:flex h-10 w-10 items-center justify-center rounded-xl border border-white/70 bg-white/90 shadow-[0_10px_24px_rgba(15,23,42,0.08)] backdrop-blur-md`}
          >
            <Icon className="text-slate-700 text-[15px]" />
          </motion.div>
        )
      })}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
          viewport={{ once: true }}
          className="max-w-2xl"
        >
          <span className="inline-flex items-center rounded-full border border-slate-300 bg-white/80 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.2em] text-slate-600">
            Services Ecosystem
          </span>
          <h2 className="mt-4 text-[28px] sm:text-[34px] md:text-[42px] font-light tracking-tight text-slate-900 leading-[1.08]">
            Integration, customization, support, and business systems built to work together.
          </h2>
          <p className="mt-4 text-[14px] md:text-[15px] text-slate-600 leading-7 max-w-xl">
            Our services are structured to help businesses adopt software with clarity, connect platforms without friction, and scale operations with dependable support.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5">
          {serviceGroups.map((group, index) => {
            const Icon = group.icon
            const large = index === 0 || index === 2

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                viewport={{ once: true }}
                className={`${large ? 'lg:col-span-7' : 'lg:col-span-5'} group relative overflow-hidden rounded-[24px] border border-white/70 bg-white/80 backdrop-blur-xl shadow-[0_16px_40px_rgba(15,23,42,0.07)]`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${group.accent} opacity-70 group-hover:opacity-100 transition duration-500`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.85),transparent_35%)]" />

                <div className="relative p-5 md:p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="inline-flex rounded-full border border-slate-200 bg-white/70 px-2.5 py-1 text-[9px] uppercase tracking-[0.18em] text-slate-500">
                        {group.eyebrow}
                      </span>
                      <h3 className="mt-3 text-[20px] md:text-[24px] font-light text-slate-900 leading-tight max-w-lg">
                        {group.title}
                      </h3>
                    </div>

                    <motion.div
                      whileHover={{ rotate: 6, scale: 1.05 }}
                      className="shrink-0 h-11 w-11 rounded-xl border border-white/80 bg-white/80 flex items-center justify-center shadow-sm"
                    >
                      <Icon className="text-slate-900 text-[16px]" />
                    </motion.div>
                  </div>

                  <p className="mt-3 text-[13px] md:text-[14px] text-slate-600 leading-6 max-w-xl">
                    {group.description}
                  </p>

                  <div className="mt-5 grid sm:grid-cols-2 gap-2.5">
                    {group.items.map((item, itemIndex) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: itemIndex * 0.04 }}
                        viewport={{ once: true }}
                        className="group/item flex items-center gap-2.5 rounded-xl border border-white/70 bg-white/75 px-3 py-3 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white text-[10px] font-medium shrink-0">
                          {String(itemIndex + 1).padStart(2, '0')}
                        </span>
                        <p className="text-[13px] md:text-[14px] text-slate-700 leading-5">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services