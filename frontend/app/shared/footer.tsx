export default function Footer() {
  const socialLinks = [
    { icon: "fa-facebook", url: "#" },
    { icon: "fa-twitter", url: "#" },
    { icon: "fa-instagram", url: "#" },
    { icon: "fa-linkedin", url: "#" }
  ]

  return (
    <footer className="bg-gray-800 text-white pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">HARFA TRADING</h3>
            <p className="text-gray-400">Your trusted partner in automotive parts</p>
          </div>
          <div className="flex gap-6">
            {socialLinks.map((link, index) => (
              <a 
                key={index}
                href={link.url} 
                className="text-2xl hover:text-blue-500 transition-colors"
              >
                <i className={`fab ${link.icon}`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="text-center pt-8 border-t border-gray-700">
          <p className="text-gray-400">&copy; 2024 Harfa Trading. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 