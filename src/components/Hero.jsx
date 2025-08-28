import React, { useState, useEffect } from 'react';
import { MessageCircle, Scale, Shield, Globe, Clock, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/03216677291', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:03216677291', '_self');
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <div style={{ display: 'none' }}>
        <h1>Baisoya Associates - Leading Legal Experts in Pakistan</h1>
        <meta
          name="description"
          content="Premier legal services for overseas Pakistanis. Expert lawyers providing online consultations, 24/7 support. Trusted law firm with proven track record."
        />
        <meta
          name="keywords"
          content="legal services Pakistan, overseas Pakistani lawyers, online legal consultation, WhatsApp legal help, Pakistani law firm, legal experts"
        />
      </div>

      <section
        className="relative min-h-screen pt-40 flex items-center justify-center overflow-hidden bg-black"
        role="banner"
        aria-label="Hero section for Baisoya Associates legal services"
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30 z-0"
        >
          <source src="law.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlays */}
   
        {/* Professional Grid Pattern */}
        <div className="absolute inset-0 z-25 opacity-5">
          <div className="grid grid-cols-12 gap-px h-full">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="bg-white/20 border-r border-white/10" />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            {/* Logo / Brand */}
            <div
              className={`mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full shadow-2xl">
                  <Scale className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-2 tracking-wide">
               Mohammad Ali Law ASSOCIATES
              </h1>
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto"></div>
              <p className="text-amber-600 text-sm font-medium mt-2 tracking-widest">LEGAL CONSULTANTS</p>
            </div>

            {/* Heading */}
            <h2
              className={`text-4xl md:text-6xl font-bold text-white mb-6 leading-tight transition-all duration-1000 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Trusted Legal Experts
              <span className="block text-amber-600 mt-2">in Faisalabad</span>
            </h2>

            {/* Tagline */}
            <p
              className={`text-xl md:text-2xl text-gray-300 mb-8 font-light leading-relaxed transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Professional Legal Services for Overseas Pakistanis
            </p>

            {/* Features */}
            <div
              className={`mb-12 transition-all duration-1000 delay-600 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <Globe className="h-8 w-8 text-amber-600 mb-3" />
                  <h3 className="text-white font-semibold mb-2">Global Reach</h3>
                  <p className="text-gray-400 text-sm">Serving Overseas Pakistanis Worldwide</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <MessageCircle className="h-8 w-8 text-amber-600 mb-3" />
                  <h3 className="text-white font-semibold mb-2">Online Consultations</h3>
                  <p className="text-gray-400 text-sm">Secure Digital Legal Meetings</p>
                </div>
                <div className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <Clock className="h-8 w-8 text-amber-600 mb-3" />
                  <h3 className="text-white font-semibold mb-2">24/7 Support</h3>
                  <p className="text-gray-400 text-sm">Round-the-Clock Legal Assistance</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div
              className={`mb-16 transition-all duration-1000 delay-800 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                <button
                  onClick={handleWhatsAppClick}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-600/25 min-w-[280px]"
                  aria-label="Get legal consultation via WhatsApp"
                >
                  <MessageCircle className="h-5 w-5 mr-3" />
                  Get Legal Consultation Now
                </button>
                <button
                  onClick={handleCallClick}
                  className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-600/25 min-w-[280px]"
                  aria-label="Call for immediate legal help"
                >
                  <Phone className="h-5 w-5 mr-3" />
                  Call for Emergency Help
                </button>
              </div>
            </div>
          </div>

          {/* Trust Indicators */}
          <div
            className={`border-t border-white/10 pt-8 transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-600/20 rounded-full mb-3">
                  <Shield className="h-6 w-6 text-amber-600" />
                </div>
                <p className="text-white font-semibold text-lg">1000+</p>
                <p className="text-gray-400 text-sm">Satisfied Clients</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-600/20 rounded-full mb-3">
                  <CheckCircle className="h-6 w-6 text-amber-600" />
                </div>
                <p className="text-white font-semibold text-lg">15+</p>
                <p className="text-gray-400 text-sm">Years Experience</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-600/20 rounded-full mb-3">
                  <Scale className="h-6 w-6 text-amber-600" />
                </div>
                <p className="text-white font-semibold text-lg">Licensed</p>
                <p className="text-gray-400 text-sm">Pakistani Lawyers</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-12 h-12 bg-amber-600/20 rounded-full mb-3">
                  <Globe className="h-6 w-6 text-amber-600" />
                </div>
                <p className="text-white font-semibold text-lg">Global</p>
                <p className="text-gray-400 text-sm">Service Coverage</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-white/10 z-30">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
              <div className="flex items-center space-x-6 mb-2 md:mb-0">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-amber-600" />
                  <span>0321-6677291</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-amber-600" />
                  <span>faysalghazi@outlook.com</span>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-amber-600" />
                <span>Serving Clients Worldwide from Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
