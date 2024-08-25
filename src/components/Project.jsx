import React from 'react';
import { projects } from '../constants/index';
import { motion } from 'framer-motion';

const ProjectSection = () => {
  return (
    <section id="projects" className="py-16 ">
      <div className="container mx-auto px-4">
        <motion.h2 
        whileInView={{y: 0, opacity: 1}}
        initial={{y: -100, opacity: 0}}
        transition={{duration: 1}}
        className="text-3xl font-bold text-center text-white mb-12">Projects</motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
            whileInView={{x: 0, opacity: 1}}
            initial={{x: 200, opacity: 0}}
            transition={{duration: 1}}
            key={index} className="border-gray-50 border-2 p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-base text-gray-300 mb-4">{project.description}</p>
              <div className="mb-4">
                <span className="text-sm font-semibold text-gray-400">Technologies: </span>
                <ul className="list-none text-gray-300">
                  {project.technologies.map((tech, idx) => (
                    <li key={idx} className="inline-block mr-2 mt-2">
                      <span className="bg-blue-600 text-white py-1 px-2 rounded">{tech}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href={project.link}
                className="inline-block text-blue-500 hover:underline mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
