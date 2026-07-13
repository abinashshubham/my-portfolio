import React from 'react';
import { ArrowRight, Download } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Visual background ambient blobs */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-[#00f2fe]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-96 h-96 bg-[#4facfe]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Side Branding info */}
        <div className="lg:col-span-7 space-y-6 text-center lg:text-left" data-aos="fade-right">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111a2e] border border-gray-800 text-xs font-semibold tracking-wide text-[#00f2fe]">
            <span className="flex h-2 w-2 rounded-full bg-[#00f2fe] animate-pulse"></span>
            Available for New Opportunities
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none text-white">
            Creative Web <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#2575fc] to-[#4facfe]">
              Developer.
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
            Building functional front-end layouts and high-performance user interfaces with React and atomic responsive styles.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a href="#projects" className="group flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#0a0f1d] font-bold text-sm shadow-xl shadow-[#00f2fe]/20 hover:shadow-[#00f2fe]/40 transition-all duration-300 w-full sm:w-max justify-center">
              View Work <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#" className="flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#111a2e] border border-gray-800/80 hover:border-gray-700 font-semibold text-sm text-gray-300 hover:text-white transition-all duration-300 w-full sm:w-max justify-center">
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>

        {/* Right Side Frame Layout */}
        <div className="lg:col-span-5 flex justify-center relative" data-aos="fade-left">
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-[2.5rem] bg-gradient-to-tr from-[#111a2e] to-[#1a294d] border border-gray-800 p-4 shadow-2xl overflow-hidden">
            {/* Inner glass decorative pattern inside image container */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0a0f1d] to-transparent z-10"></div>
            <div className="w-full h-full rounded-[2rem] bg-[#0a0f1d] border border-gray-800/60 overflow-hidden flex items-center justify-center">
              {/* Replace text placeholder with your custom image path profile */}
              <div className="text-gray-600 font-black tracking-widest text-xs uppercase opacity-40 select-none">
                Avatar Image
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;