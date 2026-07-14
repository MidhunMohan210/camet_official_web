import { motion, useInView } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import Button from '../common/Button'
// Founder photos — commented out until real headshots are ready.
// import founder1Img from '../../assets/image.png'
// import founder2Img from '../../assets/image1.png'
// import founder3Img from '../../assets/image.png'
// import founder4Img from '../../assets/image2.png'
// import founder5Img from '../../assets/image2.png'

/**
 * Fonts used by this section — add once, globally (e.g. index.html <head>):
 *
 * <link rel="preconnect" href="https://fonts.googleapis.com">
 * <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,600&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">
 *
 * Design concept: same "connected systems" idea as before, now laid out as a calm,
 * off-white bento grid (matching the reference). Since CAMET sells software, not
 * physical craft, each tile carries a small line-art illustration built from the
 * brand's own node-and-link motif instead of stock lifestyle photography — the
 * illustration IS the brand mark, reused at different scales across the grid.
 */

const fontDisplay = { fontFamily: '"Plus Jakarta Sans", "Poppins", sans-serif' }
const fontMono = { fontFamily: '"JetBrains Mono", "Menlo", monospace' }

const BG = '#FAF9F6'
const TILE = '#F0EEE9'
const TILE_INNER = '#FFFFFF'
const CARD_BORDER = 'rgba(23,20,40,0.06)'
const TEXT = '#181521'
const MUTED = '#6E6A80'

const BLUE = '#3B63E0'
const VIOLET = '#7C5CE0'
const CORAL = '#E24868'
const MINT = '#0E9F72'
const AMBER = '#D68A0C'

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const people = [
  { name: 'Aarav Mehta', role: 'CEO & Founder', color: BLUE },
  { name: 'Riya Sharma', role: 'Co-Founder', color: VIOLET },
  { name: 'Karan Patel', role: 'Co-Founder', color: CORAL },
  { name: 'Neha Verma', role: 'Co-Founder', color: MINT },
  { name: 'Devansh Rao', role: 'Co-Founder', color: AMBER },
]

function initials(name) {
  return name.split(' ').map((w) => w[0]).join('')
}

function CountUp({ value, suffix = '', display, duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [n, setN] = useState(0)

  useEffect(() => {
    if (!inView) return
    const start = performance.now()
    let raf
    const tick = (now) => {
      const p = Math.min((now - start) / (duration * 1000), 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setN(Math.floor(eased * value))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {display ? (n >= value ? display : n.toLocaleString()) : `${n.toLocaleString()}${suffix}`}
    </span>
  )
}

/* ---------- Illustrations — a small hub-and-spoke icon system, one motif per tile ---------- */

const shadow = 'drop-shadow(0 6px 10px rgba(23,20,40,0.12))'

function IllustrationNetwork() {
  // Hub-and-spoke: a dashboard hub wired to the three systems CAMET connects
  // (cloud / records / accounts) — a literal picture of "connected systems".
  const spokes = [
    { x: 20, y: 22, color: MINT, icon: 'cloud' },
    { x: 82, y: 26, color: AMBER, icon: 'stack' },
    { x: 66, y: 84, color: CORAL, icon: 'check' },
  ]
  return (
    <svg viewBox="0 0 100 100" className="w-full h-full" style={{ filter: shadow }}>
      <defs>
        <linearGradient id="hubGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={BLUE} />
          <stop offset="100%" stopColor={VIOLET} />
        </linearGradient>
      </defs>

      {spokes.map((s, i) => (
        <motion.path
          key={i}
          d={`M50 52 Q${(50 + s.x) / 2} ${(52 + s.y) / 2 - 6} ${s.x} ${s.y}`}
          fill="none" stroke="rgba(24,21,33,0.18)" strokeWidth="1.5" strokeDasharray="3 4" strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15 + i * 0.12 }}
        />
      ))}

      {spokes.map((s, i) => (
        <motion.g
          key={i}
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <circle cx={s.x} cy={s.y} r="12.5" fill={s.color} />
          {s.icon === 'cloud' && (
            <path d="M-5 1.5a3.4 3.4 0 0 1 1-6.6 4.6 4.6 0 0 1 8.7-1.7 3.6 3.6 0 0 1 4.8 3.4 3.3 3.3 0 0 1-1.3 6.3z"
              transform={`translate(${s.x} ${s.y})`} fill="#fff" opacity="0.95" />
          )}
          {s.icon === 'stack' && (
            <g transform={`translate(${s.x - 6} ${s.y - 5.5})`} fill="none" stroke="#fff" strokeWidth="1.6" strokeLinejoin="round">
              <path d="M6 0 L12 3 L6 6 L0 3 Z" />
              <path d="M0 6.5 L6 9.5 L12 6.5" />
              <path d="M0 9.5 L6 12.5 L12 9.5" />
            </g>
          )}
          {s.icon === 'check' && (
            <path d={`M${s.x - 5} ${s.y} l3.2 3.4 l6.8 -7`} fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          )}
        </motion.g>
      ))}

      <motion.g
        initial={{ opacity: 0, scale: 0.7 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <circle cx="50" cy="52" r="19" fill="url(#hubGrad)" />
        <rect x="41" y="44" width="18" height="14" rx="2.5" fill="none" stroke="#fff" strokeWidth="1.6" />
        <line x1="41" y1="49" x2="59" y2="49" stroke="#fff" strokeWidth="1.6" />
        <circle cx="44.3" cy="46.5" r="0.9" fill="#fff" />
        <circle cx="46.8" cy="46.5" r="0.9" fill="#fff" />
      </motion.g>
    </svg>
  )
}

function IllustrationPartnership() {
  // Two overlapping identity circles resolving into a single check — "systems that
  // used to run separately, now working as one".
  return (
    <svg viewBox="0 0 100 70" className="w-full h-full" style={{ filter: shadow }}>
      <defs>
        <linearGradient id="pShipA" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={BLUE} />
          <stop offset="100%" stopColor={VIOLET} />
        </linearGradient>
        <linearGradient id="pShipB" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={VIOLET} />
          <stop offset="100%" stopColor={CORAL} />
        </linearGradient>
      </defs>
      <motion.circle
        cx="38" cy="35" r="22" fill="url(#pShipA)" opacity="0.92"
        initial={{ x: -14, opacity: 0 }} whileInView={{ x: 0, opacity: 0.92 }} viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.circle
        cx="62" cy="35" r="22" fill="url(#pShipB)" opacity="0.85"
        initial={{ x: 14, opacity: 0 }} whileInView={{ x: 0, opacity: 0.85 }} viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.g
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <circle cx="50" cy="35" r="13" fill="#fff" />
        <path d="M44.5 35 l4 4.3 l8 -9" fill="none" stroke={TEXT} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
    </svg>
  )
}

function IllustrationBadge() {
  // A trust/quality medal — used for the tenure stat.
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full" style={{ filter: shadow }}>
      <defs>
        <linearGradient id="badgeGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={AMBER} />
          <stop offset="100%" stopColor={CORAL} />
        </linearGradient>
      </defs>
      <path d="M28 46 L20 68 L32 64 L38 74 L47 54 Z" fill={AMBER} opacity="0.55" />
      <path d="M52 46 L60 68 L48 64 L42 74 L33 54 Z" fill={CORAL} opacity="0.55" />
      <motion.circle
        cx="40" cy="36" r="24" fill="url(#badgeGrad)"
        initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />
      <circle cx="40" cy="36" r="17.5" fill="none" stroke="#fff" strokeWidth="1.6" opacity="0.85" />
      <path d="M31 36.5 l6 6 l12 -13" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function IllustrationGrowth() {
  // A rising performance line with a gradient area fill — "operations trending up".
  const points = [[6, 50], [26, 40], [46, 44], [66, 24], [86, 14], [114, 8]]
  const line = points.map((p, i) => (i === 0 ? `M${p[0]} ${p[1]}` : `L${p[0]} ${p[1]}`)).join(' ')
  const area = `${line} L114 64 L6 64 Z`
  return (
    <svg viewBox="0 0 120 70" className="w-full h-full" style={{ filter: shadow }}>
      <defs>
        <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={MINT} stopOpacity="0.45" />
          <stop offset="100%" stopColor={MINT} stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={area} fill="url(#growthFill)"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
      <motion.path
        d={line} fill="none" stroke={MINT} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      />
      {points.map((p, i) => (
        <motion.circle
          key={i} cx={p[0]} cy={p[1]} r="3" fill="#fff" stroke={MINT} strokeWidth="2"
          initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
        />
      ))}
      <motion.g
        initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 1 }}
      >
        <circle cx="103" cy="8" r="9" fill={TEXT} />
        <path d="M99.5 10.5 L103 5.5 L106.5 10.5 M103 5.8 V12" fill="none" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
    </svg>
  )
}

/* ---------------------------------------------------------------------------------- */

function About() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: BG, color: TEXT }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        {/* Header */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="flex flex-col items-center text-center mb-14 md:mb-16"
        >
          <motion.span
            variants={fadeUp}
            style={{ ...fontMono, color: MUTED, backgroundColor: TILE }}
            className="mb-5 rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em]"
          >
            About Us
          </motion.span>

          <motion.h2
            variants={fadeUp}
            style={fontDisplay}
            className="font-extrabold text-[32px] sm:text-[42px] md:text-[48px] leading-[1.12] tracking-tight max-w-2xl"
          >
            Why businesses choose{' '}
            <span
              className="bg-clip-text text-transparent"
              style={{ backgroundImage: `linear-gradient(90deg, ${BLUE}, ${VIOLET} 55%, ${CORAL})` }}
            >
              CAMET
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            style={{ ...fontDisplay, color: MUTED }}
            className="mt-4 text-[15px] md:text-[16px] leading-[1.7] max-w-md"
          >
            Dependable digital systems and thoughtful engineering that set the
            standard for connected business technology.
          </motion.p>
        </motion.div>

        {/* Bento grid */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-5"
        >
          {/* Card A — tall, systems illustration + copy + CTA */}
          <motion.div
            variants={fadeUp}
            className="md:row-span-2 rounded-[28px] p-4 flex flex-col"
            style={{ backgroundColor: TILE, border: `1px solid ${CARD_BORDER}` }}
          >
            <div
              className="rounded-2xl aspect-square mb-5 p-6"
              style={{ backgroundColor: TILE_INNER }}
            >
              <IllustrationNetwork />
            </div>
            <p style={fontDisplay} className="text-[16px] leading-[1.6] font-semibold px-1">
              Engineered by specialists to deliver{' '}
              <span style={{ color: MUTED, fontWeight: 400 }}>
                dependable, elegant systems for growing businesses.
              </span>
            </p>
            <div className="mt-auto pt-6 px-1">
              <Button
                to="/contact"
                className="inline-flex items-center gap-3 rounded-full pl-5 pr-1.5 py-1.5 text-white text-[13px] font-medium"
                style={{ ...fontDisplay, backgroundColor: TEXT }}
              >
                Explore Our Work
                <span
                  className="flex items-center justify-center rounded-full w-8 h-8"
                  style={{ backgroundColor: '#FFFFFF' }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke={TEXT} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Button>
            </div>
          </motion.div>

          {/* Card B — partnership illustration */}
          <motion.div
            variants={fadeUp}
            className="rounded-[28px] p-4 flex flex-col"
            style={{ backgroundColor: TILE, border: `1px solid ${CARD_BORDER}` }}
          >
            <div
              className="rounded-2xl aspect-[16/11] mb-5 p-6 flex items-center"
              style={{ backgroundColor: TILE_INNER }}
            >
              <IllustrationPartnership />
            </div>
            <p style={fontDisplay} className="text-[15px] leading-[1.6] px-1">
              <span className="font-semibold">Trusted by</span>{' '}
              <span style={{ color: MUTED }}>500+ businesses across industries.</span>
            </p>
          </motion.div>

          {/* Card C — stat + badge illustration, side by side */}
          <motion.div
            variants={fadeUp}
            className="rounded-[28px] p-4 flex items-center gap-4"
            style={{ backgroundColor: TILE, border: `1px solid ${CARD_BORDER}` }}
          >
            <div className="flex-1 pl-2">
              <div
                style={{ ...fontDisplay, color: TEXT }}
                className="text-[38px] font-extrabold leading-none tabular-nums"
              >
                <CountUp value={10} suffix="+" />
              </div>
              <p style={{ ...fontDisplay, color: MUTED }} className="mt-2 text-[12px] leading-[1.5]">
                Years delivering dependable craftsmanship.
              </p>
            </div>
            <div
              className="rounded-2xl w-24 h-24 shrink-0 p-4"
              style={{ backgroundColor: TILE_INNER }}
            >
              <IllustrationBadge />
            </div>
          </motion.div>

          {/* Card D — wide, growth illustration + copy */}
          <motion.div
            variants={fadeUp}
            className="md:col-span-2 rounded-[28px] p-4 flex flex-col sm:flex-row sm:items-center gap-5"
            style={{ backgroundColor: TILE, border: `1px solid ${CARD_BORDER}` }}
          >
            <p style={fontDisplay} className="text-[15px] leading-[1.6] px-1 sm:flex-1 order-2 sm:order-1">
              <span className="font-semibold">Elevates operations and</span>{' '}
              <span style={{ color: MUTED }}>
                transforms how your business runs, day to day.
              </span>
            </p>
            <div
              className="rounded-2xl sm:w-64 w-full aspect-[16/9] sm:aspect-auto sm:h-32 p-6 order-1 sm:order-2 shrink-0"
              style={{ backgroundColor: TILE_INNER }}
            >
              <IllustrationGrowth />
            </div>
          </motion.div>
        </motion.div>

        {/* Supplementary stats — quiet, single line */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          style={fontMono}
          className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-2 text-[11px] uppercase tracking-[0.15em]"
        >
          <span><span style={{ color: TEXT }} className="font-semibold">1,000+</span> <span style={{ color: MUTED }}>Projects Delivered</span></span>
          <span><span style={{ color: TEXT }} className="font-semibold">500+</span> <span style={{ color: MUTED }}>Active Clients</span></span>
          <span><span style={{ color: TEXT }} className="font-semibold">50+</span> <span style={{ color: MUTED }}>Team Experts</span></span>
        </motion.div>

        {/* Team */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-20 lg:mt-24"
        >
          <div className="flex items-center justify-between mb-8">
            <p style={fontMono} className="text-[11px] uppercase tracking-[0.4em]">
              <span style={{ color: MUTED }}>// The Team</span>
            </p>
            <p style={fontMono} className="text-[10px] uppercase tracking-[0.3em]">
              <span style={{ color: MUTED }}>{people.length} People</span>
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {people.map((person) => (
              <motion.div
                key={person.name}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="rounded-[24px] p-4 text-center"
                style={{ backgroundColor: TILE, border: `1px solid ${CARD_BORDER}` }}
              >
                {/* Photos temporarily disabled — swap this placeholder for
                    <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                    inside the circle below once real headshots are available. */}
                <div
                  className="mx-auto mb-4 flex items-center justify-center rounded-full aspect-square w-20"
                  style={{ backgroundColor: `${person.color}1A`, border: `1.5px solid ${person.color}55` }}
                >
                  <span style={{ ...fontDisplay, color: person.color }} className="text-[20px] font-bold">
                    {initials(person.name)}
                  </span>
                </div>

                <h4 style={fontDisplay} className="text-[14px] font-bold uppercase tracking-[0.06em]">
                  {person.name}
                </h4>
                <p style={fontMono} className="text-[9.5px] uppercase tracking-[0.2em] mt-1.5">
                  <span style={{ color: person.color }}>{person.role}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About