'use client';
import { useState } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  category: string;
  description: string;
  price: string;
}

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Dummy categories with icons
  const dummyCategories = [
    { name: "Auto Parts", icon: "M19 16v3H5v-3m14 0v-3l-7-7-7 7v3m14 0H5" },
    { name: "Engine Components", icon: "M14 7l-5 5 5 5V7z" },
    { name: "Brake Systems", icon: "M12 8v4l3 3m-6-3h9" },
    { name: "Transmission Parts", icon: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
    { name: "Electrical Systems", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { name: "Body Parts", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
    { name: "Interior Accessories", icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" },
    { name: "Exterior Accessories", icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" }
  ];

  const dummyProducts: Product[] = [
    // Brake Systems (Total: 4)
    {
      id: 1,
      name: "Premium Brake Pads",
      category: "Brake Systems",
      description: "High-performance brake pads for optimal stopping power",
      price: "$79.99"
    },
    {
      id: 2,
      name: "Ceramic Brake Rotors",
      category: "Brake Systems",
      description: "Durable ceramic rotors for extended life and performance",
      price: "$129.99"
    },
    {
      id: 3,
      name: "Brake Fluid DOT 4",
      category: "Brake Systems",
      description: "High-temperature brake fluid for superior braking efficiency",
      price: "$14.99"
    },
    {
      id: 4,
      name: "Performance Brake Calipers",
      category: "Brake Systems",
      description: "Upgraded brake calipers for enhanced braking force",
      price: "$249.99"
    },

    // Engine Components (Total: 5)
    {
      id: 5,
      name: "Engine Oil Filter",
      category: "Engine Components",
      description: "Premium quality oil filter for maximum engine protection",
      price: "$12.99"
    },
    {
      id: 6,
      name: "Timing Belt Kit",
      category: "Engine Components",
      description: "Complete timing belt replacement kit with tensioners",
      price: "$189.99"
    },
    {
      id: 7,
      name: "Spark Plug Set",
      category: "Engine Components",
      description: "High-performance spark plugs for improved ignition",
      price: "$29.99"
    },
    {
      id: 8,
      name: "Air Intake System",
      category: "Engine Components",
      description: "Cold air intake system for increased horsepower",
      price: "$199.99"
    },
    {
      id: 9,
      name: "Engine Coolant",
      category: "Engine Components",
      description: "Long-life coolant for optimal engine temperature regulation",
      price: "$24.99"
    },

    // Transmission Parts (Total: 3)
    {
      id: 10,
      name: "Clutch Kit",
      category: "Transmission Parts",
      description: "Complete clutch replacement kit with pressure plate",
      price: "$349.99"
    },
    {
      id: 11,
      name: "Transmission Fluid",
      category: "Transmission Parts",
      description: "Synthetic transmission fluid for smooth shifting",
      price: "$19.99"
    },
    {
      id: 12,
      name: "Shift Knob",
      category: "Transmission Parts",
      description: "Ergonomic shift knob for enhanced driving experience",
      price: "$39.99"
    },

    // Electrical Systems (Total: 4)
    {
      id: 13,
      name: "Car Battery",
      category: "Electrical Systems",
      description: "Long-lasting car battery with high cranking power",
      price: "$149.99"
    },
    {
      id: 14,
      name: "Alternator",
      category: "Electrical Systems",
      description: "High-performance alternator for efficient power generation",
      price: "$229.99"
    },
    {
      id: 15,
      name: "Starter Motor",
      category: "Electrical Systems",
      description: "Reliable starter motor for quick engine ignition",
      price: "$199.99"
    },
    {
      id: 16,
      name: "LED Headlight Bulbs",
      category: "Electrical Systems",
      description: "Bright LED bulbs for improved nighttime visibility",
      price: "$49.99"
    },

    // Auto Parts (Total: 5)
    {
      id: 17,
      name: "Windshield Wipers",
      category: "Auto Parts",
      description: "Durable wipers for clear visibility in all weather",
      price: "$19.99"
    },
    {
      id: 18,
      name: "Radiator",
      category: "Auto Parts",
      description: "Heavy-duty radiator for optimal engine cooling",
      price: "$279.99"
    },
    {
      id: 19,
      name: "Fuel Pump",
      category: "Auto Parts",
      description: "Efficient fuel pump for smooth fuel delivery",
      price: "$159.99"
    },
    {
      id: 20,
      name: "Exhaust System",
      category: "Auto Parts",
      description: "High-flow exhaust system for better engine performance",
      price: "$499.99"
    },
    {
      id: 21,
      name: "Cabin Air Filter",
      category: "Auto Parts",
      description: "Premium cabin air filter for clean interior air",
      price: "$14.99"
    },

    // Body Parts (Total: 3)
    {
      id: 22,
      name: "Front Bumper",
      category: "Body Parts",
      description: "Impact-resistant front bumper for added protection",
      price: "$349.99"
    },
    {
      id: 23,
      name: "Side Mirror",
      category: "Body Parts",
      description: "Adjustable side mirror with heated option",
      price: "$79.99"
    },
    {
      id: 24,
      name: "Hood",
      category: "Body Parts",
      description: "Lightweight hood with aerodynamic design",
      price: "$699.99"
    },

    // Interior Accessories (Total: 4)
    {
      id: 25,
      name: "Seat Covers",
      category: "Interior Accessories",
      description: "Custom-fit seat covers for protection and style",
      price: "$99.99"
    },
    {
      id: 26,
      name: "Steering Wheel Cover",
      category: "Interior Accessories",
      description: "Comfortable grip steering wheel cover",
      price: "$24.99"
    },
    {
      id: 27,
      name: "Floor Mats",
      category: "Interior Accessories",
      description: "All-weather floor mats for interior protection",
      price: "$49.99"
    },
    {
      id: 28,
      name: "Dashboard Camera",
      category: "Interior Accessories",
      description: "Full HD dash cam for security and recording",
      price: "$129.99"
    },

    // Exterior Accessories (Total: 3)
    {
      id: 29,
      name: "Car Cover",
      category: "Exterior Accessories",
      description: "Weatherproof car cover for protection",
      price: "$59.99"
    },
    {
      id: 30,
      name: "Roof Rack",
      category: "Exterior Accessories",
      description: "Durable roof rack for extra storage",
      price: "$299.99"
    },
    {
      id: 31,
      name: "Spoiler",
      category: "Exterior Accessories",
      description: "Aerodynamic rear spoiler for enhanced performance",
      price: "$199.99"
    }
  ];


  const filteredProducts = dummyProducts.filter(product => {
    const matchesCategory = !selectedCategory || product.category === selectedCategory;
    const matchesSearch = !searchQuery ||
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white">
      <div className="container mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Home
        </Link>
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-12 text-center">
            Our <span className="text-red-600">Products</span>
          </h1>

          {/* Search and Filter Section */}
          <div className="mb-12 space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-slate-800 text-white px-4 py-2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-3">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`
                  flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                  transition-all duration-200 
                  ${!selectedCategory
                    ? 'bg-red-600 text-white'
                    : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}
                `}
              >
                All
              </button>
              {dummyCategories.map((category) => (
                <button
                  key={category.name}
                  onClick={() => setSelectedCategory(category.name)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                    transition-all duration-200 
                    ${selectedCategory === category.name
                      ? 'bg-red-600 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}
                  `}
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={category.icon}
                    />
                  </svg>
                  <span>{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-slate-800 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-48 bg-slate-700 flex items-center justify-center group relative overflow-hidden">
                  <svg
                    className="w-16 h-16 text-slate-500 group-hover:scale-110 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-semibold text-white">{product.name}</h3>
                    <span className="text-red-500 font-bold">{product.price}</span>
                  </div>
                  <p className="text-gray-400 mb-4 text-sm">{product.description}</p>
                  <Link
                    href={`/products/${product.name}`}
                    className="w-full bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors inline-block text-center"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="text-center text-gray-400 py-12">
              <svg
                className="w-16 h-16 mx-auto mb-4 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-lg">No products found matching your criteria</p>
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery('');
                }}
                className="mt-4 text-red-500 hover:text-red-400"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
