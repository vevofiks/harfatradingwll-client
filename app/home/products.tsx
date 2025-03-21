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
  faArrowRight,
  faShoppingCart
} from '@fortawesome/free-solid-svg-icons'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface Product {
  id: number
  name: string
  category: string
  icon: any
  description: string
  price: string
  stock: 'In Stock' | 'Low Stock' | 'Out of Stock'
  features: string[]
}

const products: Product[] = [
  {
    id: 1,
    name: "Performance Engine Parts",
    category: "Engine",
    icon: faBolt,
    description: "High-quality engine components for optimal performance",
    price: "Contact for Price",
    stock: "In Stock",
    features: ["OEM Quality", "1 Year Warranty", "Global Certification"]
  },
  {
    id: 2,
    name: "Brake System Kit",
    category: "Brakes",
    icon: faCar,
    description: "Complete brake system solutions for all vehicle types",
    price: "Contact for Price",
    stock: "In Stock",
    features: ["Premium Materials", "Easy Installation", "Enhanced Safety"]
  },
  {
    id: 3,
    name: "Premium Oil Filters",
    category: "Filters",
    icon: faFilter,
    description: "Superior filtration for engine protection",
    price: "Contact for Price",
    stock: "In Stock",
    features: ["99.9% Filtration", "Long-lasting", "Universal Fit"]
  },
  {
    id: 4,
    name: "Transmission Parts",
    category: "Transmission",
    icon: faGears,
    description: "Reliable transmission components for smooth operation",
    price: "Contact for Price",
    stock: "Low Stock",
    features: ["Precision Engineering", "Durability Tested", "OEM Specifications"]
  }
]

export default function Products() {
  const [activeIndex, setActiveIndex] = useState(0);
  const router = useRouter();

  // Auto-scroll effect
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const handleViewAllProducts = () => {
    router.push('/products');
  };

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
            Our Premium <span className="text-red-500">Products</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Discover our extensive range of high-quality automotive parts and accessories
          </p>
        </motion.div>

        {/* Products Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-800/50 to-black/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-700/50 hover:border-red-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center flex-shrink-0">
                  <FontAwesomeIcon icon={product.icon} className="text-white text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{product.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300">
                        {feature}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
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
            </motion.div>
          ))}
        </div>

        {/* View All Products Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-center"
        >
          <button
            onClick={handleViewAllProducts}
            className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 
                     text-white px-8 py-4 rounded-xl transition-all duration-300 
                     shadow-lg hover:shadow-red-500/30 transform hover:scale-105"
          >
            <span className="flex items-center gap-3">
              <FontAwesomeIcon icon={faShoppingCart} className="text-xl" />
              <span className="text-lg font-semibold">Explore All Products</span>
              <FontAwesomeIcon 
                icon={faArrowRight} 
                className="transform group-hover:translate-x-2 transition-transform duration-300" 
              />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  )
}