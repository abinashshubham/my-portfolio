// src/components/About.jsx
import React from 'react';
import { User, Code2, Cpu, Globe } from 'lucide-react';

const About = () => {
  const profileMetrics = [
    { icon: <Code2 size={20} />, title: 'Core Stack', value: 'React / Next.js' },
    { icon: <Cpu size={20} />, title: 'UI Architecture', value: 'Tailwind CSS v4' },
    { icon: <Globe size={20} />, title: 'Current Hub', value: 'Patna, Bihar' },
    { icon: <User size={20} />, title: 'Engagement', value: 'Open for Projects' }
  ];

  const skillBars = [
    { name: 'ReactJS Architecture', level: '90%' },
    { name: 'Tailwind CSS / UI Design', level: '95%' },
    { name: 'JavaScript (ES6+) Core', level: '88%' },
    { name: 'Responsive Layout Logic', level: '92%' }
  ];

  return (
    <section id="about" className="scroll-mt-28 py-16" data-aos="fade-up">
      {/* Section Sub-Header */}
      <div className="text-center lg:text-left mb-16">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00f2fe] bg-[#00f2fe]/10 px-3 py-1.5 rounded-lg">
          Introduction
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight leading-tight">
          Crafting Clean Digital <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f2fe] via-[#2575fc] to-[#4facfe]">
            Structures & Layouts
          </span>
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] mt-6 rounded-full mx-auto lg:mx-0"></div>
      </div>

      {/* Main Grid Matrix */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Side Column: Text Bio & Grid Cards */}
        <div className="lg:col-span-7 space-y-8">
          <p className="text-gray-400 leading-relaxed text-base sm:text-lg font-normal">
            I specialize in building modular frontend architectures, translating complex project blueprints into high-performance, pixel-perfect user interfaces. Just like structural design, I value precision, strong responsive layouts, and reliable performance across all modern viewports.
          </p>

          {/* Micro Information Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {profileMetrics.map((metric, idx) => (
              <div 
                key={idx} 
                className="glow-card flex items-center gap-4 bg-[#111a2e] border border-gray-800/80 p-5 rounded-2xl transition-all duration-300 hover:border-gray-700/60"
              >
                <div className="p-3 rounded-xl bg-[#0a0f1d] text-[#00f2fe] border border-gray-800 shrink-0">
                  {metric.icon}
                </div>
                <div>
                  <span className="text-[10px] text-gray-500 block uppercase tracking-wider font-bold">
                    {metric.title}
                  </span>
                  <span className="text-sm font-bold text-gray-200 mt-0.5 block">
                    {metric.value}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Column: Skill Metric Visualizers */}
        <div className="lg:col-span-5 bg-[#111a2e] border border-gray-800/80 p-8 rounded-3xl shadow-xl space-y-6">
          <h3 className="text-lg font-bold text-white tracking-tight pb-3 border-b border-gray-800/60">
            Technical Capabilities
          </h3>
          
          <div className="space-y-5">
            {skillBars.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-xs font-bold tracking-wide text-gray-300">
                  <span>{skill.name}</span>
                  <span className="text-[#00f2fe]">{skill.level}</span>
                </div>
                {/* Visual Progress Channel Bar */}
                <div className="w-full bg-[#0a0f1d] h-2 rounded-full overflow-hidden p-[1px] border border-gray-800/80">
                  <div 
                    className="bg-gradient-to-r from-[#00f2fe] to-[#4facfe] h-full rounded-full transition-all duration-1000 ease-out" 
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;