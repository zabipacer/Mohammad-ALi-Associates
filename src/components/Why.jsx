import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle, Users, Globe, Video, MessageCircle, Scale, Award, Clock, Shield, Building, Star, Phone, Mail } from 'lucide-react';

const AboutMuhammadAliSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    cases: 0,
    years: 0,
    clients: 0,
    institutions: 0
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    
    const targets = { cases: 8000, years: 22, clients: 2500, institutions: 50 };
    
    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      
      setCounters({
        cases: Math.floor(targets.cases * progress),
        years: Math.floor(targets.years * progress),
        clients: Math.floor(targets.clients * progress),
        institutions: Math.floor(targets.institutions * progress)
      });
      
      if (step >= steps) {
        clearInterval(timer);
        setCounters(targets);
      }
    }, stepDuration);
  };

  const achievements = [
    {
      icon: CheckCircle,
      text: "8000+ Cases Successfully Handled",
      description: "Proven expertise across diverse legal matters with exceptional success rates"
    },
    {
      icon: Building,
      text: "Trusted by Major Financial Institutions",
      description: "Legal partners to State Bank, National Bank, Summit Bank, and other leading banks"
    },
    {
      icon: Globe,
      text: "Comprehensive Legal Solutions",
      description: "From civil litigation to corporate law, banking disputes to criminal defense"
    }
  ];

  const testimonialQuote = "Indeed, Allah commands you to render trusts to whom they are due and when you judge between people to judge with justice. Excellent is that which Allah instructs you. Indeed, Allah is ever Hearing and Seeing.";

  return (
    <section 
      ref={sectionRef}
      className="py-12 md:py-16 lg:py-20 bg-black relative overflow-hidden"
      id="about"
    >
      {/* Enhanced Background Pattern */}
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

      {/* Enhanced gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-amber-950/20 opacity-80"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-16">
          <div 
            className={`transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center justify-center mb-4">
              <div className="w-8 md:w-12 h-0.5 bg-amber-600 mr-2 md:mr-4 animate-pulse"></div>
              <Scale className="h-5 w-5 md:h-6 md:w-6 text-amber-600 animate-bounce" />
              <div className="w-8 md:w-12 h-0.5 bg-amber-600 ml-2 md:ml-4 animate-pulse"></div>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 hover:text-amber-400 transition-colors duration-300">
              About Muhammad Ali Law Associates
            </h2>
            <p className="text-gray-400 text-base md:text-lg max-w-3xl mx-auto">
              Premier Legal Excellence Since 2002 - Serving Justice with Integrity
            </p>
          </div>
        </div>

        {/* Main Content - Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center mb-12 md:mb-16">
          
          {/* Left Side - Senior Lawyer Image */}
          <div 
            className={`transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative group">
              {/* Professional lawyer image */}
              <div className="relative overflow-hidden rounded-xl md:rounded-2xl shadow-lg md:shadow-2xl group-hover:shadow-amber-600/30 transition-all duration-500">
                <img
                  src="/ali.jpg"
                  alt="Ch. Muhammad Faysal Ghazi - Advocate High Court"
                  className="w-full h-[400px] sm:h-[500px] md:h-[550px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                
                {/* Professional badge with enhanced design */}
                <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 bg-black/90 backdrop-blur-sm rounded-lg md:rounded-xl p-3 md:p-5 border border-amber-600/40 shadow-lg md:shadow-2xl hover:bg-black/95 transition-all duration-300">
                  <div className="flex items-center">
                    <div className="p-2 md:p-3 bg-amber-600 rounded-full mr-2 md:mr-4 hover:bg-amber-500 transition-colors duration-300">
                      <Scale className="h-4 w-4 md:h-6 md:w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm md:text-lg">Ch. Muhammad Faysal Ghazi</h4>
                      <p className="text-amber-400 text-xs md:text-sm font-medium">Senior Advocate High Court</p>
                      <div className="flex items-center mt-1 md:mt-2">
                        <Star className="h-3 w-3 md:h-4 md:w-4 text-amber-600 mr-1" />
                        <span className="text-gray-300 text-xs">22+ Years Experience</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact info overlay */}
                <div className="absolute top-4 right-4 md:top-6 md:right-6 space-y-1 md:space-y-2">
                  <div className="bg-black/80 backdrop-blur-sm rounded md:rounded-lg px-2 py-1 md:px-3 md:py-2 border border-amber-600/30">
                    <div className="flex items-center text-white text-xs md:text-sm">
                      <Phone className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 text-amber-600" />
                      <span>0321-6677291</span>
                    </div>
                  </div>
                  <div className="bg-black/80 backdrop-blur-sm rounded md:rounded-lg px-2 py-1 md:px-3 md:py-2 border border-amber-600/30">
                    <div className="flex items-center text-white text-xs md:text-sm">
                      <Mail className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 text-amber-600" />
                      <span className="hidden sm:inline">faysalghazi@outlook.com</span>
                      <span className="sm:hidden">Email Us</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced decorative elements */}
              <div className="absolute -top-4 -right-4 md:-top-6 md:-right-6 w-20 h-20 md:w-32 md:h-32 bg-amber-600/20 rounded-full blur-xl md:blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 w-24 h-24 md:w-40 md:h-40 bg-amber-600/10 rounded-full blur-xl md:blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div 
            className={`transition-all duration-1000 delay-500 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            {/* Quranic Quote */}
            <div className="mb-6 md:mb-8 p-4 md:p-6 bg-gradient-to-br from-amber-900/20 to-amber-800/10 rounded-lg md:rounded-xl border border-amber-600/20">
              <div className="flex items-start mb-3 md:mb-4">
                <div className="text-2xl md:text-4xl text-amber-600 font-serif leading-none mr-2 md:mr-3">"</div>
                <blockquote className="text-sm md:text-lg font-medium text-amber-100 leading-relaxed italic">
                  {testimonialQuote}
                </blockquote>
              </div>
              <cite className="text-amber-400 text-xs md:text-sm block text-right">— Surah An-Nisa (4:58)</cite>
            </div>

            {/* Main Quote */}
            <div className="mb-6 md:mb-8">
              <div className="flex items-start mb-3 md:mb-4">
                <div className="text-3xl md:text-5xl text-amber-600 font-serif leading-none mr-3 md:mr-4">"</div>
                <blockquote className="text-xl md:text-2xl lg:text-3xl font-light text-white leading-relaxed">
                  Since 2002, we've been Faisalabad's trusted legal guardians.
                </blockquote>
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="mb-6 md:mb-8">
              <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-4 md:mb-6">
                Muhammad Ali Law Associates, Faisalabad, is a premier legal institution known for unwavering 
                commitment to justice and excellence. With over 22 years of consistent success, we serve as 
                trusted legal representatives and advisors to both institutional and individual clients.
              </p>
              <p className="text-base md:text-lg text-gray-400 leading-relaxed">
                Our firm operates with strong ethical foundations, equipped with a competent and well-organized 
                legal team capable of effectively representing clients across diverse fields of law.
              </p>
            </div>

            {/* Achievements List with enhanced styling */}
            <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div 
                    key={index}
                    className={`flex items-start transition-all duration-500 hover:translate-x-2 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${700 + index * 150}ms` }}
                  >
                    <div className="flex-shrink-0 mr-3 md:mr-4">
                      <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-gradient-to-br from-amber-600 to-amber-700 rounded-full shadow-lg hover:shadow-amber-600/50 transition-all duration-300 hover:scale-110">
                        <Icon className="h-4 w-4 md:h-6 md:w-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-bold text-base md:text-lg mb-1 md:mb-2 hover:text-amber-400 transition-colors duration-300">
                        {achievement.text}
                      </h4>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Professional Contact CTA */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <button
                onClick={() => window.open('https://wa.me/923216677291', '_blank')}
                className="flex items-center justify-center px-4 py-2 md:px-6 md:py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-green-600/40 group text-sm md:text-base"
              >
                <MessageCircle className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2 transition-transform duration-300 group-hover:rotate-12" />
                Schedule Consultation
              </button>
              <button
                onClick={() => window.open('tel:+923216677291', '_self')}
                className="flex items-center justify-center px-4 py-2 md:px-6 md:py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-amber-600/40 group text-sm md:text-base"
              >
                <Phone className="h-4 w-4 md:h-5 md:w-5 mr-1 md:mr-2 transition-transform duration-300 group-hover:bounce" />
                Call: 0321-6677291
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Statistics Section */}
        <div 
          className={`border-t border-amber-600/20 pt-12 md:pt-16 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-amber-600/30 to-amber-700/20 rounded-full mx-auto mb-3 md:mb-4 group-hover:from-amber-600/40 group-hover:to-amber-700/30 transition-all duration-300 shadow-lg group-hover:shadow-amber-600/30">
                <Award className="h-6 w-6 md:h-10 md:w-10 text-amber-600 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2 group-hover:text-amber-400 transition-colors duration-300">
                {counters.cases.toLocaleString()}+
              </h3>
              <p className="text-gray-400 text-xs md:text-sm group-hover:text-gray-300 transition-colors duration-300">Cases Successfully Resolved</p>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-amber-600/30 to-amber-700/20 rounded-full mx-auto mb-3 md:mb-4 group-hover:from-amber-600/40 group-hover:to-amber-700/30 transition-all duration-300 shadow-lg group-hover:shadow-amber-600/30">
                <Clock className="h-6 w-6 md:h-10 md:w-10 text-amber-600 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2 group-hover:text-amber-400 transition-colors duration-300">
                {counters.years}+
              </h3>
              <p className="text-gray-400 text-xs md:text-sm group-hover:text-gray-300 transition-colors duration-300">Years of Excellence</p>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-amber-600/30 to-amber-700/20 rounded-full mx-auto mb-3 md:mb-4 group-hover:from-amber-600/40 group-hover:to-amber-700/30 transition-all duration-300 shadow-lg group-hover:shadow-amber-600/30">
                <Users className="h-6 w-6 md:h-10 md:w-10 text-amber-600 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2 group-hover:text-amber-400 transition-colors duration-300">
                {counters.clients.toLocaleString()}+
              </h3>
              <p className="text-gray-400 text-xs md:text-sm group-hover:text-gray-300 transition-colors duration-300">Satisfied Clients</p>
            </div>
            
            <div className="group hover:scale-105 transition-all duration-300">
              <div className="flex items-center justify-center w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-amber-600/30 to-amber-700/20 rounded-full mx-auto mb-3 md:mb-4 group-hover:from-amber-600/40 group-hover:to-amber-700/30 transition-all duration-300 shadow-lg group-hover:shadow-amber-600/30">
                <Building className="h-6 w-6 md:h-10 md:w-10 text-amber-600 transition-transform duration-300 group-hover:rotate-12" />
              </div>
              <h3 className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2 group-hover:text-amber-400 transition-colors duration-300">
                {counters.institutions}+
              </h3>
              <p className="text-gray-400 text-xs md:text-sm group-hover:text-gray-300 transition-colors duration-300">Institutional Clients</p>
            </div>
          </div>
        </div>

        {/* Client Trust Section */}
        <div 
          className={`mt-12 md:mt-16 text-center transition-all duration-1000 delay-900 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gradient-to-r from-amber-600/10 to-amber-700/10 backdrop-blur-sm rounded-xl md:rounded-2xl border border-amber-600/20 p-6 md:p-8 hover:shadow-xl md:hover:shadow-2xl hover:shadow-amber-600/20 transition-all duration-500">
            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
              Trusted Legal Partners
            </h3>
            <p className="text-gray-300 mb-4 md:mb-6 max-w-3xl mx-auto text-sm md:text-base">
              From State Bank of Pakistan to National Bank, Summit Bank to Meezan Bank - 
              we are the preferred legal partners for Pakistan's leading financial institutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-xs md:text-sm text-amber-400">
              <div>State Bank of Pakistan</div>
              <div>National Bank of Pakistan</div>
              <div>Summit Bank Limited</div>
              <div>Meezan Bank Limited</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMuhammadAliSection;