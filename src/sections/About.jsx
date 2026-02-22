import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 px-6 sm:px-8 bg-bg-light">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-12 text-text-main"
        >
          About
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6 text-lg text-text-secondary leading-relaxed"
        >
          <p>
            I'm a Frontend Developer specializing in React 18, TypeScript, and Tailwind CSS, 
            with a focus on building AI-integrated SaaS platforms that deliver exceptional user experiences.
          </p>
          <p>
            My expertise lies in performance optimization and creating scalable applications that 
            handle high traffic efficiently. I've built platforms serving 500+ daily users while 
            maintaining 99.9% uptime, ensuring reliability and seamless functionality.
          </p>
          <p>
            I'm passionate about writing clean, maintainable code and leveraging modern tools 
            to solve complex problems. Whether it's implementing AI features, optimizing rendering 
            performance, or building reusable component libraries, I approach each challenge with 
            attention to detail and a focus on impact.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

