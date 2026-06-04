"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    budget: "",
    area: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `
🏡 New High-Intent Property Lead

Name: ${form.name}
Phone: ${form.phone}
Budget: ${form.budget}
Area: ${form.area}

Source: Website CTA
`;
    const url = `https://wa.me/919818077956?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-[#FAFAF9] overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,#C9A84C_1px,transparent_0)] bg-[length:28px_28px]" />
      <div className="w-full max-w-[1400px] mx-auto px-6 relative z-10" style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}>
        <div className="flex flex-col items-center justify-center text-center mb-16 md:mb-20">
          <h2 className="font-display text-5xl md:text-7xl text-[#0F172A] leading-[1.05]">
            Get Exclusive Property Deals
            <span className="block text-[#B0892A] italic mt-3">Before They Hit Market</span>
          </h2>
          <p className="w-full max-w-[780px] mx-auto text-center text-[#64748B] text-lg md:text-xl leading-relaxed mt-6">
            Tell us your requirement and get <b>pre-verified South Delhi properties</b> directly on WhatsApp — faster than brokers & portals.
          </p>
        </div>

        <div className="h-10"></div>

        <div className="flex justify-center">
          <form onSubmit={handleSubmit} className="w-full max-w-3xl space-y-12 md:space-y-14">
            <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
              <div>
                <label className="block text-lg font-medium text-[#0F172A] mb-3">Full Name</label>
                <input name="name" placeholder="Enter your name" value={form.name} onChange={handleChange}
                  className="w-full h-14 px-4 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] text-[#0F172A] placeholder-[#94A3B8] focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition" required />
              </div>
              <div>
                <label className="block text-lg font-medium text-[#0F172A] mb-3">Mobile Number</label>
                <input name="phone" placeholder="Active Mobile Number" value={form.phone} onChange={handleChange}
                  className="w-full h-14 px-4 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] text-[#0F172A] placeholder-[#94A3B8] focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition" required />
              </div>
            </div>

            <div className="h-8 md:h-10"></div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
              <div>
                <label className="block text-lg font-medium text-[#0F172A] mb-3">Budget Range</label>
                <input name="budget" list="budgetOptions" placeholder="Select or type budget" value={form.budget} onChange={handleChange}
                  className="w-full h-14 px-4 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] text-[#0F172A] placeholder-[#94A3B8] focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition" required />
                <datalist id="budgetOptions">
                  <option value="Less than 50 Lakhs" /><option value="50 Lakhs – 1 Crore" />
                  <option value="1 Crore – 3 Crores" /><option value="3 Crores+" />
                </datalist>
              </div>
              <div>
                <label className="block text-lg font-medium text-[#0F172A] mb-3">Preferred Location</label>
                <input name="area" list="areaOptions" placeholder="Select or type location" value={form.area} onChange={handleChange}
                  className="w-full h-14 px-4 rounded-xl bg-[#FAFAFA] border border-[#E5E7EB] text-[#0F172A] placeholder-[#94A3B8] focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] outline-none transition" required />
                <datalist id="areaOptions">
                  <option value="Defence Colony" /><option value="Greater Kailash I/II" />
                  <option value="Lajpat Nagar" /><option value="New Friends Colony" />
                  <option value="South Extension" /><option value="Saket" /><option value="Vasant Kunj" />
                </datalist>
              </div>
            </div>

            <div className="h-8 md:h-10"></div>

            <div className="pt-4 space-y-5">
              <button type="submit" className="w-full bg-[#25D366] text-white font-semibold py-5 rounded-xl text-lg hover:bg-[#1fb85a] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5">
                Send Me Matching Properties →
              </button>
              <div className="h-2 sm:h-3 md:h-4 lg:h-5"></div>
              <a href="https://wa.me/919818077956" target="_blank" rel="noopener noreferrer"
                className="w-full flex items-center justify-center bg-[#C9A84C] text-white font-semibold py-5 rounded-xl text-lg hover:bg-[#b8933f] transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-0.5">
                Prefer Direct Chat? Tap Here
              </a>
            </div>
          </form>
        </div>

        <div className="h-2 sm:h-3 md:h-4 lg:h-5"></div>

        <div className="text-center mt-16 md:mt-20 text-sm md:text-base text-[#94A3B8]">
          No spam • Only verified properties • Response time: under 10 minutes
        </div>
        <div className="h-6 sm:h-6 md:h-8 lg:h-5"></div>
      </div>
    </section>
  );
}