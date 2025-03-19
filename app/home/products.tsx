'use client'

import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faOilCan,
  faCar,
  faGears,
  faBolt,
  faFilter,
  faTachometerAlt,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  category: string
  icon: any
  description: string
  price: string
  stock: 'In Stock' | 'Low Stock' | 'Out of Stock'
}

const products: Product[] = [
  {
    id: 1,
    name: "Performance Engine Parts",
    category: "Engine",
    icon: faBolt,
    description: "High-quality engine components for optimal performance",
    price: "Contact for Price",
    stock: "In Stock"
  },
  {
    id: 2,
    name: "Brake System Kit",
    category: "Brakes",
    icon: faCar,
    description: "Complete brake system solutions for all vehicle types",
    price: "Contact for Price",
    stock: "In Stock"
  },
  {
    id: 3,
    name: "Premium Oil Filters",
    category: "Filters",
    icon: faFilter,
    description: "Superior filtration for engine protection",
    price: "Contact for Price",
    stock: "In Stock"
  },
  {
    id: 4,
    name: "Transmission Parts",
    category: "Transmission",
    icon: faGears,
    description: "Reliable transmission components for smooth operation",
    price: "Contact for Price",
    stock: "Low Stock"
  }
]

export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

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
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <section id='products' className="py-24 bg-gradient-to-b from-gray-900 to-black min-h-screen relative overflow-hidden">
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
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-red-500">Products</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Explore our selection of premium automotive parts and accessories
          </p>
        </motion.div>

        {/* Products Slider */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative"
        >
          <div className="flex overflow-hidden">
            <motion.div
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="flex flex-nowrap"
            >
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  variants={itemVariants}
                  className="w-full flex-shrink-0 px-4"
                  style={{ width: '100%' }}
                >
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-red-500/10 hover:border-red-500/30 transition-all duration-500 group">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      <div className="w-full md:w-1/3">
                        <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                          <FontAwesomeIcon icon={product.icon} className="text-white text-4xl" />
                        </div>
                      </div>
                      <div className="w-full md:w-2/3 text-center md:text-left">
                        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-500 transition-colors">
                          {product.name}
                        </h3>
                        <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                          {product.description}
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                          <span className="text-red-500 font-semibold">{product.price}</span>
                          <span className={`px-3 py-1 rounded-full text-sm ${
                            product.stock === 'In Stock' ? 'bg-green-500/20 text-green-400' :
                            product.stock === 'Low Stock' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-red-500/20 text-red-400'
                          }`}>
                            {product.stock}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Slider Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-red-500 w-6' : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* View More Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/products" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-8 py-3 rounded-lg 
                         hover:from-red-700 hover:to-red-800 transition-all duration-300 
                         font-medium shadow-lg hover:shadow-red-500/30 
                         flex items-center gap-2 mx-auto"

            >
              View All Products
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}