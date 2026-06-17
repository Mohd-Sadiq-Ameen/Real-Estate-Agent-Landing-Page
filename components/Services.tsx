"use client";

import { Home, Key, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";

const services = [
  {
    Icon: Home,
    title: "Buy Property",
    desc: "Access verified South Delhi properties, builder floors, luxury homes and investment opportunities before they hit the wider market.",
    highlights: [
      "Builder Floors",
      "Luxury Homes",
      "Commercial Spaces",
      "Verified Listings",
    ],
  },
  {
    Icon: Key,
    title: "Rent Property",
    desc: "Find residential and commercial rental properties with expert guidance and smooth possession support.",
    highlights: [
      "Residential Rentals",
      "Office Spaces",
      "Retail Outlets",
      "Quick Possession",
    ],
  },
  {
    Icon: TrendingUp,
    title: "Sell Property",
    desc: "Maximize your property's value through strategic pricing, targeted marketing and our active buyer network.",
    highlights: [
      "Property Valuation",
      "Buyer Network",
      "Marketing Support",
      "Documentation",
    ],
  },
];

const WA_NUMBER = "919818077956";
const WA_MSG = "Hi, I'd like to know more about your real estate services.";

export default function Services() {
  return (
    <section id="services" className="bg-[#FAFAF8] py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            Our Services
          </p>

          <h2 className="font-display text-4xl leading-tight text-[#0F1923] sm:text-5xl lg:text-6xl">
            Real Estate Solutions
            <span className="mt-2 block italic text-[#C9A84C]">
              Built Around Your Goals
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Whether you're buying, renting or selling property, Royal Siyaram
            Estate provides trusted guidance, verified opportunities and
            end-to-end support across South Delhi.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map(({ Icon, title, desc, highlights }) => (
            <div
              key={title}
              className="group flex h-full flex-col rounded-3xl border border-[#E8E4DB] bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#C9A84C]/30 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FAF8F3] border border-[#ECE7DF]">
                <Icon size={28} className="text-[#C9A84C]" />
              </div>

              {/* Title */}
              <h3 className="font-display text-3xl text-[#0F1923]">{title}</h3>

              {/* Description */}
              <p className="mt-4 text-base leading-7 text-slate-600">{desc}</p>

              {/* Features */}
              <div className="mt-8 space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className="text-[#C9A84C]" />

                    <span className="text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Bottom Link */}
              <div className="mt-auto pt-8">
                <div className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#C9A84C]">
                  Learn More
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 rounded-3xl bg-[#0F1923] p-8 md:p-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="mb-2 text-sm uppercase tracking-[0.3em] text-[#C9A84C]">
                Need Expert Guidance?
              </p>

              <h3 className="font-display text-3xl text-white md:text-4xl">
                Let's Discuss Your Property Goals
              </h3>

              <p className="mt-3 max-w-2xl text-white/70">
                Speak directly with our team and get personalized advice for
                buying, renting or selling property in South Delhi.
              </p>
            </div>

            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                WA_MSG,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#C9A84C] px-7 py-4 text-sm font-semibold uppercase tracking-wider text-[#0F1923] transition-all duration-300 hover:bg-[#D7B85D]"
            >
              Contact on WhatsApp
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
