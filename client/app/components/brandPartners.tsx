'use client';
import React from 'react';

function App() {
  const partners = [
    { name: 'qmax', image: '/assets/qmax.png' },
    { name: 'imax', image: '/assets/imax.png' },
    { name: 'dumax', image: '/assets/dumax.png' },
    { name: 'dupond', image: '/assets/DUPOND.png' },
    { name: 'flash cars', image: '/assets/partner5.png' },
    { name: 'qmax', image: '/assets/qmax.png' },
    { name: 'imax', image: '/assets/imax.png' },
    { name: 'dumax', image: '/assets/dumax.png' },
    { name: 'dupond', image: '/assets/DUPOND.png' },
    { name: 'flash cars', image: '/assets/partner5.png' },
  ];

  return (
    <div className="h-auto bg-black">
      <section className="relative py-12 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-red-900/40 to-black/90" />
        
        <div className="relative mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-white mb-2">
              Our <span className="text-red-500">Brand Partners</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm">
              We collaborate with industry-leading brands to deliver exceptional quality and innovation
            </p>
          </div>

          {/* Sliding Partners Container */}
          <div className="relative w-full overflow-hidden">
            <div className="flex animate-[slide_25s_linear_infinite] hover:[animation-play-state:paused]">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-none w-[200px] mx-3"
                >
                  <div className="group bg-gradient-to-br from-gray-900 to-black p-4 rounded-lg border border-gray-800 hover:border-red-500/50 transition-all duration-300">
                    <div className="relative flex flex-col items-center justify-center">
                      <div className="w-full h-24 relative mb-2 group-hover:scale-105 transition-transform duration-300">
                        <img
                          src={partner.image}
                          alt={partner.name}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = '/images/partners/fallback.png';
                          }}
                        />
                      </div>
                      <h3 className="text-white text-sm font-semibold text-center group-hover:text-red-500 transition-colors duration-300 capitalize">
                        {partner.name}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;