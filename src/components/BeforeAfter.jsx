import React, { useState } from 'react';

export default function BeforeAfterGallery() {
  const images = [
    'b15.jpg',
    'bucha11.webp',
    'b16.jpg',
  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-black via-blue-950 to-slate-900 min-h-screen relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-800 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header with glassmorphism effect */}
        <div className="text-center mb-16 backdrop-blur-sm bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
          <h2 className="text-6xl font-black bg-gradient-to-r from-blue-400 via-sky-400 to-blue-300 bg-clip-text text-transparent mb-4">
            BEFORE & AFTER
          </h2>
          <p className="text-xl text-gray-300 font-light">
            Witness the incredible transformations
          </p>
          <div className="mt-6 w-24 h-1 bg-gradient-to-r from-blue-400 to-sky-400 mx-auto rounded-full"></div>
        </div>

        {/* Image grid with enhanced styling */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {images.map((src, idx) => (
            <div 
              key={idx} 
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card container with glassmorphism */}
              <div className="relative backdrop-blur-md bg-white/10 rounded-3xl p-6 border border-white/20 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-purple-500/25">
                
                {/* Animated border gradient */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                
                {/* Label with dynamic styling */}
                <div className="text-center mb-6">
                  <span className={`inline-block px-6 py-3 text-lg font-bold rounded-full transition-all duration-300 ${
                    hoveredIndex === idx 
                      ? 'bg-gradient-to-r from-blue-600 to-sky-500 text-white shadow-lg transform scale-110' 
                      : 'bg-white/20 text-gray-200 border border-white/30'
                  }`}>
                    Transformation #{idx + 1}
                  </span>
                </div>

                {/* Image container with advanced effects */}
                <div className="relative overflow-hidden rounded-2xl group-hover:rounded-3xl transition-all duration-500">
                  <img
                    src={src}
                    alt={`Transformation example ${idx + 1}`}
                    className="w-auto max-w-full h-auto transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Overlay effects */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Shimmer effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000"></div>
                  
                  {/* Floating elements */}
                  <div className={`absolute top-4 right-4 w-3 h-3 bg-purple-400 rounded-full transition-all duration-500 ${
                    hoveredIndex === idx ? 'animate-ping' : ''
                  }`}></div>
                  <div className={`absolute bottom-4 left-4 w-2 h-2 bg-pink-400 rounded-full transition-all duration-700 ${
                    hoveredIndex === idx ? 'animate-pulse' : ''
                  }`}></div>
                </div>

                {/* Bottom accent line */}
                <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating number badge */}
              <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg transform transition-all duration-300 group-hover:scale-125 group-hover:rotate-12">
                {idx + 1}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-20">
          <div className="inline-block backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
            <p className="text-gray-300 mb-4">Ready for your transformation?</p>
            <a 
              href="https://api.whatsapp.com/send?phone=923336194850"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-sky-500 text-white font-bold rounded-full hover:shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}