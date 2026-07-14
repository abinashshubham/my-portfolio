import React from "react";
import { ExternalLink, Layers } from "lucide-react";
import "./Projects.css";

const Projects = () => {
  const catalog = [
    {
      title: "YUMLY - Food Delivery Platform",
      tech: [
        "React.js",
        "Vite",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Render",
        "GitHub",
      ],
      desc: "A full-stack food delivery application featuring a dynamic product catalog, multi-vendor cart management, real-time price computations, and a secure checkout flow backed by a robust RESTful API architecture.",
      liveLink: "https://food-del-frontend-52rw.onrender.com/",
      codeLink: "https://github.com/abinashshubham/food-del",
    },
    {
      title: "WEATHER AI - Meteorological Dashboard",
      tech: ["React.js", "Vite", "CSS", "Context API", "Git", "GitHub Pages"],
      desc: "A responsive weather analytics engine providing real-time conditions coupled with AI-driven summaries to deliver instant context-specific recommendations across all device viewports.",
      liveLink: "https://abinashshubham.github.io/weather-app/",
      codeLink: "https://github.com/abinashshubham/weather-app",
    },
    {
      title: "Premium Enterprise Portfolio",
      tech: ["React.js", "Vite", "Tailwind CSS", "AOS Engine"],
      desc: "A high-performance personal portfolio and enterprise showcase application featuring a customized cyberpunk neon aesthetic, smooth scroll-synchronized entry animations, and fully modular frontend components.",
      liveLink: "https://abinashshubham.github.io/my-portfolio/",
      codeLink: "https://github.com/abinashshubham/my-portfolio",
    },
  ];

  return (
    <section id="projects" className="scroll-target pt-16" data-aos="fade-up">
      <div className="mb-12 text-center lg:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00f2fe] bg-[#00f2fe]/10 px-3 py-1.5 rounded-lg">
          Portfolio
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
          Featured Operations
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] mt-6 rounded-full mx-auto lg:mx-0"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {catalog.map((project, idx) => (
          <div
            key={idx}
            className="glow-card bg-[#111a2e] border border-gray-800/80 rounded-3xl overflow-hidden flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300"
          >
            <div className="p-8 space-y-4">
              <div className="p-3 w-max rounded-xl bg-[#0a0f1d] border border-gray-800/80 text-[#4facfe]">
                <Layers size={20} />
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {project.desc}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {project.tech.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-bold bg-[#0a0f1d] border border-gray-800/60 text-[#00f2fe] px-3 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="px-8 py-5 bg-[#0a0f1d]/50 border-t border-gray-800/60 flex justify-between items-center">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gray-300 hover:text-[#00f2fe] transition-colors duration-200"
              >
                <ExternalLink size={14} /> Live Showcase
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-400 hover:text-white transition-colors duration-200"
              >
                {/* Embedded Inline SVG for cleanly rendering GitHub logo */}
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                </svg>
                <span>Code Asset</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;