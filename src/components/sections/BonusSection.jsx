import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiGift, FiClock, FiMessageCircle } = FiIcons;

const BonusSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-cta to-cta-light text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">
            Jetzt anmelden und zusätzlich profitieren
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiGift} className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Exklusive Boni</h3>
            <p className="text-white/90">
              Kostenloser Zugang zur Arbeitsrecht Webinar + KI-Essentials Online Kurs für Ihre Mitarbeiter
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiClock} className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Begrenzte Plätze</h3>
            <p className="text-white/90">
              Nur 12 Plätze pro Durchgang – nächste Runde startet am 20.10.2025
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiMessageCircle} className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Unverbindlich</h3>
            <p className="text-white/90">
              Unverbindlich informieren – wir halten Ihnen einen Platz frei.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;