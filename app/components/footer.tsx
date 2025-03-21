import Image from 'next/image'

export default function Footer() {
  const socialLinks = [
    { icon: "fa-facebook", url: "#", label: "Facebook" },
    { icon: "fa-twitter", url: "#", label: "Twitter" },
    { icon: "fa-instagram", url: "#", label: "Instagram" },
    { icon: "fa-linkedin", url: "#", label: "LinkedIn" }
  ]

  const contactInfo = {
    email: "info@harfatrading.com",
    sales: "sales@harfatrading.com",
    phone: "+1 (234) 567-8900",
    address: "123 Trading Street, Business District"
  }

  return (
    <footer className="bg-gray-800 text-white pt-16">
      <div className="container mx-auto px-4 pb-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and About Section */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-48 h-24 mb-4">
              <Image
                src="/assets/logo1.png"
                alt="Harfa Trading Logo"
                fill
                style={{ objectFit: 'contain' }}
                className="brightness-0 invert" // Makes the logo white
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Your trusted partner in automotive parts, delivering quality and reliability since 2000.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Products</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Contact Us</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-blue-400"></i>
                <a href={`mailto:${contactInfo.email}`} className="text-gray-400 hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-envelope text-blue-400"></i>
                <a href={`mailto:${contactInfo.sales}`} className="text-gray-400 hover:text-white transition-colors">
                  {contactInfo.sales}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-phone text-blue-400"></i>
                <span className="text-gray-400">{contactInfo.phone}</span>
              </li>
              <li className="flex items-center gap-2">
                <i className="fas fa-map-marker-alt text-blue-400"></i>
                <span className="text-gray-400">{contactInfo.address}</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-blue-400">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  aria-label={link.label}
                  className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-blue-500 transition-colors"
                >
                  <i className={`fab ${link.icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Harfa Trading. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 