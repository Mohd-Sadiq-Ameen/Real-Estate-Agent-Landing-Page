"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const videos = [
  {
    src: "/video1.mp4",
    title: "GK-2 Luxury Floor",
    description: "Live walkthrough",
  },
  {
    src: "/video2.mp4",
    title: "Defence Colony Deal",
    description: "Deal breakdown",
  },
  {
    src: "/video3.mp4",
    title: "South Delhi Insights",
    description: "Market analysis",
  },
];

export default function VideoProof() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % videos.length);
  const prev = () => setIndex((i) => (i - 1 + videos.length) % videos.length);

  const video = videos[index];

  return (
    <section id="video-proof" className="relative z-10 py-24 bg-[#F5F0E8]">
      <div className="max-w-6xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-12">
          <span className="text-[#C9A84C] text-xs tracking-[0.3em] uppercase">
            Real Deals • Real Properties
          </span>
          <h2 className="text-5xl md:text-6xl font-display text-[#0F1923] mt-4">
            Property <span className="italic text-[#C9A84C]">Walkthroughs</span>
          </h2>
        </div>

        {/* SLIDER WRAPPER */}
        <div className="relative flex items-center justify-center">
          {/* LEFT BUTTON – responsive sizes, vertical position moved up on mobile */}
          <button
            onClick={prev}
            className="
              absolute left-2 sm:left-0
              top-[40%] sm:top-1/2 sm:-translate-y-1/2
              bg-white rounded-full
              shadow-xl hover:shadow-2xl
              hover:scale-110 transition-all
              z-20 flex items-center justify-center
              p-3 sm:p-4 md:p-5 lg:p-3.5
            "
            aria-label="Previous video"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />
          </button>

          {/* VIDEO CONTAINER */}
          <div className="w-full max-w-4xl">
            <div className="aspect-video rounded-2xl overflow-hidden bg-black shadow-2xl">
              <video
                preload="metadata"
                key={video.src}
                className="w-full h-full object-contain bg-black"
                controls
                playsInline
              >
                <source src={video.src} type="video/mp4" />
              </video>
            </div>
            <div className="text-center mt-6">
              <h3 className="text-2xl font-semibold text-[#0F1923]">
                {video.title}
              </h3>
              <p className="text-[#6B6258] mt-2">{video.description}</p>
            </div>
          </div>

          {/* RIGHT BUTTON – responsive sizes, vertical position moved up on mobile */}
          <button
            onClick={next}
            className="
              absolute right-2 sm:right-0
              top-[40%] sm:top-1/2 sm:-translate-y-1/2
              bg-white rounded-full
              shadow-xl hover:shadow-2xl
              hover:scale-110 transition-all
              z-20 flex items-center justify-center
              p-3 sm:p-4 md:p-5 lg:p-3.5
            "
            aria-label="Next video"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />
          </button>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-2 mt-8">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-6 bg-[#C9A84C]" : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
