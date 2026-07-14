import { motion } from 'framer-motion'
import Button from '../components/common/Button'

function AboutPage() {
  const values = [
    { title: 'Excellence', icon: '🏆', description: 'We strive for perfection in every line of code we write.' },
    { title: 'Innovation', icon: '💡', description: 'Leveraging cutting-edge tech to solve complex business problems.' },
    { title: 'Integrity', icon: '🤝', description: 'Building trust through transparent and honest business practices.' },
    { title: 'Customer First', icon: '⭐', description: 'Your success is our primary metric of achievement.' }
  ]

  const timeline = [
    { year: '2015', title: 'Inception', description: 'Founded in Kerala with a vision to digitize local businesses.' },
    { year: '2018', title: 'Expansion', description: 'Expanded operations to serve 100+ enterprise clients across the state.' },
    { year: '2021', title: 'Innovation', description: 'Launched proprietary custom software division for specialized industries.' },
    { year: '2026', title: 'Leadership', description: 'Recognized as a premier ERP implementation partner in South India.' }
  ]

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Professional Hero Section */}
      <section className="bg-brand-900 text-white pt-32 pb-20 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-brand-200 uppercase bg-brand-800 rounded-full">
              Who We Are
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Driving Digital Transformation
            </h1>
            <p className="text-lg text-brand-100 max-w-3xl mx-auto leading-relaxed">
              We are more than just a software company. We are your strategic partners in growth, helping you navigate the complex landscape of modern business technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Corporate Profile / Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-brand-900 mb-6 flex items-center gap-3">
                <span className="w-10 h-1 bg-brand-600"></span>
                Our Story
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
                <p>
                  Established in 2015, <span className="font-semibold text-brand-700">CAMTIT Solutions</span> began with a simple yet powerful mission: to bring enterprise-grade technology to businesses of all sizes in Kerala.
                </p>
                <p>
                  What started as a small team of passionate developers has grown into a full-service IT consultancy. We recognized early on that businesses didn't just need software; they needed <span className="italic">solutions</span> that understood their local context and specific operational challenges.
                </p>
                <p>
                  Today, we are proud to be the trusted technology partner for over 500 companies, delivering robust Tally/Marg integrations and bespoke software that powers the region's economy.
                </p>
              </div>
            </motion.div>
            
            {/* Stats Grid - Professional Look */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: 'Years of Experience', value: '10+' },
                { label: 'Projects Delivered', value: '1k+' },
                { label: 'Active Clients', value: '500+' },
                { label: 'Team Experts', value: '50+' }
              ].map((stat, idx) => (
                <div key={idx} className="bg-slate-50 p-6 rounded-lg border border-slate-100 text-center hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="text-4xl font-bold text-brand-600 mb-2">{stat.value}</div>
                  <div className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Corporate Values */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-900 mb-4">Core Values</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">The principles that guide our every decision and line of code.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border border-slate-100 hover:shadow-md transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center text-2xl mb-6">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-brand-900 mb-16">Our Milestones</h2>
          
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-slate-200 hidden md:block"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`flex flex-col md:flex-row items-center justify-between gap-8 ${
                    index % 2 === 0 ? '' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {/* Content Box */}
                  <div className="w-full md:w-5/12 bg-slate-50 p-6 rounded-lg border border-slate-100 hover:border-brand-200 transition-colors">
                    <div className="text-brand-600 font-bold text-xl mb-1">{item.year}</div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
                  </div>

                  {/* Dot */}
                  <div className="w-4 h-4 rounded-full bg-brand-600 border-4 border-white shadow-sm z-10 hidden md:block"></div>

                  {/* Empty Space for Balance */}
                  <div className="w-full md:w-5/12 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Professional CTA */}
      <section className="py-16 bg-brand-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Partner with Kerala's Top IT Experts
          </h2>
          <p className="text-brand-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can leverage technology to accelerate your business growth.
          </p>
          <Button variant="primary" to="/contact" className="bg-white text-brand-900 hover:bg-brand-50 font-semibold px-8 py-3">
            Schedule a Meeting
          </Button>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
