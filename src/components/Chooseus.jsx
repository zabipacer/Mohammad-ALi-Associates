import React, { useState, useEffect, useRef } from 'react';
import { 
  Scale, 
  Globe, 
  Shield, 
  CheckCircle, 
  Star, 
  Video, 
  FileText, 
  Lock, 
  Award, 
  Users, 
  Clock, 
  ArrowRight,
  ArrowUp,
  Building2,
  Briefcase,
  Phone
} from 'lucide-react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [expandedCards, setExpandedCards] = useState({});
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const toggleCard = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const features = [
    {
      icon: Scale,
      title: "⚖️ 22+ Years of Legal Excellence",
      subtitle: "Experienced Advocacy Since 2002",
      description: "Founded and led by Ch. Muhammad Faysal Ghazi, Advocate High Court, our firm has established itself as a reliable legal institution with over 22 years of consistent success in litigation and consultancy.",
      expandedDescription: "Our firm serves prestigious clients including State Bank of Pakistan, National Bank of Pakistan, Summit Bank Limited, Meezan Bank Limited, and major corporations like Pakistan Mobile Communications Limited. We have a proven track record in complex civil, banking, corporate, and criminal law cases with unmatched integrity and professionalism.",
      highlights: [
        "22+ Years Legal Practice",
        "High Court Advocacy",
        "Trusted by Major Banks",
        "Corporate Legal Excellence"
      ],
      expandedHighlights: [
        "Founded by Ch. Muhammad Faysal Ghazi",
        "Advocate High Court certification",
        "Clients: SBP, NBP, Summit Bank, Meezan Bank",
        "Pakistan Mobile Communications Limited",
        "Qarshi Industries & TCS representation",
        "Complex litigation expertise"
      ],
      color: "amber"
    },
    {
      icon: Building2,
      title: "🏢 Comprehensive Legal Services",
      subtitle: "Complete Legal Solutions Under One Roof",
      description: "We offer end-to-end legal services across Civil Law, Revenue Law, Banking & Finance, Anti-Corruption Cases, Labour & Employment, FIA & Cyber Crime, Criminal Law, and Corporate & Commercial matters.",
      expandedDescription: "Our practice areas include Civil Suits, Property Cases, Inheritance Disputes, Banking Court litigation, Anti-Corruption cases, Cyber Crime defense, Consumer Protection, Telecom Law, and Local Government matters. We handle everything from FIR registration to Supreme Court appeals, providing complete legal coverage for individuals and institutions.",
      highlights: [
        "Civil & Revenue Law",
        "Banking & Finance",
        "Criminal Defense",
        "Corporate Solutions"
      ],
      expandedHighlights: [
        "Property & Inheritance Cases",
        "Banking Court Litigation",
        "FIA & Cyber Crime Defense",
        "Anti-Corruption Representation",
        "Labour & Employment Law",
        "Consumer Protection Cases",
        "Telecom Regulatory Disputes",
        "Corporate Compliance & M&A"
      ],
      color: "blue"
    },
    {
      icon: Shield,
      title: "🔐 Ethical Practice & Confidentiality",
      subtitle: "Divine Justice & Professional Integrity",
      description: "Grounded in Islamic values and professional ethics, we maintain the highest standards of legal integrity, confidentiality, and dedication. Justice is not just our service — it is our divine mission.",
      expandedDescription: "Our firm operates on the principle that 'Allah commands you to render trusts to whom they are due and when you judge between people to judge with justice' (Surah An-Nisa 4:58). We serve clients not only as legal representatives but as trusted advisors, deeply invested in protecting their rights with complete confidentiality and transparency.",
      highlights: [
        "Islamic Values Foundation",
        "Complete Confidentiality",
        "Ethical Legal Practice",
        "Trusted Advisors"
      ],
      expandedHighlights: [
        "Quranic principles of justice",
        "Attorney-client privilege protection",
        "Transparent fee structure",
        "Honest legal assessments",
        "Client satisfaction guaranteed",
        "Principled legal advocacy"
      ],
      color: "green"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      amber: {
        border: 'border-amber-600/30 hover:border-amber-600/50',
        icon: 'text-amber-600',
        iconBg: 'bg-amber-600/20 group-hover:bg-amber-600/30',
        title: 'group-hover:text-amber-600',
        accent: 'text-amber-600'
      },
      blue: {
        border: 'border-blue-600/30 hover:border-blue-600/50',
        icon: 'text-blue-600',
        iconBg: 'bg-blue-600/20 group-hover:bg-blue-600/30',
        title: 'group-hover:text-blue-600',
        accent: 'text-blue-600'
      },
      green: {
        border: 'border-green-600/30 hover:border-green-600/50',
        icon: 'text-green-600',
        iconBg: 'bg-green-600/20 group-hover:bg-green-600/30',
        title: 'group-hover:text-green-600',
        accent: 'text-green-600'
      }
    };
    return colorMap[color] || colorMap.amber;
  };

  const additionalIcons = {
    amber: [Award, Users, Clock],
    blue: [Briefcase, FileText, Building2],
    green: [Lock, Shield, CheckCircle]
  };

  return (
    <div className="bg-black">
      <section 
        ref={sectionRef}
        className="py-12 md:py-20 relative overflow-hidden"
        id="why-choose-us"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-6 gap-px h-full">
            {[...Array(48)].map((_, i) => (
              <div key={i} className="bg-white/10 border-r border-white/5" />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div 
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-8 md:w-12 h-0.5 bg-amber-600 mr-2 md:mr-4"></div>
                <CheckCircle className="h-5 w-5 md:h-6 md:w-6 text-amber-600" />
                <div className="w-8 md:w-12 h-0.5 bg-amber-600 ml-2 md:ml-4"></div>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-2">
                Why Choose Muhammad Ali Law Associates
              </h2>
              <p className="text-gray-400 text-base sm:text-lg max-w-3xl mx-auto px-4">
                Your trusted legal partners in Faisalabad - combining Islamic values, professional excellence, and absolute confidentiality
              </p>
            </div>
          </div>

          {/* Main Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colors = getColorClasses(feature.color);
              const SecondaryIcons = additionalIcons[feature.color];
              const isExpanded = expandedCards[index];
              
              // Updated stock images for legal context
              const stockImages = [
                "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop", // Experienced lawyer in courtroom
                "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1000&auto=format&fit=crop", // Law office/legal services
                "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1000&auto=format&fit=crop"  // Security/confidentiality concept
              ];
              
              return (
                <div
                  key={index}
                  className={`group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl border ${colors.border} hover:shadow-2xl hover:shadow-amber-600/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${300 + index * 200}ms` }}
                >
                  {/* Feature Image */}
                  <div className="relative h-40 sm:h-48 overflow-hidden">
                    <img
                      src={stockImages[index]}
                      alt={feature.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                    
                    {/* Icon Overlay */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
                      <div className={`p-2 sm:p-3 ${colors.iconBg} rounded-xl backdrop-blur-sm transition-colors duration-300`}>
                        <Icon className={`h-5 w-5 sm:h-6 sm:w-6 ${colors.icon}`} />
                      </div>
                    </div>
                    
                    {/* Secondary Icons */}
                    <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 flex space-x-2">
                      {SecondaryIcons.map((SecIcon, i) => (
                        <div key={i} className="p-1 sm:p-2 bg-black/30 backdrop-blur-sm rounded-lg">
                          <SecIcon className="h-3 w-3 sm:h-4 sm:w-4 text-white/80" />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 sm:p-6 md:p-8">
                    {/* Title */}
                    <h3 className={`text-xl sm:text-2xl font-bold text-white mb-2 ${colors.title} transition-colors duration-300`}>
                      {feature.title}
                    </h3>
                    
                    {/* Subtitle */}
                    <p className={`${colors.accent} font-semibold text-sm sm:text-base mb-3 sm:mb-4`}>
                      {feature.subtitle}
                    </p>
                    
                    {/* Description */}
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6">
                      {isExpanded ? feature.expandedDescription : feature.description}
                    </p>
                    
                    {/* Highlights */}
                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {(isExpanded ? feature.expandedHighlights : feature.highlights).map((highlight, i) => (
                        <div key={i} className="flex items-center">
                          <div className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${colors.iconBg} mr-2 sm:mr-3`}></div>
                          <span className="text-gray-300 text-xs sm:text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                    
                    {/* Learn More Button */}
                    <button
                      onClick={() => toggleCard(index)}
                      className={`flex items-center ${colors.accent} hover:text-amber-400 font-medium text-sm sm:text-base transition-all duration-300 group-hover:translate-x-1`}
                    >
                      {isExpanded ? 'Show Less' : 'Learn More'}
                      {isExpanded ? (
                        <ArrowUp className="h-4 w-4 ml-2 transition-transform duration-300" />
                      ) : (
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300" />
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stats Section */}
          <div 
            className={`transition-all duration-1000 delay-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-r from-amber-600/20 to-amber-700/20 backdrop-blur-sm rounded-2xl border border-amber-600/30 p-6 sm:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
                <div className="group">
                  <div className="text-2xl sm:text-3xl font-bold text-amber-600 mb-2">22+</div>
                  <div className="text-white font-semibold text-sm sm:text-base mb-1">Years Experience</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Since 2002</div>
                </div>
                <div className="group">
                  <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-2">15+</div>
                  <div className="text-white font-semibold text-sm sm:text-base mb-1">Banking Clients</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Major Financial Institutions</div>
                </div>
                <div className="group">
                  <div className="text-2xl sm:text-3xl font-bold text-green-600 mb-2">24/7</div>
                  <div className="text-white font-semibold text-sm sm:text-base mb-1">Legal Support</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Always Available</div>
                </div>
                <div className="group">
                  <div className="text-2xl sm:text-3xl font-bold text-purple-600 mb-2">100%</div>
                  <div className="text-white font-semibold text-sm sm:text-base mb-1">Confidential</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Islamic Ethics</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div 
            className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-1200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-amber-600/30 p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Ready to Experience Professional Legal Excellence?
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-6 max-w-2xl mx-auto">
                Join our prestigious clients including State Bank of Pakistan, National Bank, and major corporations. 
                Get expert legal advice rooted in Islamic values with complete confidentiality.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={() => window.open('mailto:faysalghazi@outlook.com', '_blank')}
                  className="px-6 py-3 sm:px-8 sm:py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center text-sm sm:text-base"
                >
                  <Video className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Schedule Consultation
                </button>
                <button
                  onClick={() => window.open('tel:+923216677291', '_self')}
                  className="px-6 py-3 sm:px-8 sm:py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center text-sm sm:text-base"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5 mr-2" />
                  Call: 0321-6677291
                </button>
              </div>
              
              {/* Contact Info */}
              <div className="mt-6 text-gray-400 text-xs sm:text-sm">
                <p>Court Office: District Courts, Faisalabad | Evening Office: Tech Town, Satyana Road</p>
                <p>Email: faysalghazi@outlook.com | Phone: 041-2642291</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;