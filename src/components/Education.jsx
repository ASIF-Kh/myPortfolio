import React from 'react';
import { educationData } from '../constants/index';
import { motion } from 'framer-motion';

const EducationSection = () => {
  return (
    <section id="education" className="py-16 text-white">
      <div className="container mx-auto px-4">
        <motion.h2 
        whileInView={{y: 0, opacity: 1}}
        initial={{y: -100, opacity: 0}}
        transition={{duration: 1}}
        className="text-3xl font-bold text-center mb-12 mt-5">Education</motion.h2>
        <div className="space-y-8">
          {educationData.map((education, index) => (
            <motion.div
            whileInView={{y: 0, opacity: 1}}
            initial={{y: -100, opacity: 0}}
            transition={{duration: 1}}
              key={index}
              className=" shadow-white p-6 rounded-lg shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-l lg:text-2xl font-semibold">{education.degree}</h3>
                <span className="text-gray-400">{education.year}</span>
              </div>
              <p className=' text-blue-400'>{education.institute}</p>
              <p className="mt-2 text-gray-400">CGPA: {education.cgpa}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
