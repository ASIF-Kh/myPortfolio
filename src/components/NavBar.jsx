import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (

    <nav className="fixed w-full z-50 top-0 shadow-lg mb-5 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <a href="#home"><img className='w-10' src={logo} alt="" /></a>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            Home
          </a>
          <a href="#about" className="text-gray-400 hover:text-white transition-colors">
            About
          </a>
          <a href="#skill" className="text-gray-400 hover:text-white transition-colors">
            Skills
          </a>
          <a href="#education" className="text-gray-400 hover:text-white transition-colors">
            Education
          </a>
          <a href="#experience" className="text-gray-400 hover:text-white transition-colors">
            Experience
          </a>
          <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-400 hover:text-white focus:outline-none">
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <a href="#home" onClick={toggleMenu} className="block px-4 py-2 text-gray-400 hover:text-white transition-colors">
          Home
        </a>
        <a href="#about" onClick={toggleMenu} className="block px-4 py-2 text-gray-400 hover:text-white transition-colors">
          About
        </a>
        <a href="#projects" onClick={toggleMenu} className="block px-4 py-2 text-gray-400 hover:text-white transition-colors">
          Projects
        </a>
        <a href="#experience" onClick={toggleMenu} className="block px-4 py-2 text-gray-400 hover:text-white transition-colors">
          Experience
        </a>
        <a href="#contact" onClick={toggleMenu} className="block px-4 py-2 text-gray-400 hover:text-white transition-colors">
          Contact
        </a>
      </div>
    </nav>

  );
};

export default Navbar;
