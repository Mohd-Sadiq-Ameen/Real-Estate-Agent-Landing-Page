"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Home Buyer, Greater Kailash",
    text: "Royal Siyaram Estate made our home buying journey smooth and transparent. They helped us find the perfect builder floor in GK-2 within our budget. Highly recommend their expertise!",
    rating: 5,
    type: "Buyer",
  },
  {
    name: "Neha Gupta",
    role: "Seller, Defence Colony",
    text: "Sold my property in Defence Colony within 45 days at a price higher than expected. Their marketing and negotiation skills are outstanding.",
    rating: 5,
    type: "Seller",
  },
  {
    name: "Amit Khanna",
    role: "Investor, Lajpat Nagar",
    text: "Professional advisory and deep market knowledge helped me identify a commercial asset with great ROI. They handled everything from due diligence to registration.",
    rating: 5,
    type: "Investor",
  },
  {
    name: "Preeti Singh",
    role: "Tenant, New Friends Colony",
    text: "Found a beautiful rental home through them. The team was responsive, verified the listing thoroughly, and made the whole process hassle‑free.",
    rating: 5,
    type: "Tenant",
  },
  {
    name: "Vikram Mehta",
    role: "Buyer, South Extension",
    text: "Excellent guidance throughout the purchase. Their understanding of builder floors in South Delhi is unmatched. Will definitely use them again.",
    rating: 5,
    type: "Buyer",
  },
  {
    name: "Sunil Kapoor",
    role: "Investor, Nehru Place",
    text: "Very transparent and honest team. They gave realistic valuations and helped me close a commercial deal that continues to perform well.",
    rating: 5,
    type: "Investor",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleTestimonials = isMobile
    ? [testimonials[activeIndex]]
    : testimonials;

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-[#C9A84C] text-[#C9A84C]" />
    ));
  };

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-gradient-to-b from-[#FAF8F4] via-[#F3F0EA] to-[#FFFFFF] relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 2px 2px, #C9A84C 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Outer container – matches Services width for perfect centering on 1440px+ */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8 relative z-10">
        {/* Header – identical centering to Services */}
        <div className="flex flex-col items-center justify-center text-center">
          <span className="text-[#B0892A] text-xs sm:text-sm tracking-[0.3em] uppercase font-medium mb-6">
            Real Stories
          </span>
          <h2
            className="
              font-display
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              text-[#0F172A]
              font-normal
              leading-[0.95]
              mb-8
            "
          >
            What Our <span className="italic text-[#B0892A]">Clients Say</span>
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
              text-[#64748B]
              mb-12
              md:mb-16
            "
          >
            Trusted by property buyers, sellers, and investors across GK, Defence Colony & South Delhi premium zones.
          </p>
        </div>

        {/* Authority Header Bar */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#B0892A] uppercase tracking-[0.25em] mb-10">
          <span>500+ Verified Deals Closed</span>
          <span>10+ Years South Delhi Focus</span>
          <span>98% Client Satisfaction</span>
        </div>

        {/* Hero Testimonial Anchor */}
        <div className="mb-10 p-6 md:p-8 border border-[#EAE6DD] bg-white shadow-sm rounded-xl text-center">
          <p className="text-[#334155] italic text-base md:text-lg">
            “We were able to sell our GK-2 property 18% above market price within 3 weeks thanks to their buyer network.”
          </p>
          <div className="text-[#B0892A] mt-3 text-sm tracking-wide">
            — Top Performing Client Case
          </div>
        </div>

        {/* Spacer */}
        <div className="h-10"></div>

        {/* Grid / Carousel */}
        <div className="relative">
          {!isMobile && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {visibleTestimonials.map((t, idx) => (
                <TestimonialCard key={idx} testimonial={t} renderStars={renderStars} />
              ))}
            </div>
          )}

          {isMobile && (
            <div className="relative">
              <div className="overflow-hidden">
                <div className="transition-all duration-300 ease-in-out">
                  <TestimonialCard testimonial={visibleTestimonials[0]} renderStars={renderStars} />
                </div>
              </div>
              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-white/10 hover:bg-[#B0892A]/10 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-[#0F172A]" />
                </button>
                <div className="flex gap-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveIndex(idx)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        idx === activeIndex
                          ? "w-6 bg-[#B0892A]"
                          : "bg-[#CBD5E1] hover:bg-[#B0892A]/50"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-white/10 hover:bg-[#B0892A]/10 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-[#0F172A]" />
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="h-10"></div>

        {/* Insight Banner */}
        <div className="mt-6 text-center">
          <p className="text-[#64748B] text-sm">
            Clients who act within <span className="text-[#B0892A] font-medium">7–14 days</span> typically secure better pricing due to early‑access listings.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="https://wa.me/919818077956"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-3 bg-[#B0892A] text-white px-8 md:px-10 py-3.5 md:py-4 font-bold uppercase text-sm tracking-wider rounded-full shadow-md hover:shadow-lg hover:bg-[#C9A84C] transition-all duration-300 hover:-translate-y-0.5"
          >
            Check Available Deals Before They're Gone
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

// Card component – unified greenish badge
function TestimonialCard({ testimonial, renderStars }: any) {
  const { name, role, text, rating, type } = testimonial;
  const badgeClass = "bg-emerald-50 text-emerald-700 border-emerald-200";

  return (
    <div className="group bg-white border border-[#EAE6DD] rounded-2xl p-6 md:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-[#C9A84C]/40">
      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border ${badgeClass} mb-4`}>
        {type} Success
      </div>

      <div className="flex gap-1 mb-4">
        {renderStars(rating)}
      </div>

      <p className="text-[#334155] text-base leading-relaxed mb-6 italic">
        “{text}”
      </p>

      <div className="border-t border-[#F1EFEA] pt-4">
        <div className="font-semibold text-[#0F172A] text-base">
          {name}
        </div>
        <div className="text-[#B0892A] text-sm tracking-wide mt-1">
          {role}
        </div>
      </div>
    </div>
  );
}