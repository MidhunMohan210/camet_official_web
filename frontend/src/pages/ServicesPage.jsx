import { motion } from 'framer-motion'
import Button from '../components/common/Button'

function ServicesPage() {
  const services = [
    {
      title: 'Tally ERP Solutions',
      icon: '📊',
      description: 'Complete Tally ERP 9 implementation, customization, and support services for businesses of all sizes.',
      features: [
        'Installation and Configuration',
        'Data Migration from Legacy Systems',
        'Custom Reports and Forms',
        'Multi-location Setup',
        'GST Compliance',
        'Tally Vault Implementation',
        'Remote Access Setup',
        'Annual Maintenance Contracts'
      ]
    },
    {
      title: 'Marg ERP Services',
      icon: '💼',
      description: 'Expert Marg ERP deployment and ongoing support for retail and distribution businesses.',
      features: [
        'Marg ERP Installation',
        'Inventory Management Setup',
        'Billing System Configuration',
        'Barcode Integration',
        'GST Return Filing',
        'Multi-user Environment',
        'Data Backup Solutions',
        'Training and Support'
      ]
    },
    {
      title: 'Custom Software Development',
      icon: '💻',
      description: 'Tailored software solutions designed specifically for your business requirements.',
      features: [
        'Web Application Development',
        'Mobile App Development (iOS & Android)',
        'Desktop Software',
        'E-commerce Solutions',
        'CRM Systems',
        'Inventory Management',
        'Booking Systems',
        'API Development and Integration'
      ]
    },
    {
      title: 'IT Consulting',
      icon: '🔧',
      description: 'Strategic technology consulting to optimize your business processes and IT infrastructure.',
      features: [
        'IT Strategy Planning',
        'System Architecture Design',
        'Technology Assessment',
        'Digital Transformation',
        'Process Automation',
        'Cloud Migration',
        'Security Audits',
        'Performance Optimization'
      ]
    },
    {
      title: 'Software Integration',
      icon: '📱',
      description: 'Seamless integration of various business systems and third-party applications.',
      features: [
        'API Integration',
        'Payment Gateway Integration',
        'Third-party Tool Integration',
        'Database Synchronization',
        'Workflow Automation',
        'ERP Integration',
        'CRM Integration',
        'E-commerce Platform Integration'
      ]
    },
    {
      title: 'Training & Support',
      icon: '🎓',
      description: 'Comprehensive training programs and round-the-clock technical support.',
      features: [
        'On-site Training Sessions',
        'Online Training Programs',
        'User Manual Documentation',
        'Video Tutorials',
        '24/7 Help Desk Support',
        'Remote Assistance',
        'Regular Software Updates',
        'Troubleshooting Services'
      ]
    }
  ]

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Professional Hero Section */}
      <section className="bg-brand-900 text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-brand-200 uppercase bg-brand-800 rounded-full">
              Our Expertise
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-6">
              Professional Services
            </h1>
            <p className="text-lg text-brand-100 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions tailored to meet your business needs. From ERP implementation to custom software development, we deliver excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail List */}
      <section className="py-20 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                  {/* Icon Column */}
                  <div className="lg:col-span-3 bg-slate-50 p-8 flex flex-col justify-center items-center text-center border-b lg:border-b-0 lg:border-r border-slate-100">
                    <div className="w-20 h-20 bg-white rounded-2xl shadow-sm flex items-center justify-center text-4xl mb-4 border border-slate-100">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold text-brand-900">{service.title}</h3>
                  </div>

                  {/* Content Column */}
                  <div className="lg:col-span-9 p-8 lg:p-10">
                    <p className="text-base text-slate-600 mb-8 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div>
                      <h4 className="text-sm font-bold text-brand-700 uppercase tracking-wide mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                        Key Features
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start text-sm text-slate-700 group">
                            <svg className="w-5 h-5 mr-2.5 text-brand-500 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="group-hover:text-brand-700 transition-colors">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-brand-900 mb-4">
            Need a Custom Solution?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Can't find exactly what you're looking for? Let's discuss your specific requirements.
          </p>
          <Button 
            to="/contact" 
            className="bg-brand-600 text-blue hover:bg-brand-700 px-8 py-3 rounded-md font-semibold shadow-lg shadow-brand-100"
          >
            Start a Conversation
          </Button>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
