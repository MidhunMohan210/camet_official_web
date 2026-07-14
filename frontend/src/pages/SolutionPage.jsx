import { motion } from 'framer-motion'
import Button from '../components/common/Button'

function SolutionsPage() {
  const solutions = [
    {
      title: 'Connected Business Workflows',
      description: 'Enable smoother day-to-day operations by connecting accounting activities, supporting documents, and compliance-sensitive actions in one flow.',
    },
    {
      title: 'Reporting & Analysis',
      description: 'Use advanced reporting extensions and Excel-driven outputs to make Tally data more actionable for business owners and finance teams.',
    },
    {
      title: 'Document-linked Transactions',
      description: 'Link invoices, PDFs, spreadsheets, and images directly with transaction records for better traceability and faster verification.',
    },
    {
      title: 'Audit & Compliance Visibility',
      description: 'Improve transparency with voucher history, transaction tracking, and controlled review of inventory and ledger changes.',
    },
    {
      title: 'Business Continuity & Backup',
      description: 'Reduce operational risk with backup-focused tools and structured support practices for recovery readiness.',
    },
    {
      title: 'Multi-user Business Operations',
      description: 'Support growing teams with server-based access, better data reliability, and more controlled business usage environments.',
    },
  ]

  return (
    <div className="bg-slate-50 min-h-screen pt-[76px]">
      <section className="bg-white border-b border-slate-200 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-slate-900 mb-6"
          >
            Business Solutions
          </motion.h1>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Practical software solutions designed to improve financial control, reporting, compliance, and business continuity.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6">
          {solutions.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Need a tailored implementation plan?</h2>
          <p className="text-slate-600 mb-8">
            We can map the right combination of Tally products, add-ons, and support services to your business process.
          </p>
          <Button to="/contact" className="bg-red-600 text-white hover:bg-red-700 px-8 py-3 rounded-md font-semibold">
            Request Consultation
          </Button>
        </div>
      </section>
    </div>
  )
}

export default SolutionsPage