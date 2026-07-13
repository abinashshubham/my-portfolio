import React from 'react';

const Education = () => {
  const educationHistory = [
    { degree: 'Bachelor of Computer Applications (BCA)', institution: 'Patna University', period: '2023 - 2026', desc: 'Deep dive into object-oriented concepts, clean code logic, database structures, and high-performance interface scripting.' },
    { degree: 'Senior Secondary Education (Class XII)', institution: 'District High School', period: '2021 - 2023', desc: 'Focused study in Advanced Mathematics and Computer Science platforms.' }
  ];

  return (
    <section id="education" className="scroll-mt-28 py-12" data-aos="fade-up">
      <div className="mb-12 text-center lg:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00f2fe]">Qualifications</span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-1 tracking-tight">Education History</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationHistory.map((edu, idx) => (
          <div key={idx} className="glow-card bg-[#111a2e] border border-gray-800/80 p-8 rounded-3xl space-y-4">
            <span className="inline-block text-xs font-bold text-[#00f2fe] bg-[#00f2fe]/10 px-3 py-1 rounded-lg">
              {edu.period}
            </span>
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">{edu.degree}</h3>
              <p className="text-sm font-medium text-gray-400 mt-1">{edu.institution}</p>
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