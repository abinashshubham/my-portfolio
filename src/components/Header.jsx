// src/components/Header.jsx
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0f1d]/70 backdrop-blur-xl border-b border-gray-800/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between h-20">
        
        {/* Branding Logo Signature */}
        <a 
          href="#home" 
          className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#4facfe] hover:opacity-90 transition-opacity"
        >
          Ouali<span className="text-white font-light">Code</span>
        </a>
        
        {/* Desktop Viewport Navigation Link Matrix */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10 text-sm font-semibold tracking-wide">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-gray-400 hover:text-white relative transition-colors duration-200 after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#00f2fe] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Primary Call-To-Action Gateway */}
        <div className="hidden md:block">
          <a 
            href="#contact" 
            className="px-5 py-2.5 rounded-xl border border-[#00f2fe]/40 text-[#00f2fe] hover:bg-[#00f2fe] hover:text-[#0a0f1d] font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-[#00f2fe]/5 hover:shadow-[#00f2fe]/20"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Interactive Drawer Trigger */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden p-2 rounded-xl text-gray-400 hover:text-white hover:bg-gray-800/40 focus:outline-hidden transition-colors"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Sidebar Navigation Drawer Overlay */}
      <div 
        className={`absolute top-20 left-0 w-full bg-[#0a0f1d] border-b border-gray-800/80 px-6 py-6 space-y-4 transition-all duration-300 ease-in-out md:hidden shadow-2xl ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-[-10px] invisible pointer-events-none'
        }`}
      >
        {navItems.map((item) => (
          <a 
            key={item.name} 
            href={item.href} 
            onClick={() => setIsOpen(false)} 
            className="block text-base font-medium text-gray-300 hover:text-[#00f2fe] px-3 py-2 rounded-xl hover:bg-gray-800/30 transition-all duration-200"
          >
            {item.name}
          </a>
        ))}
        <div className="pt-4 border-t border-gray-800/60">
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="block text-center w-full px-5 py-3 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#0a0f1d] font-bold text-sm uppercase tracking-wider"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;