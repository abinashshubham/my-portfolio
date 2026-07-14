// src/components/Header.jsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scrolling when full-screen mobile menu is active
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0f1d]/70 backdrop-blur-xl border-b border-gray-800/60 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-5 sm:px-9 md:px-7 lg:px-9 flex items-center justify-between h-20">
        {/* Branding Logo Signature */}
        <a
          href="#home"
          className="text-2xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] to-[#4facfe] hover:opacity-90 transition-opacity z-50"
        >
          Abinash<span className="text-white font-light">Dev</span>
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

        {/* Mobile Interactive Toggle - Aligned Perfectly to the Right */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 rounded-xl text-gray-400 hover:text-white bg-gray-900/40 border border-gray-800/80 focus:outline-hidden transition-all duration-200 z-50 ml-auto"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Immersive Full-Screen Mobile Drawer Overlay */}
      <div
        className={`fixed inset-0 w-screen h-screen bg-[#0a0f1d] flex flex-col justify-center items-center px-8 transition-all duration-400 ease-in-out md:hidden z-40 ${
          isOpen
            ? "opacity-100 translate-x-0 visible"
            : "opacity-0 translate-x-full invisible pointer-events-none"
        }`}
      >
        {/* Ambient Subtle Background Blobs for Visual Interest inside the Mobile Menu */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-72 h-72 bg-[#00f2fe]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="flex flex-col items-center justify-center space-y-6 w-full text-center">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: isOpen ? `${index * 50}ms` : '0ms' }}
              className={`text-2xl font-bold tracking-tight text-gray-300 hover:text-[#00f2fe] transition-all duration-300 transform ${
                isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {item.name}
            </a>
          ))}
          
          <div 
            className={`pt-8 border-t border-gray-800/60 w-full max-w-[240px] transition-all duration-300 transform ${
              isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isOpen ? `${navItems.length * 50}ms` : '0ms' }}
          >
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center w-full px-5 py-3.5 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#0a0f1d] font-bold text-sm uppercase tracking-widest shadow-lg shadow-[#00f2fe]/10"
            >
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;