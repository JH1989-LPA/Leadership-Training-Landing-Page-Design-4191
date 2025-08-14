import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiAward, FiUsers, FiTrendingUp } = FiIcons;

const TrainerSection = () => {
  const qualifications = [
    {
      icon: FiAward,
      text: "Mehr als 15 Jahre Erfahrung im Leadership Training für Organisationen, Führungskräfte und Talente"
    },
    {
      icon: FiUsers,
      text: "Gründer, Unternehmer und erfahrene Führungskraft, spezialisiert auf praxisorientierte Personalentwicklung"
    },
    {
      icon: FiTrendingUp,
      text: "Begeistert und motiviert mit praxisnahen Ansätzen, fundiertem Fachwissen und Kommunikation auf Augenhöhe"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/api/placeholder/500/600"
              alt="Julian Hessler - Trainer"
              className="w-full max-w-md mx-auto rounded-2xl shadow-2xl"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Der Trainer: Julian Hessler
              </h2>
              <p className="text-xl text-primary font-semibold mb-6">
                Führung mit Haltung. Und Wirkung.
              </p>
            </div>

            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                Führung lernt man nicht aus Theoriekursen – sondern im echten Alltag. Julian Hessler bringt genau dafür das richtige Rüstzeug mit: Fachliche Tiefe, Mittelstandserfahrung und eine Sprache, die Führungskräfte wirklich erreicht.
              </p>
              <p>
                Als Gründer von People Excellence hat er über 35 individuelle Entwicklungsprogramme für KMU konzipiert und umgesetzt – immer mit dem Ziel, Führung wirksam, praxisnah und messbar zu machen.
              </p>
            </div>

            <div className="space-y-4">
              {qualifications.map((qualification, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                    <SafeIcon icon={qualification.icon} className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-gray-700">{qualification.text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrainerSection;