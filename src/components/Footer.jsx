import React from 'react';
import { motion } from 'framer-motion';
import {
  FaPhone,
  FaMapMarkerAlt,
  FaEnvelope,
  FaFacebookF,
  FaWhatsapp,
} from 'react-icons/fa';

const columns = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export default function Footer() {
  const phones = ['+923216677291'];

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white pt-16 pb-8 font-poppins">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=40 height=40 viewBox=0 0 40 40 xmlns=\'http://www.w3.org/2000/svg\'%3E%3Ccircle cx=20 cy=20 r=1 fill=%27%23FFFFFF%27 opacity=0.15/%3E%3C/svg%3E')]" />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 z-10">
        {/* Law Firm Info */}
        <motion.div {...columns}>
          <h4 className="text-lg font-bold mb-4">Muhammad Ali Law Associates</h4>
          <p className="text-sm mb-3 flex items-start gap-2">
            <FaMapMarkerAlt className="text-teal-400 mt-1" />
            Chamber No. 49/50, Sufi Barkat Ali Law Building Basement, District Courts, Faisalabad, 38000
          </p>
          {phones.map((num) => (
            <p key={num} className="text-sm mb-2 flex items-center gap-2">
              <FaPhone className="text-teal-400" />
              <a
                href={`tel:${num}`}
                className="hover:underline cursor-pointer"
              >
                {num}
              </a>
            </p>
          ))}
          <p className="text-sm flex items-center gap-2">
            <FaEnvelope className="text-teal-400" />
            <a
              href="mailto:faysalghazi@outlook.com"
              className="hover:underline"
            >
              faysalghazi@outlook.com
            </a>
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.nav {...columns} aria-label="Quick Links">
          <h4 className="text-lg font-bold mb-4">Quick Links</h4>
          <ul className="text-sm space-y-2">
            <li><a href="https://dsjfaisalabad.gov.pk" className="hover:text-gray-300">District and Session Judge Faisalabad</a></li>
            <li><a href="https://fda.gov.pk" className="hover:text-gray-300">FDA Faisalabad</a></li>
            <li><a href="https://rpofsd.punjabpolice.gov.pk" className="hover:text-gray-300">Faisalabad Police</a></li>
            <li><a href="https://fcci.com.pk" className="hover:text-gray-300">Faisalabad Chamber of Commerce</a></li>
            <li><a href="https://web.uaf.edu.pk" className="hover:text-gray-300">University of Agriculture Faisalabad</a></li>
            <li><a href="https://gcuf.edu.pk" className="hover:text-gray-300">Government College University Faisalabad</a></li>
          </ul>
        </motion.nav>

        {/* Practice Areas */}
        <motion.nav {...columns} aria-label="Practice Areas">
          <h4 className="text-lg font-bold mb-4">Practice Areas</h4>
          <ul className="text-sm space-y-2">
            <li><a href="#services" className="hover:text-gray-300">Civil Litigation</a></li>
            <li><a href="#services" className="hover:text-gray-300">Criminal Defense</a></li>
            <li><a href="#services" className="hover:text-gray-300">Family & Matrimonial Law</a></li>
            <li><a href="#services" className="hover:text-gray-300">Corporate & Banking Law</a></li>
          </ul>
        </motion.nav>

        {/* Social & Connect */}
        <motion.div {...columns}>
          <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
          <div className="flex space-x-4 mb-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className="text-lg hover:text-blue-400" />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=923216677291"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp className="text-lg hover:text-green-400" />
            </a>
          </div>
          <p className="text-sm">
            Dedicated to justice and fairness. Providing expert legal services in Faisalabad and beyond.
          </p>
        </motion.div>
      </div>

      {/* Footer Bottom */}
      <div className="text-center mt-12 text-xs text-gray-400 border-t border-gray-700 pt-4 z-10 relative">
        © {new Date().getFullYear()} Muhammad Ali Law Associates. All rights reserved.
      </div>
    </footer>
  );
}
