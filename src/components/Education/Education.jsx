import React from "react";
import "./Education.css";

const Education = () => {
  const educationHistory = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "KIIT University, Bhubaneswar",
      period: "2020 - 2022",
      desc: "Advanced studies in software engineering, database management systems (DBMS), network security, and modern web applications.",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Magadh University, Bodh Gaya",
      period: "2016 - 2019",
      desc: "Learned core computer science concepts, including data structures, object-oriented programming (OOP), basic mathematics, and web fundamentals.",
    },
    {
      degree: "Intermediate / Higher Secondary (12th)",
      institution: "BSEB, Patna",
      period: "2014 - 2016",
      desc: "Focused on Science stream subjects (Physics, Chemistry, Mathematics) along with computer fundamentals and language studies.",
    },
    {
      degree: "Matriculation / Secondary Education (10th)",
      institution: "BSEB, Patna",
      period: "2013 - 2014",
      desc: "Completed basic education with a focus on core mathematics, foundational sciences, social sciences, and language courses.",
    },
  ];

  return (
    <section id="education" className="scroll-target pt-16" data-aos="fade-up">
      <div className="mb-12 text-center lg:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00f2fe] bg-[#00f2fe]/10 px-3 py-1.5 rounded-lg">
          Qualifications
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
          Education History
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] mt-6 rounded-full mx-auto lg:mx-0"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationHistory.map((edu, idx) => (
          <div
            key={idx}
            className="glow-card bg-[#111a2e] border border-gray-800/80 p-8 rounded-3xl space-y-4"
          >
            <span className="inline-block text-xs font-bold text-[#00f2fe] bg-[#00f2fe]/10 px-3 py-1 rounded-lg">
              {edu.period}
            </span>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {edu.degree}
              </h3>
              <p className="text-sm font-medium text-gray-400 mt-1">
                {edu.institution}
              </p>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed font-normal pt-2 border-t border-gray-800/60">
              {edu.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;