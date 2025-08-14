import React from 'react';
import { motion } from 'framer-motion';

const TestimonialsSection = ({ onOpenModal }) => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Was die Teilnehmer aus KMU über Fit für Führung sagen
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <iframe 
            id="socialjuice-deluxe-fit-fuer-fuehrung-5257" 
            src="https://embed.socialjuice.io/deluxe/1199?s=fit-fuer-fuehrung" 
            allowFullScreen 
            allowTransparency="true" 
            frameBorder="0" 
            scrolling="no" 
            width="100%" 
            height="520px"
            className="rounded-xl shadow-lg"
          ></iframe>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenModal}
            className="bg-cta text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-cta-light transition-colors"
          >
            Jetzt Platz unverbindlich reservieren
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;