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
    <section
      style={{
        width: "100%",
        background: "#0F1923",
        paddingTop: "80px",
        paddingBottom: "88px",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          padding: "0 24px",
          marginBottom: "52px",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#C9A84C",
            marginBottom: "16px",
          }}
        >
          <span
            style={{
              display: "inline-block",
              width: "28px",
              height: "1px",
              background: "#C9A84C",
              opacity: 0.5,
            }}
          />
          Featured Listings
          <span
            style={{
              display: "inline-block",
              width: "28px",
              height: "1px",
              background: "#C9A84C",
              opacity: 0.5,
            }}
          />
        </div>

        <h2
          style={{
            fontFamily: "'Cormorant Garamond', 'Georgia', serif",
            fontSize: "clamp(36px, 5vw, 52px)",
            fontWeight: 500,
            color: "#F5F0E8",
            lineHeight: 1.1,
            margin: "0 0 14px",
            letterSpacing: "-0.01em",
          }}
        >
          Properties Worth
          <br />
          Your Attention
        </h2>

        <p
          style={{
            fontSize: "15px",
            color: "rgba(255,255,255,0.4)",
            maxWidth: "440px",
            margin: "0 auto",
            lineHeight: 1.65,
          }}
        >
          Handpicked residences in prime South Delhi locations — ready to view.
        </p>
      </div>

      {/* Carousel */}
      <div style={{ padding: "0 20px" }}>
        <div
          ref={scrollContainerRef}
          style={{
            display: "flex",
            gap: "20px",
            overflowX: "auto",
            scrollSnapType: "x mandatory",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
            padding: "8px 4px 16px",
          }}
          // hide webkit scrollbar via global or inline won't work — use a className just for this
          className="hide-scrollbar"
        >
          {properties.map((property) => (
            <div
              key={property.slug}
              style={{
                flexShrink: 0,
                // 1 col mobile, 2 col tablet, 3 col desktop
                width: "min(calc(100% - 8px), 360px)",
                scrollSnapAlign: "start",
              }}
            >
              <PropertyCard property={property} />
            </div>
          ))}
        </div>
      </div>

      {/* Nav: prev / dots / next */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          marginTop: "36px",
          padding: "0 24px",
        }}
      >
        <button
          onClick={scrollPrev}
          aria-label="Previous"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid rgba(201,168,76,0.3)",
            background: "transparent",
            color: "#C9A84C",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "background 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "rgba(201,168,76,0.1)";
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "rgba(201,168,76,0.7)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "transparent";
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "rgba(201,168,76,0.3)";
          }}
        >
          <ChevronLeft style={{ width: "18px", height: "18px" }} />
        </button>

        {/* Dots */}
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          {properties.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                height: "6px",
                width: i === currentIndex ? "22px" : "6px",
                borderRadius: i === currentIndex ? "3px" : "50%",
                background:
                  i === currentIndex
                    ? "#C9A84C"
                    : "rgba(255,255,255,0.15)",
                border: "none",
                cursor: "pointer",
                padding: 0,
                transition: "width 0.25s, background 0.25s, border-radius 0.25s",
              }}
            />
          ))}
        </div>

        <button
          onClick={scrollNext}
          aria-label="Next"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "1px solid rgba(201,168,76,0.3)",
            background: "transparent",
            color: "#C9A84C",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "background 0.2s, border-color 0.2s",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "rgba(201,168,76,0.1)";
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "rgba(201,168,76,0.7)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "transparent";
            (e.currentTarget as HTMLButtonElement).style.borderColor =
              "rgba(201,168,76,0.3)";
          }}
        >
          <ChevronRight style={{ width: "18px", height: "18px" }} />
        </button>
      </div>

      {/* Counter */}
      <p
        style={{
          textAlign: "center",
          fontSize: "12px",
          color: "rgba(255,255,255,0.3)",
          marginTop: "10px",
          fontFamily: "sans-serif",
        }}
      >
        {currentIndex + 1} / {total}
      </p>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}