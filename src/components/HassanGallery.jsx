import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 120, damping: 16 } },
  hover: { scale: 1.05, boxShadow: '0 0 15px rgba(14,206,174,0.8)', transition: { duration: 0.4, ease: 'easeInOut' } },
};
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

// Gallery items with descriptions
const galleryItems = [
  { src: '/bucha1.jpg', title: 'Preventive Checkup', desc: 'Routine exam includes X-rays, oral evaluation, and personalized hygiene guidance.' },
  { src: '/bucha2.jpg', title: 'Scaling & Polishing', desc: 'Deep cleaning to remove plaque, tartar, and surface stains for fresh breath.' },
  { src: '/bucha3.jpg', title: 'Fluoride Treatment', desc: 'Protective fluoride varnish strengthens enamel and helps prevent cavities.' },
  { src: '/b9.png', title: 'Teeth Whitening', desc: 'In-office bleaching to brighten your smile up to 8 shades safely.' },
  { src: '/b12.jpg', title: 'Smile Makeover', desc: 'Customized veneers, bonding, and braces for a complete aesthetic transformation.' },
  { src: '/b11.jpg', title: 'Digital Dentistry', desc: '3D imaging and CAD/CAM precision for seamless restorations.' },
];

export default function HassanGallery() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="hassan-gallery"
      aria-labelledby="hassan-gallery-title"
      className="bg-gradient-to-br from-black via-gray-900 to-black py-20 px-4 sm:px-6 lg:px-8 text-gray-200 relative"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          id="hassan-gallery-title"
          className="text-3xl sm:text-4xl font-bold text-white mb-4 font-poppins"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Hassan's Service Gallery
        </motion.h2>
        <motion.p
          className="mb-12 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Hover over each image to learn more about our dental procedures.
        </motion.p>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {galleryItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden rounded-2xl cursor-pointer"
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setSelected(idx)}
            >
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-48 sm:h-56 object-cover"
              />
              {/* Overlay on hover */}
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center opacity-0"
                variants={{ hover: { opacity: 1, transition: { duration: 0.4 } } }}
              >
                <h3 className="text-white text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm px-4">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal overlay for enlarged image and description */}
      {selected !== null && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelected(null)}
        >
          <motion.img
            src={galleryItems[selected].src}
            alt={galleryItems[selected].title}
            className="max-w-full max-h-3/4 rounded-2xl shadow-2xl mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 120 }}
          />
          <h3 className="text-white text-2xl font-semibold mb-2">{galleryItems[selected].title}</h3>
          <p className="text-gray-300 text-base max-w-xl text-center">{galleryItems[selected].desc}</p>
        </motion.div>
      )}
    </section>
  );
}
