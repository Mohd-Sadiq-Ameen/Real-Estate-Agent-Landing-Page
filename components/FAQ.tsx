"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How do I know if a property is fairly priced?",
    a: "We provide a detailed market analysis and recent transaction comparables from the same neighbourhood. Our team also offers professional valuation services so you can make an informed decision.",
  },
  {
    q: "Do you only work with luxury properties?",
    a: "While we specialise in premium builder floors and luxury homes, we also assist with mid‑segment residential and commercial properties. Every client receives the same level of dedicated service.",
  },
  {
    q: "What are your charges for buyers?",
    a: "Our buyer advisory service is completely free. We get compensated by the seller or builder, so you pay no commission when you purchase a property through us.",
  },
  {
    q: "How long does it typically take to find a rental property?",
    a: "Most clients find a suitable rental within 7–14 days. We share only verified listings, schedule site visits, and help with lease documentation.",
  },
  {
    q: "Do you handle legal paperwork and registration?",
    a: "Yes. We have empanelled lawyers who verify title deeds, draft sale agreements, and oversee the registration process. Our goal is a completely transparent and legally sound transaction.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-28 bg-[#FAFAF7]">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        {/* Header – centered (unchanged) */}
        <div className="flex flex-col items-center justify-center text-center">
          <p className="text-[#C9A84C] text-xs sm:text-sm tracking-[0.35em] uppercase mb-6">
            Before You Decide
          </p>
          <h2
            className="
              font-display
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              text-[#0F1923]
              font-normal
              leading-[0.95]
              mb-8
            "
          >
            Common Concerns
          </h2>
          <p
            className="
              w-full
              max-w-[780px]
              mx-auto
              text-center
              text-lg
              md:text-xl
              leading-[1.9]
              text-[#475467]
              mb-12
              md:mb-16
            "
          >
            Clear answers to the most common questions about buying, selling and renting in South Delhi.
          </p>
        </div>

        {/* FAQ accordion – left-aligned with small left margin */}
        <div className="max-w-[780px] mx-auto space-y-4">
          {faqs.map((f, i) => (
            <div
              key={i}
              className={`border bg-white transition ${
                openIndex === i ? "border-[#C9A84C]/40 shadow-sm" : "border-gray-100"
              }`}
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="w-full p-5 sm:p-6 flex justify-between items-center gap-3"
                aria-expanded={openIndex === i}
              >
                <span className="text-base sm:text-lg font-medium text-[#0F1923] text-left">
                  {f.q}
                </span>
                <span className="text-[#C9A84C] text-2xl sm:text-3xl font-light shrink-0">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              {openIndex === i && (
                <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm sm:text-base text-[#6B6258] leading-relaxed border-t pt-4 text-left">
                  {f.a}
                  <div className="mt-5">
                    <a
                      href="https://wa.me/919818077956"
                      target="_blank"
                      rel="noopener"
                      className="text-xs sm:text-sm uppercase tracking-wider text-[#C9A84C] font-semibold hover:underline"
                    >
                      Ask about your situation →
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}