import React from "react";

const Experience = () => {
  const works = [
    {
      role: "Frontend Architect Engineer",
      place: "TechSolutions Software",
      time: "2025 - Present",
      text: "Developing modular, highly responsive site components. Implementing state patterns to keep app updates efficient.",
    },
    {
      role: "Web Developer Assistant",
      place: "Digital Agency Space",
      time: "2024 - 2025",
      text: "Built standard site layouts directly from design assets using clean CSS grids and Tailwind utilities.",
    },
  ];

  return (
    <section id="experience" className="scroll-target py-16" data-aos="fade-up">
      <div className="mb-12 text-center lg:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00f2fe] bg-[#00f2fe]/10 px-3 py-1.5 rounded-lg">
          Timeline
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
          Work Experience
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] mt-6 rounded-full mx-auto lg:mx-0"></div>
      </div>

      <div className="space-y-6">
        {works.map((job, idx) => (
          <div
            key={idx}
            className="glow-card bg-[#111a2e] border border-gray-800/80 p-8 rounded-3xl flex flex-col sm:flex-row justify-between gap-4 items-start"
          >
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-white tracking-tight">
                {job.role}
              </h3>
              <p className="text-sm font-semibold text-[#4facfe]">
                {job.place}
              </p>
              <p className="text-sm text-gray-400 max-w-2xl leading-relaxed mt-2">
                {job.text}
              </p>
            </div>
            <span className="text-xs font-bold text-gray-400 bg-[#0a0f1d] border border-gray-800 px-4 py-2 rounded-xl shrink-0">
              {job.time}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
