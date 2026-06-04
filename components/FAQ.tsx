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
    <section className="bg-[#FAFAF7]" style={{ paddingTop: "3rem", paddingBottom: "3rem" }}>
      <div
        className="w-full max-w-[1400px] mx-auto px-6 lg:px-8"
        style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}
      >
        {/* Header */}
        <div className="flex flex-col items-center justify-center text-center" style={{ marginBottom: "2rem" }}>
          <p className="text-[#C9A84C] text-xs sm:text-sm tracking-[0.35em] uppercase" style={{ marginBottom: "1rem" }}>
            Before You Decide
          </p>
          <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-[#0F1923] font-normal leading-[0.95]" style={{ marginBottom: "2rem" }}>
            Common Concerns
          </h2>
          <p className="w-full max-w-[780px] mx-auto text-center text-lg md:text-xl leading-[1.9] text-[#475467]">
            Clear answers to the most common questions about buying, selling and renting in South Delhi.
          </p>
        </div>

        {/* FAQ cards container – centered */}
        <div className="flex justify-center">
          <div className="w-full max-w-3xl" style={{ maxWidth: "896px", width: "100%" }}>
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`
                  mb-6 rounded-3xl bg-white border transition-all duration-300
                  ${openIndex === i
                    ? "border-[#C9A84C]/30 shadow-lg"
                    : "border-[#ECE8E1]"
                  }
                `}
                style={{ marginBottom: "1.5rem" }}
              >
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full text-center"
                  style={{ padding: "2rem 2.5rem" }}
                >
                  <div className="flex justify-center items-center gap-4">
                    <h3 className="max-w-[750px] text-lg md:text-xl font-medium text-[#0F1923] leading-relaxed">
                      {f.q}
                    </h3>
                    <span className="text-[#C9A84C] text-3xl leading-none">
                      {openIndex === i ? "−" : "+"}
                    </span>
                  </div>
                </button>

                {openIndex === i && (
                  <div className="border-t border-[#F1EEE8]">
                    <div className="w-full text-center" style={{ padding: "2rem 2rem" }}>
                      <p className="max-w-[750px] mx-auto text-base md:text-lg leading-[1.9] text-[#6B6258]">
                        {f.a}
                      </p>
                      <div className="flex justify-center" style={{ marginTop: "2rem" }}>
                        <a
                          href="https://wa.me/919818077956"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm uppercase tracking-[0.2em] text-[#C9A84C] font-semibold hover:underline"
                        >
                          Ask About Your Situation →
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}