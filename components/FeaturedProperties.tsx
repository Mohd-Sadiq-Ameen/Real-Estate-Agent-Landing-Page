"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { properties } from "@/app/data/properties";
import PropertyCard from "./PropertyCard";

export default function FeaturedProperties() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const total = properties.length;

  const updateCurrentIndex = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const slides = Array.from(container.children) as HTMLElement[];
    let closestIdx = 0;
    let minDist = Infinity;
    slides.forEach((slide, idx) => {
      const dist = Math.abs(slide.offsetLeft - container.scrollLeft);
      if (dist < minDist) {
        minDist = dist;
        closestIdx = idx;
      }
    });
    setCurrentIndex(closestIdx);
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;
    container.addEventListener("scroll", updateCurrentIndex, { passive: true });
    window.addEventListener("resize", updateCurrentIndex);
    updateCurrentIndex();
    return () => {
      container.removeEventListener("scroll", updateCurrentIndex);
      window.removeEventListener("resize", updateCurrentIndex);
    };
  }, [updateCurrentIndex]);

  const goTo = (idx: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;
    const clamped = Math.max(0, Math.min(idx, total - 1));
    const slide = container.children[clamped] as HTMLElement;
    if (slide) {
      container.scrollTo({ left: slide.offsetLeft, behavior: "smooth" });
    }
  };

  const scrollPrev = () => goTo(currentIndex - 1);
  const scrollNext = () => goTo(currentIndex + 1);

  return (
    <section className="w-full bg-[#0F1923] pt-20 pb-[88px]">
      {/* Header */}
      <div className="text-center px-6 md:px-8 mb-[52px]">
        <div className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.12em] uppercase text-[#C9A84C] mb-4">
          <span className="w-7 h-px bg-[#C9A84C] opacity-50" />
          Featured Listings
          <span className="w-7 h-px bg-[#C9A84C] opacity-50" />
        </div>

        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-[#F5F0E8] leading-tight mb-3.5">
          Properties Worth
          <br />
          Your Attention
        </h2>

        <p className="text-sm text-white/40 max-w-[440px] mx-auto leading-relaxed">
          Handpicked residences in prime South Delhi locations — ready to view.
        </p>
      </div>

      {/* Carousel */}
      <div className="px-5">
        <div
          ref={scrollContainerRef}
          className="flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-1 py-2 pb-4"
        >
          {properties.map((property) => (
            <div
              key={property.slug}
              className="flex-shrink-0 w-[calc(100%-8px)] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] snap-start"
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>

      {/* Nav: prev / dots / next */}
      <div className="flex items-center justify-center gap-4 mt-9 px-6">
        <button
          onClick={scrollPrev}
          aria-label="Previous"
          className="w-10 h-10 rounded-full border border-[#C9A84C]/30 bg-transparent text-[#C9A84C] hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]/70 transition-all flex items-center justify-center"
        >
          <ChevronLeft className="w-[18px] h-[18px]" />
        </button>

        <div className="flex gap-1.5 items-center">
          {properties.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all ${
                i === currentIndex
                  ? "w-5 bg-[#C9A84C]"
                  : "w-1.5 bg-white/15"
              }`}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          aria-label="Next"
          className="w-10 h-10 rounded-full border border-[#C9A84C]/30 bg-transparent text-[#C9A84C] hover:bg-[#C9A84C]/10 hover:border-[#C9A84C]/70 transition-all flex items-center justify-center"
        >
          <ChevronRight className="w-[18px] h-[18px]" />
        </button>
      </div>

      {/* Counter */}
      <p className="text-center text-xs text-white/30 mt-2.5">
        {currentIndex + 1} / {total}
      </p>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}