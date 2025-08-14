import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShield, FiCheckCircle, FiMail } = FiIcons;

const GuaranteeSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="flex justify-center mb-6">
              <img
                src="https://via.placeholder.com/200x200/4BB79E/FFFFFF?text=100%25%0AGeld-zur%C3%BCck%0AGarantie"
                alt="100% Geld-zurück-Garantie"
                className="w-48 h-48 rounded-full"
              />
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              100% Geld-zurück-Garantie – Ohne Risiko für Sie!
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Wir glauben an die Qualität unseres Programms. Deshalb garantieren wir: 
              Falls Sie nach dem ersten Modul nicht überzeugt sind, erstatten wir Ihnen 
              den kompletten Preis zurück – ohne Wenn und Aber.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-start gap-3"
              >
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <SafeIcon icon={FiShield} className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Keine Kompromisse</h3>
                  <p className="text-gray-700">
                    Sie kaufen keine „Katze im Sack" – testen Sie unser Programm ohne Risiko
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex items-start gap-3"
              >
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <SafeIcon icon={FiMail} className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Einfache Abwicklung</h3>
                  <p className="text-gray-700">
                    Schreiben Sie uns einfach nach dem ersten Modul eine Mail und wir erstatten Ihnen den vollen Betrag
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;