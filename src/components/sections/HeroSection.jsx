import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiStar } = FiIcons;

const HeroSection = ({ onOpenModal }) => {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Führung stärken.
                <br />
                <span className="text-primary">Talente entwickeln.</span>
                <br />
                Unternehmen sichern.
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Fit für Führung ist das strukturierte Entwicklungsprogramm für angehende Führungskräfte in KMU – praxisnah, individuell und mit messbarem Effekt.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenModal}
                className="bg-cta text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cta-light transition-colors"
              >
                Platz sichern
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenModal}
                className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-white transition-colors"
              >
                Infos anfordern
              </motion.button>
            </div>

            <div className="space-y-4">
              <p className="text-gray-700 font-medium">
                Über 50 KMU vertrauen bereits auf Fit für Führung
              </p>
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-gray-600 ml-2">Teilnehmerfeedback</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="/api/placeholder/600/400"
              alt="Erfolgreiche Führungskräfte nach dem Training - Teamfoto mit Daumen hoch"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">4.9/5</span>
              </div>
              <p className="text-xs text-gray-600 mt-1">Teilnehmerbewertung</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;