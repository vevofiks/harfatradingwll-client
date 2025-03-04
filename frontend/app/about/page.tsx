'use client'

import { motion } from 'framer-motion'

export default function About() {
  const features = [
    { 
      icon: "fa-check-circle", 
      text: "Genuine Parts",
      description: "All our parts are sourced directly from authorized manufacturers"
    },
    { 
      icon: "fa-truck", 
      text: "Fast Delivery",
      description: "Same-day delivery available across Qatar"
    },
    { 
      icon: "fa-headset", 
      text: "Expert Support",
      description: "24/7 technical support from automotive experts"
    },
    { 
      icon: "fa-shield-alt", 
      text: "Quality Guarantee",
      description: "All parts come with warranty and quality assurance"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <section id="about" className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, red 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-red-500">Harfa Trading</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed">
            With over a decade of experience in the automotive industry, Harfa Trading is your reliable source for quality car spare parts. 
            We pride ourselves on offering genuine components at competitive prices.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/10 hover:border-red-500/30 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <i className={`fas ${feature.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-500 transition-colors">
                  {feature.text}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "10+", label: "Years Experience" },
            { number: "5000+", label: "Happy Customers" },
            { number: "15000+", label: "Parts Delivered" },
            { number: "24/7", label: "Customer Support" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <motion.div 
                className="text-4xl font-bold text-red-500 mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <a 
            href="#contact" 
            className="inline-block bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-4 rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-red-500/30"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
} 