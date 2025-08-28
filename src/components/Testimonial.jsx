import React, { useState, useEffect, useRef } from 'react';
import { 
  MessageSquare, 
  Video, 
  Phone, 
  Mail, 
  Star, 
  ChevronLeft, 
  ChevronRight, 
  Globe, 
  MapPin,
  Clock,
  CheckCircle,
  User,
  Calendar,
  FileText,
  Shield,
  Award,
  Users,
  Scale,
  Building,
  Gavel
} from 'lucide-react';

const MuhammadAliAssociates = () => {
  const [ctaVisible, setCtaVisible] = useState(false);
  const [reviewsVisible, setReviewsVisible] = useState(false);
  const [overseasVisible, setOverseasVisible] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);
  
  const ctaRef = useRef(null);
  const reviewsRef = useRef(null);
  const overseasRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            if (entry.target === ctaRef.current) setCtaVisible(true);
            if (entry.target === reviewsRef.current) setReviewsVisible(true);
            if (entry.target === overseasRef.current) setOverseasVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    [ctaRef, reviewsRef, overseasRef].forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const reviews = [
    {
      name: "Ahmad Hassan",
      location: "London, UK",
      rating: 5,
      text: "Muhammad Ali Law Associates handled my property inheritance dispute while I was in the UK. Their professional service and regular updates made the process seamless.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop",
      case: "Property Inheritance"
    },
    {
      name: "Fatima Khan",
      location: "Dubai, UAE",
      rating: 5,
      text: "Excellent banking law support from Ch. Muhammad Faysal Ghazi's team. They resolved my loan recovery case efficiently with complete professionalism.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop",
      case: "Banking Law"
    },
    {
      name: "Usman Ali",
      location: "Toronto, Canada",
      rating: 5,
      text: "Outstanding legal consultation for my family court matter. The team's 22 years of experience really showed in their expert handling.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
      case: "Family Court"
    },
    {
      name: "Sarah Ahmed",
      location: "Riyadh, Saudi Arabia",
      rating: 5,
      text: "Professional revenue law services for land mutation. They handled everything remotely with complete transparency and integrity.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop",
      case: "Revenue Law"
    },
    {
      name: "Dr. Ibrahim Malik",
      location: "New York, USA",
      rating: 5,
      text: "Exceptional cyber crime legal support. Their expertise in FIA matters and cyber laws helped resolve my case swiftly.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
      case: "Cyber Crime Law"
    }
  ];

  const countries = [
    { 
      name: "Saudi Arabia", 
      flag: "🇸🇦", 
      code: "SA",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop"
    },
    { 
      name: "UAE", 
      flag: "🇦🇪", 
      code: "AE",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop"
    },
    { 
      name: "United Kingdom", 
      flag: "🇬🇧", 
      code: "GB",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop"
    },
    { 
      name: "United States", 
      flag: "🇺🇸", 
      code: "US",
      image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1000&auto=format&fit=crop"
    },
    { 
      name: "Canada", 
      flag: "🇨🇦", 
      code: "CA",
      image: "https://images.unsplash.com/photo-1503614472-8c93d56cd533?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  useEffect(() => {
    const interval = setInterval(nextReview, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-black">
      {/* Online Legal Help CTA Section */}
      <section 
        ref={ctaRef}
        className="py-16 relative overflow-hidden"
        id="online-legal-help"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000&auto=format&fit=crop"
            alt="Legal Consultation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            className={`text-center transition-all duration-1000 ${
              ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-r from-amber-600/20 to-amber-700/20 backdrop-blur-sm rounded-2xl border border-amber-600/30 p-8 md:p-12">
              <div className="flex items-center justify-center mb-6">
                <div className="p-4 bg-amber-600/20 rounded-full">
                  <Scale className="h-8 w-8 text-amber-600" />
                </div>
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                Muhammad Ali Law Associates
              </h2>
              <p className="text-lg text-amber-400 mb-4 font-semibold">
                Advocates, Solicitors & Legal Consultants - Faisalabad
              </p>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                22+ Years of Legal Excellence | Trusted by Major Banks & Corporations
              </p>

              {/* Contact Options */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="flex flex-col items-center p-6 bg-black/30 rounded-xl backdrop-blur-sm">
                  <Video className="h-8 w-8 text-blue-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">✅ Video Consultation</h3>
                  <p className="text-gray-400 text-sm text-center">Face-to-face legal advice from anywhere</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-black/30 rounded-xl backdrop-blur-sm">
                  <MessageSquare className="h-8 w-8 text-green-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">✅ WhatsApp Legal Support</h3>
                  <p className="text-gray-400 text-sm text-center">Instant legal consultation and document review</p>
                </div>
                <div className="flex flex-col items-center p-6 bg-black/30 rounded-xl backdrop-blur-sm">
                  <FileText className="h-8 w-8 text-purple-400 mb-3" />
                  <h3 className="text-white font-semibold mb-2">✅ Online Documentation</h3>
                  <p className="text-gray-400 text-sm text-center">Legal drafting and court filing services</p>
                </div>
              </div>

              {/* Practice Areas Quick List */}
              <div className="text-center mb-8">
                <p className="text-gray-300 mb-4">
                  <span className="font-semibold text-amber-600">Specializing in:</span> Civil Law • Banking Law • Revenue Law • Criminal Law • Corporate Law • Cyber Crime • Family Court
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => window.open('https://wa.me/923216677291', '_blank')}
                  className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <MessageSquare className="h-5 w-5 mr-2" />
                  📱 WhatsApp: 0321-6677291
                </button>
                <button
                  onClick={() => window.open('tel:+923216677291', '_self')}
                  className="px-8 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  📧 Call: 0321-6677291
                </button>
              </div>

              {/* Office Address */}
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  📍 Chamber 49/50, Sufi Barkat Ali Law Building, District Courts, Faisalabad
                </p>
                <p className="text-gray-400 text-sm">
                  📧 faysalghazi@outlook.com | Office: 041-2642291
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews Section */}
      <section 
        ref={reviewsRef}
        className="py-20 relative overflow-hidden"
        id="client-reviews"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="grid grid-cols-8 gap-px h-full">
            {[...Array(64)].map((_, i) => (
              <div key={i} className="bg-white/10 border-r border-white/5" />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div 
              className={`transition-all duration-1000 ${
                reviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-0.5 bg-amber-600 mr-4"></div>
                <Star className="h-6 w-6 text-amber-600" />
                <div className="w-12 h-0.5 bg-amber-600 ml-4"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Client Testimonials
              </h2>
              <p className="text-gray-400 text-lg">
                What our clients say about Ch. Muhammad Faysal Ghazi & Team
              </p>
            </div>
          </div>

          {/* Reviews Carousel */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              reviewsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-amber-600/20 p-8 md:p-12">
                <div className="flex items-center justify-between mb-8">
                  <button
                    onClick={prevReview}
                    className="p-2 bg-amber-600/20 hover:bg-amber-600/30 rounded-full transition-colors duration-300"
                  >
                    <ChevronLeft className="h-6 w-6 text-amber-600" />
                  </button>
                  
                  <div className="flex space-x-2">
                    {reviews.map((_, index) => (
                      <div
                        key={index}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                          index === currentReview ? 'bg-amber-600' : 'bg-gray-600'
                        }`}
                      />
                    ))}
                  </div>
                  
                  <button
                    onClick={nextReview}
                    className="p-2 bg-amber-600/20 hover:bg-amber-600/30 rounded-full transition-colors duration-300"
                  >
                    <ChevronRight className="h-6 w-6 text-amber-600" />
                  </button>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden mr-6">
                      <img
                        src={reviews[currentReview].image}
                        alt={reviews[currentReview].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="text-xl font-bold text-white mb-1">
                        {reviews[currentReview].name}
                      </h4>
                      <p className="text-gray-400 mb-2">{reviews[currentReview].location}</p>
                      <div className="flex items-center">
                        {[...Array(reviews[currentReview].rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-amber-600 fill-current" />
                        ))}
                        <span className="text-amber-600 ml-2 font-semibold">{reviews[currentReview].case}</span>
                      </div>
                    </div>
                  </div>
                  
                  <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-6">
                    "{reviews[currentReview].text}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted Clients Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-6">Trusted by Leading Institutions</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {[
                "State Bank of Pakistan",
                "National Bank of Pakistan", 
                "Meezan Bank Limited",
                "Bank Alfalah Limited",
                "JS Bank Limited",
                "MCB Bank Limited",
                "Pakistan Mobile Communications",
                "Metro Pakistan"
              ].map((client, index) => (
                <div key={index} className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-amber-600/10">
                  <p className="text-gray-300 text-sm font-medium">{client}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overseas Pakistanis Support Section */}
      <section 
        ref={overseasRef}
        className="py-20 relative overflow-hidden"
        id="overseas-support"
      >
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1000&auto=format&fit=crop"
            alt="Global Legal Support"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div 
              className={`transition-all duration-1000 ${
                overseasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-0.5 bg-amber-600 mr-4"></div>
                <Globe className="h-6 w-6 text-amber-600" />
                <div className="w-12 h-0.5 bg-amber-600 ml-4"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Legal Support for Overseas Pakistanis
              </h2>
              <p className="text-gray-400 text-lg max-w-3xl mx-auto">
                Muhammad Ali Law Associates provides comprehensive remote legal services to Pakistani expatriates worldwide
              </p>
            </div>
          </div>

          {/* Countries Grid */}
          <div 
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16 transition-all duration-1000 delay-300 ${
              overseasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {countries.map((country, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl border border-amber-600/20 p-6 hover:border-amber-600/40 transition-all duration-300 hover:-translate-y-2"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-3xl mb-2">{country.flag}</div>
                  <h3 className="text-white font-semibold text-sm group-hover:text-amber-600 transition-colors duration-300">
                    {country.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Support Information */}
          <div 
            className={`transition-all duration-1000 delay-600 ${
              overseasVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-r from-amber-600/20 to-amber-700/20 backdrop-blur-sm rounded-2xl border border-amber-600/30 p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    Complete Legal Support from Faisalabad to the World
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    If you're abroad and need legal representation in Pakistan — from property disputes to banking matters, 
                    our experienced team handles everything with complete professionalism and Islamic values.
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {[
                      "Civil Law & Property Disputes",
                      "Banking & Finance Law Cases",
                      "Revenue Law & Land Mutations", 
                      "Family Court & Custody Matters",
                      "Criminal Defense & FIA Cases",
                      "Corporate Law & Documentation",
                      "Cyber Crime & Legal Compliance"
                    ].map((service, index) => (
                      <div key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-400 mr-3" />
                        <span className="text-gray-300">{service}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => window.open('https://wa.me/923216677291', '_blank')}
                      className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
                    >
                      <Calendar className="h-5 w-5 mr-2" />
                      Free Consultation
                    </button>
                    <button
                      onClick={() => window.open('mailto:faysalghazi@outlook.com', '_blank')}
                      className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center"
                    >
                      <Mail className="h-5 w-5 mr-2" />
                      Email Us
                    </button>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 text-center">
                      <Users className="h-8 w-8 text-amber-600 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">1000+</div>
                      <div className="text-gray-400 text-sm">Happy Clients</div>
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 text-center">
                      <Award className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">22+</div>
                      <div className="text-gray-400 text-sm">Years Experience</div>
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 text-center">
                      <Building className="h-8 w-8 text-green-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">15+</div>
                      <div className="text-gray-400 text-sm">Major Banks</div>
                    </div>
                    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 text-center">
                      <Gavel className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                      <div className="text-2xl font-bold text-white mb-1">98%</div>
                      <div className="text-gray-400 text-sm">Success Rate</div>
                    </div>
                  </div>
                  
                  {/* Quranic Verse */}
                  <div className="mt-6 bg-black/20 backdrop-blur-sm rounded-xl p-6 border-l-4 border-amber-600">
                    <p className="text-gray-300 text-sm italic leading-relaxed">
                      "Indeed, Allah commands you to render trusts to whom they are due and when you judge between people to judge with justice."
                    </p>
                    <p className="text-amber-600 text-xs mt-2 font-semibold">— Surah An-Nisa (4:58)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MuhammadAliAssociates;