import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer = ({ onOpenModal }) => {
  return (
    <footer className="bg-primary text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-semibold mb-4">Kontakt</h3>
            <div className="space-y-2 text-white/90">
              <p>Agavos e.G.</p>
              <p>Vorstand Julian Hessler</p>
              <p>info@fuehrungs.academy</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Rechtliches</h3>
            <div className="space-y-2">
              <Link 
                to="/impressum" 
                className="block text-white/90 hover:text-white transition-colors"
              >
                Impressum
              </Link>
              <Link 
                to="/datenschutz" 
                className="block text-white/90 hover:text-white transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Jetzt starten</h3>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onOpenModal}
              className="bg-cta text-white px-6 py-3 rounded-lg font-semibold hover:bg-cta-light transition-colors"
            >
              Platz im Programm unverbindlich reservieren
            </motion.button>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-white/80">
          <p>&copy; 2024 Agavos e.G. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;