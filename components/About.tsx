"use client";

import { CheckCircle2, ArrowRight } from "lucide-react";
import Image from "next/image";

const features = [
  "Builder Floors & Luxury Home Specialists",
  "Property Buying, Selling & Leasing",
  "Investment Consultation & Market Insights",
  "Documentation & Legal Assistance",
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

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#0F1923] py-10 md:py-14 lg:py-14"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-20">
          {/* IMAGE */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div className="relative h-[320px] md:h-[450px] lg:h-[560px]">
              <Image
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80"
                alt="Luxury Property South Delhi"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </div>

            <div className="absolute inset-0 border border-[#C9A84C]/20 rounded-3xl" />

            {/* Trust Badge */}
            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-md px-5 py-4">
              <p className="font-display text-3xl text-[#C9A84C]">10+</p>
              <p className="text-sm text-white/80 tracking-wide">
                Years Trusted
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="max-w-[700px]">
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
              About Royal Siyaram Estate
            </p>

            <h2 className="mb-8 font-display text-4xl leading-tight text-white sm:text-5xl lg:text-6xl">
              South Delhi's Trusted
              <span className="mt-2 block italic text-[#C9A84C]">
                Real Estate Partner
              </span>
            </h2>

            <p className="mb-5 text-lg leading-8 text-white/80">
              Helping buyers, sellers, investors and tenants make confident
              property decisions across South Delhi's most desirable locations.
            </p>

            <p className="mb-10 text-lg leading-8 text-white/65">
              From luxury builder floors and premium residences to commercial
              investments, we combine local expertise, transparent advice and
              deep market knowledge to deliver exceptional results.
            </p>

            {/* STATS */}
            <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
                >
                  <div className="font-display text-4xl text-[#C9A84C]">
                    {stat.number}
                  </div>

                  <div className="mt-2 text-sm tracking-wide text-white/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* FEATURES */}
            <div className="mb-10 space-y-5">
              {features.map((feature) => (
                <div key={feature} className="flex items-start gap-3">
                  <CheckCircle2
                    size={20}
                    className="mt-1 text-[#C9A84C] shrink-0"
                  />

                  <span className="text-base leading-7 text-white/80">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={scrollToVideo}
              className="group inline-flex items-center gap-3 rounded-xl bg-[#C9A84C] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#0F1923] transition-all duration-300 hover:bg-[#D6B75C]"
            >
              Speak With An Expert
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
