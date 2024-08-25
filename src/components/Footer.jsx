import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-gray-400 text-sm">
          © {new Date().getFullYear()} Asif Iqbal Khan. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
