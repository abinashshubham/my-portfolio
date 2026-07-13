// src/components/Certificates.jsx
import React from 'react';
import { Award, ShieldCheck } from 'lucide-react';

const Certificates = () => {
  const achievements = [
    { title: 'Advanced Frontend Architecture', issuer: 'Meta Developer Institute', date: '2025', id: 'META-9921' },
    { title: 'Responsive UI Design Specialist', issuer: 'Google Professional Systems', date: '2024', id: 'GOOG-4410' }
  ];

  return (
    <section id="certificates" className="scroll-mt-28 py-12" data-aos="fade-up">
      <div className="mb-12 text-center lg:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00f2fe] bg-[#00f2fe]/10 px-3 py-1.5 rounded-lg">
          Credentials
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 tracking-tight">Verified Certifications</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((cert, idx) => (
          <div key={idx} className="glow-card bg-[#111a2e] border border-gray-800/80 p-6 rounded-3xl flex items-start gap-5 transition-all duration-300 hover:border-gray-700/65">
            <div className="p-4 rounded-2xl bg-[#0a0f1d] text-[#00f2fe] border border-gray-800 shrink-0">
              <Award size={24} />
            </div>
            <div className="space-y-2 w-full">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-bold">{cert.date}</span>
                <span className="flex items-center gap-1 text-[10px] font-black uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                  <ShieldCheck size={10} /> Verified
                </span>
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.issuer}</p>
              <div className="pt-2">
                <code className="text-[11px] bg-[#0a0f1d] border border-gray-800/80 px-2.5 py-1 rounded-lg text-[#4facfe] font-mono">
                  ID: {cert.id}
                </code>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;