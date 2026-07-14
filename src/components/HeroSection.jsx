import React from "react";
import { ArrowRight, Download } from "lucide-react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative w-full flex items-center justify-center pt-25 pb-10 overflow-hidden"
    >
      {/* Visual background ambient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none hero-blob-top"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-[120px] pointer-events-none hero-blob-bottom"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side Branding info */}
        <div
          className="lg:col-span-7 space-y-6 text-center lg:text-left"
          data-aos="fade-right"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111a2e] border border-gray-800 text-xs font-semibold tracking-wide text-[#00f2fe]">
            <span className="flex h-2 w-2 rounded-full bg-[#00f2fe] animate-pulse"></span>
            Available for New Opportunities
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-none text-white">
            Hi, I'm <br />
            <span className="typing-container">
              <span className="typing-text">Abinash Shubham.</span>
            </span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
            A passionate technical Software Developer and UI Engineer with a
            deep foundation in advanced Computer Applications. Specializing in
            high-performance React architectures and premium digital interfaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#0a0f1d] font-bold text-sm shadow-xl shadow-[#00f2fe]/20 hover:shadow-[#00f2fe]/40 transition-all duration-300 w-full sm:w-max justify-center"
            >
              View Work{" "}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              download="Abinash_Shubham_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-[#111a2e] border border-gray-800/80 hover:border-gray-700 font-semibold text-sm text-gray-300 hover:text-white transition-all duration-300 w-full sm:w-max justify-center"
            >
              <Download size={16} /> Download CV
            </a>
          </div>
        </div>

        {/* Right Side Frame Layout */}
        {/* Right Side Frame Layout - Optimized Custom Circle Portal */}
        <div className="lg:col-span-5 flex justify-center relative" data-aos="fade-left">
          {/* Outer Cyberpunk Neon Shadow Ring */}
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-gradient-to-tr from-[#111a2e] to-[#1a294d] border border-gray-800/80 p-3 shadow-2xl flex items-center justify-center transition-all duration-300 hover:border-[#00f2fe]/40 shadow-[#00f2fe]/5">
            
            {/* Ambient Inner Shadow Ring */}
            <div className="w-full h-full rounded-full bg-[#0a0f1d] border border-gray-800/40 overflow-hidden relative flex items-center justify-center">
              
              {/* Dynamic Image Link Mapped to Github Pages Subfolders */}
              <img 
                src={`${import.meta.env.BASE_URL}profile.png`} 
                alt="Abinash Shubham Profile Avatar" 
                className="w-full h-full object-cover select-none scale-[1.085] transition-transform duration-500 hover:scale-[1.1] pointer-events-none"
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
