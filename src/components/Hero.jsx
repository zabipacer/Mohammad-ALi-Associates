import React, { useState, useEffect } from 'react';
import { MessageCircle, Scale, Shield, Globe, Clock, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

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
      <div className="hidden">
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

      <section className="relative min-h-screen pt-20 md:pt-40 flex items-center justify-center overflow-hidden bg-black">
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

        {/* Grid Pattern */}
        <div className="absolute inset-0 z-10 opacity-5">
          <div className="grid grid-cols-12 gap-px h-full">
            {[...Array(144)].map((_, i) => (
              <div key={i} className="bg-white/20 border-r border-white/10" />
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-30 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8 md:mb-16">
            {/* Logo / Brand */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-6 md:mb-8"
            >
              <div className="flex items-center justify-center mb-4 md:mb-6">
                <div className="p-3 md:p-4 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full shadow-2xl">
                  <Scale className="h-6 w-6 md:h-8 md:w-8 text-white" />
                </div>
              </div>
              <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-wide">
                Mohammad Ali Law ASSOCIATES
              </h1>
              <div className="w-24 md:w-32 h-0.5 bg-gradient-to-r from-transparent via-amber-600 to-transparent mx-auto"></div>
              <p className="text-amber-600 text-xs md:text-sm font-medium mt-2 tracking-widest">LEGAL CONSULTANTS</p>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight"
            >
              Trusted Legal Experts
              <span className="block text-amber-600 mt-1 md:mt-2">in Faisalabad</span>
            </motion.h2>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-2xl text-gray-300 mb-6 md:mb-8 font-light leading-relaxed"
            >
              Professional Legal Services for Overseas Pakistanis
            </motion.p>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-8 md:mb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-4xl mx-auto">
                <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <Globe className="h-6 w-6 md:h-8 md:w-8 text-amber-600 mb-2 md:mb-3" />
                  <h3 className="text-white font-semibold mb-1 md:mb-2 text-sm md:text-base">Global Reach</h3>
                  <p className="text-gray-400 text-xs md:text-sm">Serving Overseas Pakistanis Worldwide</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <MessageCircle className="h-6 w-6 md:h-8 md:w-8 text-amber-600 mb-2 md:mb-3" />
                  <h3 className="text-white font-semibold mb-1 md:mb-2 text-sm md:text-base">Online Consultations</h3>
                  <p className="text-gray-400 text-xs md:text-sm">Secure Digital Legal Meetings</p>
                </div>
                <div className="flex flex-col items-center text-center p-4 md:p-6 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                  <Clock className="h-6 w-6 md:h-8 md:w-8 text-amber-600 mb-2 md:mb-3" />
                  <h3 className="text-white font-semibold mb-1 md:mb-2 text-sm md:text-base">24/7 Support</h3>
                  <p className="text-gray-400 text-xs md:text-sm">Round-the-Clock Legal Assistance</p>
                </div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mb-8 md:mb-16"
            >
              <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center items-center">
                <button
                  onClick={handleWhatsAppClick}
                  className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold text-white bg-green-600 hover:bg-green-700 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-green-600/25 w-full md:w-auto"
                >
                  <MessageCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
                  Get Legal Consultation
                </button>
                <button
                  onClick={handleCallClick}
                  className="group relative inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-semibold text-white bg-amber-600 hover:bg-amber-700 rounded-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-amber-600/25 w-full md:w-auto"
                >
                  <Phone className="h-4 w-4 md:h-5 md:w-5 mr-2 md:mr-3" />
                  Emergency Help
                </button>
              </div>
            </motion.div>
          </div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="border-t border-white/10 pt-6 md:pt-8"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-amber-600/20 rounded-full mb-2 md:mb-3">
                  <Shield className="h-5 w-5 md:h-6 md:w-6 text-amber-600" />
                </div>
                <p className="text-white font-semibold text-base md:text-lg">22+</p>
                <p className="text-gray-400 text-xs md:text-sm">Satisfied Clients</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-amber-600/20 rounded-full mb-2 md:mb-3">
                  <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-amber-600" />
                </div>
                <p className="text-white font-semibold text-base md:text-lg">22+</p>
                <p className="text-gray-400 text-xs md:text-sm">Years Experience</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-amber-600/20 rounded-full mb-2 md:mb-3">
                  <Scale className="h-5 w-5 md:h-6 md:w-6 text-amber-600" />
                </div>
                <p className="text-white font-semibold text-base md:text-lg">Licensed</p>
                <p className="text-gray-400 text-xs md:text-sm">Pakistani Lawyers</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center w-10 h-10 md:w-12 md:h-12 bg-amber-600/20 rounded-full mb-2 md:mb-3">
                  <Globe className="h-5 w-5 md:h-6 md:w-6 text-amber-600" />
                </div>
                <p className="text-white font-semibold text-base md:text-lg">Global</p>
                <p className="text-gray-400 text-xs md:text-sm">Service Coverage</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Contact Bar */}
        <div className="absolute bottom-0 left-0 right-0 bg-black/90 backdrop-blur-sm border-t border-white/10 z-30">
          <div className="max-w-6xl mx-auto px-4 py-3 md:py-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-xs md:text-sm text-gray-300 space-y-2 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <div className="flex items-center">
                  <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 text-amber-600" />
                  <span>0321-6677291</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 text-amber-600" />
                  <span>faysalghazi@outlook.com</span>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 text-amber-600" />
                <span className="text-center">Serving Clients Worldwide from Pakistan</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;