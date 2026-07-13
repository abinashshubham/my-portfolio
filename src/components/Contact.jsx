// src/components/Contact.jsx
import React from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-28 py-12" data-aos="fade-up">
      <div className="mb-12 text-center lg:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00f2fe] bg-[#00f2fe]/10 px-3 py-1.5 rounded-lg">
          Connect
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-white mt-4 tracking-tight">Initiate A Project</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Info Blocks */}
        <div className="lg:col-span-4 space-y-4">
          <div className="bg-[#111a2e] border border-gray-800/80 p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-[#0a0f1d] text-[#00f2fe] border border-gray-800 shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Direct Mail</span>
              <p className="text-sm font-bold text-gray-200 mt-0.5">contact@domain.com</p>
            </div>
          </div>

          <div className="bg-[#111a2e] border border-gray-800/80 p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-[#0a0f1d] text-[#4facfe] border border-gray-800 shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">Operational Base</span>
              <p className="text-sm font-bold text-gray-200 mt-0.5">Patna, Bihar, India</p>
            </div>
          </div>
        </div>

        {/* Input Interactive Panel Form */}
        <div className="lg:col-span-8 bg-[#111a2e] border border-gray-800/80 p-8 rounded-3xl shadow-xl">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Identification Name</label>
                <input type="text" className="w-full bg-[#0a0f1d] border border-gray-800 focus:border-[#00f2fe] rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden transition-colors duration-300" required />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Communication Email</label>
                <input type="email" className="w-full bg-[#0a0f1d] border border-gray-800 focus:border-[#00f2fe] rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden transition-colors duration-300" required />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">Project Requirements Message</label>
              <textarea rows="5" className="w-full bg-[#0a0f1d] border border-gray-800 focus:border-[#00f2fe] rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden transition-colors duration-300 resize-none" required></textarea>
            </div>
            <button type="submit" className="w-full sm:w-max px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#0a0f1d] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#00f2fe]/10 hover:shadow-[#00f2fe]/20 transition-all duration-300">
              <Send size={14} /> Dispatch Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;