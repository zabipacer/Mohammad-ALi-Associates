import React, { useState, useEffect, useRef } from 'react';
import { 
  Quote, 
  Scale, 
  Users, 
  Home, 
  FileText, 
  Shield, 
  Heart, 
  AlertTriangle, 
  DollarSign, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  Building,
  CreditCard,
  UserCheck,
  Briefcase,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

const CEOMessageAndPracticeAreas = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [practiceVisible, setPracticeVisible] = useState(false);
  const [showFullMessage, setShowFullMessage] = useState(false);
  const [expandedArea, setExpandedArea] = useState(null);
  const sectionRef = useRef(null);
  const practiceRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (entry.target === sectionRef.current) {
            setIsVisible(true);
          }
          if (entry.target === practiceRef.current) {
            setPracticeVisible(true);
          }
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    if (practiceRef.current) observer.observe(practiceRef.current);

    return () => observer.disconnect();
  }, []);

  const practiceAreas = [
    {
      icon: Scale,
      title: "Civil Law",
      description: "Civil Suits, Property Cases, Inheritance Disputes, Contractual Conflicts, Family Cases, Minor's Custody Cases",
      fullDescription: "Comprehensive civil law services including civil suits, property cases, inheritance disputes, contractual conflicts, family cases, minor's custody cases, succession certificates, guardian certificates, and appeals before District Judge, Faisalabad.",
      color: "blue"
    },
    {
      icon: Home,
      title: "Revenue Law",
      description: "Appointment of Lamberdar, Inheritance Mutation, Partition of Agricultural Land",
      fullDescription: "Revenue law expertise covering appointment of Lamberdar, inheritance mutation, partition of agricultural land, and other revenue matters. Appeals before Revenue Assistant Commissioner, Deputy Commissioner, Additional Deputy Commissioner (Rev), Additional Commissioner (Rev), Commissioner Faisalabad and Member Board of Revenue Punjab.",
      color: "green"
    },
    {
      icon: CreditCard,
      title: "Banking & Finance Law",
      description: "Loan recovery litigation, criminal complaints, collateral disputes, mortgage issues",
      fullDescription: "Legal matters including loan recovery litigation, criminal complaints, collateral disputes, mortgage issues, and other cases under the Financial Institutions (Recovery of Finances) Ordinance, 2001. Handled by Banking Courts in Faisalabad with advocacy for criminal cases before Banking Crime Court in Lahore. Legal opinions, due diligence, and drafting services for banks.",
      color: "emerald"
    },
    {
      icon: Shield,
      title: "Anti-Corruption Cases",
      description: "Prevention of Corruption Act cases, fraud, financial irregularities, misuse of authority",
      fullDescription: "Advocacy in cases related to the Prevention of Corruption Act, 1947, including fraud, financial irregularities, and misuse of authority, before the Anti-Corruption Department Faisalabad, as well as representation as counsel before the Special Judge Anti-Corruption Faisalabad.",
      color: "red"
    },
    {
      icon: Users,
      title: "Labour & Employment Law",
      description: "Termination & Labor Disputes, Employment Contracts, Workplace Safety",
      fullDescription: "Comprehensive labor and employment law services covering termination and labor disputes, employment contracts, workplace safety, and industrial law matters with expert representation and consultation.",
      color: "amber"
    },
    {
      icon: Globe,
      title: "FIA & Cyber Crime Law",
      description: "Anti-Money Laundering cases, Copyright violations, Cybercrime, Human trafficking",
      fullDescription: "Specialized representation for offenses related to Anti-Money Laundering Act 2010, Copyright Ordinance 1962, computer systems and networks (cybercrime), human trafficking under Emigration Ordinance 1979, forgery, misrepresentation of documents, and deceptive financial practices.",
      color: "purple"
    },
    {
      icon: AlertTriangle,
      title: "Criminal Law",
      description: "Murder cases, Injury cases, Fraud cases, Abduction and Kidnapping cases",
      fullDescription: "Expert criminal law advocacy for writ petitions including FIR registration, harassment cases, habeas corpus petitions, and bail proceedings. Coverage includes murder cases, injury cases, fraud cases, abduction and kidnapping cases, Zina cases, and dishonoring of cheques under Section 489-F of Pakistan Penal Code.",
      color: "orange"
    },
    {
      icon: Building,
      title: "Corporate & Commercial Law",
      description: "Company Formation, Corporate Compliance, Business Dispute Resolution",
      fullDescription: "Complete corporate and commercial law services including company formation and corporate compliance, business dispute resolution, shareholder rights protection, mergers and acquisitions with strategic legal guidance.",
      color: "cyan"
    },
    {
      icon: FileText,
      title: "Consumer Protection & Telecom Law",
      description: "Consumer Court Cases, Telecom Regulatory Disputes",
      fullDescription: "Specialized services in consumer protection law with consumer court cases representation and telecom regulatory disputes resolution with expertise in telecommunications regulations.",
      color: "pink"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      red: 'border-red-500/30 hover:border-red-500/50 group-hover:text-red-400',
      pink: 'border-pink-500/30 hover:border-pink-500/50 group-hover:text-pink-400',
      green: 'border-green-500/30 hover:border-green-500/50 group-hover:text-green-400',
      blue: 'border-blue-500/30 hover:border-blue-500/50 group-hover:text-blue-400',
      purple: 'border-purple-500/30 hover:border-purple-500/50 group-hover:text-purple-400',
      amber: 'border-amber-500/30 hover:border-amber-500/50 group-hover:text-amber-400',
      orange: 'border-orange-500/30 hover:border-orange-500/50 group-hover:text-orange-400',
      emerald: 'border-emerald-500/30 hover:border-emerald-500/50 group-hover:text-emerald-400',
      cyan: 'border-cyan-500/30 hover:border-cyan-500/50 group-hover:text-cyan-400'
    };
    return colorMap[color] || colorMap.blue;
  };

  const shortMessage = "Welcome to Muhammad Ali Law Associates, Faisalabad. Founded and led by Ch. Muhammad Faysal Ghazi, Advocate High Court, our firm has established itself as a reliable legal institution in the region, with over 22 years of consistent success in litigation and consultancy.";

  const fullMessage = `At Muhammad Ali Law Associates, Faisalabad, justice is not just a service — it is our mission. Founded and led by Ch. Muhammad Faysal Ghazi, Advocate High Court, our firm has established itself as a reliable legal institution in the region, with over 22 years of consistent success in litigation and consultancy.

Our firm is grounded in the belief that justice is a divine command and a social necessity. We strive to uphold the highest standards of legal integrity, confidentiality, and dedication. We serve our clients not only as legal representatives but as trusted advisors, deeply invested in protecting their rights and interests.

With a strong ethical foundation, the firm is equipped with a competent, honest, and well-organized legal team capable of effectively representing both institutional and individual clients across diverse fields of law. We are honored to serve our clients with sincerity, loyalty, and strategic excellence.`;

  return (
    <div className="bg-black">
      {/* CEO's Message Section */}
      <section 
        ref={sectionRef}
        className="py-20 relative overflow-hidden"
        id="ceo-message"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-6 gap-px h-full">
            {[...Array(48)].map((_, i) => (
              <div 
                key={i} 
                className="bg-white/10 border-r border-white/5 animate-pulse" 
                style={{ animationDelay: `${i * 100}ms` }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div 
              className={`transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-0.5 bg-amber-600 mr-4 animate-pulse"></div>
                <Quote className="h-6 w-6 text-amber-600 animate-bounce" />
                <div className="w-12 h-0.5 bg-amber-600 ml-4 animate-pulse"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 hover:text-amber-400 transition-colors duration-300">
                Message from Our Founder
              </h2>
              <p className="text-gray-400 text-lg">
                Leadership with Integrity and Vision
              </p>
            </div>
          </div>

          {/* CEO Message Card */}
          <div 
            className={`max-w-5xl mx-auto transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-amber-600/20 p-8 md:p-12 shadow-2xl hover:shadow-amber-600/20 transition-all duration-500 hover:scale-[1.02]">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                
                {/* CEO Photo */}
                <div className="lg:col-span-1">
                  <div className="relative group">
                    <div className="w-48 h-48 mx-auto lg:w-full lg:h-64 rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-amber-600/30 transition-all duration-500">
                      <img
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop"
                        alt="Ch. Muhammad Faysal Ghazi - Advocate High Court"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>
                    
                    {/* CEO Badge */}
                    <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 lg:left-4 lg:transform-none animate-bounce">
                      <div className="bg-amber-600 rounded-full p-3 shadow-lg hover:bg-amber-500 transition-colors duration-300">
                        <Scale className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message Content */}
                <div className="lg:col-span-2">
                  <div className="relative">
                    <Quote className="absolute -top-4 -left-4 h-12 w-12 text-amber-600/30 animate-pulse" />
                    
                    <blockquote className="text-lg md:text-xl text-white leading-relaxed mb-8 relative z-10">
                      {showFullMessage ? fullMessage : shortMessage}
                    </blockquote>

                    {/* Learn More Button */}
                    <button
                      onClick={() => setShowFullMessage(!showFullMessage)}
                      className="inline-flex items-center px-4 py-2 bg-amber-600/20 hover:bg-amber-600/30 text-amber-600 border border-amber-600/30 rounded-lg transition-all duration-300 hover:scale-105 mb-6"
                    >
                      {showFullMessage ? 'Show Less' : 'Learn More'}
                      {showFullMessage ? 
                        <ChevronUp className="h-4 w-4 ml-2" /> : 
                        <ChevronDown className="h-4 w-4 ml-2" />
                      }
                    </button>

                    {/* CEO Details */}
                    <div className="border-t border-amber-600/20 pt-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="text-xl font-bold text-white mb-1 hover:text-amber-400 transition-colors duration-300">
                            Ch. Muhammad Faysal Ghazi
                          </h4>
                          <p className="text-amber-600 font-medium">
                            Senior Advocate High Court
                          </p>
                          <div className="flex items-center mt-2">
                            <div className="flex items-center mr-6">
                              <Star className="h-4 w-4 text-amber-600 mr-1 animate-pulse" />
                              <span className="text-gray-300 text-sm">22+ Years Experience</span>
                            </div>
                            <div className="flex items-center">
                              <CheckCircle className="h-4 w-4 text-green-400 mr-1" />
                              <span className="text-gray-300 text-sm">High Court Advocate</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Contact Info */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300">
                        <Phone className="h-4 w-4 mr-2" />
                        <span className="text-sm">0321-6677291</span>
                      </div>
                      <div className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300">
                        <Mail className="h-4 w-4 mr-2" />
                        <span className="text-sm">faysalghazi@outlook.com</span>
                      </div>
                      <div className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-300">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">Faisalabad</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section 
        ref={practiceRef}
        className="py-20 relative overflow-hidden"
        id="practice-areas"
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-px h-full">
            {[...Array(64)].map((_, i) => (
              <div 
                key={i} 
                className="bg-white/10 border-r border-white/5 animate-pulse" 
                style={{ animationDelay: `${i * 50}ms` }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-16">
            <div 
              className={`transition-all duration-1000 ${
                practiceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-0.5 bg-amber-600 mr-4 animate-pulse"></div>
                <Scale className="h-6 w-6 text-amber-600 animate-bounce" />
                <div className="w-12 h-0.5 bg-amber-600 ml-4 animate-pulse"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 hover:text-amber-400 transition-colors duration-300">
                Our Practice Areas
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Comprehensive legal services with over 22 years of excellence in litigation and consultancy
              </p>
            </div>
          </div>

          {/* Practice Areas Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {practiceAreas.map((area, index) => {
              const Icon = area.icon;
              const isExpanded = expandedArea === index;
              
              return (
                <div
                  key={index}
                  className={`group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl border ${getColorClasses(area.color)} p-6 hover:shadow-2xl hover:shadow-amber-600/10 transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${
                    practiceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-amber-600/20 rounded-lg group-hover:bg-amber-600/30 transition-all duration-300 group-hover:scale-110">
                      <Icon className={`h-6 w-6 text-amber-600 ${getColorClasses(area.color)} transition-transform duration-300 group-hover:rotate-12`} />
                    </div>
                    <h3 className="text-xl font-bold text-white ml-4 group-hover:text-amber-600 transition-colors duration-300">
                      {area.title}
                    </h3>
                  </div>
                  
                  <p className={`text-gray-300 leading-relaxed mb-6 text-sm transition-all duration-300 ${
                    isExpanded ? 'max-h-none' : 'max-h-20 overflow-hidden'
                  }`}>
                    {isExpanded ? area.fullDescription : area.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setExpandedArea(isExpanded ? null : index)}
                      className="flex items-center text-amber-600 hover:text-amber-400 font-medium transition-all duration-300 group-hover:translate-x-1"
                    >
                      {isExpanded ? 'Show Less' : 'Learn More'}
                      {isExpanded ? 
                        <ChevronUp className="h-4 w-4 ml-2 transition-transform duration-300" /> :
                        <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                      }
                    </button>
                    
                    <button
                      onClick={() => window.open('https://wa.me/923216677291', '_blank')}
                      className="px-3 py-1 bg-green-600/20 hover:bg-green-600/30 text-green-400 text-xs rounded-full transition-all duration-300 hover:scale-105"
                    >
                      Consult Now
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div 
            className={`text-center mt-16 transition-all duration-1000 delay-1000 ${
              practiceVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-r from-amber-600/20 to-amber-700/20 backdrop-blur-sm rounded-2xl border border-amber-600/30 p-8 hover:shadow-2xl hover:shadow-amber-600/20 transition-all duration-500 hover:scale-[1.02]">
              <h3 className="text-2xl font-bold text-white mb-4 hover:text-amber-400 transition-colors duration-300">
                Need Legal Assistance?
              </h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Our expert legal team with over 22 years of experience is ready to help you navigate complex legal matters with professionalism and care.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open('https://wa.me/923216677291', '_blank')}
                  className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-600/30 group"
                >
                  <span className="flex items-center">
                    Schedule Free Consultation
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </button>
                <button
                  onClick={() => window.open('tel:+923216677291', '_self')}
                  className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-600/30 group"
                >
                  <span className="flex items-center">
                    <Phone className="h-4 w-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
                    Call Now: 0321-6677291
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CEOMessageAndPracticeAreas;