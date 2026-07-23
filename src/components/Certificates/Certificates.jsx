import React from "react";
import { Award, ShieldCheck, ExternalLink } from "lucide-react";
import aiCertImg from "../../assets/ai-cert.png"; 
import bsdmCertImg from "../../assets/bsdm-cert.png";
import be10xCertImg from "../../assets/be10X-cert.png";

const Certificates = () => {
  const achievements = [
    {
      title: "Generative AI for All Program",
      issuer: "Physics Wallah | Microsoft",
      date: "June 2026",
      id: "12cf40865617",
      viewLink: aiCertImg,
    },
    {
      title: "AI Tools and ChatGPT Workshop",
      issuer: "be10x",
      date: "May 2026",
      id: "1e1c61cd09971352913",
      viewLink: be10xCertImg,
    },
    {
      title: "Data Analyst Professional Certificate",
      issuer: "STL Academy | BSDM RTD",
      date: "August 2023",
      id: "STL/RTD/P/11",
      viewLink: bsdmCertImg,
    },
  ];

  return (
    <section
      id="certificates"
      className="scroll-target pt-16"
      data-aos="fade-up"
    >
      <div className="mb-12 text-center lg:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00f2fe] bg-[#00f2fe]/10 px-3 py-1.5 rounded-lg">
          Achievements
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
          Verified Certifications
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] mt-6 rounded-full mx-auto lg:mx-0"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {achievements.map((cert, idx) => (
          <div
            key={idx}
            className="glow-card bg-[#111a2e] border border-gray-800/80 p-6 rounded-3xl flex items-start gap-5 transition-all duration-300 hover:border-gray-700/65"
          >
            <div className="p-4 rounded-2xl bg-[#0a0f1d] text-[#00f2fe] border border-gray-800 shrink-0">
              <Award size={24} />
            </div>
            <div className="space-y-2 w-full">
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-500 font-bold">
                  {cert.date}
                </span>
                <span className="flex items-center gap-1 text-[10px] font-black uppercase text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md">
                  <ShieldCheck size={10} /> Verified
                </span>
              </div>

              <h3 className="text-lg font-bold text-white tracking-tight">
                {cert.title}
              </h3>
              <p className="text-sm text-gray-400">{cert.issuer}</p>

              <div className="flex flex-wrap items-center justify-between gap-2 pt-2">
                <code className="text-[11px] bg-[#0a0f1d] border border-gray-800/80 px-2.5 py-1 rounded-lg text-[#4facfe] font-mono break-all">
                  ID: {cert.id}
                </code>

                {/* Interactive View Document Trigger */}
                <a
                  href={cert.viewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-gray-400 hover:text-[#00f2fe] transition-colors duration-200"
                >
                  <ExternalLink size={12} /> View Document
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
