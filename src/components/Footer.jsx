// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-800/60 bg-[#0a0f1d] py-8 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs tracking-wider text-gray-500 font-medium">
        <p>{new Date().getFullYear()} Abinash Shubham. All Rights Reserved.</p>
        <p className="text-gray-400">Software Developer & UI Designer | Built with React & Tailwind CSS v4</p>
      </div>
    </footer>
  );
};

export default Footer;