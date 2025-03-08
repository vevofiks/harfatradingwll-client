export default function Contact() {
  const contactInfo = [
    { icon: "fa-map-marker-alt", text: "123 Auto Parts Street, City, Country" },
    { icon: "fa-phone", text: "+1 234 567 890" },
    { icon: "fa-envelope", text: "info@harfatrading.com" }
  ]

  return (
    <section id="contact" className="py-20 bg-[#f8fafc]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#1e293b] mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-4">
                <i className={`fas ${info.icon} text-[#dc2626]`}></i>
                <p className="text-[#475569]">{info.text}</p>
              </div>
            ))}
          </div>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#dc2626]"
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-[#dc2626]"
            />
            <textarea 
              placeholder="Your Message" 
              required 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg h-32 resize-none focus:outline-none focus:border-[#dc2626]"
            ></textarea>
            <button 
              type="submit" 
              className="w-full bg-[#dc2626] hover:bg-[#b91c1c] text-white py-2 rounded-lg transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
} 