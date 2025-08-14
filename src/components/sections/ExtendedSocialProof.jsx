import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const ExtendedSocialProof = ({ onOpenModal }) => {
  useEffect(() => {
    // Load the iframe resizer script
    const script = document.createElement('script');
    script.src = 'https://embed.socialjuice.io/js/iframeResizer.min.js';
    script.async = true;
    script.onload = () => {
      // Initialize iframe resizer after script loads
      if (window.iFrameResize) {
        window.iFrameResize(
          { log: false, checkOrigin: false }, 
          "#socialjuice-wall-seminare-people-excellence-bewertungen-6092"
        );
      }
    };
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
            Bisher haben wir mehr als 100 Führungskräfte aus KMU fit gemacht. 
            <br />
            <span className="text-primary">Ihre Führungskräfte auch bald?</span>
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
            id="socialjuice-wall-seminare-people-excellence-bewertungen-6092" 
            src="https://embed.socialjuice.io/wall/6016?s=seminare-people-excellence-bewertungen&id=6092&custom=true" 
            allowFullScreen 
            allowTransparency="true" 
            frameBorder="0" 
            scrolling="no" 
            width="100%" 
            height="575px"
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
            Jetzt Platz unverbindlich reservieren!
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExtendedSocialProof;