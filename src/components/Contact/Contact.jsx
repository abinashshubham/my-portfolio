import React, { useState } from "react";
import { Mail, MapPin, Send, Phone, CheckCircle2 } from "lucide-react";
import "./Contact.css";

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(e.target);
    // Append your live Web3Forms token dynamically
    formData.append("access_key", "6914db64-07f4-4a61-8817-c67e18d29e33");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus("success");
        e.target.reset(); // Safely flushes input fields on success
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="scroll-target pt-16" data-aos="fade-up">
      <div className="mb-12 text-center lg:text-left">
        <span className="text-xs font-bold uppercase tracking-widest text-[#00f2fe] bg-[#00f2fe]/10 px-3 py-1.5 rounded-lg">
          Connect
        </span>
        <h2 className="text-3xl sm:text-5xl font-black text-white mt-4 tracking-tight">
          Initiate A Project
        </h2>
        <div className="h-1 w-20 bg-gradient-to-r from-[#00f2fe] to-[#4facfe] mt-6 rounded-full mx-auto lg:mx-0"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Info Blocks */}
        <div className="lg:col-span-4 space-y-4">
          
          {/* Direct Mail Card (Now Fully Interactive) */}
          <div className="bg-[#111a2e] border border-gray-800/80 p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-[#0a0f1d] text-[#00f2fe] border border-gray-800 shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">
                Direct Mail
              </span>
              <a 
                href="mailto:abinashshubham@gmail.com?subject=Project%20Inquiry%20from%20Portfolio"
                className="text-sm font-bold text-gray-200 mt-0.5 hover:text-[#00f2fe] transition-colors duration-200 block"
              >
                abinashshubham@gmail.com
              </a>
            </div>
          </div>

          {/* Voice Contact Card */}
          <div className="bg-[#111a2e] border border-gray-800/80 p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-[#0a0f1d] text-[#2575fc] border border-gray-800 shrink-0">
              <Phone size={20} />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">
                Voice Contact
              </span>
              <a 
                href="tel:+918789935741"
                className="text-sm font-bold text-gray-200 mt-0.5 hover:text-[#00f2fe] transition-colors duration-200"
              >
                +91 87899 35741
              </a>
            </div>
          </div>

          {/* GitHub Portal Card */}
          <div className="bg-[#111a2e] border border-gray-800/80 p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-[#0a0f1d] text-[#00f2fe] border border-gray-800 shrink-0">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">
                GitHub Repository
              </span>
              <a 
                href="https://github.com/abinashshubham" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-bold text-gray-200 mt-0.5 hover:text-[#00f2fe] transition-colors duration-200 block"
              >
                github.com/abinashshubham
              </a>
            </div>
          </div>

          {/* LinkedIn Portal Card */}
          <div className="bg-[#111a2e] border border-gray-800/80 p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-[#0a0f1d] text-[#4facfe] border border-gray-800 shrink-0">
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
            <div>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">
                Professional Network
              </span>
              <a 
                href="https://linkedin.com/in/abinashshubham" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-bold text-gray-200 mt-0.5 hover:text-[#4facfe] transition-colors duration-200 block"
              >
                linkedin.com/in/abinashshubham
              </a>
            </div>
          </div>

          {/* Operational Base Card */}
          <div className="bg-[#111a2e] border border-gray-800/80 p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-[#0a0f1d] text-[#4facfe] border border-gray-800 shrink-0">
              <MapPin size={20} />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">
                Operational Base
              </span>
              <p className="text-sm font-bold text-gray-200 mt-0.5">
                Noida, Uttar Pradesh, India
              </p>
            </div>
          </div>
        </div>

        {/* Input Interactive Panel Form */}
        <div className="lg:col-span-8 bg-[#111a2e] border border-gray-800/80 p-8 rounded-3xl shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  &nbsp;Identification Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-[#0a0f1d] border border-gray-800 focus:border-[#00f2fe] rounded-xl px-4 py-3 my-1 text-sm text-white focus:outline-hidden transition-colors duration-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  &nbsp;Communication Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-[#0a0f1d] border border-gray-800 focus:border-[#00f2fe] rounded-xl px-4 py-3 my-1 text-sm text-white focus:outline-hidden transition-colors duration-300"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                &nbsp;Project Requirements Message
              </label>
              <textarea
                name="message"
                rows="5"
                className="w-full bg-[#0a0f1d] border border-gray-800 focus:border-[#00f2fe] rounded-xl px-4 py-3 my-1 text-sm text-white focus:outline-hidden transition-colors duration-300 resize-none"
                required
              ></textarea>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-max px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#00f2fe] to-[#4facfe] text-[#0a0f1d] font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-[#00f2fe]/10 hover:shadow-[#00f2fe]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={14} />{" "}
                {isSubmitting ? "Dispatching..." : "Dispatch Message"}
              </button>

              {/* Status Notifications */}
              {submitStatus === "success" && (
                <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
                  <CheckCircle2 size={16} /> Transmission Received Successfully!
                </div>
              )}
              {submitStatus === "error" && (
                <div className="text-rose-400 text-sm font-semibold">
                  Transmission Failed. Please re-verify fields.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
