import React from 'react';
import { experiences } from '../constants/index';
import { motion } from 'framer-motion';

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16">
      <div className="container mx-auto px-4">
        <motion.h2 
        whileInView={{y: 0, opacity: 1}}
        initial={{y: -100, opacity: 0}}
        transition={{duration: 1}}
        className="text-3xl font-bold text-center text-white mb-12 mt-10">Experience</motion.h2>
       
          {experiences.map((experience, index) => (
            <motion.div 
            whileInView={{y: 0, opacity: 1}}
            initial={{y: -100, opacity: 0}}
            transition={{duration: 1}}
            key={index} className="mb-10 ml-6 relative">
              
              <div className="p-6 rounded-lg shadow-2xl border-white border-2">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-xl font-semibold text-white">{experience.jobTitle}</h3>
                  <span className="text-sm text-gray-400">{experience.duration}</span>
                </div>
                <h4 className="text-lg text-blue-400 mb-2">{experience.company}</h4>
                <p className="text-base text-gray-300">{experience.description}</p>
              </div>
            </motion.div>
          ))}
        
      </div>
    </section>
  );
};

export default ExperienceSection;
