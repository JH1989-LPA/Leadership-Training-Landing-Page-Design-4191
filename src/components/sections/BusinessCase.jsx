import React from 'react';
import {motion} from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const {FiTrendingUp, FiHeart, FiClock, FiTarget, FiAward} = FiIcons;

const BusinessCase = ({onOpenModal}) => {
  const benefits = [
    {
      icon: FiTrendingUp,
      benefit: "Höhere Führungsqualität",
      value: "Entlastung der Linie, bessere Entscheidungen"
    },
    {
      icon: FiHeart,
      benefit: "Höhere Mitarbeiterbindung",
      value: "durch souveräne Führung & Anerkennung"
    },
    {
      icon: FiClock,
      benefit: "Klar kalkulierbarer Aufwand",
      value: "feste Struktur, planbare Zeiten"
    },
    {
      icon: FiTarget,
      benefit: "Entwicklung statt Zufall",
      value: "keine Einzelfalllösungen mehr"
    },
    {
      icon: FiAward,
      benefit: "Signal nach innen",
      value: "Wir investieren in unsere Leute"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Was Sie als Unternehmen konkret gewinnen
          </h2>
        </motion.div>

        <div className="bg-gray-50 rounded-2xl p-4 md:p-8">
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-primary">
                  <th className="text-left py-4 px-4 text-lg font-semibold text-gray-900">Vorteil</th>
                  <th className="text-left py-4 px-4 text-lg font-semibold text-gray-900">Nutzen</th>
                </tr>
              </thead>
              <tbody>
                {benefits.map((item, index) => (
                  <motion.tr
                    key={index}
                    initial={{opacity: 0, x: -20}}
                    whileInView={{opacity: 1, x: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6, delay: index * 0.1}}
                    className="border-b border-gray-200 hover:bg-white transition-colors"
                  >
                    <td className="py-6 px-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                          <SafeIcon icon={item.icon} className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-gray-900">{item.benefit}</span>
                      </div>
                    </td>
                    <td className="py-6 px-4 text-gray-700">{item.value}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="md:hidden space-y-4">
            {benefits.map((item, index) => (
              <motion.div
                key={index}
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                viewport={{once: true}}
                transition={{duration: 0.6, delay: index * 0.1}}
                className="bg-white rounded-xl p-6 shadow-sm"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0">
                    <SafeIcon icon={item.icon} className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">{item.benefit}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.value}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6, delay: 0.5}}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{scale: 1.05}}
            whileTap={{scale: 0.95}}
            onClick={onOpenModal}
            className="bg-cta text-white px-10 py-4 rounded-lg font-semibold text-lg hover:bg-cta-light transition-colors"
          >
            Jetzt Platz unverbindlich reservieren!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessCase;