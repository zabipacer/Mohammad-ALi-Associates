import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaStethoscope, FaCertificate } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // or 'next/link'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// Structured data for Doctor
const doctorJsonLd = {
  "@context": "https://schema.org",
  "@type": "Physician",
  "name": "Dr. Imran Bucha",
  "image": "https://example.com/images/dr-imran-bucha.jpg",
  "medicalSpecialty": "Dentistry",
  "description": "Dr. Imran Bucha has over 25 years of experience in restorative and cosmetic dentistry, integrating advanced digital techniques with patient-focused care since 2000.",
  "alumniOf": [
    "Bahauddin Zakariya University",
    "Nishtar Medical College"
  ],
  "hasCredential": [
    "Certificate in Plantology",
    "Endodontist Certification",
    "Conservative Dentistry Certification",
    "Prosthodontist Certification",
    "Invisible Aligners Training"
  ],
  "url": "https://example.com/about/dr-imran-bucha"
};

export default function AboutDoctor() {
  return (
    <section
      id="about-doctor"
      aria-labelledby="about-doctor-title"
      className="bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8 text-gray-200"
      itemScope
      itemType="https://schema.org/Physician"
    >
      {/* JSON-LD for SEO */}
      <script type="application/ld+json">{JSON.stringify(doctorJsonLd)}</script>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
        {/* Image Column */}
        <motion.div
          className="col-span-1 lg:col-span-2"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <img
            src="/Doctitrbuchaimage.jpg"
            alt="Dr. Imran Bucha"
            className="rounded-3xl shadow-2xl w-full h-auto object-cover"
            itemProp="image"
          />
        </motion.div>

        {/* Content Column */}
        <motion.div
          className="col-span-1 lg:col-span-3"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2
            id="about-doctor-title"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 font-poppins leading-tight"
            itemProp="name"
          >
            Meet Dr. Imran Bucha
          </h2>
          <p className="text-lg sm:text-xl mb-10 leading-relaxed max-w-prose" itemProp="description">
       With over 25 years of experience since graduating in 2000, Dr. Imran Bucha earned his degrees from Nishtar Medical College, operating under the umbrella of Bahauddin Zakariya University. He combines advanced digital techniques with personalized care to deliver healthy, confident smiles.  </p>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-10">
            {/* Education Card */}
            <motion.div className="flex flex-col items-start p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl h-full" variants={fadeInUp}>
              <FaUserMd className="w-10 h-10 text-teal-400 mb-4" aria-hidden="true" />
              <h3 className="text-white text-xl font-semibold mb-2" itemProp="alumniOf">Education</h3>
              <p className="text-gray-300 text-sm">Bahauddin Zakariya University (2000)<br/>Nishtar Medical College</p>
            </motion.div>

            {/* Certificates Card */}
            <motion.div className="flex flex-col items-start p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl h-full" variants={fadeInUp}>
              <FaCertificate className="w-10 h-10 text-teal-400 mb-4" aria-hidden="true" />
              <h3 className="text-white text-xl font-semibold mb-2">Certificates</h3>
              <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                <li>Certificate in Implantology</li>
                <li>Endodontist Certification</li>
                <li>Conservative Dentistry Certification</li>
                <li>Prosthodontist Certification</li>
                <li>Invisible Aligners Training</li>
               <li>Orthodontist</li>
              
              </ul>
            </motion.div>

            {/* Specialty Card */}
            <motion.div className="flex flex-col items-start p-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-2xl h-full" variants={fadeInUp}>
              <FaStethoscope className="w-10 h-10 text-teal-400 mb-4" aria-hidden="true" />
              <h3 className="text-white text-xl font-semibold mb-2" itemProp="medicalSpecialty">Specialty</h3>
              <p className="text-gray-300 text-sm">Restorative & Cosmetic Dentistry</p>
            </motion.div>
          </div>

          <Link
            to="https://api.whatsapp.com/send?phone=923336194850"
            className="inline-block px-8 py-4 bg-teal-400 text-black font-medium rounded-full hover:shadow-2xl transition-shadow text-base"
            aria-label="Book an appointment with Dr. Imran Bucha"
          >
            Book an Appointment
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
