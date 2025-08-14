import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiCheckCircle, FiChevronDown, FiChevronUp, FiTarget, FiUsers, FiMessageCircle, FiRefreshCw, FiGlobe, FiAward } = FiIcons;

const SolutionSection = () => {
  const [expandedModule, setExpandedModule] = useState(null);

  const phases = [
    {
      icon: FiTarget,
      title: "Analyse & Zielcoaching",
      subtitle: "KODE + Kick-off"
    },
    {
      icon: FiUsers,
      title: "3 Präsenzmodule",
      subtitle: "Rolle, Teamführung, Kommunikation"
    },
    {
      icon: FiRefreshCw,
      title: "Online-Vertiefung",
      subtitle: "Transferimpulse"
    },
    {
      icon: FiGlobe,
      title: "Toolbox & Begleitplattform",
      subtitle: "Kontinuierlicher Support"
    },
    {
      icon: FiAward,
      title: "Abschluss + Zertifikat",
      subtitle: "Erfolg dokumentiert"
    }
  ];

  const modules = [
    {
      title: "Modul 1: Klar in der Führungsrolle – statt schwimmen im Alltag",
      goal: "Die neue Führungskraft versteht ihre Rolle, Haltung und Verantwortung – und agiert bewusst statt reaktiv.",
      content: [
        "Von der Fachkraft zur Führungskraft – Rollenwechsel bewusst gestalten",
        "Erwartungen klären (oben, unten, selbst)",
        "Führungsmodelle & -prinzipien für den Mittelstand",
        "Führung & Persönlichkeit: Was motiviert mich? Was hemmt mich?",
        "Selbstführung & Fokus – souverän im Stress"
      ],
      benefit: "Ihre Führungskraft weiß, wofür sie Verantwortung trägt – und handelt entsprechend."
    },
    {
      title: "Modul 2: Team führen – Aufgaben, Verantwortung, Zusammenarbeit",
      goal: "Die Führungskraft kann Verantwortung übergeben, Zusammenarbeit gestalten und Mitarbeitende entwickeln.",
      content: [
        "Delegation & Übergabe im Alltag: klar, verbindlich, effizient",
        "Motivation & psychologische Grundbedürfnisse im Team",
        "Feedback geben, fordern & annehmen",
        "Umgang mit Fehlern, Konflikten und schwierigen Situationen",
        "Instrumente zur Teamsteuerung (Meetings, Aufgaben, Tools)"
      ],
      benefit: "Führung wird entlastend – Ihre Leute arbeiten mit, statt nur mitzulaufen."
    },
    {
      title: "Modul 3: Klar kommunizieren – Gespräche mit Wirkung führen",
      goal: "Die Führungskraft kann Gespräche wirksam führen – mit Struktur, Klarheit und emotionaler Kompetenz.",
      content: [
        "Die häufigsten Führungsformate (z. B. Zielgespräch, Kritikgespräch, Anerkennung)",
        "Gesprächsführung mit Struktur & Haltung",
        "Aktives Zuhören, Fragetechniken, innere Haltung",
        "Schwierige Gespräche souverän führen",
        "Transfer in den Führungsalltag: Gesprächsanlässe vorbereiten"
      ],
      benefit: "Ihre Führungskraft spricht Klartext – und bleibt dabei verbindlich und motivierend."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Aus Mitarbeitenden werden Führungspersönlichkeiten – Schritt für Schritt
          </h2>
        </motion.div>

        {/* Phases Overview */}
        <div className="grid md:grid-cols-5 gap-6 mb-16">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <SafeIcon icon={phase.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{phase.title}</h3>
              <p className="text-sm text-gray-600">{phase.subtitle}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Program Structure */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Detaillierter Programmablauf
          </h3>

          {/* KODE Analysis */}
          <div className="mb-8 p-6 bg-primary/5 rounded-xl">
            <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
              <SafeIcon icon={FiTarget} className="w-6 h-6 text-primary mr-3" />
              KODE-Kompetenzanalyse & Coaching
            </h4>
            <div className="space-y-3 text-gray-700">
              <p>• Online-Fragebogen (20-25 Minuten) zur individuellen Kompetenzeinschätzung</p>
              <p>• Wissenschaftliches Verfahren für präzise Ist-Profil-Erstellung</p>
              <p>• Persönliches KODE-Coaching zur Definition individueller Entwicklungsziele</p>
            </div>
          </div>

          {/* Modules */}
          <div className="space-y-4 mb-8">
            {modules.map((module, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setExpandedModule(expandedModule === index ? null : index)}
                  className="w-full p-6 text-left bg-white hover:bg-gray-50 transition-colors flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{module.title}</h4>
                    <p className="text-gray-600">{module.goal}</p>
                  </div>
                  <SafeIcon 
                    icon={expandedModule === index ? FiChevronUp : FiChevronDown} 
                    className="w-6 h-6 text-gray-400" 
                  />
                </button>
                
                {expandedModule === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="bg-gray-50 p-6 border-t border-gray-200"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Inhalte:</h5>
                        <ul className="space-y-2">
                          {module.content.map((item, idx) => (
                            <li key={idx} className="flex items-start">
                              <SafeIcon icon={FiCheckCircle} className="w-5 h-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-3">Nutzen für Sie:</h5>
                        <p className="text-primary font-medium bg-primary/10 p-4 rounded-lg">
                          {module.benefit}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Additional Components */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="p-6 bg-blue-50 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <SafeIcon icon={FiRefreshCw} className="w-6 h-6 text-blue-600 mr-3" />
                Refresher Sessions
              </h4>
              <p className="text-gray-700">
                Nach jedem Modul: 2 Live-Online Sessions à 2 Stunden zur Reflexion und Vertiefung. 
                Nachmittags terminiert für optimale Integration in den Arbeitsalltag.
              </p>
            </div>

            <div className="p-6 bg-green-50 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <SafeIcon icon={FiGlobe} className="w-6 h-6 text-green-600 mr-3" />
                Online Academy
              </h4>
              <p className="text-gray-700">
                Kontinuierlicher Zugriff auf Videos, Materialien und Forum. 
                Direkter Kontakt zum Trainer bei Fragen – Sie werden entlastet.
              </p>
            </div>
          </div>

          {/* Bonus Content */}
          <div className="p-6 bg-yellow-50 rounded-xl">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">Zusätzliche Wertbausteine:</h4>
            <div className="space-y-2 text-gray-700">
              <p>• <strong>KI-Essentials Online-Kurs</strong> (Wert: 900€ pro Teilnehmer)</p>
              <p>• <strong>Arbeitsrecht für Führungskräfte Webinar</strong> (Wert: 450€ pro Teilnehmer)</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-light transition-colors"
            >
              Ablauf als PDF anfordern
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;