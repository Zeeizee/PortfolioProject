import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { contact } from '../data/contact';

const Footer = () => {
  return (
    <footer className="py-8 px-6 sm:px-8 border-t border-bg-light">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-secondary text-sm">
          © {new Date().getFullYear()} Zeenat Parveen. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-text-secondary hover:text-accent transition-colors transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-text-secondary hover:text-accent transition-colors transform hover:scale-110"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

