import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What legal services does Muhammad Ali Law Associates provide?',
    answer:
      'We specialize in Civil, Criminal, Corporate, Banking Crimes, Revenue, and Labour cases. Our firm provides fair, dedicated, and results-oriented legal services led by Ch. Muhammad Faysal Ghazi Advocate High Court.',
  },
  {
    question: 'Where is your office located?',
    answer:
      'You can find us at Chamber No. 49/50, Sufi Barkat Ali Law Building Basement, District Courts, Faisalabad, 38000. Here is our location on Google Maps: https://share.google/SvjDOPL5afrHtOuQ7',
  },
  {
    question: 'How can I contact Muhammad Ali Law Associates?',
    answer:
      'You can reach us directly by calling 0321 6677291. We are open 24 hours to provide timely legal assistance.',
  },
  {
    question: 'Do you handle family and matrimonial cases?',
    answer:
      'Yes, we handle a wide range of family cases, including divorce, khula, child custody, maintenance, and inheritance matters in accordance with the laws of Pakistan.',
  },
  {
    question: 'Can you represent me in High Court and Supreme Court cases?',
    answer:
      'Yes. Our team, led by an Advocate High Court, regularly represents clients in both High Court and Supreme Court of Pakistan cases.',
  },
];

const faqVariants = {
  closed: { height: 0, opacity: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
  open: { height: 'auto', opacity: 1, transition: { duration: 0.6, ease: 'easeInOut' } },
};

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (idx) => setOpenIndex(openIndex === idx ? null : idx);

  const renderAnswer = (text) =>
    text.split(/(https?:\/\/[^\s]+)/g).map((part, i) =>
      part.startsWith('http') ? (
        <a
          key={i}
          href={part}
          className="text-teal-400 underline hover:text-teal-300 transition"
          target="_blank"
          rel="noopener noreferrer"
        >
          {part}
        </a>
      ) : (
        part
      )
    );

  return (
    <section
      id="faq"
      className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white py-20 px-6 font-poppins overflow-hidden"
      itemScope
      itemType="https://schema.org/FAQPage"
      aria-labelledby="faq-heading"
    >
      <motion.h2
        id="faq-heading"
        className="text-4xl md:text-5xl font-extrabold text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}
      >
        Frequently Asked Questions
      </motion.h2>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-gray-800/50 backdrop-blur-lg border border-gray-700 rounded-xl overflow-hidden"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <button
              onClick={() => toggle(idx)}
              className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-semibold hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-800"
              itemProp="name"
              aria-expanded={openIndex === idx}
            >
              {faq.question}
              <motion.span
                animate={{ rotate: openIndex === idx ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-teal-400" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-teal-400" />
                )}
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === idx && (
                <motion.div
                  className="px-6 pb-6 text-gray-300 text-sm"
                  variants={faqVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  layout
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <div itemProp="text">{renderAnswer(faq.answer)}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
}
