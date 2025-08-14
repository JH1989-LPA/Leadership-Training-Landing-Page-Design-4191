import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAlertCircle, FiUsers, FiTrendingDown, FiClock } = FiIcons;

const ProblemSection = () => {
  const problems = [
    {
      icon: FiUsers,
      text: "Fachliche Top-Leute rutschen ohne Führungsvorbereitung in Verantwortung"
    },
    {
      icon: FiTrendingDown,
      text: "Die besten Mitarbeitenden fehlen im Alltag, weil sie unklar führen"
    },
    {
      icon: FiAlertCircle,
      text: "Hohe Fluktuation oder Demotivation im Team trotz bester Absicht"
    },
    {
      icon: FiClock,
      text: "Wenig interne Kapazitäten für systematische Entwicklung"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Warum gerade jetzt ein Führungsprogramm den Unterschied macht
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                <SafeIcon icon={problem.icon} className="w-6 h-6 text-red-600" />
              </div>
              <p className="text-gray-700 text-lg leading-relaxed">{problem.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-xl text-primary font-semibold bg-primary/10 inline-block px-8 py-4 rounded-xl">
            Fit für Führung wurde genau für diese Herausforderungen entwickelt – kompakt, praxisnah und wirksam.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;