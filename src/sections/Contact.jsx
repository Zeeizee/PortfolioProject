import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { contact } from '../data/contact';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa';

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: null, message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status when user starts typing
    if (status.type) {
      setStatus({ type: null, message: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsLoading(true);
    setStatus({ type: null, message: '' });

    try {
      // Get EmailJS credentials from environment variables
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS credentials are not configured. Please check your .env file.');
      }

      const result = await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey
      );

      if (result.text === 'OK') {
        setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      const errorMessage = error.message?.includes('credentials') 
        ? 'EmailJS is not configured. Please check your .env file.'
        : 'Failed to send message. Please try again or contact me directly at zenizee563@gmail.com';
      setStatus({ type: 'error', message: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 sm:px-8 bg-bg-light">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold mb-16 text-text-main"
        >
          Contact
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-4"
          >
            <div className="text-2xl text-accent">
              <FaPhone />
            </div>
            <div>
              <p className="text-sm text-text-secondary mb-1">Phone</p>
              <a href={`tel:${contact.phone}`} className="text-text-main hover:text-accent transition-colors font-medium">
                {contact.phone}
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center gap-4"
          >
            <div className="text-2xl text-accent">
              <FaEnvelope />
            </div>
            <div>
              <p className="text-sm text-text-secondary mb-1">Email</p>
              <a href={`mailto:${contact.email}`} className="text-text-main hover:text-accent transition-colors font-medium">
                {contact.email}
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-4 md:col-span-2"
          >
            <div className="text-2xl text-accent">
              <FaMapMarkerAlt />
            </div>
            <div>
              <p className="text-sm text-text-secondary mb-1">Location</p>
              <p className="text-text-main">{contact.location}</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-bg-main p-8 rounded-sm border-2 border-bg-light shadow-lg"
        >
          <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-4 py-3 bg-bg-light border-2 border-primary/30 rounded-sm text-text-main placeholder-text-secondary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 bg-bg-light border-2 border-primary/30 rounded-sm text-text-main placeholder-text-secondary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                required
                className="w-full px-4 py-3 bg-bg-light border-2 border-primary/30 rounded-sm text-text-main placeholder-text-secondary focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-colors resize-none"
              />
            </div>
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex items-center gap-2 p-4 rounded-sm border-2 ${
                  status.type === 'success'
                    ? 'bg-green-50 text-green-800 border-green-400'
                    : 'bg-red-50 text-red-800 border-red-400'
                }`}
              >
                {status.type === 'success' ? (
                  <FaCheckCircle className="text-lg flex-shrink-0" />
                ) : (
                  <FaExclamationCircle className="text-lg flex-shrink-0" />
                )}
                <p className="text-sm font-medium">{status.message}</p>
              </motion.div>
            )}
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full sm:w-auto px-8 py-3 bg-accent text-white font-semibold rounded-sm hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 ${
                isLoading ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

