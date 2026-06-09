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
              <div className="h-10"></div>

      <div
        className="w-full max-w-[1400px] mx-auto px-6 lg:px-8"
        style={{ maxWidth: "1400px", marginLeft: "auto", marginRight: "auto" }}
      >
        {/* HEADER */}
        <div className="text-center mb-12 ">
          <h2 className="text-5xl md:text-6xl font-display text-[#0F1923] mt-4">
            Property <span className="italic text-[#C9A84C]">Walkthroughs</span>
          </h2>
          <div className="h-10"></div>
          <span className="text-[#C9A84C] lg:text-3xl tracking-[0.3em] uppercase">
            Real Deals • Real Properties
          </span>
        </div>

        <div className="h-10"></div>

        {/* SLIDER WRAPPER */}
        <div className="relative flex items-center justify-center">
          <button
            onClick={prev}
            className="absolute left-2 sm:left-0 top-[40%] sm:top-1/2 sm:-translate-y-1/2 bg-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all z-20 flex items-center justify-center p-3 sm:p-4 md:p-5 lg:p-3.5"
            aria-label="Previous video"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />
          </button>

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
              <div className="h-5"></div>
              <h3 className="text-3xl font-semibold text-[#0F1923]">
                {video.title}
              </h3>
              <p className="text-[#6B6258] text-xl mt-2 mb-2">
                {video.description}
              </p>
              <div className="h-5"></div>
            </div>
          </div>

          <button
            onClick={next}
            className="absolute right-2 sm:right-0 top-[40%] sm:top-1/2 sm:-translate-y-1/2 bg-white rounded-full shadow-xl hover:shadow-2xl hover:scale-110 transition-all z-20 flex items-center justify-center p-3 sm:p-4 md:p-5 lg:p-3.5"
            aria-label="Next video"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-10 xl:h-10" />
          </button>
        </div>

        <div className="flex justify-center gap-3 mt-8">
          {videos.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`
                rounded-full transition-all
                h-3 sm:h-4 md:h-5 lg:h-6
                ${i === index
                  ? "w-8 sm:w-10 md:w-12 lg:w-14 bg-[#C9A84C]"
                  : "w-3 sm:w-4 md:w-5 lg:w-6 bg-gray-300"
                }
              `}
            />
          ))}
        </div>
      </div>
      <div className="h-5 md:h-14 lg:h-14" />
    </section>
  );
}