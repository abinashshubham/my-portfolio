import React from "react";
import "./Experience.css"; 

const Experience = () => {
  const works = [
    {
      role: "Software Developer",
      place: "Nighwan Technology",
      time: "Jan 2023 - Feb 2025",
      text: "Engineered scalable web applications using the MERN stack (MongoDB, Express, React, Node.js). Structured modular frontend architectures with Tailwind CSS, optimized database queries, and implemented advanced state management solutions to maximize runtime performance.",
    },
    {
      role: "Software Trainee",
      place: "DOT Web Logic Solutions",
      time: "Feb 2022 - Dec 2022",
      text: "Collaborated on building responsive web interfaces using HTML, CSS, JavaScript, and Bootstrap. Focused on converting design wireframes into pixel-perfect layouts while learning modern backend development fundamentals.",
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