import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Star } from 'lucide-react';

const LOCAL_INFO = {
  name: 'Muhammad Ali Law Associates / Lawyer Firm Faisalabad',
  subtitle: 'Led by Ch. Muhammad Faysal Ghazi Advocate High Court',
  address: 'Chamber No. 49/50, Sufi Barkat Ali Law Building Basement, District Courts, Faisalabad, 38000',
  phones: ['0321 6677291','041-2642291', '041-8712291'],

  hours: 'Open 24 hours',
  rating: 5.0,
  reviewCount: 16,
  category: 'Law firm in Faisalabad',
  services: 'Civil, Criminal, Corporate, Banking Crimes, Revenue, Labour, Family Law',
  building: 'Sufi Barkat Ali Law Building',
};

export default function LocalSEOSection() {
  const [visible, setVisible] = useState(false);
  useEffect(() => setVisible(true), []);

  return (
    <section
      id="location"
      className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white font-poppins overflow-hidden"
      aria-labelledby="location-title"
    >
      <div className="max-w-6xl mx-auto px-6 lg:flex lg:space-x-12 items-start relative">
        
        {/* Map Embed */}
        <motion.div
          className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-2xl"
          initial={{ opacity: 0, x: -50 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <iframe
            title="Muhammad Ali Law Associates Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.6959616687677!2d73.078971424631!3d31.422501851972545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3922697d48aeb5cd%3A0x9f10fccb19967f7d!2sMuhammad%20Ali%20Law%20Associates%2F%20Lawyer%20Firm%20Faisalabad!5e0!3m2!1sen!2s!4v1756363154525!5m2!1sen!2s"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Business Info */}
        <motion.div
          className="mt-10 lg:mt-0 w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={visible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          <h2 id="location-title" className="text-3xl md:text-4xl font-bold">
            {LOCAL_INFO.name}
          </h2>
          <p className="text-gray-300 italic">{LOCAL_INFO.subtitle}</p>
          <ul className="space-y-4 text-gray-300 text-lg">
            {/* Address */}
            <li className="flex items-start gap-3">
              <MapPin className="w-6 h-6 text-teal-400 flex-shrink-0" aria-hidden="true" />
              <address className="not-italic">
                {LOCAL_INFO.address}
                <br />
                <span className="text-sm text-gray-400">Located in: {LOCAL_INFO.building}</span>
              </address>
            </li>

            {/* Phone Number */}
            {LOCAL_INFO.phones.map((num) => (
              <li key={num} className="flex items-start gap-3">
                <Phone className="w-6 h-6 text-teal-400 flex-shrink-0" aria-hidden="true" />
                <a href={`tel:${num}`} className="underline cursor-pointer">
                  {num}
                </a>
              </li>
            ))}

            {/* Rating */}
            <li className="flex items-start gap-3">
              <Star className="w-6 h-6 text-yellow-400 flex-shrink-0" aria-hidden="true" />
              <span>{LOCAL_INFO.rating} ★ ({LOCAL_INFO.reviewCount} Google reviews)</span>
            </li>

            {/* Category */}
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 text-teal-400 flex-shrink-0">⚡</span>
              <span>{LOCAL_INFO.category}</span>
            </li>

            {/* Services */}
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 text-blue-400 flex-shrink-0">🏢</span>
              <span>{LOCAL_INFO.services}</span>
            </li>

            {/* Hours */}
            <li className="flex items-start gap-3">
              <strong>Hours:</strong> <span>{LOCAL_INFO.hours}</span>
            </li>
          </ul>

          {/* JSON-LD Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LegalService",
                name: LOCAL_INFO.name,
                description: LOCAL_INFO.subtitle,
                telephone: LOCAL_INFO.phones,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "Chamber No. 49/50, Sufi Barkat Ali Law Building Basement, District Courts",
                  addressLocality: "Faisalabad",
                  postalCode: "38000",
                  addressCountry: "PK"
                },
                geo: {
                  "@type": "GeoCoordinates",
                  latitude: 31.4225019,
                  longitude: 73.0789714
                },
                openingHours: LOCAL_INFO.hours,
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: LOCAL_INFO.rating.toString(),
                  reviewCount: LOCAL_INFO.reviewCount.toString()
                },
                areaServed: "Pakistan",
                serviceType: "Civil, Criminal, Corporate, Banking Crimes, Revenue, Labour, Family Law"
              })
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
