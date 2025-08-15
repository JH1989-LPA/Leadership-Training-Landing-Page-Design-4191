import React from 'react';
import {motion} from 'framer-motion';

const TrustLogos = () => {
  const logos = [
    {name: '3DEFACTO', url: '/images/3defacto.png'},
    {name: 'Almawatech', url: '/images/almawatech.png'},
    {name: 'BorgWarner', url: '/images/borgwarner.png'},
    {name: 'Zedira', url: '/images/placeholder_logo.png'},
    {name: 'Varex', url: '/images/placeholder_logo.png'},
    {name: 'Persema', url: '/images/placeholder_logo.png'},
    {name: 'Pirelli', url: '/images/placeholder_logo.png'},
    {name: 'Pitney Bowes', url: '/images/placeholder_logo.png'},
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{opacity: 0, y: 20}}
          whileInView={{opacity: 1, y: 0}}
          viewport={{once: true}}
          transition={{duration: 0.6}}
          className="text-center mb-12"
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Diese Unternehmen haben bereits teilgenommen
          </h2>
        </motion.div>

        <div className="overflow-hidden">
          <motion.div
            animate={{x: [0, -100]}}
            transition={{duration: 20, repeat: Infinity, ease: "linear"}}
            className="flex gap-8 items-center"
            style={{width: 'calc(200% + 2rem)'}}
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-white rounded-lg shadow-sm grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img
                  src={logo.url}
                  alt={logo.name}
                  className="max-w-full max-h-full object-contain opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrustLogos;