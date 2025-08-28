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
  CheckCircle,
  Calendar,
  FileText,
  Award,
  Users,
  Building,
  Gavel,
  Scale
} from 'lucide-react';

const MuhammadAliAssociates = () => {
  const [ctaVisible, setCtaVisible] = useState(false);
  const [reviewsVisible, setReviewsVisible] = useState(false);
  const [overseasVisible, setOverseasVisible] = useState(false);
  const [currentReview, setCurrentReview] = useState(0);

  const ctaRef = useRef(null);
  const reviewsRef = useRef(null);
  const overseasRef = useRef(null);

  // Section reveal on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === ctaRef.current) setCtaVisible(true);
            if (entry.target === reviewsRef.current) setReviewsVisible(true);
            if (entry.target === overseasRef.current) setOverseasVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    [ctaRef, reviewsRef, overseasRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  // Testimonials
  const reviews = [
    {
      name: 'Ahmad Hassan',
      location: 'London, UK',
      rating: 5,
      text: 'Muhammad Ali Law Associates handled my property inheritance dispute while I was in the UK. Their professional service and regular updates made the process seamless.',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop',
      case: 'Property Inheritance'
    },
    {
      name: 'Fatima Khan',
      location: 'Dubai, UAE',
      rating: 5,
      text: "Excellent banking law support from Ch. Muhammad Faysal Ghazi's team. They resolved my loan recovery case efficiently with complete professionalism.",
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1000&auto=format&fit=crop',
      case: 'Banking Law'
    },
    {
      name: 'Usman Ali',
      location: 'Toronto, Canada',
      rating: 5,
      text: "Outstanding legal consultation for my family court matter. The team's 22 years of experience really showed in their expert handling.",
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop',
      case: 'Family Court'
    },
    {
      name: 'Sarah Ahmed',
      location: 'Riyadh, Saudi Arabia',
      rating: 5,
      text: 'Professional revenue law services for land mutation. They handled everything remotely with complete transparency and integrity.',
      image:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000&auto=format&fit=crop',
      case: 'Revenue Law'
    },
    {
      name: 'Dr. Ibrahim Malik',
      location: 'New York, USA',
      rating: 5,
      text: 'Exceptional cyber crime legal support. Their expertise in FIA matters and cyber laws helped resolve my case swiftly.',
      image:
        'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop',
      case: 'Cyber Crime Law'
    }
  ];

  // Overseas countries
  const countries = [
    {
      name: 'Saudi Arabia',
      flag: '🇸🇦',
      image:
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=1000&auto=format&fit=crop'
    },
    {
      name: 'UAE',
      flag: '🇦🇪',
      image:
        'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1000&auto=format&fit=crop'
    },
    {
      name: 'United Kingdom',
      flag: '🇬🇧',
      image:
        'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1000&auto=format&fit=crop'
    },
    {
      name: 'United States',
      flag: '🇺🇸',
      image:
        'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1000&auto=format&fit=crop'
    },
    {
      name: 'Canada',
      flag: '🇨🇦',
      image:
        'https://images.unsplash.com/photo-1503614472-8c93d56cd533?q=80&w=1000&auto=format&fit=crop'
    }
  ];

  const nextReview = () => setCurrentReview((p) => (p + 1) % reviews.length);
  const prevReview = () => setCurrentReview((p) => (p - 1 + reviews.length) % reviews.length);

  // Auto-rotate reviews
  useEffect(() => {
    const id = setInterval(nextReview, 6000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Online Legal Help CTA */}
      <section id="online-legal-help" ref={ctaRef} className="relative py-16 sm:py-20">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1780&auto=format&fit=crop"
            alt="Legal Consultation"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/80 to-black/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`transition-all duration-1000 ${
              ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="bg-gradient-to-r from-amber-600/20 to-amber-700/20 backdrop-blur-sm rounded-2xl border border-amber-600/30 p-6 sm:p-10">
              <div className="flex items-center justify-center mb-6">
                <div className="p-3 sm:p-4 bg-amber-600/20 rounded-full">
                  <Scale className="h-8 w-8 sm:h-10 sm:w-10 text-amber-600" />
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 text-center">
                Muhammad Ali Law Associates
              </h2>
              <p className="text-amber-400 text-sm sm:text-base font-semibold text-center mb-3">
                Advocates, Solicitors & Legal Consultants — Faisalabad
              </p>
              <p className="text-gray-300 text-base sm:text-lg md:text-xl text-center mb-8 max-w-3xl mx-auto">
                22+ Years of Legal Excellence | Trusted by Major Banks & Corporations
              </p>

              {/* Feature cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
                <div className="flex flex-col items-center p-5 sm:p-6 bg-black/30 rounded-xl">
                  <Video className="h-7 w-7 sm:h-8 sm:w-8 text-blue-400 mb-2" />
                  <h3 className="font-semibold mb-1 text-center">Video Consultation</h3>
                  <p className="text-gray-400 text-xs sm:text-sm text-center">Face-to-face advice, anywhere</p>
                </div>
                <div className="flex flex-col items-center p-5 sm:p-6 bg-black/30 rounded-xl">
                  <MessageSquare className="h-7 w-7 sm:h-8 sm:w-8 text-green-400 mb-2" />
                  <h3 className="font-semibold mb-1 text-center">WhatsApp Legal Support</h3>
                  <p className="text-gray-400 text-xs sm:text-sm text-center">Instant consultation & docs</p>
                </div>
                <div className="flex flex-col items-center p-5 sm:p-6 bg-black/30 rounded-xl">
                  <FileText className="h-7 w-7 sm:h-8 sm:w-8 text-purple-400 mb-2" />
                  <h3 className="font-semibold mb-1 text-center">Online Documentation</h3>
                  <p className="text-gray-400 text-xs sm:text-sm text-center">Drafting & court filing</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button
                  onClick={() => window.open('https://wa.me/923216677291', '_blank')}
                  className="px-6 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold shadow-lg flex items-center justify-center"
                >
                  <MessageSquare className="h-5 w-5 mr-2" /> WhatsApp: 0321-6677291
                </button>
                <button
                  onClick={() => window.open('tel:+923216677291')}
                  className="px-6 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold shadow-lg flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" /> Call: 0321-6677291
                </button>
              </div>

              {/* Address */}
              <div className="mt-6 text-center text-gray-400 text-xs sm:text-sm leading-relaxed">
                📍 Chamber 49/50, Sufi Barkat Ali Law Building, District Courts, Faisalabad
                <br />
                📧 faysalghazi@outlook.com | Office: 041-2642291
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section id="client-reviews" ref={reviewsRef} className="relative py-16 sm:py-20">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div
            className={`text-center mb-10 transition-all duration-1000 ${
              reviewsVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">Client Testimonials</h2>
            <p className="text-gray-400 text-sm sm:text-base">
              What our clients say about Ch. Muhammad Faysal Ghazi & Team
            </p>
          </div>

          {/* Carousel */}
          <div
            className={`transition-all duration-1000 ${
              reviewsVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-2xl border border-amber-600/20 p-6 sm:p-10">
                <div className="flex items-center justify-between mb-6">
                  <button
                    aria-label="Previous review"
                    onClick={prevReview}
                    className="p-2 bg-amber-600/20 hover:bg-amber-600/30 rounded-full"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>

                  <div className="flex gap-2">
                    {reviews.map((_, i) => (
                      <span
                        key={i}
                        className={`w-2 h-2 rounded-full ${
                          i === currentReview ? 'bg-amber-600' : 'bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>

                  <button
                    aria-label="Next review"
                    onClick={nextReview}
                    className="p-2 bg-amber-600/20 hover:bg-amber-600/30 rounded-full"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <div className="text-center">
                  <div className="flex items-center justify-center mb-5">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden mr-4">
                      <img
                        src={reviews[currentReview].image}
                        alt={reviews[currentReview].name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="text-left">
                      <h4 className="text-lg sm:text-xl font-bold">
                        {reviews[currentReview].name}
                      </h4>
                      <p className="text-gray-400 text-xs sm:text-sm mb-1">
                        {reviews[currentReview].location}
                      </p>
                      <div className="flex items-center flex-wrap gap-1">
                        {Array.from({ length: reviews[currentReview].rating }).map((_, idx) => (
                          <Star key={idx} className="h-4 w-4 text-amber-500 fill-current" />
                        ))}
                        <span className="text-amber-500 ml-2 text-xs sm:text-sm font-semibold">
                          {reviews[currentReview].case}
                        </span>
                      </div>
                    </div>
                  </div>

                  <blockquote className="text-base sm:text-lg md:text-xl leading-relaxed">
                    “{reviews[currentReview].text}”
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overseas Pakistanis Support */}
      <section id="overseas-support" ref={overseasRef} className="relative py-16 sm:py-20">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1780&auto=format&fit=crop"
            alt="Global Legal Support"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div
            className={`text-center mb-12 transition-all duration-1000 ${
              overseasVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="flex items-center justify-center mb-3">
              <div className="w-10 h-0.5 bg-amber-600 mr-3" />
              <Globe className="h-5 w-5 text-amber-600" />
              <div className="w-10 h-0.5 bg-amber-600 ml-3" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
              Legal Support for Overseas Pakistanis
            </h2>
            <p className="text-gray-400 text-sm sm:text-base max-w-3xl mx-auto">
              Muhammad Ali Law Associates provides comprehensive remote legal services to Pakistani expatriates worldwide
            </p>
          </div>

          {/* Countries Grid */}
          <div
            className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 mb-12 transition-all duration-1000 ${
              overseasVisible ? 'opacity-100' : 'opacity-0 translate-y-8'
            }`}
          >
            {countries.map((country, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-xl border border-amber-600/20 p-4 sm:p-6 hover:border-amber-600/40 transition-all hover:-translate-y-1"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <div className="text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-3 rounded-full overflow-hidden">
                    <img
                      src={country.image}
                      alt={country.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="text-2xl sm:text-3xl mb-1">{country.flag}</div>
                  <h3 className="text-white text-sm sm:text-base font-semibold group-hover:text-amber-600 transition-colors">
                    {country.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Support Info + Stats */}
          <div
            className="bg-gradient-to-r from-amber-600/20 to-amber-700/20 backdrop-blur-sm rounded-2xl border border-amber-600/30 p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start"
          >
            <div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-5">
                Complete Legal Support from Faisalabad to the World
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-5 leading-relaxed">
                If you're abroad and need legal representation in Pakistan — from property disputes to banking matters — our experienced team handles everything with complete professionalism and integrity.
              </p>

              <div className="space-y-2 mb-8">
                {[
                  'Civil Law & Property Disputes',
                  'Banking & Finance Law Cases',
                  'Revenue Law & Land Mutations',
                  'Family Court & Custody Matters',
                  'Criminal Defense & FIA Cases',
                  'Corporate Law & Documentation',
                  'Cyber Crime & Legal Compliance'
                ].map((service, idx) => (
                  <div key={idx} className="flex items-center text-sm sm:text-base">
                    <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-gray-300">{service}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button
                  onClick={() => window.open('https://wa.me/923216677291', '_blank')}
                  className="px-5 py-3 bg-green-600 hover:bg-green-700 rounded-lg font-semibold flex items-center justify-center"
                >
                  <Calendar className="h-5 w-5 mr-2" /> Free Consultation
                </button>
                <button
                  onClick={() => window.open('mailto:faysalghazi@outlook.com', '_blank')}
                  className="px-5 py-3 bg-amber-600 hover:bg-amber-700 rounded-lg font-semibold flex items-center justify-center"
                >
                  <Mail className="h-5 w-5 mr-2" /> Email Us
                </button>
              </div>
            </div>

            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-black/30 rounded-xl p-5 text-center">
                  <Users className="h-7 w-7 text-amber-600 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold">1000+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Happy Clients</div>
                </div>
                <div className="bg-black/30 rounded-xl p-5 text-center">
                  <Award className="h-7 w-7 text-blue-400 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold">22+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Years Experience</div>
                </div>
                <div className="bg-black/30 rounded-xl p-5 text-center">
                  <Building className="h-7 w-7 text-green-400 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold">15+</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Major Banks</div>
                </div>
                <div className="bg-black/30 rounded-xl p-5 text-center">
                  <Gavel className="h-7 w-7 text-purple-400 mx-auto mb-2" />
                  <div className="text-xl sm:text-2xl font-bold">98%</div>
                  <div className="text-gray-400 text-xs sm:text-sm">Success Rate</div>
                </div>
              </div>

              {/* Quranic verse */}
              <div className="mt-6 bg-black/20 rounded-xl p-5 border-l-4 border-amber-600">
                <p className="text-gray-300 text-xs sm:text-sm italic leading-relaxed">
                  "Indeed, Allah commands you to render trusts to whom they are due and when you judge between people to judge with justice."
                </p>
                <p className="text-amber-600 text-[11px] sm:text-xs mt-2 font-semibold">— Surah An-Nisa (4:58)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MuhammadAliAssociates;
