"use client";

import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

const faqs = [
  {
    q: "How do I know if a property is fairly priced?",
    a: "We provide detailed market analysis, recent transaction comparisons, and professional valuation insights so you can confidently assess a property's true market value before making a decision.",
  },
  {
    q: "Do you only work with luxury properties?",
    a: "While we specialise in luxury homes and premium builder floors, we also assist clients with residential, commercial, and investment properties across multiple price segments.",
  },
  {
    q: "What are your charges for buyers?",
    a: "Our buyer advisory services are completely free. We are compensated by the seller or developer, allowing buyers to benefit from our expertise without additional cost.",
  },
  {
    q: "How long does it take to find a rental property?",
    a: "Most clients secure a suitable rental property within 7–14 days. We streamline the process through verified listings, guided site visits, and documentation support.",
  },
  {
    q: "Do you handle legal paperwork and registration?",
    a: "Yes. Our legal partners assist with title verification, agreement drafting, registration formalities, and due diligence to ensure a transparent transaction.",
  },
];

const WA_NUMBER = "919818077956";
const WA_MESSAGE = "Hi, I'd like to discuss my property requirements.";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-[#FAFAF8] py-12 md:py-20 lg:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* LEFT */}
          <div>
            <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
              Frequently Asked Questions
            </p>

            <h2 className="font-display text-4xl leading-tight text-[#0F1923] sm:text-5xl lg:text-6xl">
              Common Questions
              <span className="mt-2 block italic text-[#C9A84C]">
                Answered Clearly
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Buying, selling or renting property often involves important
              decisions. Here are answers to the questions we hear most
              frequently from our clients.
            </p>

            <div className="mt-10 rounded-3xl bg-[#0F1923] p-8">
              <p className="text-sm uppercase tracking-[0.25em] text-[#C9A84C]">
                Need Personal Guidance?
              </p>

              <h3 className="mt-3 font-display text-3xl text-white">
                Speak With Our Property Experts
              </h3>

              <p className="mt-3 text-white/70 leading-7">
                Every property situation is unique. Get tailored advice based on
                your requirements.
              </p>

              <a
                href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
                  WA_MESSAGE,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-3 rounded-xl bg-[#C9A84C] px-6 py-4 text-sm font-semibold uppercase tracking-wider text-[#0F1923] transition-all duration-300 hover:bg-[#D7B85D]"
              >
                Contact on WhatsApp
                <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={faq.q}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#C9A84C]/40 bg-white shadow-lg"
                      : "border-[#E8E4DB] bg-white"
                  }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between p-6 text-left md:p-8"
                  >
                    <h3 className="pr-6 text-lg font-medium leading-7 text-[#0F1923]">
                      {faq.q}
                    </h3>

                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#C9A84C] transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-[#F1EEE8] px-6 py-6 md:px-8">
                        <p className="leading-8 text-slate-600">{faq.a}</p>

                        <a
                          href={`https://wa.me/${WA_NUMBER}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-[#C9A84C]"
                        >
                          Ask About Your Situation
                          <ArrowRight size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
