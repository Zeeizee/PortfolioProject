import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 px-6 sm:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-text-main"
        >
          Certifications
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-bg-main p-6 sm:p-8 rounded-sm border-2 border-transparent hover:border-accent/50 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-bg-main to-bg-light"
        >
          <h3 className="text-2xl font-semibold">MERN Stack Development</h3>
          <p className="text-text-secondary mt-2">DevNation</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;

