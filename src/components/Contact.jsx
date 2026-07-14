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
          <div className="bg-[#111a2e] border border-gray-800/80 p-6 rounded-2xl flex items-center gap-4">
            <div className="p-3.5 rounded-xl bg-[#0a0f1d] text-[#00f2fe] border border-gray-800 shrink-0">
              <Mail size={20} />
            </div>
            <div>
              <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider block">
                Direct Mail
              </span>
              <p className="text-sm font-bold text-gray-200 mt-0.5">
                abinashshubham@gmail.com
              </p>
            </div>
          </div>

          {/* Clean Phone Component Block */}
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
                  Identification Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full bg-[#0a0f1d] border border-gray-800 focus:border-[#00f2fe] rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden transition-colors duration-300"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  Communication Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full bg-[#0a0f1d] border border-gray-800 focus:border-[#00f2fe] rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden transition-colors duration-300"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                Project Requirements Message
              </label>
              <textarea
                name="message"
                rows="5"
                className="w-full bg-[#0a0f1d] border border-gray-800 focus:border-[#00f2fe] rounded-xl px-4 py-3 text-sm text-white focus:outline-hidden transition-colors duration-300 resize-none"
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
