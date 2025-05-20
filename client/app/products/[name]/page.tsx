'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';

// You can replace these with actual product images later
const dummyImages = [
  '/placeholder1.jpg',
  '/placeholder2.jpg',
  '/placeholder3.jpg',
  '/placeholder4.jpg'
].map((_, index) => ({
  id: index,
  url: 'placeholder'
}));

export default function ProductDetail() {
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const [showWhatsAppForm, setShowWhatsAppForm] = useState(false);
  const [shopName, setShopName] = useState('');
  
  // Replace with your WhatsApp number
  const whatsappNumber = '+97433994217';
  const productName = decodeURIComponent(params.name as string);
  
  const handleWhatsAppEnquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shopName.trim()) return;
    
    const message = encodeURIComponent(
      `Hi, I'm from ${shopName}. I'm interested in the product: ${productName}`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
    setShowWhatsAppForm(false);
    setShopName('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1e293b] to-[#0f172a] text-white relative">
      {/* WhatsApp Form Modal */}
      {showWhatsAppForm && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-800 rounded-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold mb-4">Contact via WhatsApp</h3>
            <form onSubmit={handleWhatsAppEnquiry} className="space-y-4">
              <div>
                <label htmlFor="shopName" className="block text-sm text-gray-400 mb-1">
                  Please enter your shop name to continue
                </label>
                <input
                  type="text"
                  id="shopName"
                  value={shopName}
                  onChange={(e) => setShopName(e.target.value)}
                  className="w-full bg-slate-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  placeholder="Enter your shop name"
                  required
                />
              </div>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => setShowWhatsAppForm(false)}
                  className="flex-1 px-4 py-2 rounded-lg border border-gray-600 hover:bg-slate-700 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <svg 
                    className="w-5 h-5" 
                    fill="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
                  </svg>
                  Continue to WhatsApp
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <Link 
            href="/products" 
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
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Image Gallery Section */}
            <div className="space-y-4">
              <div className="bg-slate-800 rounded-xl overflow-hidden">
                <div className="aspect-w-4 aspect-h-3 bg-slate-700">
                  {/* Main Image */}
                  <div className="h-full flex items-center justify-center">
                    <svg 
                      className="w-32 h-32 text-slate-500"
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
                </div>
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {dummyImages.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(index)}
                    className={`
                      relative aspect-square rounded-lg overflow-hidden
                      ${selectedImage === index 
                        ? 'ring-2 ring-red-500' 
                        : 'hover:opacity-75'}
                    `}
                  >
                    <div className="absolute inset-0 bg-slate-700 flex items-center justify-center">
                      <svg 
                        className="w-8 h-8 text-slate-500"
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
                  </button>
                ))}
              </div>
            </div>

            {/* Product Details Section */}
            <div className="bg-slate-800 rounded-xl p-8">
              <h1 className="text-3xl font-bold mb-4">{productName}</h1>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-red-500">$XXX.XX</span>
                  <span className="bg-green-600/10 text-green-500 px-3 py-1 rounded-full text-sm">
                    In Stock
                  </span>
                </div>

                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">Product Description</h2>
                  <p className="text-gray-400">
                    Detailed product information will be loaded here. This section will contain
                    all the specifications and features of the product.
                  </p>
                  
                  <div className="border-t border-slate-700 pt-4">
                    <h3 className="text-lg font-semibold mb-2">Specifications:</h3>
                    <ul className="text-gray-400 space-y-2">
                      <li>• Specification 1</li>
                      <li>• Specification 2</li>
                      <li>• Specification 3</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setShowWhatsAppForm(true)}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
                  >
                    <svg 
                      className="w-5 h-5" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm.029 18.88c-1.161 0-2.305-.292-3.318-.844l-3.677.964.984-3.595c-.607-1.052-.927-2.246-.926-3.468.001-3.825 3.113-6.937 6.937-6.937 1.856.001 3.598.723 4.907 2.034 1.31 1.311 2.031 3.054 2.03 4.908-.001 3.825-3.113 6.938-6.937 6.938z"/>
                    </svg>
                    Enquire on WhatsApp
                  </button>
                  <button className="flex-1 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
