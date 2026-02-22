import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="py-24 px-6 sm:px-8 bg-bg-light">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-text-main"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-bg-main p-6 sm:p-8 rounded-sm border-2 border-transparent hover:border-accent/50 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-bg-main to-bg-light"
        >
          <h3 className="text-2xl font-semibold mb-2">PMAS-Arid Agriculture University</h3>
          <p className="text-text-secondary text-lg">Master of Computer Science</p>
          <p className="text-text-main mt-2">CGPA: 3.92</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;

