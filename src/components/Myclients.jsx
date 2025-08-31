import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUniversity, FaBuilding, FaMobile, FaShoppingCart, FaIndustry, FaTruck, FaShieldAlt, FaStar, FaGlobe, FaCrown } from 'react-icons/fa';

const ClientShowcase = () => {
  const [activeSection, setActiveSection] = useState('banking');

  const bankingClients = [
    { name: "State Bank of Pakistan", icon: FaUniversity, type: "Central Bank", tier: "premium", color: "from-yellow-400 to-orange-500" },
    { name: "National Bank of Pakistan", icon: FaUniversity, type: "Commercial Bank", tier: "premium", color: "from-green-400 to-blue-500" },
    { name: "Summit Bank Limited", icon: FaUniversity, type: "Commercial Bank", tier: "standard", color: "from-purple-400 to-pink-500" },
    { name: "Meezan Bank Limited", icon: FaShieldAlt, type: "Islamic Bank", tier: "premium", color: "from-emerald-400 to-cyan-500" },
    { name: "Bank Alfalah Limited", icon: FaUniversity, type: "Commercial Bank", tier: "standard", color: "from-blue-400 to-purple-500" },
    { name: "MCB Bank Limited", icon: FaUniversity, type: "Commercial Bank", tier: "premium", color: "from-red-400 to-orange-500" },
    { name: "JS Bank Limited", icon: FaUniversity, type: "Commercial Bank", tier: "standard", color: "from-indigo-400 to-blue-500" },
    { name: "Bank Islami Pakistan Limited", icon: FaShieldAlt, type: "Islamic Bank", tier: "standard", color: "from-teal-400 to-green-500" },
    { name: "Bank Makramah Limited", icon: FaShieldAlt, type: "Islamic Bank", tier: "standard", color: "from-pink-400 to-red-500" },
    { name: "Bank of Punjab", icon: FaUniversity, type: "Provincial Bank", tier: "premium", color: "from-orange-400 to-red-500" }
  ];

  const corporateClients = [
    { name: "Pakistan Mobile Communications Limited", icon: FaMobile, type: "Telecommunications", tier: "premium", color: "from-cyan-400 to-blue-500" },
    { name: "Pak Telecom Mobile Limited", icon: FaMobile, type: "Telecommunications", tier: "premium", color: "from-green-400 to-teal-500" },
    { name: "Metro Pakistan", icon: FaShoppingCart, type: "Retail", tier: "standard", color: "from-yellow-400 to-orange-500" },
    { name: "Bata Pakistan", icon: FaShoppingCart, type: "Footwear", tier: "premium", color: "from-red-400 to-pink-500" },
    { name: "Qarshi Industries (Private) Limited", icon: FaIndustry, type: "Pharmaceuticals", tier: "standard", color: "from-purple-400 to-indigo-500" },
    { name: "TCS (Private) Limited", icon: FaTruck, type: "Logistics", tier: "premium", color: "from-emerald-400 to-green-500" },
    { name: "M&P (Private) Limited", icon: FaBuilding, type: "Corporate", tier: "standard", color: "from-orange-400 to-red-500" }
  ];

  const currentClients = activeSection === 'banking' ? bankingClients : corporateClients;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0, rotateX: -15 },
    visible: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const ClientCard = ({ client, index }) => {
    const IconComponent = client.icon;
    const isPremium = client.tier === 'premium';
    
    return (
      <motion.div
        variants={itemVariants}
        whileHover={{ 
          scale: 1.02,
          y: -5,
        }}
        className={`relative group cursor-pointer ${
          isPremium 
            ? 'bg-gradient-to-b from-gray-800/95 to-gray-900/95 border border-orange-500/40' 
            : 'bg-gradient-to-b from-gray-900/90 to-black/90 border border-orange-500/20'
        } rounded-xl p-6 backdrop-blur-sm hover:border-orange-500/60 transition-all duration-300 shadow-xl hover:shadow-2xl`}
      >
        {/* Subtle Background Accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>

        {/* Premium Indicator */}
        {isPremium && (
          <div className="absolute top-4 right-4">
            <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"></div>
          </div>
        )}

        <div className="relative z-10">
          <div className="flex items-start space-x-4">
            <div className="bg-orange-500/15 p-3 rounded-lg group-hover:bg-orange-500/25 transition-all duration-300 border border-orange-500/20">
              <IconComponent className="text-orange-400 text-2xl" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-white font-semibold text-lg mb-2 leading-tight">
                {client.name}
              </h3>
              <span className="inline-block bg-orange-500/20 text-orange-300 text-sm px-3 py-1 rounded-md border border-orange-500/30 font-medium">
                {client.type}
              </span>
            </div>
          </div>

          {/* Professional Status */}
          <div className="mt-4 pt-4 border-t border-gray-700/50">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">
                {isPremium ? 'Strategic Partner' : 'Trusted Client'}
              </span>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-green-400 text-xs font-medium">Active</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-conic from-orange-500/5 via-transparent to-orange-500/5 rounded-full blur-3xl animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-20 relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-10"
            >
              <FaGlobe className="text-orange-500/20 text-6xl" />
            </motion.div>

            <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-6 tracking-tight">
              OUR ELITE
            </h1>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              CLIENTELE
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-8"></div>
            <p className="text-gray-300 text-xl max-w-4xl mx-auto leading-relaxed">
              Trusted by Pakistan's most prestigious institutions for over two decades
            </p>
          </motion.div>

          {/* Section Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center mb-16"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-full p-2 border border-orange-500/30">
              {[
                { id: 'banking', label: 'Banking Sector', icon: FaUniversity },
                { id: 'corporate', label: 'Corporate Clients', icon: FaBuilding }
              ].map(({ id, label, icon: Icon }) => (
                <motion.button
                  key={id}
                  onClick={() => setActiveSection(id)}
                  className={`flex items-center space-x-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                    activeSection === id
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="text-lg" />
                  <span>{label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Client Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-20"
            >
              {currentClients.map((client, index) => (
                <ClientCard key={`${activeSection}-${index}`} client={client} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Stats Dashboard */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-r from-gray-900/80 via-black to-gray-900/80 backdrop-blur-sm border border-orange-500/30 rounded-3xl p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold text-center text-orange-400 mb-8">Partnership Excellence</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {[
                  { value: "22+", label: "Years Experience", icon: FaCrown },
                  { value: bankingClients.length, label: "Banking Partners", icon: FaUniversity },
                  { value: corporateClients.length, label: "Corporate Clients", icon: FaBuilding },
                  { value: "100%", label: "Satisfaction Rate", icon: FaStar }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, rotateY: 10 }}
                    className="text-center group"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="text-orange-400 text-4xl mb-4 mx-auto"
                    >
                      <stat.icon />
                    </motion.div>
                    <div className="text-4xl font-black text-white mb-2 group-hover:text-orange-400 transition-colors">
                      {stat.value}
                    </div>
                    <p className="text-gray-400 font-medium">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientShowcase;