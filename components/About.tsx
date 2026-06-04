"use client";

import { CheckCircle2 } from "lucide-react";
import Image from "next/image";

const features = [
  "10+ Years of South Delhi Market Experience",
  "Builder Floor & Luxury Property Specialists",
  "Transparent Transactions & Fair Valuations",
  "Complete Documentation & Legal Support",
];

const stats = [
  { number: "10+", label: "Years Experience" },
  { number: "1000+", label: "Happy Clients" },
  { number: "500+", label: "Successful Deals" },
];

export default function About() {
  const scrollToVideo = () => {
    const target = document.getElementById("video-proof");
    if (!target) return;
    const offset = 100;
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#0F1923] pt-28 md:pt-36 lg:pt-44 pb-40 md:pb-48 lg:pb-56"
      style={{
        paddingTop: "3rem",      // fallback for pt-28
        paddingBottom: "3rem",  // fallback for pb-40
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-28 items-center">
          {/* LEFT IMAGE */}
          <div className="relative group overflow-hidden rounded-2xl shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
              alt="Luxury Property South Delhi"
              className="w-full h-[350px] md:h-[500px] lg:h-[620px] object-cover transition-transform duration-700 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 rounded-2xl border border-[#C9A84C]/20 pointer-events-none" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="max-w-[620px] mx-auto lg:mx-0">
            <p className="text-[#C9A84C] uppercase tracking-[0.3em] text-xs font-medium mb-8">
              About Royal Siyaram Estate
            </p>

            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-normal leading-[1.08] mb-14">
              South Delhi's Trusted
              <span className="italic text-[#C9A84C] block mt-2">
                Estate Partner
              </span>
            </h2>

            <p className="text-white/75 text-lg md:text-xl leading-[2] mb-10">
              For over two decades, Royal Siyaram Estate has helped buyers,
              sellers, investors and tenants make confident property decisions
              across South Delhi's most desirable neighbourhoods.
            </p>

            <p className="text-white/60 text-lg md:text-xl leading-[2] mb-20">
              From luxury builder floors and independent homes to commercial
              investments, we combine local expertise, market knowledge and
              transparent guidance to deliver exceptional results.
            </p>

            <div className="w-24 h-px bg-[#C9A84C]/25 mb-20" />

            {/* STATS */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-20">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="font-display text-5xl lg:text-6xl text-[#C9A84C]">
                    {stat.number}
                  </div>
                  <div className="text-white/50 text-sm mt-4 tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* FEATURES */}
            <div className="space-y-8 mb-12">
              {features.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <CheckCircle2 size={20} className="text-[#C9A84C] mt-[6px]" />
                  <span className="text-white/75 text-lg leading-8">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* BUTTON */}
            <div className="flex justify-start">
              <button
                onClick={scrollToVideo}
                className="inline-flex items-center gap-3 bg-[#C9A84C] hover:bg-[#D7B85D] text-[#0F1923] px-8 py-4 rounded-lg font-semibold uppercase tracking-wider text-sm transition-all duration-300 shadow-md hover:shadow-lg"
                style={{ padding: "1rem 2rem" }}
              >
                Contact to View Properties
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}