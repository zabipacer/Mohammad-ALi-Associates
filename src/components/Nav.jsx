import React, { useState, useEffect } from 'react';
import { Scale, Menu, X, ChevronDown, Phone, Mail, MessageCircle, Users, FileText, Shield, Clock, MapPin } from 'lucide-react';

const MuhammadAliNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { 
      name: 'Home', 
      href: '#home',
      current: true
    },
    { 
      name: 'About', 
      href: '#about',
      dropdown: [
        { name: 'Our Firm', href: '#firm', icon: Users },
        { name: 'Our Team', href: '#team', icon: Users },
        { name: 'Why Choose Us', href: '#why-choose', icon: Shield }
      ]
    },
    { 
      name: 'Legal Services', 
      href: '#services',
      dropdown: [
        { name: 'Civil Law', href: '#civil', icon: Scale },
        { name: 'Banking Law', href: '#banking', icon: FileText },
        { name: 'Criminal Law', href: '#criminal', icon: Shield },
        { name: 'Family Law', href: '#family', icon: Users },
        { name: 'Revenue Law', href: '#revenue', icon: MapPin },
        { name: 'Cyber Crime', href: '#cyber', icon: Shield }
      ]
    },
    { 
      name: 'Overseas Support', 
      href: '#overseas',
      dropdown: [
        { name: 'Online Consultations', href: '#online', icon: MessageCircle },
        { name: 'Remote Representation', href: '#remote', icon: Scale },
        { name: 'Document Services', href: '#documents', icon: FileText }
      ]
    },
    { 
      name: 'Contact', 
      href: '#contact'
    }
  ];

  const handleDropdownToggle = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/923216677291', '_blank');
  };

  const handleCallClick = () => {
    window.open('tel:+923216677291', '_self');
  };

  const handleEmailClick = () => {
    window.open('mailto:faysalghazi@outlook.com', '_blank');
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('nav')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (activeDropdown !== null && !event.target.closest('.dropdown-container')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [activeDropdown]);

  return (
    <>
      {/* Top Contact Bar */}
      <div className="bg-black border-b border-amber-600/20 hidden lg:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-2 text-sm">
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center">
                <Phone className="h-3 w-3 mr-2 text-amber-600" />
                <span>0321-6677291</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-3 w-3 mr-2 text-amber-600" />
                <span>faysalghazi@outlook.com</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-3 w-3 mr-2 text-amber-600" />
                <span>22+ Years Legal Experience</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center text-green-400 hover:text-green-300 transition-colors duration-200"
                aria-label="Contact via WhatsApp"
              >
                <MessageCircle className="h-4 w-4 mr-1" />
                <span>WhatsApp</span>
              </button>
              <div className="h-4 w-px bg-gray-600"></div>
              <span className="text-amber-600 font-medium">Faisalabad, Pakistan</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-black/95 backdrop-blur-md border-b border-amber-600/30 shadow-lg' 
            : 'bg-black/80 backdrop-blur-sm border-b border-white/10'
        }`}
        style={{ marginTop: isScrolled ? '0' : window.innerWidth >= 1024 ? '40px' : '0' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            
            {/* Logo */}
            <div className="flex items-center flex-shrink-0">
              <div className="flex items-center">
                <div className="p-2 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full shadow-lg">
                  <Scale className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                </div>
                <div className="ml-3">
                  <h1 className="text-sm sm:text-lg font-bold text-white tracking-wide">
                    Muhammad Ali Law Associates
                  </h1>
                  <p className="text-xs text-amber-600 font-medium tracking-widest hidden sm:block">
                    ADVOCATES & LEGAL CONSULTANTS
                  </p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navigationItems.map((item, index) => (
                <div key={item.name} className="relative dropdown-container">
                  <button
                    onClick={() => item.dropdown && handleDropdownToggle(index)}
                    className={`flex items-center px-3 lg:px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
                      item.current 
                        ? 'text-amber-600 bg-amber-600/10' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>

                  {/* Dropdown Menu */}
                  {item.dropdown && activeDropdown === index && (
                    <div className="absolute top-full left-0 mt-2 w-56 bg-black/95 backdrop-blur-md rounded-lg shadow-2xl border border-amber-600/20 py-2 z-50">
                      {item.dropdown.map((dropdownItem) => {
                        const Icon = dropdownItem.icon;
                        return (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center px-4 py-3 text-sm text-gray-300 hover:text-white hover:bg-amber-600/10 transition-colors duration-200"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <Icon className="h-4 w-4 mr-3 text-amber-600" />
                            {dropdownItem.name}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="hidden lg:flex items-center space-x-3">
              <button
                onClick={handleCallClick}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-md transition-all duration-200 shadow-lg hover:shadow-amber-600/25"
              >
                <Phone className="h-4 w-4 mr-2" />
                Call Now
              </button>
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center px-4 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-all duration-200 shadow-lg hover:shadow-green-600/25"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </button>
            </div>

            {/* Medium Screen CTA */}
            <div className="hidden md:flex lg:hidden items-center">
              <button
                onClick={handleWhatsAppClick}
                className="flex items-center px-3 py-2 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-all duration-200"
              >
                <MessageCircle className="h-4 w-4" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-md border-t border-amber-600/20">
            <div className="px-4 pt-4 pb-6 space-y-2 max-h-screen overflow-y-auto">
              
              {/* Mobile Contact Info */}
              <div className="pb-4 mb-4 border-b border-amber-600/20">
                <div className="flex items-center text-gray-300 mb-2">
                  <Phone className="h-4 w-4 mr-2 text-amber-600" />
                  <span className="text-sm">0321-6677291</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Mail className="h-4 w-4 mr-2 text-amber-600" />
                  <span className="text-sm">faysalghazi@outlook.com</span>
                </div>
              </div>

              {navigationItems.map((item, index) => (
                <div key={item.name}>
                  <button
                    onClick={() => item.dropdown && handleDropdownToggle(index)}
                    className={`w-full flex items-center justify-between px-3 py-3 text-sm font-medium rounded-md transition-all duration-200 ${
                      item.current 
                        ? 'text-amber-600 bg-amber-600/10' 
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                    {item.dropdown && (
                      <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                        activeDropdown === index ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>

                  {/* Mobile Dropdown */}
                  {item.dropdown && activeDropdown === index && (
                    <div className="ml-4 mt-2 space-y-1">
                      {item.dropdown.map((dropdownItem) => {
                        const Icon = dropdownItem.icon;
                        return (
                          <a
                            key={dropdownItem.name}
                            href={dropdownItem.href}
                            className="flex items-center px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-amber-600/10 rounded-md transition-colors duration-200"
                            onClick={() => {
                              setActiveDropdown(null);
                              setIsMobileMenuOpen(false);
                            }}
                          >
                            <Icon className="h-4 w-4 mr-3 text-amber-600" />
                            {dropdownItem.name}
                          </a>
                        );
                      })}
                    </div>
                  )}
                </div>
              ))}

              {/* Mobile CTA Buttons */}
              <div className="pt-4 border-t border-amber-600/20 space-y-3">
                <button
                  onClick={() => {
                    handleCallClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-amber-600 hover:bg-amber-700 rounded-md transition-all duration-200"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Call: 0321-6677291
                </button>
                <button
                  onClick={() => {
                    handleWhatsAppClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-green-600 hover:bg-green-700 rounded-md transition-all duration-200"
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp Consultation
                </button>
                <button
                  onClick={() => {
                    handleEmailClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center px-4 py-3 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md transition-all duration-200"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Email Us
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default MuhammadAliNavbar;