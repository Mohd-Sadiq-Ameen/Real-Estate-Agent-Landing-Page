"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, MessageCircle } from "lucide-react";

const WA_NUMBER = "919818077956";

type FormData = {
  name: string;
  phone: string;
  intent: string;
  budget: string;
  area: string;
  propertyType: string;
};

const INTENTS = ["Buy", "Rent", "Sell", "Investment"];

const BUDGETS = [
  "Under ₹50L",
  "₹50L - ₹1Cr",
  "₹1Cr - ₹3Cr",
  "₹3Cr - ₹5Cr",
  "₹5Cr+",
];

const AREAS = [
  "Defence Colony",
  "Greater Kailash",
  "South Extension",
  "Lajpat Nagar",
  "Saket",
  "Green Park",
  "Hauz Khas",
  "Vasant Kunj",
  "New Friends Colony",
  "Any Area",
  "Other Areas",
];

const PROPERTY_TYPES = [
  "Builder Floor",
  "Apartment",
  "Independent House",
  "Villa",
  "Commercial",
  "Any",
];

function Chip({
  selected,
  children,
  onClick,
}: {
  selected: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
        selected
          ? "border-[#C9A84C] bg-[#FFF9E8] text-[#0F1923]"
          : "border-[#E5E7EB] bg-white text-slate-600 hover:border-[#C9A84C]/40"
      }`}
    >
      {children}
    </button>
  );
}

export default function ContactForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    intent: "Buy",
    budget: "₹1Cr - ₹3Cr",
    area: "Greater Kailash",
    propertyType: "Builder Floor",
  });

  const update = (key: keyof FormData, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const handleSubmit = () => {
    const msg = `
🏡 Property Consultation Request

Name: ${form.name}
Phone: ${form.phone}

Looking To: ${form.intent}
Budget: ${form.budget}
Preferred Area: ${form.area}
Property Type: ${form.propertyType}

Source: Website
`;

    window.open(
      `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`,
      "_blank",
    );
  };

  return (
    <section id="contact" className="bg-white py-12 md:py-12 lg:py-14">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.35em] text-[#C9A84C]">
            Free Consultation
          </p>

          <h2 className="font-display text-4xl leading-tight text-[#0F1923] sm:text-5xl lg:text-6xl">
            Begin Your
            <span className="mt-2 block italic text-[#C9A84C]">
              Property Consultation
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Share your requirements and our team will shortlist suitable
            opportunities, arrange site visits and provide personalized guidance
            throughout the process.
          </p>
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl border border-[#E8E4DB] bg-[#FAFAF8] shadow-sm">
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* Form */}
            <div className="p-8 md:p-10 lg:p-12">
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Full Name
                  </label>

                  <input
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    placeholder="Rahul Sharma"
                    className="h-14 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 outline-none transition-all focus:border-[#C9A84C]"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                    Phone Number
                  </label>

                  <input
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                    placeholder="+91 98XXXXXXXX"
                    className="h-14 w-full rounded-xl border border-[#E5E7EB] bg-white px-4 outline-none transition-all focus:border-[#C9A84C]"
                  />
                </div>
              </div>

              <div className="mt-8">
                <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Looking To
                </label>

                <div className="flex flex-wrap gap-2">
                  {INTENTS.map((item) => (
                    <Chip
                      key={item}
                      selected={form.intent === item}
                      onClick={() => update("intent", item)}
                    >
                      {item}
                    </Chip>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Budget Range
                </label>

                <div className="flex flex-wrap gap-2">
                  {BUDGETS.map((item) => (
                    <Chip
                      key={item}
                      selected={form.budget === item}
                      onClick={() => update("budget", item)}
                    >
                      {item}
                    </Chip>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Preferred Location
                </label>

                <div className="flex flex-wrap gap-2">
                  {AREAS.map((item) => (
                    <Chip
                      key={item}
                      selected={form.area === item}
                      onClick={() => update("area", item)}
                    >
                      {item}
                    </Chip>
                  ))}
                </div>
              </div>

              <div className="mt-8">
                <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-slate-600">
                  Property Type
                </label>

                <div className="flex flex-wrap gap-2">
                  {PROPERTY_TYPES.map((item) => (
                    <Chip
                      key={item}
                      selected={form.propertyType === item}
                      onClick={() => update("propertyType", item)}
                    >
                      {item}
                    </Chip>
                  ))}
                </div>
              </div>

              <button
                onClick={handleSubmit}
                className="mt-10 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#C9A84C] px-8 py-4 text-sm font-semibold uppercase tracking-wider text-[#0F1923] transition-all duration-300 hover:bg-[#D7B85D]"
              >
                <MessageCircle size={18} />
                Get Property Consultation
                <ArrowRight size={18} />
              </button>
            </div>

            {/* Side Panel */}
            <div className="bg-[#0F1923] p-8 md:p-10">
              <p className="text-sm uppercase tracking-[0.3em] text-[#C9A84C]">
                Why Clients Choose Us
              </p>

              <h3 className="mt-4 font-display text-3xl text-white">
                Trusted South Delhi Property Advisors
              </h3>

              <div className="mt-8 space-y-5">
                {[
                  "Verified Property Listings",
                  "Builder Floor Specialists",
                  "Local South Delhi Expertise",
                  "Property Valuation Support",
                  "Documentation Assistance",
                  "Personalized Property Search",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="mt-1 shrink-0 text-[#C9A84C]"
                    />

                    <span className="text-white/80">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10 border-t border-white/10 pt-8">
                <div className="text-4xl font-light text-[#C9A84C]">10+</div>

                <p className="mt-2 text-white/70">
                  Years helping buyers, sellers and investors across South
                  Delhi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
          <span>✓ Verified Listings</span>
          <span>✓ South Delhi Specialists</span>
          <span>✓ Transparent Guidance</span>
          <span>✓ Site Visit Assistance</span>
        </div>
      </div>
    </section>
  );
}
