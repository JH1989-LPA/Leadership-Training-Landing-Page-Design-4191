import React from 'react';
import { motion } from 'framer-motion';

const CTASection = ({ onOpenModal }) => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Jetzt Platz sichern oder mehr Infos erhalten
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
              className="bg-cta text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-cta-light transition-colors"
            >
              Jetzt Platz unverbindlich reservieren
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
              className="border-2 border-primary text-primary px-10 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-colors"
            >
              Programm-Infos anfordern
            </motion.button>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Oder vereinbaren Sie direkt einen Termin:
            </h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-light transition-colors"
            >
              Termin für weitere Infos auswählen!
            </motion.button>
            
            <div className="mt-6 space-y-2 text-sm text-gray-600">
              <p>✓ DSGVO-konform</p>
              <p>✓ Kein Spam, 100% unverbindlich</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;