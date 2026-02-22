import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { contact } from '../data/contact';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 sm:px-8 pt-20">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 text-text-main"
        >
          Zeenat Parveen
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl text-accent mb-8 font-light"
        >
          Frontend Developer (MERN)
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Building scalable, high-performance web applications with React 18, TypeScript, and modern tooling. 
          Specialized in AI-integrated SaaS platforms serving 500+ daily users with 99.9% uptime.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            to="projects"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="px-8 py-3 bg-accent text-white font-semibold rounded-sm hover:bg-gold-dark transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            View Projects
          </Link>
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-sm hover:bg-accent hover:text-white transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Contact Me
          </Link>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex items-center justify-center gap-6"
        >
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-text-secondary hover:text-accent transition-colors transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-text-secondary hover:text-accent transition-colors transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

