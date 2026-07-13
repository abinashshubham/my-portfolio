// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-800/60 bg-[#0a0f1d] py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-wider text-gray-500 font-medium">
        <p>&copy; {new Date().getFullYear()} OualiCode System Studio. All Rights Reserved.</p>
        <p className="text-gray-400">Engineered with React & Tailwind CSS v4 Premium Matrix</p>
      </div>
    </footer>
  );
};

export default Footer;