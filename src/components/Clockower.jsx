import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaClock, 
  FaBuilding, 
  FaHome, 
  FaGavel,
  FaUsers,
  FaCalendarAlt,
  FaDirections,
  FaLandmark
} from 'react-icons/fa';

const FaisalabadLocations = () => {
  const [activeLocation, setActiveLocation] = useState('court');

  const locations = [
    {
      id: 'court',
      title: 'Court Time Office',
      type: 'Primary Office',
      address: 'Basement, Chamber No. 49/50, Sufi Barkat Ali Law Building',
      area: 'District Courts, Faisalabad',
      phone: '041-2642291',
      mobile: '0303-6677291, 041-2642291, 041-8712291',
      email: 'faysalghazi@outlook.com',
      hours: '9:00 AM - 5:00 PM',
      services: ['Litigation', 'Court Representation', 'Legal Consultations'],
      icon: FaGavel
    },
    {
      id: 'evening',
      title: 'Evening Office',
      type: 'Consultation Office',
      address: 'Plot No. 61, Block "C", Tech Town',
      area: 'Satyana Road, Faisalabad',
      phone: '041-8712291',
      mobile: '0303-6677291 ,041-2642291, 041-8712291',
      email: 'faysalghazi@google.co',
      hours: '6:00 PM - 9:00 PM',
      services: ['Private Consultations', 'Documentation', 'Client Meetings'],
      icon: FaHome
    }
  ];

  const faisalabadInfo = {
    population: '3.2 Million',
    area: '5,856 km²',
    established: '1895',
    nickname: 'Manchester of Pakistan',
    industries: ['Textiles', 'Agriculture', 'Manufacturing'],
    courts: ['District Courts', 'Sessions Court', 'High Court Bench']
  };

  const currentLocation = locations.find(loc => loc.id === activeLocation);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-orange-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 p-6">
        <div className="max-w-7xl mx-auto">
          
          {/* Hero Section with Clock Tower */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent mb-4">
              FAISALABAD
            </h1>
            <h2 className="text-2xl md:text-3xl text-white font-semibold mb-8">
              Manchester of Pakistan
            </h2>
            
            {/* Clock Tower Image Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="relative max-w-4xl mx-auto mb-12"
            >
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-orange-500/30">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent rounded-2xl"></div>
                
                {/* Clock Tower Image - Large prominent image */}
                <div className="relative rounded-xl overflow-hidden border-2 border-orange-500/40 shadow-2xl">
                  <img 
                    src="clock.jpeg" 
                    alt="Faisalabad Clock Tower" 
                    className="w-full h-80 md:h-96 object-cover"
                  />
                  
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                  
                  {/* Image Caption */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">Faisalabad Clock Tower</h3>
                    <p className="text-orange-300 drop-shadow-md">Historic landmark since 1905 - Heart of the city</p>
                  </div>
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute top-4 left-4 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
                </div>
                
                <p className="text-gray-300 text-lg mt-6 leading-relaxed">
                  Serving the legal community in Pakistan's industrial heart for over two decades
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* City Information Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16"
          >
            {Object.entries(faisalabadInfo).map(([key, value], index) => (
              <motion.div
                key={key}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border border-orange-500/20 rounded-xl p-4 text-center hover:border-orange-500/40 transition-all duration-300"
              >
                <div className="text-orange-400 font-bold text-lg mb-1">
                  {Array.isArray(value) ? value.length + '+' : value}
                </div>
                <div className="text-gray-300 text-sm capitalize">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Office Locations */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-4xl font-bold text-center mb-12 text-orange-400"
            >
              Our Strategic Locations
            </motion.h2>

            {/* Location Toggle */}
            <div className="flex justify-center mb-8">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-full p-2 border border-orange-500/30">
                {locations.map((location) => {
                  const Icon = location.icon;
                  return (
                    <motion.button
                      key={location.id}
                      onClick={() => setActiveLocation(location.id)}
                      className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                        activeLocation === location.id
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                      }`}
                      whileHover={{ scale: 1.05 }}
                    >
                      <Icon className="text-lg" />
                      <span>{location.title}</span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Location Details */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeLocation}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    
                    {/* Left Column - Contact Info */}
                    <div>
                      <div className="flex items-center mb-6">
                        <currentLocation.icon className="text-orange-400 text-3xl mr-4" />
                        <div>
                          <h3 className="text-2xl font-bold text-white">{currentLocation.title}</h3>
                          <span className="text-orange-300 font-medium">{currentLocation.type}</span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <FaMapMarkerAlt className="text-orange-400 text-lg mt-1" />
                          <div>
                            <p className="text-white font-medium">{currentLocation.address}</p>
                            <p className="text-gray-300">{currentLocation.area}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <FaPhone className="text-orange-400 text-lg" />
                          <div>
                            <p className="text-white">PTCL: {currentLocation.phone}</p>
                            <p className="text-gray-300">Mobile: {currentLocation.mobile}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-3">
                          <FaEnvelope className="text-orange-400 text-lg" />
                          <p className="text-white">{currentLocation.email}</p>
                        </div>

                        <div className="flex items-center space-x-3">
                          <FaClock className="text-orange-400 text-lg" />
                          <p className="text-white">{currentLocation.hours}</p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Services */}
                    <div>
                      <h4 className="text-xl font-bold text-orange-400 mb-4 flex items-center">
                        <FaUsers className="mr-2" />
                        Available Services
                      </h4>
                      <div className="space-y-3">
                        {currentLocation.services.map((service, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center space-x-3 p-3 bg-orange-500/10 rounded-lg border border-orange-500/20"
                          >
                            <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                            <span className="text-white font-medium">{service}</span>
                          </motion.div>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-4 mt-6">
                        <motion.a
                          href="https://share.google/I67upw9HH9xoguMXi"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                        >
                          <FaDirections />
                          <span>Get Directions</span>
                        </motion.a>
                        
                        <motion.a
                          href="https://wa.me/923216677291"
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                          className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                        >
                          <FaCalendarAlt />
                          <span>Schedule via WhatsApp</span>
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-center bg-gradient-to-r from-gray-900/80 via-black to-gray-900/80 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-orange-400 mb-4">
              Serving Faisalabad's Legal Community
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
              Strategically located in the heart of Pakistan's industrial capital, Muhammad Ali Law Associates 
              has been providing exceptional legal services to the Faisalabad community for over 22 years. 
              From the historic Clock Tower to modern business districts, we serve clients across all sectors.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default FaisalabadLocations;