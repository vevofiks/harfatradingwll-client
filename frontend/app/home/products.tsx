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
  faSearch,
  faSort
} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

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
  },
  // Add more products as needed
]

const categories = ["All", "Engine", "Brakes", "Filters", "Transmission", "Electrical"]

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
    <section  id='products' className="py-24 bg-gradient-to-b from-gray-900 to-black min-h-screen relative">
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-red-500">Products</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Discover our extensive range of high-quality automotive parts and accessories
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          <div className="relative w-full md:w-64">
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 bg-white/10 border border-red-500/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
            />
            <FontAwesomeIcon 
              icon={faSearch} 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-red-500 text-white shadow-lg shadow-red-500/30'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-red-500/10 hover:border-red-500/30 transition-all duration-300 group"
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <FontAwesomeIcon icon={product.icon} className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-500 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
                    {product.description}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-red-500 font-semibold">{product.price}</span>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      product.stock === 'In Stock' ? 'bg-green-500/20 text-green-400' :
                      product.stock === 'Low Stock' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {product.stock}
                    </span>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg hover:from-red-700 hover:to-red-800 transition-all duration-300 font-medium shadow-lg hover:shadow-red-500/30">
                    Inquire Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No products found. Try adjusting your search or filter.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}