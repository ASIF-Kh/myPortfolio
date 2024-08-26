import React from 'react';
import { FaJsSquare, FaReact, FaNodeJs, FaCss3Alt } from 'react-icons/fa';
import { SiMongodb, SiMysql, SiTailwindcss, SiPython, SiExpress, SiTensorflow, SiPytorch, SiDjango } from 'react-icons/si';
import { motion } from 'framer-motion';
const skillsData = [
  { name: 'JavaScript', icon: <FaJsSquare />, level: 'Advance' },
  { name: 'MongoDB', icon: <SiMongodb />, level: 'Beginner' },
  { name: 'Express', icon: <SiExpress />, level: 'Beginner' },
  { name: 'React', icon: <FaReact />, level: 'Intermediate' },
  { name: 'Node.js', icon: <FaNodeJs />, level: 'Intermediate' },
  { name: 'SQL', icon: <SiMysql />, level: 'Intermediate' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 'Intermediate' },
  { name: 'Python', icon: <SiPython />, level: 'Advance' },
  { name: 'TensorFlow', icon: <SiTensorflow />, level: 'Intermediate' },
  { name: 'PyTorch', icon: <SiPytorch />, level: 'Intermediate' },
  { name: 'Django', icon: <SiDjango />, level: 'Intermediate' },
];

const Skills = () => {
  return (
    <section id='skill'  className="pt-10 text-center">
      <motion.h2 
      whileInView={{y: 0, opacity: 1}}
      initial={{y: -100, opacity: 0}}
      transition={{duration: 1}}
      className="text-3xl font-bold mb-6 mt-10">Skills</motion.h2>
      <div className="flex flex-wrap justify-center gap-6">
        {skillsData.map((skill, index) => (
          <motion.div
            whileInView={{ x: 0, opacity: 1 }}
            initial={{ x: -100, opacity: 0 }}
            transition={{ duration: 1 }}
            key={index}
            className="p-3 lg:p-6 rounded-lg shadow-md flex flex-col items-center w-32 lg:w-40 border-2"
          >
            <div className="text-2xl lg:text-4xl text-blue-500 mb-4">{skill.icon}</div>
            <h3 className="text-lg lg:text-xl font-semibold">{skill.name}</h3>
            <p className="text-gray-500">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
