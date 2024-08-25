import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { motion } from 'framer-motion';
const ContactSection = () => {
  return (
    <section id="contact" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
        whileInView={{y: 0, opacity: 1}}
        initial={{y: -100, opacity: 0}}
        transition={{duration: 1}}
        className="text-3xl font-bold text-center text-white mb-12">Contact Me</motion.h2>
        <div className="max-w-xl mx-auto text-center">
          <motion.p 
          whileInView={{x: 0, opacity: 1}}
          initial={{x: -100, opacity: 0}}
          transition={{duration: 1}}
          className="text-lg text-gray-400 mb-8">Feel free to reach out to me through any of the following platforms:</motion.p>
          <motion.div 
          whileInView={{x: 0, opacity: 1}}
          initial={{x: 100, opacity: 0}}
          transition={{duration: 1}}
          className="flex justify-center space-x-6">
            <a
              href="mailto:asifiqbalk99@gmail.com"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <FaEnvelope size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/asif-iqbal-khan-20094618b/"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://github.com/ASIF-Kh"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} />
            </a>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
