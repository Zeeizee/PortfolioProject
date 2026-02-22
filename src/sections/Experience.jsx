import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/experience';

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-16 text-text-main"
        >
          Experience
        </motion.h2>
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-bg-light p-6 sm:p-8 rounded-sm border-2 border-transparent hover:border-accent/50 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-bg-light to-bg-main"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{exp.company}</h3>
                  <p className="text-text-secondary text-sm mb-1">{exp.location}</p>
                </div>
                <div className="text-right mt-2 sm:mt-0">
                  <p className="text-text-main font-medium">{exp.position}</p>
                  <p className="text-text-secondary text-sm">{exp.period}</p>
                </div>
              </div>
              <ul className="space-y-2 mt-6">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="text-text-secondary flex items-start">
                    <span className="text-accent mr-2 font-bold text-lg">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

